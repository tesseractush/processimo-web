
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Timeline from "@/components/home/Timeline";
import Integration from "@/components/home/Integration";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout isHomePage={true}>
      <Hero />
      <Features />
      <Timeline />
      <Integration />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
