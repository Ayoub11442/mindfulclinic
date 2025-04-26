
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
        <h1 className="text-3xl font-bold text-clinic-gray mb-8 font-serif">Privacy Policy</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clinic-gray mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              At MindfulCare Clinic, we take your privacy seriously. We collect only essential information needed to provide you with the best possible healthcare services.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Personal identification information</li>
              <li>Medical history and records</li>
              <li>Insurance information</li>
              <li>Contact details</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-clinic-gray mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Your information is used solely for the purpose of providing medical care and improving our services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
