
import { Stethoscope, HeartPulse, Scissors, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive healthcare services for all your general medical needs. Our experienced physicians provide thorough examinations and personalized treatment plans.",
      icon: Stethoscope,
      features: ["Regular Check-ups", "Preventive Care", "Health Screenings"]
    },
    {
      title: "Cardiology",
      description: "Expert heart care and cardiovascular health services. State-of-the-art diagnostic tools and treatments for heart conditions.",
      icon: HeartPulse,
      features: ["Heart Screenings", "ECG Tests", "Cardiac Consultation"]
    },
    {
      title: "Dental Care",
      description: "Complete dental services for a healthy and beautiful smile. From routine cleanings to advanced dental procedures.",
      icon: Scissors,
      features: ["Dental Cleanings", "Cosmetic Dentistry", "Emergency Care"]
    },
    {
      title: "Specialist Consultations",
      description: "Access to specialized medical expertise for specific conditions. Our network of specialists ensures comprehensive care.",
      icon: Users,
      features: ["Expert Diagnosis", "Treatment Plans", "Follow-up Care"]
    }
  ];

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-clinic-gray font-serif">Our Services</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to your needs. Our team of experts provides 
            high-quality medical services using the latest technology and evidence-based practices.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 group cursor-pointer"
            >
              <CardHeader>
                <div className="w-12 h-12 mx-auto bg-clinic-blue rounded-full flex items-center justify-center group-hover:bg-clinic-gray transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-clinic-gray group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-center mt-4 group-hover:text-clinic-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 group-hover:text-clinic-gray transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center justify-center text-sm text-gray-500 group-hover:text-clinic-gray transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-clinic-blue rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
