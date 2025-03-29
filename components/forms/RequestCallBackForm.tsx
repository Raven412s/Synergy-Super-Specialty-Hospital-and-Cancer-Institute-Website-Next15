"use client"

import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(3).max(80),
  number: z.number().min(1000000000, "Invalid number").max(9999999999999),
  one_time_password: z.string().min(6).max(6)
});

export default function RequestCallBackForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-primary p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-6xl mx-auto w-full px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Krishna"
                    className="text-indigo-800 placeholder:text-neutral-500"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-neutral-500">Enter your name here.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Number Field + Request OTP Button */}
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number</FormLabel>
                <div className="flex flex-col sm:flex-row gap-2">
                  <FormControl>
                    <Input
                      placeholder="+91XXXXXXXXXX"
                      className="text-indigo-800 placeholder:text-neutral-500"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="outline"
                    className="shrink-0 hover:text-primary hover:bg-indigo-50 transition-all duration-300"
                  >
                    Request OTP
                  </Button>
                </div>
                <FormDescription className="text-neutral-500">Enter your number here.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* OTP Field + Verify Button */}
          <FormField
            control={form.control}
            name="one_time_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>OTP</FormLabel>
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <Button
                    type="button"
                    variant="outline"
                    className="shrink-0 hover:text-primary hover:bg-indigo-50 transition-all duration-300"
                  >
                    Verify OTP
                  </Button>
                </div>
                <FormDescription className="text-neutral-500">
                  Please enter the OTP sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full sm:w-auto">
            Send a Request
          </Button>
        </div>
      </form>
    </Form>
  );
}
