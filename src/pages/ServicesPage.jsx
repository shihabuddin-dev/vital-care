import React from "react";

const ServicesPage = () => {
  const services = [
    {
      title: "General Consultation",
      description: "Comprehensive health evaluation and personalized treatment plans for all your medical needs.",
      icon: "🩺",
    },
    {
      title: "Preventive Care",
      description: "Regular check-ups and screenings to detect potential health issues before they become serious.",
      icon: "💉",
    },
    {
      title: "Chronic Disease Management",
      description: "Specialized care for diabetes, hypertension, and other chronic conditions.",
      icon: "❤️",
    },
    {
      title: "Pediatric Care",
      description: "Expert medical care for infants, children, and adolescents.",
      icon: "👶",
    },
    {
      title: "Women's Health",
      description: "Comprehensive care including annual exams, family planning, and menopause management.",
      icon: "🌸",
    },
    {
      title: "Emergency Care",
      description: "Immediate medical attention for urgent health concerns and injuries.",
      icon: "🚑",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <title>Services || Vital Care</title>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Medical Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services tailored to meet your individual needs.
          </p>
          <div className="mt-8 w-20 h-1 bg-[#176AE5] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#176AE5] bg-opacity-10 rounded-full mb-6">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-[#176AE5] font-medium hover:text-[#1256c4] transition-colors duration-300"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-[#176AE5] rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to take control of your health?
          </h3>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Schedule an appointment with our experienced medical professionals today.
          </p>
          <button className="bg-white text-[#176AE5] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;