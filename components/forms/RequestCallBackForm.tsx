"use client"

import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
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
  name: z.string().min(3, "Name must be at least 3 characters").max(80, "Name is too long"),
  number: z.string()
    .min(10, "Number must be at least 10 digits")
    .max(13, "Number is too long")
    .regex(/^[0-9]+$/, "Must be a valid number"),
  one_time_password: z.string().min(6, "OTP must be 6 digits").max(6)
});

export default function RequestCallBackForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "",
      one_time_password: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast.success("Callback request submitted successfully!", {
        description: "We'll contact you shortly.",
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  const handleRequestOTP = () => {
    const number = form.getValues("number");
    if (!number || number.length < 10) {
      form.setError("number", {
        message: "Please enter a valid 10-digit number first"
      });
      return;
    }
    toast.info("OTP sent to your number");
    // Here you would typically call your OTP API
  };

  const handleVerifyOTP = () => {
    const otp = form.getValues("one_time_password");
    if (!otp || otp.length < 6) {
      form.setError("one_time_password", {
        message: "Please enter the full 6-digit OTP"
      });
      return;
    }
    toast.success("OTP verified successfully");
    // Here you would typically verify the OTP
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full px-2 sm:px-4"
      >
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="text-gray-800 placeholder:text-neutral-500 font-semibold h-12 md:h-14 text-sm md:text-base border-primary"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs md:text-sm" />
              </FormItem>
            )}
          />

          {/* Number Field + Request OTP Button */}
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base">Phone Number</FormLabel>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <FormControl>
                    <Input
                      placeholder="Enter 10-digit phone number"
                      className="text-gray-800 placeholder:text-neutral-500 font-semibold h-12 md:h-14 text-sm md:text-base border-primary"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 md:h-14 text-sm md:text-base hover:bg-gray-50 hover:text-primary transition-colors"
                    onClick={handleRequestOTP}
                  >
                    Request OTP
                  </Button>
                </div>
                <FormMessage className="text-xs md:text-sm" />
              </FormItem>
            )}
          />

          {/* OTP Field + Verify Button */}
          <FormField
            control={form.control}
            name="one_time_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base">OTP Verification</FormLabel>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        {[...Array(6)].map((_, i) => (
                          <InputOTPSlot
                            key={i}
                            index={i}
                            className="w-10 h-12 sm:w-12 sm:h-14 text-sm md:text-base border-primary "
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 md:h-14 text-sm md:text-base hover:bg-gray-50 hover:text-primary transition-colors"
                    onClick={handleVerifyOTP}
                  >
                    Verify OTP
                  </Button>
                </div>
                <FormMessage className="text-xs md:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full h-12 md:h-14 text-sm md:text-base"
            size="lg"
          >
            Request Callback
          </Button>
        </div>
      </form>
    </Form>
  );
}
