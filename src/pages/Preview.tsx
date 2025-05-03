
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookPreview from "@/components/BookPreview";
import AlphabetPreview from "@/components/AlphabetPreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Preview = () => {
  const [childName, setChildName] = useState("Alex");
  const [theme, setTheme] = useState("adventure");
  const { toast } = useToast();
  
  const handleOrder = () => {
    toast({
      title: "Order placed!",
      description: "Thank you for your order. Your book will be delivered soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h1 className="text-3xl font-bold mb-2">{childName}'s ABC Book</h1>
            <p className="text-gray-600 mb-6">
              Preview your personalized storybook and make any final adjustments before ordering.
            </p>
            
            <Tabs defaultValue="full-preview">
              <TabsList className="mb-6">
                <TabsTrigger value="full-preview">Book Preview</TabsTrigger>
                <TabsTrigger value="alphabet">Alphabet Cards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="full-preview" className="mt-4">
                <BookPreview childName={childName} theme={theme} />
              </TabsContent>
              
              <TabsContent value="alphabet">
                <AlphabetPreview childName={childName} theme={theme} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-pastel-green/20 rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-xl font-bold mb-2">Ready to order?</h2>
                <p className="text-gray-700">
                  Your personalized book will be printed on high-quality paper with a durable hardcover.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Estimated delivery: 7-10 business days
                </p>
              </div>
              
              <Button 
                className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white flex items-center"
                onClick={handleOrder}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Now - $29.99
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Preview;
