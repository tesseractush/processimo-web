
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is Processimo?",
        answer: "Processimo is a platform that allows you to design, build, and deploy custom AI agents and multi-agent workflows. It helps businesses automate tasks, process information, and collaborate on complex projects, resulting in up to 40x greater productivity."
      },
      {
        question: "How do I create my first AI agent?",
        answer: "After signing up, you can create your first AI agent by clicking the 'New Agent' button in your dashboard. Follow the guided setup process to define your agent's purpose, train it with relevant data, and set its parameters. Our intuitive interface makes it easy to create specialized agents without any coding."
      },
      {
        question: "Do I need technical knowledge to use Processimo?",
        answer: "No, Processimo is designed to be user-friendly for both technical and non-technical users. Our intuitive interface guides you through the process of creating, training, and deploying AI agents without requiring coding skills or AI expertise."
      }
    ]
  },
  {
    category: "Features & Capabilities",
    questions: [
      {
        question: "What types of data can I use to train my AI agents?",
        answer: "Processimo supports a wide range of data formats including PDFs, Word documents, PowerPoint presentations, Excel spreadsheets, audio files, video content, YouTube videos, and websites. You can upload these files directly or connect through integrations to train your agents with specialized knowledge."
      },
      {
        question: "How do multi-agent workflows function?",
        answer: "Multi-agent workflows allow multiple specialized AI agents to collaborate on complex tasks. Each agent handles a specific part of the process based on its expertise, and they communicate with each other to pass information and results. You can design these workflows using our visual workflow builder, specifying the sequence of operations and how agents interact."
      },
      {
        question: "Which AI models does Processimo support?",
        answer: "Processimo supports leading AI models from providers including OpenAI, Anthropic, Google (Gemini), Meta, and Mistral. The available models depend on your subscription plan, with higher tier plans providing access to more advanced models like GPT-4."
      }
    ]
  },
  {
    category: "Billing & Pricing",
    questions: [
      {
        question: "How does Processimo's pricing work?",
        answer: "Processimo offers tiered subscription plans (Starter, Professional, and Enterprise) with monthly or annual billing options. Each plan includes a specific number of AI agents, workflows, and features. Annual subscriptions provide a 20% discount compared to monthly billing."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial that gives you access to the Professional plan features. No credit card is required to start your trial, and you can upgrade to a paid plan at any time to continue using the service."
      },
      {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. When upgrading, the new features become available immediately, with prorated billing for the remainder of your current cycle. When downgrading, changes take effect at the next billing cycle."
      }
    ]
  },
  {
    category: "Integrations & Security",
    questions: [
      {
        question: "Which third-party tools can I integrate with Processimo?",
        answer: "Processimo integrates with popular productivity and data storage tools including Google Drive, Notion, Dropbox, ARXIV, Wikipedia, and Google. Enterprise plans also support custom API integrations for specialized business tools and internal systems."
      },
      {
        question: "How secure is my data on Processimo?",
        answer: "Processimo takes data security seriously. We implement end-to-end encryption, strict access controls, and regular security audits. Your data is only used to train your specific AI agents and is never shared with third parties. Enterprise plans include additional security features such as SSO, audit logs, and custom data retention policies."
      },
      {
        question: "Can I export my data and workflows?",
        answer: "Yes, Processimo allows you to export your agent configurations, workflow designs, and processed data. This ensures you always have access to your intellectual property and can maintain business continuity."
      }
    ]
  }
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  const filteredFaqs = searchQuery 
    ? faqs.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqs;

  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Processimo and how it can help transform your business."
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            {/* Search bar */}
            <div className="relative mb-12">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            
            {searchQuery ? (
              // Search results
              <div className="space-y-8">
                {filteredFaqs.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div 
                          key={faqIndex}
                          className="border border-border rounded-lg overflow-hidden bg-background animate-fade-in"
                        >
                          <button
                            onClick={() => toggleQuestion(faq.question)}
                            className="w-full flex justify-between items-center p-5 text-left"
                          >
                            <span className="font-medium">{faq.question}</span>
                            <ChevronDown className={cn(
                              "w-5 h-5 transition-transform duration-200",
                              openQuestions[faq.question] ? "transform rotate-180" : ""
                            )} />
                          </button>
                          {openQuestions[faq.question] && (
                            <div className="p-5 pt-0 border-t border-border">
                              <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Category tabs and questions
              <div>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {faqs.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category.category)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all",
                        activeCategory === category.category
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      )}
                    >
                      {category.category}
                    </button>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {faqs.find(cat => cat.category === activeCategory)?.questions.map((faq, index) => (
                    <div 
                      key={index}
                      className="border border-border rounded-lg overflow-hidden bg-background animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <button
                        onClick={() => toggleQuestion(faq.question)}
                        className="w-full flex justify-between items-center p-5 text-left"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          openQuestions[faq.question] ? "transform rotate-180" : ""
                        )} />
                      </button>
                      {openQuestions[faq.question] && (
                        <div className="p-5 pt-0 border-t border-border">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Contact support */}
            <div className="mt-12 p-6 border border-border rounded-lg bg-background text-center">
              <h3 className="text-lg font-medium mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help. Reach out for personalized assistance.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
