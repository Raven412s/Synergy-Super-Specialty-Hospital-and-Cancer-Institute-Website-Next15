// /pages/api/send-whatsapp.ts (for Next.js API Route)

import type { NextApiRequest, NextApiResponse } from "next";
import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const client = new Twilio(accountSid, authToken);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messageBody, to } = req.body;

  try {
    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: `whatsapp:${to}`,
      body: messageBody,
    });

    res.status(200).json({ sid: message.sid });
  } catch (error) {
    console.error("Twilio error", error);
    res.status(500).json({ error: "Failed to send WhatsApp message" });
  }
}
