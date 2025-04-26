
import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Doctor specialties for filtering
const specialties = [
  { id: 'all', name: 'All Specialties' },
  { id: 'general', name: 'General Medicine' },
  { id: 'cardio', name: 'Cardiology' },
  { id: 'dental', name: 'Dental' },
  { id: 'neuro', name: 'Neurology' },
  { id: 'pedia', name: 'Pediatrics' },
  { id: 'ophthal', name: 'Ophthalmology' },
];

// Doctor details
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "general",
    specialtyName: "General Medicine",
    image: "https://placehold.co/400x400.png",
    bio: "Dr. Johnson has over 15 years of experience in general medicine and is dedicated to providing comprehensive care to her patients.",
    education: "MD from Johns Hopkins University",
    certifications: ["Board Certified in Internal Medicine", "American Medical Association Member"],
    languages: ["English", "Spanish"],
    schedule: "Monday, Wednesday, Friday",
    fullBio: "Dr. Sarah Johnson joined MindfulCare Clinic in 2015 after working at City General Hospital for ten years. She specializes in preventive medicine and chronic disease management, with particular expertise in diabetes and hypertension. Her patient-centered approach focuses on education and lifestyle modifications alongside medical interventions. Dr. Johnson regularly participates in medical missions and community health initiatives."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "cardio",
    specialtyName: "Cardiology",
    image: "https://placehold.co/400x400.png",
    bio: "A renowned cardiologist with expertise in preventive cardiology and heart disease management.",
    education: "MD from Stanford University, Cardiology Fellowship at Mayo Clinic",
    certifications: ["Board Certified in Cardiovascular Disease", "Fellow of the American College of Cardiology"],
    languages: ["English", "Mandarin"],
    schedule: "Tuesday, Thursday, Saturday",
    fullBio: "Dr. Michael Chen is a leading cardiologist specializing in interventional procedures and preventive cardiology. With training from prestigious institutions and over 20 research publications, he brings cutting-edge cardiac care to our clinic. He pioneered our heart health screening program and is passionate about early detection and treatment of cardiovascular conditions."
  },
  {
    id: 3,
    name: "Dr. Emily Martinez",
    specialty: "dental",
    specialtyName: "Dental Care",
    image: "https://placehold.co/400x400.png",
    bio: "Specialized in cosmetic dentistry and oral health, Dr. Martinez ensures every patient leaves with a confident smile.",
    education: "DDS from University of Michigan",
    certifications: ["American Dental Association Member", "Certified in Advanced Cosmetic Procedures"],
    languages: ["English", "Portuguese"],
    schedule: "Monday through Friday",
    fullBio: "Dr. Emily Martinez leads our dental department with expertise in cosmetic and restorative dentistry. Known for her gentle approach and artistic eye, she helps patients achieve both functional and beautiful smiles. She regularly attends international dental conferences to bring the latest techniques and technologies to our practice."
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "neuro",
    specialtyName: "Neurology",
    image: "https://placehold.co/400x400.png",
    bio: "Specialized in diagnosing and treating conditions affecting the brain, spinal cord, and nervous system.",
    education: "MD from Yale, Neurology Residency at UCSF",
    certifications: ["Board Certified in Neurology", "American Academy of Neurology Member"],
    languages: ["English"],
    schedule: "Monday, Tuesday, Thursday",
    fullBio: "Dr. James Wilson brings over 20 years of neurological expertise to MindfulCare Clinic. His special interests include headache disorders, neurodegenerative diseases, and stroke management. His compassionate approach helps patients navigate complex neurological conditions with confidence. Dr. Wilson also conducts clinical research and has published extensively on Parkinson's disease."
  },
  {
    id: 5,
    name: "Dr. Sophia Lee",
    specialty: "pedia",
    specialtyName: "Pediatrics",
    image: "https://placehold.co/400x400.png",
    bio: "Dedicated to the health and development of children from infancy through adolescence.",
    education: "MD from Harvard, Pediatric Residency at Boston Children's Hospital",
    certifications: ["Board Certified in Pediatrics", "American Academy of Pediatrics Fellow"],
    languages: ["English", "Korean"],
    schedule: "Tuesday through Saturday",
    fullBio: "Dr. Sophia Lee's gentle demeanor and expertise make her a favorite among our youngest patients. Specialized in developmental pediatrics, she takes a holistic approach to child health, considering physical, emotional, and social factors. Her clinic rooms are designed to be child-friendly, helping to ease anxiety during visits."
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    specialty: "ophthal",
    specialtyName: "Ophthalmology",
    image: "https://placehold.co/400x400.png",
    bio: "Expert in comprehensive eye care, from routine exams to surgical procedures for various eye conditions.",
    education: "MD from Columbia University, Ophthalmology Residency at Wills Eye Hospital",
    certifications: ["Board Certified in Ophthalmology", "American Society of Cataract and Refractive Surgery Member"],
    languages: ["English", "French"],
    schedule: "Monday, Wednesday, Friday",
    fullBio: "Dr. Robert Taylor is a comprehensive ophthalmologist with additional expertise in cataract surgery and refractive procedures. He utilizes the latest diagnostic technologies to detect eye diseases at their earliest stages. Dr. Taylor has performed over 5,000 successful eye surgeries and leads our vision restoration program."
  },
  {
    id: 7,
    name: "Dr. Maria Rodriguez",
    specialty: "general",
    specialtyName: "Family Medicine",
    image: "https://placehold.co/400x400.png",
    bio: "Providing comprehensive healthcare for patients of all ages, with a focus on family-centered care.",
    education: "MD from University of California, San Francisco",
    certifications: ["Board Certified in Family Medicine", "American Academy of Family Physicians Member"],
    languages: ["English", "Spanish"],
    schedule: "Tuesday, Thursday, Saturday",
    fullBio: "Dr. Maria Rodriguez specializes in caring for entire families, from newborns to elderly patients. Her holistic approach considers the interconnected nature of family health and well-being. With special training in women's health and geriatrics, she provides truly comprehensive family care. Dr. Rodriguez is deeply involved in community health education programs."
  },
  {
    id: 8,
    name: "Dr. David Patel",
    specialty: "cardio",
    specialtyName: "Cardiology",
    image: "https://placehold.co/400x400.png",
    bio: "Specializing in non-invasive cardiology and cardiac imaging to diagnose and manage heart conditions.",
    education: "MD from Duke University, Cardiology Fellowship at Cleveland Clinic",
    certifications: ["Board Certified in Cardiovascular Disease", "Level III Certification in Echocardiography"],
    languages: ["English", "Hindi", "Gujarati"],
    schedule: "Monday, Wednesday, Friday",
    fullBio: "Dr. David Patel is an expert in cardiac imaging and non-invasive diagnostics. His skilled interpretation of echocardiograms, stress tests, and cardiac MRIs provides crucial insights for patient care. He leads our heart failure management program and works closely with cardiac rehabilitation specialists to ensure comprehensive care for heart patients."
  }
];

const DoctorsPage = () => {
  const [specialty, setSpecialty] = useState('all');
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  const filteredDoctors = specialty === 'all' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === specialty);

  const handleOpenProfile = (id: number) => {
    setSelectedDoctor(id);
  };

  const handleCloseProfile = () => {
    setSelectedDoctor(null);
  };

  const currentDoctor = doctors.find(doctor => doctor.id === selectedDoctor);

  return (
    <Layout>
      <PageHeader 
        title="Our Doctors" 
        description="Meet our team of experienced healthcare professionals dedicated to your well-being"
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="inline-flex h-auto p-1 gap-1 flex-nowrap">
                {specialties.map(spec => (
                  <TabsTrigger 
                    key={spec.id} 
                    value={spec.id}
                    onClick={() => setSpecialty(spec.id)}
                    className="data-[state=active]:bg-clinic-blue/30 text-sm whitespace-nowrap"
                  >
                    {spec.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={specialty} className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredDoctors.map(doctor => (
                  <Card 
                    key={doctor.id}
                    className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader className="text-center pt-8">
                      <Avatar className="w-32 h-32 mx-auto">
                        <AvatarImage src={doctor.image} alt={doctor.name} />
                        <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="mt-4 text-xl font-semibold text-clinic-gray font-serif">{doctor.name}</h3>
                      <p className="text-sm text-gray-500">{doctor.specialtyName}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 text-sm">{doctor.bio}</p>
                      <div className="mt-4 text-sm">
                        <p className="text-gray-500"><span className="font-medium">Available:</span> {doctor.schedule}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        variant="ghost" 
                        className="text-clinic-gray hover:text-clinic-blue hover:bg-clinic-blue/10"
                        onClick={() => handleOpenProfile(doctor.id)}
                      >
                        View Full Profile
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog open={selectedDoctor !== null} onOpenChange={handleCloseProfile}>
        {currentDoctor && (
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif">{currentDoctor.name}</DialogTitle>
              <DialogDescription>{currentDoctor.specialtyName}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 sm:grid-cols-[1fr_2fr] items-start">
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={currentDoctor.image} alt={currentDoctor.name} />
                  <AvatarFallback>{currentDoctor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="mt-4 space-y-2 text-sm w-full">
                  <div>
                    <p className="font-medium text-clinic-gray">Education:</p>
                    <p className="text-gray-600">{currentDoctor.education}</p>
                  </div>
                  <div>
                    <p className="font-medium text-clinic-gray">Languages:</p>
                    <p className="text-gray-600">{currentDoctor.languages.join(', ')}</p>
                  </div>
                  <div>
                    <p className="font-medium text-clinic-gray">Schedule:</p>
                    <p className="text-gray-600">{currentDoctor.schedule}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-clinic-gray">About:</h4>
                  <p className="text-gray-600 text-sm mt-1">{currentDoctor.fullBio}</p>
                </div>
                <div>
                  <h4 className="font-medium text-clinic-gray">Certifications:</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    {currentDoctor.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-clinic-blue rounded-full mr-2 mt-1.5"></span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full bg-clinic-gray hover:bg-black text-white mt-4"
                  onClick={() => window.location.href = '/booking'}
                >
                  Book Appointment with {currentDoctor.name.split(' ')[0]}
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </Layout>
  );
};

export default DoctorsPage;
