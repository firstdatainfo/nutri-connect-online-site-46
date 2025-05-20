
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

// Pre-loading images for optimal performance
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    [
      "/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png",
      "/lovable-uploads/72e02af0-d74d-4ed9-930a-2d5f6fcdcae0.png",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80"
    ].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });
}

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
