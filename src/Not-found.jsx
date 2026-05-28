import React from "react";
import NopageAnimation from "./assets/Animated Icons/404-Aimation.json";
import Lottie from "lottie-react";

const Nopage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Animation Container */}
      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <Lottie animationData={NopageAnimation} loop={true} />
      </div>
      
      {/* Text Content - Now under the animation */}
      <div className="flex flex-col items-center mt-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      
      {/* Button */}
      <div className="mt-8">
        <button 
          className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default Nopage;