
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import PhotoUploader from "@/components/PhotoUploader";

const PhotoUpload = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">Upload Your Child's Photo</h1>
            <p className="text-gray-600 text-center mb-8">
              We'll transform your child into a cartoon character for their personalized book
            </p>
            <Separator className="my-4" />
            <PhotoUploader />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PhotoUpload;
