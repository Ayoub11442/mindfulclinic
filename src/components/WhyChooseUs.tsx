
import { Shield, Clock, Medal, UserCheck, Headphones, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Patient Safety",
      description: "We implement the highest standards of hygiene and safety protocols for your peace of mind."
    },
    {
      icon: Clock,
      title: "Minimal Wait Times",
      description: "Our efficient scheduling system ensures you spend less time waiting and more time with your doctor."
    },
    {
      icon: Medal,
      title: "Award-Winning Care",
      description: "Recognized for excellence in patient care and medical outcomes by top healthcare organizations."
    },
    {
      icon: UserCheck,
      title: "Experienced Team",
      description: "Our doctors have an average of 15+ years of experience in their respective specialties."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Access to medical advice through our on-call system, even outside regular hours."
    },
    {
      icon: Sparkles,
      title: "Modern Approach",
      description: "Combining traditional medical practices with the latest evidence-based innovations."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-clinic-gray font-serif">Why Choose Us</h2>
          <div className="w-24 h-1 bg-clinic-blue/50 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            MindfulCare Clinic stands apart with our commitment to excellence in every aspect of patient care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-clinic-blue/30 group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-clinic-blue/10 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-clinic-gray group-hover:text-clinic-blue transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium text-clinic-gray mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
