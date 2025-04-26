
import { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const Layout = ({ 
  children, 
  title = 'MindfulCare Clinic - Professional Healthcare Services',
  description = 'MindfulCare Clinic provides professional healthcare services with a personal touch. Book appointments online, meet our doctors, and learn about our specialized services.',
  keywords = 'healthcare, medical clinic, doctors, appointments, health services, medical care',
  canonicalUrl
}: LayoutProps) => {
  
  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Structured Data for Medical Clinic */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "MindfulCare Clinic",
            "url": "https://mindfulcare.clinic",
            "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
            "description": "${description}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Medical Center Drive",
              "addressLocality": "Healthcare City",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "telephone": "+1-555-123-4567",
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-13:00"
            ]
          }
        `}</script>
      </Helmet>
      
      <Navigation />
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <Footer />
      
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="bg-clinic-gray text-white p-3 absolute -top-40 left-0 z-50 focus:top-0 transition-all"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-clinic-gray text-white shadow-lg hover:bg-black transition-colors z-40"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Layout;
