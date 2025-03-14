
import React from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";

const ResourcesPage = () => {
  return (
    <Layout>
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionHeading
            badge="Resources"
            title="Helpful resources"
            subtitle="Find guides, documentation, and other resources to help you get the most out of Processimo."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <p className="text-lg text-center">
              This page is under construction. Check back soon for helpful resources!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
