
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import WhyChooseUs from '@/components/WhyChooseUs';
import BlogPreviews from '@/components/BlogPreviews';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <BlogPreviews />
      <Booking />
      <Contact />
    </Layout>
  );
};

export default Index;
