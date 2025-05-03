
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalize</h3>
              <p className="text-gray-600">
                Enter your child's name, age, and choose a theme for their unique ABC adventure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-pastel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Preview</h3>
              <p className="text-gray-600">
                See each beautifully illustrated page of your child's custom alphabet book.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cherish</h3>
              <p className="text-gray-600">
                Receive a high-quality printed book that will become a treasured keepsake.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/customize">
              <Button className="btn-primary">Start Creating</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Parents Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pastel-blue/30 p-6 rounded-xl">
              <p className="italic mb-4">
                "My daughter absolutely loves her personalized ABC book! She gets so excited seeing herself as the main character in each adventure. It's made learning the alphabet so much fun!"
              </p>
              <p className="font-semibold">- Sarah T., mom of Emma (4)</p>
            </div>
            
            <div className="bg-pastel-green/30 p-6 rounded-xl">
              <p className="italic mb-4">
                "The quality of the illustrations is amazing! This book has become our nightly bedtime story, and my son asks for it every single night. Worth every penny."
              </p>
              <p className="font-semibold">- Michael R., dad of James (3)</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pastel-blue to-pastel-purple">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Child's ABC Adventure Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Give the gift of literacy with a personalized alphabet book that makes your child the star of their own story!
          </p>
          <Link to="/customize">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Begin Your Creation
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
