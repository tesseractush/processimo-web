
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

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
  {
    quote: "Our marketing team has seen incredible results using Processimo. We can now create, analyze, and optimize campaigns with unprecedented speed.",
    author: "Jennifer Lee",
    title: "Marketing Director, BrandForward",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "As a financial advisor, time is crucial. Processimo's AI agents have automated our report generation and analysis, saving us hundreds of hours per month.",
    author: "Robert Williams",
    title: "Principal, FinancePro Advisors",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
];

const Testimonials = () => {
  // For mobile slider
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by innovative professionals"
          subtitle="Hear from industry leaders who have transformed their businesses with Processimo."
        />

        {/* Desktop Cards Grid - Hidden on mobile */}
        <div className="mt-12 hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-border/30 bg-card/50">
              <CardContent className="p-6 pt-6">
                <div className="mb-4 flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <blockquote className="text-base font-medium mb-6 min-h-[100px] text-balance">
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel - Only visible on mobile */}
        <div className="mt-12 md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-border/30 bg-card/50">
                    <CardContent className="p-6 pt-6">
                      <div className="mb-4 flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          <Quote className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <blockquote className="text-base font-medium mb-6 text-balance">
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
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
