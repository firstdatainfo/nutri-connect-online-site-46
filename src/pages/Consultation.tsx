
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Consultation = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Consultation</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take the first step towards better health with a personalized nutrition consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="order-2 lg:order-1">
                <div className="sticky top-24">
                  {/* What to expect */}
                  <div className="bg-nutrition-light-blue/10 rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          <strong className="font-medium">Comprehensive Assessment</strong>
                          <p className="text-sm mt-1">We'll review your health history, goals, and current eating habits.</p>
                        </span>
                      </li>
                      <li className="flex">
                        <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          <strong className="font-medium">Personalized Recommendations</strong>
                          <p className="text-sm mt-1">You'll receive tailored nutrition advice and an actionable plan.</p>
                        </span>
                      </li>
                      <li className="flex">
                        <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          <strong className="font-medium">Educational Resources</strong>
                          <p className="text-sm mt-1">Access to additional materials to support your journey.</p>
                        </span>
                      </li>
                      <li className="flex">
                        <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          <strong className="font-medium">Follow-up Planning</strong>
                          <p className="text-sm mt-1">Discussion of next steps and ongoing support options.</p>
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" 
                          alt="Client" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Ana Martins</p>
                        <p className="text-sm text-gray-500">Client - 6 months</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 italic mb-4">
                      "Booking my first consultation was the best decision I made for my health. The personalized approach made all the difference, and I've seen incredible results."
                    </blockquote>
                    
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-nutrition-orange fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 1.5l3.09 6.26L22 8.64l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.51 2 8.64l6.91-1.01L12 1.5z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Booking Form */}
              <div className="col-span-2 order-1 lg:order-2">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <Tabs defaultValue="book">
                    <TabsList className="grid grid-cols-2 mb-8">
                      <TabsTrigger value="book">Book Online</TabsTrigger>
                      <TabsTrigger value="info">Consultation Info</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="book">
                      <h2 className="text-2xl font-semibold mb-6">Schedule Your Appointment</h2>
                      <BookingForm />
                    </TabsContent>
                    
                    <TabsContent value="info">
                      <h2 className="text-2xl font-semibold mb-6">Consultation Information</h2>
                      
                      <div className="space-y-8">
                        {/* Consultation Types */}
                        <div>
                          <h3 className="text-xl font-medium mb-4 text-nutrition-green">Consultation Types</h3>
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-1">Initial Consultation (60 min)</h4>
                              <p className="text-gray-600 mb-2">A comprehensive first session to understand your health history, goals, and develop an initial plan.</p>
                              <p className="font-medium">$120</p>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-1">Follow-up Session (30 min)</h4>
                              <p className="text-gray-600 mb-2">Regular check-ins to monitor progress, address challenges, and adjust your plan as needed.</p>
                              <p className="font-medium">$75</p>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-1">Custom Meal Planning (45 min)</h4>
                              <p className="text-gray-600 mb-2">Focused session on developing a personalized meal plan tailored to your needs and preferences.</p>
                              <p className="font-medium">$90</p>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-1">Health Coaching (60 min)</h4>
                              <p className="text-gray-600 mb-2">Holistic coaching that addresses nutrition alongside other wellness factors like stress, sleep, and activity.</p>
                              <p className="font-medium">$120</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* How to Prepare */}
                        <div>
                          <h3 className="text-xl font-medium mb-4 text-nutrition-green">How to Prepare</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-gray-700">Keep a 3-day food diary before your appointment (if possible).</span>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-gray-700">Have any recent medical test results or health records available.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-gray-700">Write down any specific questions or concerns you'd like to address.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-gray-700">For virtual consultations, test your device and internet connection ahead of time.</span>
                            </li>
                          </ul>
                        </div>
                        
                        {/* FAQ */}
                        <div>
                          <h3 className="text-xl font-medium mb-4 text-nutrition-green">Frequently Asked Questions</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-1">What payment methods do you accept?</h4>
                              <p className="text-gray-600">We accept all major credit/debit cards, HSA/FSA cards, and PayPal.</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-1">What is your cancellation policy?</h4>
                              <p className="text-gray-600">Please provide at least 24 hours notice for cancellations to avoid a 50% fee. Cancellations with less than 12 hours notice may be charged the full fee.</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-1">Do you offer package discounts?</h4>
                              <p className="text-gray-600">Yes, we offer discounted rates for consultation packages. Please contact us for details.</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-1">How long will it take to see results?</h4>
                              <p className="text-gray-600">This varies by individual and goals, but many clients notice improvements in energy and digestion within 2-3 weeks of implementing recommendations.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Consultation;
