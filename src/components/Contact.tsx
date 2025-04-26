
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-clinic-gray font-serif">Contact Us</h2>
          <p className="mt-4 text-gray-500">Get in touch with us for any inquiries</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-clinic-gray flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-clinic-gray">Location</h3>
                  <p className="text-gray-500">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-clinic-gray flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-clinic-gray">Opening Hours</h3>
                  <p className="text-gray-500">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-clinic-gray flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-clinic-gray">Phone</h3>
                  <p className="text-gray-500">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-clinic-gray flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-clinic-gray">Email</h3>
                  <p className="text-gray-500">info@mindfulcare.clinic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
