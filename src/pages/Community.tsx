
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CommunityPost from "@/components/CommunityPost";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Community = () => {
  const [newPostContent, setNewPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Sample community posts data
  const posts = [
    {
      id: "1",
      author: "Maria Silva",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      content: "Just completed my first week on my new nutrition plan and I'm already feeling more energetic! Has anyone else experienced quick results with their plans?",
      timestamp: new Date(2023, 4, 15, 14, 30),
      likes: 24,
      comments: [
        {
          id: "1-1",
          author: "João Santos",
          authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          content: "Yes! I noticed better sleep and more energy within the first week. Keep it up!",
          timestamp: new Date(2023, 4, 15, 15, 45),
        },
        {
          id: "1-2",
          author: "Ana Costa",
          authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
          content: "That's amazing! It took me about two weeks to notice changes, but now I feel fantastic!",
          timestamp: new Date(2023, 4, 15, 16, 20),
        },
      ],
    },
    {
      id: "2",
      author: "Carlos Mendes",
      authorImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      content: "Here's a quick and nutritious breakfast I've been enjoying: overnight oats with berries, chia seeds, and a dollop of Greek yogurt. What are your go-to healthy breakfasts?",
      timestamp: new Date(2023, 4, 14, 9, 15),
      likes: 36,
      comments: [
        {
          id: "2-1",
          author: "Sofia Almeida",
          authorImage: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
          content: "I love avocado toast with poached eggs and a side of cherry tomatoes!",
          timestamp: new Date(2023, 4, 14, 9, 30),
        },
      ],
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: "3",
      author: "Mariana Oliveira",
      authorImage: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      content: "I'm looking for recommendations for good plant-based protein sources that aren't soy-based. Any suggestions from the community?",
      timestamp: new Date(2023, 4, 13, 18, 45),
      likes: 18,
      comments: [
        {
          id: "3-1",
          author: "Dr. Maria Costa",
          authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          content: "Lentils, chickpeas, and hemp seeds are excellent options! Quinoa is also a complete protein source.",
          timestamp: new Date(2023, 4, 13, 19, 20),
        },
        {
          id: "3-2",
          author: "Ricardo Fernandes",
          content: "I've been using pea protein powder in my smoothies. It's really mild in flavor and works great!",
          timestamp: new Date(2023, 4, 13, 19, 45),
        },
      ],
    },
  ];

  // Sample upcoming events data
  const events = [
    {
      id: "e1",
      title: "Healthy Cooking Workshop",
      date: "June 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual - Zoom",
      description: "Learn to prepare quick, nutritious meals that the whole family will enjoy. Includes live cooking demonstration and Q&A session.",
    },
    {
      id: "e2",
      title: "Nutrition for Athletic Performance",
      date: "June 22, 2023",
      time: "5:30 PM - 7:00 PM",
      location: "NutriVida Center",
      description: "Join our sports nutritionist for a discussion on optimizing your nutrition for improved athletic performance and recovery.",
    },
    {
      id: "e3",
      title: "Mindful Eating Workshop",
      date: "July 5, 2023",
      time: "12:00 PM - 1:30 PM",
      location: "Virtual - Zoom",
      description: "Develop a healthier relationship with food through mindful eating practices. This workshop combines nutrition science with mindfulness techniques.",
    },
  ];

  // Handle new post submission
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPostContent.trim()) {
      setIsSubmitting(true);
      
      // Simulate API call to post
      setTimeout(() => {
        setIsSubmitting(false);
        setNewPostContent("");
        toast({
          title: "Post Shared",
          description: "Your post has been shared with the community.",
        });
      }, 1500);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="NutriVida Community"
          subtitle="Connect with others on their nutrition journey, share experiences, and get inspired."
          ctaText="Join the Discussion"
          ctaLink="#community-feed"
          image="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          showWave={false}
        />

        <section id="community-feed" className="py-16 bg-gray-50">
          <div className="container-custom">
            <Tabs defaultValue="feed" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Post submission form */}
                <div className="bg-white rounded-lg shadow p-5 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Share with the Community</h2>
                  <form onSubmit={handlePostSubmit}>
                    <Textarea
                      placeholder="What's on your mind? Share tips, ask questions, or celebrate your wins..."
                      className="mb-4"
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      rows={4}
                    />
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-nutrition-green hover:bg-nutrition-teal"
                        disabled={!newPostContent.trim() || isSubmitting}
                      >
                        {isSubmitting ? "Posting..." : "Share Post"}
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Community guidelines */}
                <div className="bg-nutrition-light-green/10 rounded-lg p-4 mb-8">
                  <h3 className="font-semibold text-nutrition-green mb-2">Community Guidelines</h3>
                  <p className="text-sm text-gray-700">
                    Please remember to be respectful, supportive, and constructive in your interactions. 
                    This community is a safe space for everyone on their nutrition journey. 
                    Avoid offering medical advice or promoting specific products/services.
                  </p>
                </div>

                {/* Community feed */}
                <div>
                  {posts.map((post) => (
                    <CommunityPost key={post.id} {...post} />
                  ))}
                </div>

                {/* Load more button */}
                <div className="text-center pt-4">
                  <Button variant="outline">Load More Posts</Button>
                </div>
              </TabsContent>

              <TabsContent value="events">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
                    <p className="text-gray-600 mb-6">
                      Join our workshops, webinars, and meetups to enhance your nutrition knowledge and connect with our community.
                    </p>
                    
                    <div className="space-y-6">
                      {events.map((event) => (
                        <div key={event.id} className="border-b border-gray-100 pb-6 last:border-0">
                          <h3 className="text-xl font-medium text-nutrition-green mb-2">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 mb-3">
                            <div className="flex items-center text-gray-700">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          <Button className="bg-nutrition-green hover:bg-nutrition-teal">
                            Register
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggest event */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Suggest an Event</h2>
                    <p className="text-gray-600 mb-4">
                      Have an idea for a community event or topic you'd like us to cover? Let us know!
                    </p>
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Event Title" className="mb-4" />
                      </div>
                      <div>
                        <Textarea placeholder="Event Description" rows={4} />
                      </div>
                      <div className="text-right">
                        <Button className="bg-nutrition-green hover:bg-nutrition-teal">
                          Submit Suggestion
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources">
                <div className="space-y-8">
                  {/* Articles */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-6">Nutrition Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
                        <h3 className="text-xl font-medium text-nutrition-green mb-2">Understanding Macronutrients</h3>
                        <p className="text-gray-600 mb-4">
                          Learn about proteins, carbohydrates, and fats, and how to balance them for optimal health.
                        </p>
                        <Button variant="outline" className="border-nutrition-green text-nutrition-green hover:bg-nutrition-green/10">
                          Read Article
                        </Button>
                      </div>
                      <div className="pt-6 md:pt-0 md:pl-6">
                        <h3 className="text-xl font-medium text-nutrition-green mb-2">Meal Prep for Busy Professionals</h3>
                        <p className="text-gray-600 mb-4">
                          Practical tips and strategies for preparing healthy meals when you're short on time.
                        </p>
                        <Button variant="outline" className="border-nutrition-green text-nutrition-green hover:bg-nutrition-green/10">
                          Read Article
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center mt-8">
                      <Button variant="link" className="text-nutrition-green">
                        View All Articles
                      </Button>
                    </div>
                  </div>

                  {/* Recipe database */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-6">Healthy Recipe Database</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <img
                          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                          alt="Vegetable Salad"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold mb-1">Mediterranean Quinoa Salad</h3>
                        <p className="text-sm text-gray-600 mb-3">15-minute prep • Protein-rich • Gluten-free</p>
                        <Button className="w-full bg-nutrition-green hover:bg-nutrition-teal">
                          View Recipe
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <img
                          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
                          alt="Breakfast Bowl"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold mb-1">Power Breakfast Bowl</h3>
                        <p className="text-sm text-gray-600 mb-3">10-minute prep • High-fiber • Vegetarian</p>
                        <Button className="w-full bg-nutrition-green hover:bg-nutrition-teal">
                          View Recipe
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <img
                          src="https://images.unsplash.com/photo-1513192800243-82f12f93ef79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                          alt="Smoothie Bowl"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold mb-1">Berry Protein Smoothie</h3>
                        <p className="text-sm text-gray-600 mb-3">5-minute prep • Antioxidant-rich • Dairy-free option</p>
                        <Button className="w-full bg-nutrition-green hover:bg-nutrition-teal">
                          View Recipe
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center mt-8">
                      <Button variant="link" className="text-nutrition-green">
                        Browse All Recipes
                      </Button>
                    </div>
                  </div>

                  {/* Downloadable resources */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-6">Free Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex p-4 border border-gray-100 rounded-lg">
                        <div className="bg-nutrition-light-green/20 p-4 rounded-lg mr-4">
                          <svg className="w-8 h-8 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Meal Planning Template</h3>
                          <p className="text-sm text-gray-600 mb-3">A customizable weekly meal planning template to help you organize your meals.</p>
                          <Button variant="outline" size="sm" className="text-nutrition-green border-nutrition-green hover:bg-nutrition-green/10">
                            Download PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex p-4 border border-gray-100 rounded-lg">
                        <div className="bg-nutrition-light-blue/20 p-4 rounded-lg mr-4">
                          <svg className="w-8 h-8 text-nutrition-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Grocery Shopping Guide</h3>
                          <p className="text-sm text-gray-600 mb-3">A comprehensive guide to navigating the grocery store for healthier choices.</p>
                          <Button variant="outline" size="sm" className="text-nutrition-blue border-nutrition-blue hover:bg-nutrition-blue/10">
                            Download PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex p-4 border border-gray-100 rounded-lg">
                        <div className="bg-nutrition-light-orange/20 p-4 rounded-lg mr-4">
                          <svg className="w-8 h-8 text-nutrition-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Nutrition Tracker</h3>
                          <p className="text-sm text-gray-600 mb-3">A printable daily nutrition and water intake tracker to monitor your habits.</p>
                          <Button variant="outline" size="sm" className="text-nutrition-orange border-nutrition-orange hover:bg-nutrition-orange/10">
                            Download PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex p-4 border border-gray-100 rounded-lg">
                        <div className="bg-nutrition-teal/10 p-4 rounded-lg mr-4">
                          <svg className="w-8 h-8 text-nutrition-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Healthy Snack Ideas</h3>
                          <p className="text-sm text-gray-600 mb-3">A collection of 50+ nutritious snack ideas for different times of day.</p>
                          <Button variant="outline" size="sm" className="text-nutrition-teal border-nutrition-teal hover:bg-nutrition-teal/10">
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Community;
