
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];
  
  // Get dates that should be disabled (past dates)
  const disabledDates = {
    before: new Date(),
  };
  
  const handleBooking = () => {
    if (!date || !timeSlot) {
      toast.error("Please select both a date and time slot");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Appointment booked successfully!", {
        description: `Your appointment is scheduled for ${date.toLocaleDateString()} at ${timeSlot}`,
      });
      setIsSubmitting(false);
      setDate(undefined);
      setTimeSlot("");
    }, 1500);
  };

  return (
    <div id="booking" className={timeSlot ? "py-6" : "py-12 bg-clinic-blue/30"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!timeSlot && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-clinic-gray font-serif">Book an Appointment</h2>
            <p className="mt-4 text-gray-500">Schedule your visit at your convenience</p>
          </div>
        )}
        <div className="mt-8">
          <Card className="max-w-md mx-auto border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
              <CardDescription>Choose your preferred appointment slot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={disabledDates}
                  className="rounded-md border bg-white pointer-events-auto"
                />
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  className="w-full bg-clinic-gray hover:bg-black transition-colors"
                  onClick={handleBooking}
                  disabled={!date || !timeSlot || isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book Appointment"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;
