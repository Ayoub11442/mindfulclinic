import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { MapPin, Clock, Phone, Mail, MessageSquare, User, Loader2, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FormError } from '@/components/ui/form-error';
import { cn } from '@/lib/utils';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our team for any inquiries or support"
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold text-clinic-gray font-serif flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Location
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold text-clinic-gray font-serif flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Hours
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold text-clinic-gray font-serif flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Phone
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Main: (555) 123-4567<br />
                      Emergency: (555) 987-6543<br />
                      Fax: (555) 123-4568
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold text-clinic-gray font-serif flex items-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Email
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      General: info@mindfulcare.clinic<br />
                      Appointments: bookings@mindfulcare.clinic<br />
                      Support: help@mindfulcare.clinic
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form and Map */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg mb-8">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-clinic-gray font-serif flex items-center">
                    <MessageSquare className="h-6 w-6 mr-2" />
                    Send Us a Message
                  </h3>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name">Your Name*</Label>
                          <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-4 w-4 text-gray-400" />
                            </div>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={cn(
                                "pl-10",
                                errors.name && "border-destructive focus-visible:ring-destructive"
                              )}
                              aria-invalid={!!errors.name}
                              aria-describedby={errors.name ? "name-error" : undefined}
                            />
                          </div>
                          <FormError message={errors.name} />
                        </div>
                        <div>
                          <Label htmlFor="email">Your Email*</Label>
                          <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-4 w-4 text-gray-400" />
                            </div>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john.doe@example.com"
                              className={cn(
                                "pl-10",
                                errors.email && "border-destructive focus-visible:ring-destructive"
                              )}
                              aria-invalid={!!errors.email}
                              aria-describedby={errors.email ? "email-error" : undefined}
                            />
                          </div>
                          <FormError message={errors.email} />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is your message about?"
                          className={cn(
                            errors.subject && "border-destructive focus-visible:ring-destructive"
                          )}
                        />
                        <FormError message={errors.subject} />
                      </div>
                      <div>
                        <Label htmlFor="message">Message*</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className={cn(
                            "resize-none h-40",
                            errors.message && "border-destructive focus-visible:ring-destructive"
                          )}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                        <FormError message={errors.message} />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-clinic-gray hover:bg-black"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                      <h3 className="text-xl font-bold text-clinic-gray mt-4">Message Sent!</h3>
                      <p className="text-gray-600 mt-2">
                        Thank you for contacting us. We'll respond to your message as soon as possible.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 bg-clinic-gray hover:bg-black"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
