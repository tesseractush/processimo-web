
import { Brain, Users, FileType, Clock, Database, Globe, Shield, Settings, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "Specialized AI Agents",
    description: "Build custom AI agents for thousands of tasks with your own instructions and context. Each agent can be trained for specific business functions.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Users,
    title: "Multi-Agent Collaboration",
    description: "Connect multiple agents into a workflow to solve complex tasks. Agents can collaborate, share information, and learn from each other.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: FileType,
    title: "Multi-Format Training",
    description: "Train your AI agents with any kind of data including PDF, Word, PowerPoint, Excel, Audio, Video, YouTube, and Websites.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Clock,
    title: "Autonomous Workflows",
    description: "Create to-do lists for workflows and let them run on autopilot. Schedule tasks and let your agents work while you focus on other priorities.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Database,
    title: "Robust Integrations",
    description: "Connect to Google Drive, Notion, Dropbox, ARXIV, Wikipedia, Google, and more. Import data directly from your favorite tools.",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: Globe,
    title: "Easy Sharing",
    description: "Share your workflows with a public link or embed them on your website. Collaborate with team members and clients effortlessly.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Benefit from end-to-end encryption, role-based access control, and compliance with industry standards to keep your data secure.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Settings,
    title: "Advanced Customization",
    description: "Fine-tune your agents with advanced parameters and configurations. Create reusable templates for common workflows.",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: Zap,
    title: "40x Productivity Boost",
    description: "Experience dramatic improvements in productivity by automating repetitive tasks and complex processes with intelligent AI agents.",
    color: "bg-teal-500/10 text-teal-500",
  },
];

const FeaturesPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Features"
            title="Powerful features to transform your business"
            subtitle="Discover how Processimo's comprehensive features can help you build, train, and deploy AI agents to revolutionize your workflows."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.color)}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesPage;
