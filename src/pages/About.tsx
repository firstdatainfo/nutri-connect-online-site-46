
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Maria Costa",
      title: "Chief Nutritionist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Dr. Costa has over 15 years of experience in clinical nutrition and holds a Ph.D. in Nutritional Sciences.",
    },
    {
      name: "João Silva",
      title: "Sports Nutritionist",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "João specializes in sports nutrition and has worked with professional athletes and sports teams across the country.",
    },
    {
      name: "Ana Santos",
      title: "Wellness Coach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      bio: "Ana is a certified wellness coach who helps clients integrate healthy nutrition habits into their everyday lives.",
    },
    {
      name: "Carlos Mendes",
      title: "Dietitian",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Carlos specializes in medical nutrition therapy for chronic disease management and weight loss.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="About NutriVida"
          subtitle="Get to know our mission, our team, and our approach to transforming health through nutrition."
          showWave={false}
          image="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        />

        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  NutriVida was founded in 2010 with a simple mission: to make personalized nutrition accessible to everyone. What started as a small practice has grown into a comprehensive nutrition and wellness center with a team of dedicated professionals.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our founder, Dr. Maria Costa, recognized that many people struggled to navigate nutrition information and needed expert guidance to achieve their health goals. She assembled a team of nutritionists and wellness experts who share her passion for helping others transform their lives through proper nutrition.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we continue to expand our services and reach, helping individuals and families across the country achieve better health through personalized nutrition plans, education, and ongoing support.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-nutrition-green to-nutrition-teal rounded-lg blur opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1452788311386-0f4d8d72907d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                  alt="Our story" 
                  className="relative rounded-lg shadow-lg z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="section-padding bg-nutrition-light-blue/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are guided by a commitment to excellence, integrity, and compassion in everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-nutrition-green/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Personalization</h3>
                <p className="text-gray-600 text-center">
                  We believe that nutrition is not one-size-fits-all. Every plan we create is tailored to the individual's unique needs, preferences, and goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-nutrition-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-nutrition-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Evidence-Based</h3>
                <p className="text-gray-600 text-center">
                  Our recommendations are grounded in the latest scientific research and nutritional science, not fads or trends.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-nutrition-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-nutrition-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Supportive Community</h3>
                <p className="text-gray-600 text-center">
                  We foster a community of support and accountability to help our clients achieve lasting success in their health journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team of certified nutritionists and wellness experts are dedicated to helping you achieve your health goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-nutrition-green font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="section-padding bg-nutrition-light-green/10">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Credentials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We pride ourselves on maintaining the highest professional standards and continuous education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Registered Dietitian Nutritionists (RDN)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Certified Sports Nutritionists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Certified Diabetes Educators</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Certified Health and Wellness Coaches</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Professional Memberships</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Academy of Nutrition and Dietetics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">American Society for Nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Sports, Cardiovascular, and Wellness Nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">National Board for Health and Wellness Coaching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
