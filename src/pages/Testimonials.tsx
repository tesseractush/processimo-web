
import { Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

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
  {
    quote: "The collaboration features between AI agents have streamlined our entire product development cycle. We've reduced time-to-market by over 30%.",
    author: "Amanda Chen",
    title: "Product Manager, InnovateX",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "InnovateX",
    industry: "Product Development"
  },
  {
    quote: "Processimo's AI agents have transformed how we handle compliance and documentation. What used to take days now happens in minutes with perfect accuracy.",
    author: "Daniel Miller",
    title: "Compliance Officer, LegalEdge",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    company: "LegalEdge",
    industry: "Legal"
  },
];

const industryFilters = [
  "All", 
  "Software Development", 
  "Research & Development", 
  "Customer Service", 
  "Data Analytics", 
  "Marketing", 
  "Finance",
  "Product Development",
  "Legal"
];

const TestimonialsPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6 bg-secondary/30">
        <div className="container mx-auto">
          <SectionHeading
            badge="Success Stories"
            title="Hear from our customers"
            subtitle="Industry leaders share how Processimo's AI agents have transformed their businesses and accelerated their growth."
          />
          
          <div className="max-w-7xl mx-auto mt-16">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="card-hover border-border/30 bg-card/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 pt-6">
                    <div className="mb-4 flex justify-between items-start">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs bg-secondary/80 px-2 py-1 rounded-full">
                        {testimonial.industry}
                      </span>
                    </div>
                    
                    <blockquote className="text-base font-medium mb-6 line-clamp-4 text-balance">
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
                        <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
