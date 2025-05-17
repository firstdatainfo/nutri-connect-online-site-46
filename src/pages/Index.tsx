
import { Apple, Carrot, MessageCircle, Users } from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Personalized Nutrition Plans",
      description: "Custom nutrition plans designed for your body, lifestyle, and health goals.",
      icon: <Apple size={24} />,
      link: "/services",
      color: "nutrition-green",
    },
    {
      title: "Wellness Coaching",
      description: "Ongoing support and coaching to help you maintain healthy habits for life.",
      icon: <Users size={24} />,
      link: "/services",
      color: "nutrition-blue",
    },
    {
      title: "Meal Planning",
      description: "Practical meal plans and recipes that fit your schedule and preferences.",
      icon: <Carrot size={24} />,
      link: "/services",
      color: "nutrition-orange",
    },
    {
      title: "Online Consultations",
      description: "Convenient virtual appointments with our nutrition experts from anywhere.",
      icon: <MessageCircle size={24} />,
      link: "/consultation",
      color: "nutrition-teal",
    },
  ];

  const testimonials = [
    {
      quote: "Working with NutriVida completely changed my relationship with food. I've not only lost weight but also gained energy and confidence.",
      author: "Maria Silva",
      role: "Client - Weight Management",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      quote: "The personalized approach to my nutrition needs has helped me manage my diabetes in a way I never thought possible.",
      author: "Carlos Santos",
      role: "Client - Health Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      quote: "As an athlete, I needed specific nutritional guidance. The team at NutriVida provided exactly what I needed to improve my performance.",
      author: "Ana Martins",
      role: "Client - Sports Nutrition",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Transform Your Health Through Nutrition"
          subtitle="Personalized nutrition plans, expert guidance, and ongoing support to help you achieve your health goals."
          ctaText="Get Started Today"
          ctaLink="/consultation"
          image="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        />

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive nutrition and wellness services tailored to meet your unique needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="border-nutrition-green text-nutrition-green hover:bg-nutrition-green/10">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding bg-nutrition-light-blue/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1513&q=80"
                  alt="About NutriVida"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NutriVida?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At NutriVida, we believe that good nutrition is the foundation of a healthy and fulfilling life. Our team of certified nutritionists and wellness experts are dedicated to providing personalized guidance and support to help you achieve your health goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Personalized Approach</h3>
                      <p className="text-gray-600">We recognize that everyone's nutritional needs are unique, and we create customized plans that fit your lifestyle and goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Expert Guidance</h3>
                      <p className="text-gray-600">Our team consists of certified nutritionists with years of experience in various specialties.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Ongoing Support</h3>
                      <p className="text-gray-600">We provide continuous guidance and adjustments to ensure you stay on track with your health journey.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our clients who have transformed their health and lives through our nutrition programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-nutrition-green to-nutrition-teal text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Take the first step towards a healthier you. Book a consultation with one of our nutrition experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-nutrition-green">
                <Link to="/consultation">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/community">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
