
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Award, Users, Clock, MapPin, Calendar } from 'lucide-react';

const AboutPage = () => {
  const history = [
    {
      year: 2010,
      title: "Foundation",
      description: "MindfulCare Clinic was established with the vision of providing comprehensive healthcare services with a personal touch."
    },
    {
      year: 2015,
      title: "Expansion",
      description: "Added specialized departments including Cardiology, Neurology, and Pediatrics to serve more diverse patient needs."
    },
    {
      year: 2018,
      title: "Technology Integration",
      description: "Implemented state-of-the-art medical technologies and electronic health records system for improved patient care."
    },
    {
      year: 2020,
      title: "Community Impact",
      description: "Launched community health programs focused on preventive care and health education reaching over 10,000 individuals."
    },
    {
      year: 2023,
      title: "Recognition",
      description: "Received healthcare excellence award for patient satisfaction and innovative healthcare delivery models."
    }
  ];
  
  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        description="Learn about our clinic's mission, values, and history"
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-clinic-gray font-serif mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At MindfulCare Clinic, our mission is to provide exceptional healthcare services that improve the quality of life for our patients. 
                We are committed to delivering compassionate, personalized care that addresses both immediate health concerns and long-term wellness goals.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in a patient-centered approach that combines medical expertise with empathy, 
                treating each person who visits our clinic with dignity, respect, and individual attention.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-none shadow-md bg-clinic-blue/10">
                  <CardContent className="flex items-start p-4">
                    <Heart className="h-5 w-5 text-clinic-gray mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-clinic-gray">Care</h3>
                      <p className="text-sm text-gray-500">Providing compassionate treatment to every patient</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-clinic-blue/10">
                  <CardContent className="flex items-start p-4">
                    <Award className="h-5 w-5 text-clinic-gray mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-clinic-gray">Excellence</h3>
                      <p className="text-sm text-gray-500">Maintaining the highest standards in healthcare</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-clinic-blue/10">
                  <CardContent className="flex items-start p-4">
                    <Users className="h-5 w-5 text-clinic-gray mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-clinic-gray">Community</h3>
                      <p className="text-sm text-gray-500">Building relationships with those we serve</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-clinic-blue/10">
                  <CardContent className="flex items-start p-4">
                    <Clock className="h-5 w-5 text-clinic-gray mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-clinic-gray">Innovation</h3>
                      <p className="text-sm text-gray-500">Embracing advances in medical science</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg" 
                alt="Medical team at MindfulCare" 
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-clinic-gray font-serif">Our History</h2>
              <p className="mt-4 text-gray-600">
                From our humble beginnings to our current standing as a trusted healthcare provider, 
                our journey reflects our commitment to community health.
              </p>
            </div>
            
            <div className="mt-12 relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-clinic-blue/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {history.map((item, index) => (
                  <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2"></div>
                    <div className="mx-auto md:mx-0 flex items-center justify-center relative">
                      <div className="h-10 w-10 rounded-full bg-clinic-blue/60 z-10 flex items-center justify-center text-white font-semibold">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-clinic-blue/30 hidden md:block"></div>
                    </div>
                    <div className="md:w-1/2 pt-4 md:pt-0">
                      <Card className={`border-none shadow-lg hover:shadow-xl transition-all ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-lg font-bold bg-clinic-blue/20 text-clinic-gray px-3 py-1 rounded-full">{item.year}</span>
                          </div>
                          <h3 className="text-xl font-medium text-clinic-gray font-serif">{item.title}</h3>
                          <p className="mt-2 text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-clinic-gray font-serif">Our Location</h2>
              <p className="mt-4 text-gray-600">
                Conveniently located in the heart of the Medical District, 
                our facility is designed with patient comfort and accessibility in mind.
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="bg-gray-100 rounded-xl h-96 overflow-hidden shadow-lg">
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
              <div>
                <Card className="border-none shadow-lg bg-clinic-blue/10">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-clinic-gray font-serif mb-4">Visit Us</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-clinic-gray mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium text-clinic-gray">Address</h4>
                          <p className="text-gray-600">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-clinic-gray mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium text-clinic-gray">Hours</h4>
                          <p className="text-gray-600">
                            Monday - Friday: 8:00 AM - 6:00 PM<br />
                            Saturday: 9:00 AM - 1:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-4">
                        Our facility features ample parking, wheelchair accessibility, and is 
                        conveniently located near public transportation options.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
