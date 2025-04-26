
import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Stethoscope, HeartPulse, Scissors, Users, Brain, Pill, Thermometer, Baby, Eye, Hospital } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'primary', name: 'Primary Care' },
  { id: 'specialized', name: 'Specialized Care' },
  { id: 'preventive', name: 'Preventive Care' },
];

const services = [
  {
    id: 1,
    title: "General Medicine",
    description: "Comprehensive healthcare services for all your general medical needs. Our experienced physicians provide thorough examinations and personalized treatment plans.",
    icon: Stethoscope,
    category: "primary",
    features: ["Regular Check-ups", "Preventive Care", "Health Screenings"],
    procedures: ["Physical Examinations", "Prescription Management", "Health Risk Assessments"],
    longDescription: "Our General Medicine department provides comprehensive care addressing a wide range of health issues. Our physicians are trained to diagnose and treat diverse medical conditions and coordinate with specialists when needed. We emphasize preventive care and long-term health management."
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Expert heart care and cardiovascular health services. State-of-the-art diagnostic tools and treatments for heart conditions.",
    icon: HeartPulse,
    category: "specialized",
    features: ["Heart Screenings", "ECG Tests", "Cardiac Consultation"],
    procedures: ["Echocardiogram", "Stress Testing", "Holter Monitoring"],
    longDescription: "Our Cardiology department offers specialized care for heart conditions using advanced diagnostic equipment. Our board-certified cardiologists diagnose and treat coronary artery disease, heart failure, arrhythmias, and other cardiovascular issues with the latest evidence-based approaches."
  },
  {
    id: 3,
    title: "Dental Care",
    description: "Complete dental services for a healthy and beautiful smile. From routine cleanings to advanced dental procedures.",
    icon: Scissors,
    category: "primary",
    features: ["Dental Cleanings", "Cosmetic Dentistry", "Emergency Care"],
    procedures: ["Dental Fillings", "Root Canal Therapy", "Teeth Whitening"],
    longDescription: "Our Dental Care services maintain your oral health through preventive care, restorative procedures, and cosmetic treatments. Our modern dental facilities and skilled dentists ensure comfortable and effective treatments for patients of all ages."
  },
  {
    id: 4,
    title: "Specialist Consultations",
    description: "Access to specialized medical expertise for specific conditions. Our network of specialists ensures comprehensive care.",
    icon: Users,
    category: "specialized",
    features: ["Expert Diagnosis", "Treatment Plans", "Follow-up Care"],
    procedures: ["Specialist Referrals", "Multidisciplinary Approach", "Integrated Care Planning"],
    longDescription: "Our Specialist Consultation services connect you with experts in specific medical fields. We coordinate care between primary physicians and specialists to ensure comprehensive treatment approaches for complex or specific health conditions."
  },
  {
    id: 5,
    title: "Neurology",
    description: "Advanced diagnostic and treatment services for neurological disorders affecting the brain, spinal cord, and nervous system.",
    icon: Brain,
    category: "specialized",
    features: ["Neurological Assessments", "Movement Disorder Treatment", "Headache Management"],
    procedures: ["EEG", "EMG", "Cognitive Testing"],
    longDescription: "Our Neurology department specializes in diagnosing and treating disorders of the nervous system. Our neurologists are experts in conditions like epilepsy, stroke, multiple sclerosis, Parkinson's disease, and other neurological disorders."
  },
  {
    id: 6,
    title: "Pharmacy Services",
    description: "Convenient on-site pharmacy providing prescription medications, over-the-counter products, and medication counseling.",
    icon: Pill,
    category: "primary",
    features: ["Prescription Filling", "Medication Reviews", "Health Products"],
    procedures: ["Medication Therapy Management", "Immunizations", "Prescription Transfers"],
    longDescription: "Our Pharmacy Services offer convenient access to medications and pharmaceutical care. Our licensed pharmacists work closely with your healthcare providers to ensure safe and effective medication use, providing counseling and medication management services."
  },
  {
    id: 7,
    title: "Preventive Health Screenings",
    description: "Comprehensive screening programs to detect potential health issues before they become serious problems.",
    icon: Thermometer,
    category: "preventive",
    features: ["Cancer Screenings", "Cardiovascular Risk Assessment", "Metabolic Testing"],
    procedures: ["Mammography", "Colonoscopy", "Bone Density Scans"],
    longDescription: "Our Preventive Health Screenings aim to detect health risks and conditions at early stages when treatment is most effective. We offer various screening programs customized to your age, gender, family history, and risk factors."
  },
  {
    id: 8,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children and adolescents focusing on growth, development, and childhood illnesses.",
    icon: Baby,
    category: "primary",
    features: ["Well-Child Visits", "Immunizations", "Developmental Assessments"],
    procedures: ["Growth Monitoring", "Behavioral Evaluations", "School Physicals"],
    longDescription: "Our Pediatrics department provides comprehensive healthcare for children from birth through adolescence. Our child-friendly environment and specialized pediatricians focus on physical, emotional, and social development while managing acute and chronic conditions."
  },
  {
    id: 9,
    title: "Ophthalmology",
    description: "Complete eye care services from routine vision tests to advanced treatments for eye diseases and disorders.",
    icon: Eye,
    category: "specialized",
    features: ["Vision Testing", "Glaucoma Screening", "Cataract Evaluation"],
    procedures: ["Eye Examinations", "Contact Lens Fittings", "Laser Procedures"],
    longDescription: "Our Ophthalmology services cover the full spectrum of eye care. Our ophthalmologists diagnose and treat conditions like cataracts, glaucoma, macular degeneration, and diabetic retinopathy, while also providing routine vision care and surgical interventions when necessary."
  },
  {
    id: 10,
    title: "Laboratory Services",
    description: "State-of-the-art diagnostic testing facility providing accurate and timely test results for better healthcare decisions.",
    icon: Hospital,
    category: "preventive",
    features: ["Blood Tests", "Urinalysis", "Pathology Services"],
    procedures: ["Sample Collection", "Result Interpretation", "Electronic Reporting"],
    longDescription: "Our Laboratory Services utilize advanced equipment and techniques to provide accurate diagnostic information. We perform a wide range of tests that help your healthcare provider diagnose conditions, monitor treatment effectiveness, and make informed medical decisions."
  }
];

const ServicesPage = () => {
  const [category, setCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const filteredServices = category === 'all' 
    ? services 
    : services.filter(service => service.category === category);

  const selectService = (id: number) => {
    setSelectedService(id === selectedService ? null : id);
  };

  return (
    <Layout>
      <PageHeader 
        title="Our Services" 
        description="Comprehensive healthcare solutions tailored to your needs"
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                {serviceCategories.map(cat => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className="data-[state=active]:bg-clinic-blue/30"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={category} className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredServices.map(service => (
                  <Card 
                    key={service.id}
                    className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden ${selectedService === service.id ? 'ring-2 ring-clinic-blue' : ''}`}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-clinic-blue/30 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-clinic-gray" />
                      </div>
                      <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <h4 className="font-medium text-sm mb-2 text-clinic-gray">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-clinic-blue rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="ghost" 
                        className="w-full text-clinic-gray hover:text-clinic-blue hover:bg-clinic-blue/10"
                        onClick={() => selectService(service.id)}
                      >
                        {selectedService === service.id ? 'Show Less' : 'Learn More'}
                      </Button>
                    </CardFooter>
                    
                    {selectedService === service.id && (
                      <div className="px-6 py-4 bg-clinic-blue/10 animate-fade-in">
                        <h4 className="font-medium text-sm mb-2 text-clinic-gray">Procedures Offered:</h4>
                        <ul className="space-y-1 mb-4">
                          {service.procedures.map((procedure, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-clinic-blue rounded-full mr-2"></span>
                              {procedure}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-600">{service.longDescription}</p>
                        <Button 
                          className="w-full mt-4 bg-clinic-gray hover:bg-black text-white"
                          onClick={() => window.location.href = '/booking'}
                        >
                          Book This Service
                        </Button>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
