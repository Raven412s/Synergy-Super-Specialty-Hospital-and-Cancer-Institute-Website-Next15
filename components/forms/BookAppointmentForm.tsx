"use client"
import {
    Button
} from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
    PhoneInput
} from "@/components/ui/phone-input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {
    Textarea
} from "@/components/ui/textarea"
import { departmentData } from "@/data/departmentData"
import { doctors } from "@/data/doctors"
import { timeSlots } from "@/data/timeSlot"
import {
    cn
} from "@/lib/utils"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import {
    useState
} from "react"
import {
    useForm
} from "react-hook-form"
import {
    toast
} from "sonner"
import * as z from "zod"

const formSchema = z.object({
    patientName: z.string().min(3, "Name must be at least 3 characters"),
    phoneNumber: z.string().min(10, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address").optional(),
    message: z.string().optional(),
    department: z.string({
      required_error: "Please select a department",
    }),
    selectedDoctor: z.string({
      required_error: "Please select a doctor",
    }),
    appointmentDate: z.date({
      required_error: "Please select a date for your appointment",
    }),
    timeSlot: z.string({
      required_error: "Please select a time slot",
    }),
    insurance: z.string().optional(),
    emergency: z.boolean().default(false).optional(),
  });


export default function BookAppointmentForm() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      'emergency': false,
    }
  })

  // Get available doctors based on selected department
  const availableDoctors = selectedDepartment
  ? doctors.filter((doc) => doc.department.toLowerCase() === selectedDepartment.toLowerCase())
  : [];

  // Handle department change to update available doctors
  const handleDepartmentChange = (value: string) => {
    form.setValue('department', value)
    setSelectedDepartment(value)
    // Reset doctor selection when department changes
    form.setValue("selectedDoctor", "")
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      // Simulate API call (optional)
      await new Promise(resolve => setTimeout(resolve, 1000));

      const messageBody = `
  New Appointment Booked:
  Patient Name - ${values.patientName}
  Phone Number - ${values.phoneNumber}
  Email - ${values.email}
  Message - ${values.message}
  Department - ${values.department}
  Doctor - ${values.selectedDoctor}
  Date - ${format(values.appointmentDate, "MMMM d, yyyy")}
  Time - ${timeSlots.find(slot => slot.id === values.timeSlot)?.time}
  Insurance - ${values.insurance}
  Emergency - ${values.emergency ? "Yes" : "No"}
      `;

      // 🔗 Call your API route
      await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messageBody,
          to: "6393883250", // Target WhatsApp number
        }),
      });

      // ✅ Toast & reset
      toast.success("Appointment scheduled and WhatsApp sent!", {
        duration: 5000,
      });

      form.reset();
      setSelectedDepartment("");

    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to schedule appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }



  return (
    <div className="bg-white  px-4 py-6 md:p-8 rounded-lg shadow-md max-w-6xl w-full my-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Book Your Appointment</h2>
        <p className="text-gray-600 mt-2">Fill out the form below to schedule an appointment with our medical specialists</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Patient Name */}
            <FormField
              control={form.control}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Patient Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter full name"
                      className="w-full"
                      type="text"
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-base">Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      placeholder="Enter phone number"
                      className="w-full"
                      {...field}
                      value={field.value ?? ''}
                      defaultCountry="IN"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email (optional) */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email Address <span className="text-sm text-neutral-900">(optional)</span></FormLabel>
                <FormControl>
                  <Input
                    placeholder="email@example.com"
                    type="email"
                    className="w-full"
                    {...field}
                    value={field.value ?? ''}
                  />
                </FormControl>
                <FormDescription>We&apos;ll send your appointment confirmation here</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Department and Doctor Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department */}
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Department</FormLabel>
                  <Select onValueChange={handleDepartmentChange} value={field.value ?? ''}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departmentData.map((dept) => (
                        <SelectItem key={dept.id} value={dept.name}>
                          {dept.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Doctor Selection */}
            <FormField
              control={form.control}
              name="selectedDoctor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Select Doctor</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} disabled={!selectedDepartment}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={selectedDepartment ? "Select doctor" : "Select department first"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableDoctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.name}>
                          {doctor.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <FormField
              control={form.control}
              name="appointmentDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-base">Appointment Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || // No past dates
                          date.getDay() === 0 || // No Sundays
                          date > new Date(new Date().setDate(new Date().getDate() + 30)) // Max 30 days ahead
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>We&apos;re open Monday-Saturday, 9AM-4PM</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Time Slot */}
            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Preferred Time</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot.id} value={slot.id}>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 opacity-70" />
                            {slot.time}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Insurance Information (optional) */}
          <FormField
            control={form.control}
            name="insurance"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Insurance Provider <span className="text-sm text-neutral-900">(optional)</span></FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your insurance provider"
                    className="w-full"
                    {...field}
                    value={field.value ?? ''}
                  />
                </FormControl>
                <FormDescription>If applicable, please provide your insurance information</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Additional Notes/Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Additional Information <span className="text-sm text-neutral-900">(optional)</span></FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe your symptoms or reason for visit..."
                    className="resize-none min-h-[120px]"
                    {...field}
                    value={field.value ?? ''}
                  />
                </FormControl>
                <FormDescription>Include any relevant medical history or concerns</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Scheduling..." : "Book Appointment"}
            </Button>

            <p className="text-sm text-neutral-900">
              Our staff will confirm your appointment within 24 hours
            </p>
          </div>
        </form>
      </Form>
    </div>
  )
}
