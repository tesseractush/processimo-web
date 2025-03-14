
import { useState } from "react";
import { Check, HelpCircle, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const planFeatures = {
  starter: [
    "5 AI agents",
    "1 multi-agent workflow",
    "Standard AI models only",
    "3 file uploads per agent (5MB max)",
    "Basic integrations",
    "Community support",
    "24-hour workflow runs"
  ],
  professional: [
    "25 AI agents",
    "10 multi-agent workflows",
    "All AI models except GPT-4",
    "20 file uploads per agent (25MB max)",
    "All integrations",
    "Priority email support",
    "72-hour workflow runs",
    "Team collaboration",
    "Workflow templates"
  ],
  enterprise: [
    "Unlimited AI agents",
    "Unlimited multi-agent workflows",
    "All AI models including GPT-4",
    "Unlimited file uploads (100MB max)",
    "All integrations + custom connectors",
    "Dedicated account manager",
    "Continuous workflow runs",
    "Advanced team permissions",
    "Custom workflow templates",
    "Single sign-on (SSO)",
    "Advanced security features",
    "Custom AI model training"
  ]
};

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Pricing"
            title="Choose the right plan for your needs"
            subtitle="Scalable plans designed for individuals and teams of all sizes. Start free and upgrade as you grow."
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            {/* Billing toggle */}
            <div className="flex justify-center items-center mb-12">
              <div className="flex items-center bg-secondary rounded-full p-1">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    billingCycle === 'monthly'
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center",
                    billingCycle === 'annual'
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Annual
                  <span className="ml-1 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full flex items-center">
                    -20%
                  </span>
                </button>
              </div>
            </div>
            
            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-background border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-soft animate-fade-in">
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-semibold mb-2">Starter</h3>
                  <p className="text-muted-foreground mb-4">Perfect for individuals getting started with AI</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{billingCycle === 'monthly' ? '$29' : '$23'}</span>
                    <span className="text-muted-foreground ml-1">/ month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${23 * 12}/year)
                    </p>
                  )}
                  <button className="w-full mt-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {planFeatures.starter.map((feature, index) => (
                      <li key={index} className="flex">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-background border-2 border-primary rounded-xl overflow-hidden shadow-soft relative transition-all duration-300 hover:shadow-lg animate-fade-in animation-delay-100">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-semibold mb-2">Professional</h3>
                  <p className="text-muted-foreground mb-4">Ideal for professionals and small teams</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{billingCycle === 'monthly' ? '$79' : '$63'}</span>
                    <span className="text-muted-foreground ml-1">/ month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${63 * 12}/year)
                    </p>
                  )}
                  <button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {planFeatures.professional.map((feature, index) => (
                      <li key={index} className="flex">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-background border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-soft animate-fade-in animation-delay-200">
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-4">Advanced features for larger organizations</p>
                  <div className="flex items-end">
                    <span className="text-2xl font-bold">Custom pricing</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tailored to your specific needs
                  </p>
                  <button className="w-full mt-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg font-medium transition-colors">
                    Contact Sales
                  </button>
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {planFeatures.enterprise.map((feature, index) => (
                      <li key={index} className="flex">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* FAQs section */}
            <div className="mt-24">
              <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Can I upgrade or downgrade my plan?</h4>
                  <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing cycle.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Is there a free trial?</h4>
                  <p className="text-muted-foreground">Yes, we offer a 14-day free trial for all plans with no credit card required.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">What payment methods do you accept?</h4>
                  <p className="text-muted-foreground">We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal for business accounts.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">How are agent minutes calculated?</h4>
                  <p className="text-muted-foreground">Agent minutes are calculated based on the time your AI agents spend actively processing tasks and workflows.</p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground">
                  Have more questions? <a href="/contact" className="text-primary hover:underline">Contact our sales team</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
