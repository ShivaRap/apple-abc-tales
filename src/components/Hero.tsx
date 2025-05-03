
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue via-pastel-purple to-pastel-pink opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Personalized ABC Tales for Your Little One
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Create magical, personalized alphabet stories featuring your child's name, 
              interests, and adventures - a unique gift they'll cherish forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/customize">
                <Button className="btn-primary flex items-center gap-2">
                  Create Your Book <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/preview">
                <Button variant="outline" className="border-2">
                  See Examples
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-4 -left-4 bg-pastel-yellow w-full h-full rounded-2xl transform -rotate-6"></div>
              <div className="absolute top-2 -right-4 bg-pastel-green w-full h-full rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 book-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt="ABC Book Preview" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-8 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-blue-500">A is for Adventure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
