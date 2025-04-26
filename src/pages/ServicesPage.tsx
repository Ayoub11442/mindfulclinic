
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ServicesPage = () => {
  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive healthcare services for all your medical needs. Our experienced physicians provide thorough examinations and personalized treatment plans.",
      procedures: ["Annual Check-ups", "Vaccinations", "Health Screenings", "Chronic Disease Management"],
      doctor: {
        name: "Dr. Sarah Johnson",
        image: "https://placehold.co/400x400.png",
        specialty: "General Medicine",
        experience: "15+ years"
      }
    },
    {
      title: "Cardiology",
      description: "Expert heart care and cardiovascular health services with state-of-the-art diagnostic tools and treatments.",
      procedures: ["ECG Tests", "Stress Tests", "Heart Monitoring", "Cardiac Consultation"],
      doctor: {
        name: "Dr. Michael Chen",
        image: "https://placehold.co/400x400.png",
        specialty: "Cardiology",
        experience: "12+ years"
      }
    },
    {
      title: "Dental Care",
      description: "Complete dental services for a healthy and beautiful smile, from routine cleanings to advanced procedures.",
      procedures: ["Dental Cleanings", "Fillings", "Root Canals", "Cosmetic Dentistry"],
      doctor: {
        name: "Dr. Emily Martinez",
        image: "https://placehold.co/400x400.png",
        specialty: "Dental Care",
        experience: "10+ years"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-clinic-gray hover:text-black transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-clinic-gray mb-8 font-serif">Our Medical Services</h1>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {services.map((service) => (
            <Card key={service.title} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-2xl font-semibold text-clinic-gray mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={service.doctor.image} alt={service.doctor.name} />
                    <AvatarFallback>{service.doctor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-clinic-gray">{service.doctor.name}</h3>
                    <p className="text-sm text-gray-500">{service.doctor.specialty}</p>
                    <p className="text-sm text-gray-500">{service.doctor.experience}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Available Procedures</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {service.procedures.map((procedure) => (
                      <TableRow key={procedure}>
                        <TableCell>{procedure}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
