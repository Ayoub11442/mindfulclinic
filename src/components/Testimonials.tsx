
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from '@/hooks/use-mobile';
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  avatar: string;
  role: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi | null>(null);

  const testimonials: Testimonial[] = [
    {
      name: "James Wilson",
      avatar: "/avatars/james-wilson.jpg",
      role: "Patient for 3 years",
      text: "The care I received at MindfulCare was exceptional. The staff was professional and caring, making me feel comfortable throughout my visit. I especially appreciate Dr. Johnson's thoroughness in explaining my treatment options.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      avatar: "/avatars/maria-garcia.jpg",
      role: "New Patient",
      text: "Dr. Johnson is amazing! She took the time to listen to my concerns and provided clear explanations. The clinic is modern, clean, and the appointment scheduling system is very convenient. Highly recommend this clinic.",
      rating: 5,
    },
    {
      name: "David Thompson",
      avatar: "/avatars/david-thompson.jpg",
      role: "Patient for 5 years",
      text: "Outstanding dental care from Dr. Martinez. The staff is friendly and professional, and they were able to accommodate my busy schedule. The clinic is modern, clean, and the appointment scheduling system is very convenient.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      avatar: "/avatars/sarah-chen.jpg",
      role: "Regular Patient",
      text: "I've been coming to MindfulCare for years and the quality of care is consistently excellent. They've helped me manage my chronic condition with personalized treatment plans and genuine compassion.",
      rating: 5,
    }
  ];

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
    setActiveIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!api) return;
    
    // Auto slide every 5 seconds
    const autoSlideInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);
    
    return () => clearInterval(autoSlideInterval);
  }, [api]);

  // Update the active index when the carousel slides
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      setActiveIndex(currentIndex);
    };
    
    api.on("select", onSelect);
    
    // Cleanup
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-clinic-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-clinic-gray font-serif">What Our Patients Say</h2>
          <div className="w-24 h-1 bg-clinic-blue/50 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Read genuine reviews from our patients who've experienced our care firsthand
          </p>
        </div>
        
        <div className="relative px-4" data-aos="fade-up" data-aos-delay="200">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="h-full transform transition-transform duration-300 hover:scale-105">
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                      <div className="p-6 flex flex-col h-full">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 border-2 border-clinic-blue/20">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4">
                              <div className="font-medium text-clinic-gray">{testimonial.name}</div>
                              <div className="text-sm text-gray-500">{testimonial.role}</div>
                            </div>
                          </div>
                          <Quote className="h-8 w-8 text-clinic-blue/30" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-600 italic">{testimonial.text}</p>
                        </div>
                        <div className="text-yellow-400 mt-4 flex items-center">
                          {Array(testimonial.rating).fill(0).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {!isMobile && (
              <>
                <CarouselPrevious className="left-0 bg-white shadow-md hover:bg-clinic-blue hover:text-white transition-colors" />
                <CarouselNext className="right-0 bg-white shadow-md hover:bg-clinic-blue hover:text-white transition-colors" />
              </>
            )}
          </Carousel>

          {/* Carousel Dots - Improved Accessibility */}
          <div className="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Testimonials navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-clinic-blue w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === activeIndex}
                role="tab"
                tabIndex={index === activeIndex ? 0 : -1}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
          <Button 
            variant="outline" 
            className="border-clinic-gray text-clinic-gray hover:bg-clinic-gray hover:text-white transition-colors duration-300 group"
            onClick={() => window.location.href = '/testimonials'}
          >
            View All Testimonials
            <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
