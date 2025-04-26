
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <Booking />
      <Contact />
    </Layout>
  );
};

export default Index;
