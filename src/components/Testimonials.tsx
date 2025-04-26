
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      text: "The care I received at MindfulCare was exceptional. The staff was professional and caring, making me feel comfortable throughout my visit.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      text: "Dr. Johnson is amazing! She took the time to listen to my concerns and provided clear explanations. Highly recommend this clinic.",
      rating: 5,
    },
    {
      name: "David Thompson",
      text: "Outstanding dental care from Dr. Martinez. The clinic is modern, clean, and the appointment scheduling system is very convenient.",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-clinic-gray font-serif">Patient Testimonials</h2>
          <p className="mt-4 text-gray-500">What our patients say about us</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
                <div className="mt-4">
                  <div className="font-medium text-clinic-gray">{testimonial.name}</div>
                  <div className="text-yellow-400 mt-1">
                    {"★".repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
