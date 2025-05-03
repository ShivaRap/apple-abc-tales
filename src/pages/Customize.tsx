
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCustomizer from "@/components/BookCustomizer";
import { Separator } from "@/components/ui/separator";

const Customize = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">Create Your Personalized Book</h1>
            <p className="text-gray-600 text-center mb-8">
              Customize every detail to make this ABC book special for your little one
            </p>
            <Separator className="my-4" />
            <BookCustomizer />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Customize;
