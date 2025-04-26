
import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MoveRight, Phone, Mail } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqCategories = [
  { id: 'all', name: 'All Questions' },
  { id: 'appointments', name: 'Appointments' },
  { id: 'services', name: 'Services & Treatments' },
  { id: 'insurance', name: 'Insurance & Billing' },
  { id: 'policies', name: 'Policies' },
  { id: 'covid', name: 'COVID-19' },
];

const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment through several methods: using our online booking system, calling our office during business hours at (555) 123-4567, or visiting our clinic in person. For new patients, we recommend scheduling at least a week in advance for non-urgent matters.',
    category: 'appointments'
  },
  {
    id: 'faq-2',
    question: 'What should I bring to my first appointment?',
    answer: 'For your first visit, please bring your photo ID, insurance card, completed new patient forms (available for download on our website), a list of current medications, and any relevant medical records or test results from previous healthcare providers.',
    category: 'appointments'
  },
  {
    id: 'faq-3',
    question: 'How early should I arrive for my appointment?',
    answer: 'Please arrive 15 minutes before your scheduled appointment time. This allows sufficient time for check-in procedures, completing any necessary paperwork, and updating your information if needed. For new patients, we recommend arriving 20-30 minutes early.',
    category: 'appointments'
  },
  {
    id: 'faq-4',
    question: 'What is your cancellation policy?',
    answer: 'We request at least 24 hours' notice for appointment cancellations. Late cancellations (less than 24 hours) or no-shows may result in a fee. We understand that emergencies happen, so please contact us as soon as possible if you cannot make your appointment.',
    category: 'policies'
  },
  {
    id: 'faq-5',
    question: 'Do you accept my insurance?',
    answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Medicare, and Medicaid. Please contact our office with your specific insurance information to verify coverage before your appointment.',
    category: 'insurance'
  },
  {
    id: 'faq-6',
    question: 'How do I pay my bill?',
    answer: 'We offer several payment options including in-person payments at our office, online bill pay through our patient portal, or by mail. We accept cash, personal checks, and all major credit cards. Payment plans may be available for qualifying patients.',
    category: 'insurance'
  },
  {
    id: 'faq-7',
    question: 'What specialist services do you offer?',
    answer: 'Our clinic offers a range of specialist services including cardiology, neurology, dermatology, orthopedics, gynecology, gastroenterology, and endocrinology. Each department is staffed by board-certified specialists with extensive experience in their respective fields.',
    category: 'services'
  },
  {
    id: 'faq-8',
    question: 'Do you provide telehealth appointments?',
    answer: 'Yes, we offer telehealth appointments for many non-emergency services and follow-up consultations. These virtual visits are conducted through our secure, HIPAA-compliant video platform and are covered by most insurance plans. Contact us to determine if your concern is appropriate for telehealth.',
    category: 'services'
  },
  {
    id: 'faq-9',
    question: 'How do I refill my prescription?',
    answer: 'The most efficient way to request a prescription refill is through our patient portal. Alternatively, you can contact your pharmacy directly and they will submit a refill request to our office. Please allow 48-72 hours for all refill requests to be processed.',
    category: 'services'
  },
  {
    id: 'faq-10',
    question: 'What COVID-19 safety measures do you have in place?',
    answer: 'We maintain strict safety protocols including enhanced cleaning procedures, social distancing in waiting areas, mandatory masking for all staff and patients, temperature screening upon entry, and separate areas for patients with respiratory symptoms. We continuously update our protocols based on CDC and local health department guidelines.',
    category: 'covid'
  },
  {
    id: 'faq-11',
    question: 'Do you offer COVID-19 testing and vaccination?',
    answer: 'Yes, we offer both diagnostic and antibody COVID-19 testing. We also provide COVID-19 vaccinations in accordance with current eligibility guidelines. Please call our office for the most up-to-date information on availability and scheduling.',
    category: 'covid'
  },
  {
    id: 'faq-12',
    question: 'How do I access my medical records?',
    answer: 'You can access your medical records through our secure patient portal. For records not available on the portal or if you need official copies, please submit a medical records request form to our office. Processing may take 5-7 business days, and fees may apply for extensive records.',
    category: 'policies'
  },
  {
    id: 'faq-13',
    question: 'What should I do in case of a medical emergency?',
    answer: 'If you are experiencing a life-threatening emergency, call 911 or go to the nearest emergency room immediately. For urgent but non-life-threatening issues during office hours, call our office for same-day appointments. After hours, our answering service will direct you to the on-call provider.',
    category: 'policies'
  },
  {
    id: 'faq-14',
    question: 'Do you have after-hours or weekend appointments?',
    answer: 'We offer extended hours on Tuesdays and Thursdays until 7:00 PM, and limited Saturday morning appointments (9:00 AM - 1:00 PM). These times are reserved for patients who cannot attend during regular business hours and for urgent care needs.',
    category: 'appointments'
  },
  {
    id: 'faq-15',
    question: 'How are lab results communicated to patients?',
    answer: 'Lab results are typically available through our patient portal within 2-5 business days. Critical or abnormal results will prompt a call from our clinical staff. For complex results that require discussion, your provider may schedule a follow-up appointment.',
    category: 'services'
  }
];

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = faqItems.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const highlightText = (text: string, term: string) => {
    if (!term.trim()) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span class="bg-yellow-100">$1</span>');
  };

  return (
    <Layout>
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our services and policies"
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Tabs */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-2 pb-2 flex-nowrap">
              {faqCategories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap ${activeCategory === category.id ? 'bg-clinic-blue hover:bg-clinic-blue/90' : ''}`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="mb-12">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-clinic-gray hover:text-clinic-blue py-4">
                    <span dangerouslySetInnerHTML={{ __html: highlightText(faq.question, searchTerm) }} />
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    <div dangerouslySetInnerHTML={{ __html: highlightText(faq.answer, searchTerm) }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-2">No questions match your search.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Still Have Questions */}
          <div className="bg-clinic-blue/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-clinic-gray font-serif mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Can't find the answer you're looking for? Please contact our support team for more information
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-clinic-gray hover:bg-black text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
              <Button className="bg-clinic-gray hover:bg-black text-white">
                <Mail className="mr-2 h-4 w-4" />
                Email Support
              </Button>
              <Button 
                variant="outline" 
                className="text-clinic-gray border-clinic-gray hover:bg-clinic-gray hover:text-white"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
                <MoveRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FaqPage;
