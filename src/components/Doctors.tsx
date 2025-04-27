
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "General Medicine",
      bio: "Dr. Johnson has over 15 years of experience in general medicine and is dedicated to providing comprehensive care to her patients.",
      image: "https://media.istockphoto.com/id/1359854139/photo/this-is-a-portrait-of-a-young-woman-who-has-recently-become-a-doctor-she-gives-a-pose-of.jpg?s=612x612&w=0&k=20&c=bRKzM0M_qy03N-Vzs-q07-PLlxnIuD0qgiBCc7NLM5I=",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      bio: "A renowned cardiologist with expertise in preventive cardiology and heart disease management.",
      image: "https://media.istockphoto.com/id/910063086/photo/portrait-of-young-man-doctor-against-white-background.jpg?s=612x612&w=0&k=20&c=ciR2IvJ6Kda8w_UR1F7lvh7SXVKUzcbYn9ZHlzv7bo4=",
    },
    {
      name: "Dr. Emily Martinez",
      specialty: "Dental Care",
      bio: "Specialized in cosmetic dentistry and oral health, Dr. Martinez ensures every patient leaves with a confident smile.",
      image: "https://media.istockphoto.com/id/650689018/photo/portrait-of-young-beautiful-woman-doctor-against-gray-background.jpg?s=612x612&w=0&k=20&c=YqEBCLZ2I1KCuC-nTOzcWvKbh0V3dSoc1kn35PfpSAU=",
    }
  ];

  return (
    <section id="doctors" className="py-12 bg-clinic-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-clinic-gray font-serif">Our Doctors</h2>
          <p className="mt-4 text-gray-500">Meet our team of experienced healthcare professionals</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Avatar className="w-32 h-32 mx-auto">
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback>{doctor.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center mt-4">{doctor.name}</CardTitle>
                <p className="text-center text-gray-500">{doctor.specialty}</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{doctor.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
