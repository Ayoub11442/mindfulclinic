
const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-b from-clinic-blue/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-clinic-gray sm:text-5xl md:text-6xl font-serif">
            Your Health, Our Priority
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Welcome to MindfulCare Clinic, where we combine advanced medical expertise with compassionate care to ensure your wellbeing is in the best hands.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#booking"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-clinic-gray hover:bg-black md:py-4 md:text-lg md:px-10 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
