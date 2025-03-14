
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Processimo has revolutionized how our team works. The AI agents handle routine tasks while we focus on strategy. Our productivity has increased by at least 40%.",
    author: "Sarah Johnson",
    title: "CTO, TechVision",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The multi-agent workflows have transformed our research capabilities. We're analyzing data and generating insights faster than ever before.",
    author: "Michael Chen",
    title: "Research Director, InnovateLabs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Implementing Processimo's AI agents for customer support has reduced our response time by 65% while maintaining high quality interactions.",
    author: "Elena Rodriguez",
    title: "Customer Experience Lead, GlobalServe",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The ease of training AI agents with our proprietary data has given us a competitive edge. Our analysis workflow now runs 24/7 without human intervention.",
    author: "David Park",
    title: "Head of Analytics, DataDriven",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by innovative professionals"
          subtitle="Hear from industry leaders who have transformed their businesses with Processimo."
        />

        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center animate-float">
            <Quote className="w-6 h-6 text-primary" />
          </div>

          <div className="relative overflow-hidden bg-background border border-border rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="transition-all duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-opacity duration-500 absolute top-0 left-0 right-0 p-8 md:p-12",
                    index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 text-balance">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-primary scale-100" : "bg-secondary scale-75 hover:scale-90"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
