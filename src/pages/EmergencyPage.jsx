import React from "react";

const EmergencyPage = () => {
  const emergencyServices = [
    {
      title: "24/7 Emergency Care",
      description: "Immediate medical attention for serious injuries and life-threatening conditions at Vital Care Bogura.",
      icon: "🚨",
      contact: "Call: 999 or 01700-066666"
    },
    {
      title: "Ambulance Service",
      description: "Emergency ambulance service with trained paramedics for quick transportation.",
      icon: "🚑",
      contact: "Call: 01700-066666"
    },
    {
      title: "Heart Attack/Stroke",
      description: "Emergency cardiac and neurological care with specialist doctors.",
      icon: "❤️",
      contact: "Call: 999 (National Helpline)"
    },
    {
      title: "Poison Control",
      description: "Immediate assistance for poison exposures (connected to National Poison Centre).",
      icon: "⚠️",
      contact: "Call: 01713-048888"
    },
    {
      title: "Pediatric Emergency",
      description: "Specialized emergency care for infants and children at Vital Care.",
      icon: "👶",
      contact: "Call: 01700-066666 (Extension 3)"
    },
    {
      title: "Mental Health Crisis",
      description: "Support for psychiatric emergencies and mental health crises.",
      icon: "🧠",
      contact: "Call: 09638-775777 (N.M.H Helpline)"
    },
  ];

  const emergencySteps = [
    "Stay calm and assess the situation",
    "Call 999 for life-threatening emergencies",
    "Follow operator instructions carefully",
    "Provide first aid if trained to do so",
    "Prepare patient's medical information",
    "Stay with the patient until help arrives"
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-base rounded-2xl">
      {/* Hero Section */}
      <div className="bg-[#176AE5] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Vital Care Emergency Services</h1>
          <p className="text-sm sm:text-base max-w-3xl mx-auto">
            24/7 emergency medical care in Bogura. Our emergency department is always ready to save lives.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:999"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg text-sm sm:text-base transition-colors duration-300"
            >
              Call 999 Now
            </a>
            <a
              href="tel:01700066666"
              className="bg-white hover:bg-gray-100 text-[#176AE5] font-medium py-3 px-6 rounded-lg text-sm sm:text-base transition-colors duration-300 border border-white"
            >
              Vital Care Emergency Line
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Emergency Services */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 text-center">Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <div className="bg-[#176AE5] bg-opacity-10 p-2 rounded">
                    <p className="font-medium text-sm text-white">{service.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Steps */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 text-center">What to Do in an Emergency</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-decimal list-inside">
              {emergencySteps.map((step, index) => (
                <li key={index} className="text-gray-800 p-2 bg-white rounded shadow-xs text-sm">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-[#176AE5] rounded-lg p-6 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
              <h2 className="text-xl font-semibold mb-3">Vital Care Location</h2>
              <p className="mb-3 text-sm">123 Medical Center Road<br/>Sadar, Bogura - 5800</p>
              <p className="mb-4 text-sm">Open 24 hours, 7 days a week</p>
              <button className="bg-white text-[#176AE5] font-medium py-2 px-5 rounded hover:bg-gray-100 transition-colors duration-300 text-sm">
                View on Google Maps
              </button>
            </div>
            <div className="md:w-1/2 bg-gray-200 h-48 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Map of Bogura Location</span>
            </div>
          </div>
        </div>

        {/* Additional Emergency Numbers */}
        <div className="mt-8 bg-red-50 border border-red-100 rounded-lg p-5">
          <h3 className="text-xl font-semibold text-red-700 mb-3">Other Emergency Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded shadow-xs">
              <p className="font-medium text-sm">Fire Service</p>
              <p className="text-red-600 text-sm">Call: 16163</p>
            </div>
            <div className="bg-white p-3 rounded shadow-xs">
              <p className="font-medium text-sm">Police Help Line</p>
              <p className="text-red-600 text-sm">Call: 999</p>
            </div>
            <div className="bg-white p-3 rounded shadow-xs">
              <p className="font-medium text-sm">National Trauma Center</p>
              <p className="text-red-600 text-sm">Call: 01709-099999</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-5">
          <h3 className="text-xl font-semibold text-yellow-700 mb-3">Important Notes</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 text-sm">•</span>
              <span className="text-sm">Our emergency department is located on the ground floor with clear signage</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 text-sm">•</span>
              <span className="text-sm">Ambulance parking is available at the eastern entrance</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 text-sm">•</span>
              <span className="text-sm">Critical patients receive immediate triage upon arrival</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 text-sm">•</span>
              <span className="text-sm">Emergency contact numbers are monitored 24/7</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;