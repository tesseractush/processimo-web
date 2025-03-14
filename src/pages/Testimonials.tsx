
import { Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Processimo has revolutionized how our team works. The AI agents handle routine tasks while we focus on strategy. Our productivity has increased by at least 40%.",
    author: "Sarah Johnson",
    title: "CTO, TechVision",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "TechVision",
    industry: "Software Development"
  },
  {
    quote: "The multi-agent workflows have transformed our research capabilities. We're analyzing data and generating insights faster than ever before.",
    author: "Michael Chen",
    title: "Research Director, InnovateLabs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "InnovateLabs",
    industry: "Research & Development"
  },
  {
    quote: "Implementing Processimo's AI agents for customer support has reduced our response time by 65% while maintaining high quality interactions.",
    author: "Elena Rodriguez",
    title: "Customer Experience Lead, GlobalServe",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "GlobalServe",
    industry: "Customer Service"
  },
  {
    quote: "The ease of training AI agents with our proprietary data has given us a competitive edge. Our analysis workflow now runs 24/7 without human intervention.",
    author: "David Park",
    title: "Head of Analytics, DataDriven",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "DataDriven",
    industry: "Data Analytics"
  },
  {
    quote: "Our marketing team has seen incredible results using Processimo. We can now create, analyze, and optimize campaigns with unprecedented speed.",
    author: "Jennifer Lee",
    title: "Marketing Director, BrandForward",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "BrandForward",
    industry: "Marketing"
  },
  {
    quote: "As a financial advisor, time is crucial. Processimo's AI agents have automated our report generation and analysis, saving us hundreds of hours per month.",
    author: "Robert Williams",
    title: "Principal, FinancePro Advisors",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "FinancePro Advisors",
    industry: "Finance"
  },
];

const industryFilters = [
  "All", 
  "Software Development", 
  "Research & Development", 
  "Customer Service", 
  "Data Analytics", 
  "Marketing", 
  "Finance"
];

const TestimonialsPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Success Stories"
            title="Hear from our customers"
            subtitle="Industry leaders share how Processimo's AI agents have transformed their businesses and accelerated their growth."
          />
          
          <div className="max-w-5xl mx-auto mt-16">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {industryFilters.map((filter, index) => (
                <button
                  key={index}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    filter === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-soft transition-all duration-300 relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="pt-4">
                    <blockquote className="text-lg font-medium mb-6 text-balance">
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
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{testimonial.company}</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {testimonial.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
