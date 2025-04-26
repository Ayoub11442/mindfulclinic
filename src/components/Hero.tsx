
import { ArrowRight, Heart, Users, Star, Play } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-20 bg-gradient-to-b from-clinic-blue/30 to-white overflow-hidden">
      {/* Abstract Shape Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-40 w-96 h-96 rounded-full bg-clinic-green/20 blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-72 h-72 rounded-full bg-clinic-blue/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-clinic-gray sm:text-5xl md:text-6xl font-serif animate-fade-in">
            Your Health, <span className="text-clinic-blue">Our Priority</span>
          </h1>
          <p className="mt-5 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-fade-in">
            Welcome to MindfulCare Clinic, where we combine advanced medical expertise with compassionate care to ensure your wellbeing is in the best hands.
          </p>
          
          {/* Trust Badges */}
          <div className="inline-flex flex-wrap justify-center gap-3 mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-clinic-green/20 text-green-800">
              ✓ Certified Clinic
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-clinic-blue/20 text-blue-800">
              ✓ Top Rated Doctors
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              ✓ Patient Safety First
            </span>
          </div>
          
          {/* Feature Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-clinic-blue/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-clinic-gray" />
              </div>
              <h3 className="font-medium text-lg mb-2 text-clinic-gray">Personalized Care</h3>
              <p className="text-gray-500 text-sm text-center">Treatments tailored to your unique health needs</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-clinic-green/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-clinic-gray" />
              </div>
              <h3 className="font-medium text-lg mb-2 text-clinic-gray">Expert Doctors</h3>
              <p className="text-gray-500 text-sm text-center">Board-certified specialists with years of experience</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-clinic-blue/20 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-clinic-gray" />
              </div>
              <h3 className="font-medium text-lg mb-2 text-clinic-gray">Modern Facilities</h3>
              <p className="text-gray-500 text-sm text-center">State-of-the-art technology for better diagnosis</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4">
            <div 
              className="mb-4 sm:mb-0 relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Button
                size="lg"
                className="bg-clinic-gray text-white hover:bg-black w-full sm:w-auto transition-all duration-300 ease-in-out"
                onClick={() => window.location.href = "/booking"}
              >
                Book Appointment
                <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
              </Button>
              {/* Pulsing effect */}
              <span className={`absolute inset-0 rounded-md border-2 border-clinic-gray ${isHovering ? 'animate-ping opacity-30' : 'opacity-0'}`}></span>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 group"
              onClick={() => window.location.href = "#services"}
            >
              Explore Services
              <Play className="w-4 h-4 ml-2 group-hover:text-clinic-blue transition-colors duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
