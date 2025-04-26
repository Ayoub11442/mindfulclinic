
import { ArrowRight, Heart, Users, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-b from-clinic-blue/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-clinic-gray sm:text-5xl md:text-6xl font-serif animate-fade-in">
            Your Health, Our Priority
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-fade-in">
            Welcome to MindfulCare Clinic, where we combine advanced medical expertise with compassionate care to ensure your wellbeing is in the best hands.
          </p>
          
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <Heart className="w-6 h-6 text-clinic-gray mr-2" />
              <span className="text-gray-600">Personalized Care</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <Users className="w-6 h-6 text-clinic-gray mr-2" />
              <span className="text-gray-600">Expert Doctors</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <Star className="w-6 h-6 text-clinic-gray mr-2" />
              <span className="text-gray-600">Modern Facilities</span>
            </div>
          </div>

          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow group">
              <a
                href="#booking"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-clinic-gray hover:bg-black md:py-4 md:text-lg md:px-10 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
