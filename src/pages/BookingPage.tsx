
import { useState } from "react";
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarCheck, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  doctor: string;
  service: string;
  reason: string;
}

const BookingPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    doctor: "",
    service: "",
    reason: "",
  });

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const doctors = [
    { id: "dr-johnson", name: "Dr. Sarah Johnson" },
    { id: "dr-chen", name: "Dr. Michael Chen" },
    { id: "dr-martinez", name: "Dr. Emily Martinez" },
    { id: "dr-wilson", name: "Dr. James Wilson" },
    { id: "dr-lee", name: "Dr. Sophia Lee" },
    { id: "dr-taylor", name: "Dr. Robert Taylor" },
  ];

  const services = [
    "General Checkup",
    "Cardiology Consultation",
    "Dental Care",
    "Neurological Examination",
    "Pediatric Visit",
    "Eye Examination",
    "Laboratory Tests",
    "Other",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    if (step === 1 && (!date || !timeSlot)) {
      toast({
        title: "Incomplete Information",
        description: "Please select both a date and time for your appointment.",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required personal information fields.",
        variant: "destructive",
      });
      return;
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      toast({
        title: "Appointment Booked!",
        description: `Your appointment is scheduled for ${date?.toLocaleDateString()} at ${timeSlot}.`,
      });
    }, 1500);
  };

  const isDateDisabled = (date: Date) => {
    // Disable weekends
    return date < new Date() || date.getDay() === 0;
  };

  return (
    <Layout>
      <PageHeader 
        title="Book an Appointment" 
        description="Schedule your visit with our healthcare professionals"
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {!isSuccess ? (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-clinic-blue text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                  <div className={`h-0.5 w-16 ${step >= 2 ? 'bg-clinic-blue' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-clinic-blue text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                  <div className={`h-0.5 w-16 ${step >= 3 ? 'bg-clinic-blue' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-clinic-blue text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                </div>
                <CardTitle className="text-center text-2xl font-serif">
                  {step === 1 && "Select Date & Time"}
                  {step === 2 && "Your Information"}
                  {step === 3 && "Appointment Details"}
                </CardTitle>
                <CardDescription className="text-center">
                  {step === 1 && "Choose your preferred appointment slot"}
                  {step === 2 && "Tell us about yourself"}
                  {step === 3 && "Confirm your appointment details"}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                        <div className="md:w-1/2">
                          <Label className="block mb-2 font-medium">Select Date</Label>
                          <div className="rounded-md border">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={isDateDisabled}
                              className="rounded-md border bg-white pointer-events-auto"
                            />
                          </div>
                        </div>
                        <div className="md:w-1/2">
                          <Label className="block mb-2 font-medium">Select Time</Label>
                          <div className="space-y-2">
                            {timeSlots.map((slot) => (
                              <Button
                                key={slot}
                                type="button"
                                variant={timeSlot === slot ? "default" : "outline"}
                                className={`w-full justify-start ${
                                  timeSlot === slot ? 'bg-clinic-blue hover:bg-clinic-blue/90' : ''
                                }`}
                                onClick={() => setTimeSlot(slot)}
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {slot}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name*</Label>
                          <Input 
                            id="firstName" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name*</Label>
                          <Input 
                            id="lastName" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your last name" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email*</Label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number*</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number" 
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step === 3 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="doctor">Select Doctor</Label>
                          <Select 
                            name="doctor" 
                            onValueChange={(value) => handleSelectChange("doctor", value)}
                            value={formData.doctor}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a doctor" />
                            </SelectTrigger>
                            <SelectContent>
                              {doctors.map((doctor) => (
                                <SelectItem key={doctor.id} value={doctor.id}>
                                  {doctor.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="service">Select Service</Label>
                          <Select 
                            name="service"
                            onValueChange={(value) => handleSelectChange("service", value)}
                            value={formData.service}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="reason">Reason for Visit</Label>
                        <Textarea 
                          id="reason" 
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          placeholder="Briefly describe why you're visiting"
                          className="resize-none h-32"
                        />
                      </div>
                      
                      <div className="bg-clinic-blue/10 p-4 rounded-lg">
                        <h3 className="font-medium text-clinic-gray flex items-center">
                          <CalendarCheck className="mr-2 h-5 w-5" />
                          Appointment Summary
                        </h3>
                        <div className="mt-2 space-y-2 text-sm">
                          <p><span className="font-medium">Date:</span> {date?.toLocaleDateString()}</p>
                          <p><span className="font-medium">Time:</span> {timeSlot}</p>
                          <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                          <p><span className="font-medium">Contact:</span> {formData.email} | {formData.phone}</p>
                          {formData.doctor && <p><span className="font-medium">Doctor:</span> {doctors.find(d => d.id === formData.doctor)?.name || formData.doctor}</p>}
                          {formData.service && <p><span className="font-medium">Service:</span> {formData.service}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="bg-clinic-gray hover:bg-black"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="bg-clinic-gray hover:bg-black"
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ) : (
            <Card className="border-none shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-serif mt-4">Booking Successful!</CardTitle>
                <CardDescription>Your appointment has been scheduled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-clinic-blue/10 p-6 rounded-lg max-w-md mx-auto">
                  <h3 className="font-medium text-clinic-gray text-lg mb-4">Appointment Details</h3>
                  <div className="space-y-2 text-left">
                    <p><span className="font-medium">Date:</span> {date?.toLocaleDateString()}</p>
                    <p><span className="font-medium">Time:</span> {timeSlot}</p>
                    <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                    {formData.doctor && <p><span className="font-medium">Doctor:</span> {doctors.find(d => d.id === formData.doctor)?.name || formData.doctor}</p>}
                    {formData.service && <p><span className="font-medium">Service:</span> {formData.service}</p>}
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-500">
                  <div className="flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <p>Please arrive 15 minutes before your scheduled appointment time.</p>
                  </div>
                  <p className="mt-2">A confirmation email has been sent to {formData.email}</p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button onClick={() => window.location.href = '/'} className="bg-clinic-gray hover:bg-black">
                  Return to Home
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
