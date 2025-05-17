
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Apple, Carrot, Heart, MessageCircle, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "personal-nutrition",
      title: "Personalized Nutrition Plans",
      description: "Custom nutrition plans tailored to your unique body, lifestyle, health concerns, and goals.",
      icon: <Apple size={32} />,
      benefits: [
        "Assessment of your current health status and nutritional needs",
        "Customized meal plans based on your preferences and dietary restrictions",
        "Nutrition education to help you understand the 'why' behind recommendations",
        "Ongoing adjustments to optimize your results",
        "Regular check-ins to monitor progress and provide support"
      ],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "nutrition-green"
    },
    {
      id: "wellness-coaching",
      title: "Wellness Coaching",
      description: "Holistic approach to health that addresses nutrition alongside sleep, stress, activity, and other lifestyle factors.",
      icon: <Heart size={32} />,
      benefits: [
        "Comprehensive lifestyle assessment",
        "Goal-setting and accountability",
        "Behavioral change strategies",
        "Stress management techniques",
        "Sleep optimization guidance"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "nutrition-teal"
    },
    {
      id: "meal-planning",
      title: "Meal Planning",
      description: "Practical meal plans and recipes designed to fit your schedule, budget, and cooking skills.",
      icon: <Carrot size={32} />,
      benefits: [
        "Weekly meal plans with easy-to-follow recipes",
        "Grocery shopping lists",
        "Batch cooking guidance",
        "Budget-friendly options",
        "Family-friendly meal ideas"
      ],
      image: "https://images.unsplash.com/photo-1532768778661-1b347c5f5517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      color: "nutrition-orange"
    },
    {
      id: "virtual-consultations",
      title: "Virtual Consultations",
      description: "Convenient online sessions with our nutrition experts from the comfort of your home.",
      icon: <MessageCircle size={32} />,
      benefits: [
        "Flexible scheduling",
        "No commute time",
        "Same quality care as in-person sessions",
        "Screen sharing for educational resources",
        "Secure and private platform"
      ],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "nutrition-blue"
    },
    {
      id: "group-programs",
      title: "Group Programs",
      description: "Join our supportive nutrition groups for education, accountability, and community.",
      icon: <Users size={32} />,
      benefits: [
        "Cost-effective nutrition guidance",
        "Community support and motivation",
        "Shared learning experiences",
        "Structured programs with clear goals",
        "Healthy recipe exchanges"
      ],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "nutrition-green"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Our Nutrition Services"
          subtitle="Discover our range of personalized nutrition services designed to help you achieve your health goals."
          ctaText="Book a Consultation"
          ctaLink="/consultation"
          image="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          showWave={false}
        />

        {/* Services */}
        <section className="bg-white py-16">
          <div className="container-custom">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index !== 0 ? "pt-20 mt-20 border-t border-gray-100" : ""
                }`}
              >
                {/* Image (alternating sides) */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`absolute -inset-1 bg-${service.color}/20 rounded-lg blur-xl opacity-70`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto rounded-lg shadow-xl relative z-10"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`bg-${service.color}/10 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                    <div className={`text-${service.color}`}>{service.icon}</div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Benefits:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`bg-${service.color}/10 rounded-full p-1 mr-3 mt-1`}>
                          <svg className={`w-4 h-4 text-${service.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`bg-${service.color} hover:bg-${service.color}/90`}>
                    <Link to="/consultation">Book This Service</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-nutrition-light-blue/20 py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our services? Find answers to common questions below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">How long does it take to see results?</h3>
                <p className="text-gray-700">
                  Results vary depending on your starting point, goals, and consistency. Many clients notice improvements in energy and well-being within the first 2-3 weeks. Physical changes may take a bit longer, typically 4-8 weeks of consistent implementation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Do you work with specific medical conditions?</h3>
                <p className="text-gray-700">
                  Yes, our team includes specialists in various health conditions including diabetes, heart disease, digestive disorders, hormone imbalances, and food allergies/intolerances. We coordinate with your healthcare providers when needed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Will I have to give up all my favorite foods?</h3>
                <p className="text-gray-700">
                  Absolutely not! We believe in sustainable nutrition, which means finding ways to include foods you enjoy while balancing overall nutritional needs. Our approach isn't about restriction but rather education and mindful choices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">What happens in the first consultation?</h3>
                <p className="text-gray-700">
                  The initial consultation includes a comprehensive assessment of your health history, current diet, lifestyle, and goals. We'll discuss your relationship with food, any challenges, and begin outlining a personalized approach to help you achieve your goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">How are virtual consultations conducted?</h3>
                <p className="text-gray-700">
                  Virtual consultations take place via a secure video platform. You'll receive a link before your appointment. The session follows the same format as in-person meetings, with the ability to share screens for reviewing materials or demonstrating techniques.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Do you accept insurance?</h3>
                <p className="text-gray-700">
                  Some nutrition services may be covered by insurance, especially those related to medical conditions. We provide the necessary documentation for you to submit to your insurance for possible reimbursement. Contact us to discuss your specific situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-nutrition-green to-nutrition-teal text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Take the first step toward better health and book your consultation today.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-nutrition-green">
              <Link to="/consultation">Book a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
