import React, { useState } from "react";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");

  const featuredPost = {
    title: "5 Essential Health Checkups Everyone Should Get Annually",
    excerpt: "Regular health screenings can detect problems before they start. Learn which tests are crucial for maintaining your wellbeing at any age.",
    date: "June 15, 2023",
    category: "Preventive Care",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  };

  const blogPosts = [
    {
      id: 1,
      title: "Managing Diabetes: Lifestyle Tips for Better Control",
      excerpt: "Practical daily habits that can help regulate blood sugar levels and improve quality of life for diabetics.",
      date: "May 28, 2023",
      category: "Chronic Conditions",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Pediatric Vaccination Schedule: What Parents Should Know",
      excerpt: "A complete guide to recommended immunizations for children from birth through adolescence.",
      date: "April 12, 2023",
      category: "Pediatrics",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Heart Health: Recognizing Early Warning Signs",
      excerpt: "Learn to identify subtle symptoms that may indicate cardiovascular problems needing medical attention.",
      date: "March 22, 2023",
      category: "Cardiology",
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "Mental Wellness During Stressful Times",
      excerpt: "Evidence-based strategies to maintain emotional health during periods of high stress or anxiety.",
      date: "February 15, 2023",
      category: "Mental Health",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Nutrition for Bone Health at Every Age",
      excerpt: "Dietary recommendations to support strong bones and prevent osteoporosis through all life stages.",
      date: "January 30, 2023",
      category: "Nutrition",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Understanding Blood Pressure Readings",
      excerpt: "A breakdown of what your numbers mean and when to seek medical advice about hypertension.",
      date: "December 10, 2022",
      category: "Preventive Care",
      readTime: "3 min read"
    },
    {
      id: 7,
      title: "Women's Health Screening Recommendations",
      excerpt: "Essential health screenings every woman should consider at different stages of life.",
      date: "November 5, 2022",
      category: "Women's Health",
      readTime: "5 min read"
    }
  ];

  const categories = [
    "All Topics",
    "Preventive Care",
    "Chronic Conditions",
    "Pediatrics",
    "Women's Health",
    "Mental Health",
    "Nutrition",
    "Cardiology"
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All Topics" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#176AE5] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">Vital Care Health Blog</h1>
          <p className="text-sm sm:text-base max-w-3xl mx-auto">
            Trusted medical advice and health information from our team of specialists in Bogura
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Featured Post (only shows if in current category or All Topics) */}
        {(selectedCategory === "All Topics" || featuredPost.category === selectedCategory) && (
          <div className="mb-12 rounded-lg overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 bg-white">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="bg-[#176AE5] bg-opacity-10 text-white px-2 py-1 rounded mr-3">
                    {featuredPost.category}
                  </span>
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {featuredPost.excerpt}
                </p>
                <button className="text-[#176AE5] font-medium hover:text-[#1256c4] text-sm transition-colors duration-300">
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#176AE5] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span className="bg-[#176AE5] bg-opacity-10 text-white px-2 py-1 rounded mr-3">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-[#176AE5] font-medium hover:text-[#1256c4] text-sm transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles found in this category.</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Stay Updated with Health Tips
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Subscribe to our newsletter for monthly health insights from Vital Care specialists
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#176AE5] focus:border-transparent text-sm"
              />
              <button className="bg-[#176AE5] hover:bg-[#1256c4] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;