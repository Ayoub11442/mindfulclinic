
import { Medkit, Heart, Tooth, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive healthcare services for all your general medical needs.",
      icon: Medkit
    },
    {
      title: "Cardiology",
      description: "Expert heart care and cardiovascular health services.",
      icon: Heart
    },
    {
      title: "Dental Care",
      description: "Complete dental services for a healthy and beautiful smile.",
      icon: Tooth
    },
    {
      title: "Specialist Consultations",
      description: "Access to specialized medical expertise for specific conditions.",
      icon: Stethoscope
    }
  ];

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-clinic-gray font-serif">Our Services</h2>
          <p className="mt-4 text-gray-500">Comprehensive healthcare solutions tailored to your needs</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto bg-clinic-blue rounded-full flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-clinic-gray" />
                </div>
                <CardTitle className="text-center mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
