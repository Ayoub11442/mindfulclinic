import { Home } from "lucide-react";

const NotFound = () => {
  // Immediately reference pathname without state
  const pathname = window.location.pathname;
  
  // Log the error
  console.error("404 Error:", pathname);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg animate-fade-in">
        {/* Animated 404 Icon */}
        <div className="relative h-32 mb-6 flex items-center justify-center">
          <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 animate-pulse">4</span>
          <div className="w-20 h-20 mx-2 rounded-full border-4 border-orange-500 animate-spin-slow flex items-center justify-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full absolute top-2"></div>
          </div>
          <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 animate-pulse">4</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find 
          <code className="mx-1 px-2 py-1 bg-gray-100 rounded text-red-500 font-mono text-sm">
            {pathname}
          </code>
        </p>
        
        <a 
          href="/" 
          className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <Home 
            size={20} 
            className="transform transition-all duration-300 group-hover:rotate-12" 
          />
          <span>Return to Home</span>
        </a>
        
        <style>{`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default NotFound;
