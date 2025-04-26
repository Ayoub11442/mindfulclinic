
import Navigation from '@/components/Navigation';
import Booking from '@/components/Booking';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-clinic-gray hover:text-black transition-colors mb-8 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-clinic-gray mb-8 font-serif">Book Your Appointment</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <Booking />
          </div>
        </div>
      </div>
      
      <footer className="bg-clinic-gray text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 MindfulCare Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
