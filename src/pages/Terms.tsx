
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-clinic-gray hover:text-black transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-clinic-gray mb-8 font-serif">Terms of Service</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clinic-gray mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using MindfulCare Clinic's services, you agree to be bound by these Terms of Service.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clinic-gray mb-4">Medical Services</h2>
            <p className="text-gray-600 mb-4">
              Our clinic provides medical services subject to professional medical standards and regulations.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Appointment scheduling and cancellation policies</li>
              <li>Emergency services information</li>
              <li>Payment terms and insurance</li>
              <li>Patient responsibilities</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
