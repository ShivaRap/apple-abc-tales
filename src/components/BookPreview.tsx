
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Printer, Download, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface BookPreviewProps {
  childName?: string;
  theme?: string;
}

const BookPreview: React.FC<BookPreviewProps> = ({ 
  childName = "Alex", 
  theme = "adventure" 
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { toast } = useToast();
  
  // Simple book pages - in a real app, these would be dynamic based on the theme and child's name
  const pages = [
    {
      letter: "Cover",
      content: `${childName}'s Alphabet Adventure`,
      image: "/placeholder.svg",
      color: "bg-pastel-blue",
    },
    {
      letter: "A",
      content: `A is for Adventure. ${childName} went on an Amazing Adventure through the apple orchard.`,
      image: "/placeholder.svg",
      color: "bg-pastel-pink",
    },
    {
      letter: "B",
      content: `B is for Brave. ${childName} was very Brave when meeting a Big, friendly Bear.`,
      image: "/placeholder.svg",
      color: "bg-pastel-green",
    },
    {
      letter: "C",
      content: `C is for Castle. ${childName} explored a Colossal Castle made of colorful clouds.`,
      image: "/placeholder.svg",
      color: "bg-pastel-yellow",
    },
    {
      letter: "D",
      content: `D is for Dream. ${childName} had a Delightful Dream about dancing with dolphins.`,
      image: "/placeholder.svg",
      color: "bg-pastel-purple",
    },
    {
      letter: "E",
      content: `E is for Echo. ${childName} heard an Exciting Echo in the empty cave.`,
      image: "/placeholder.svg",
      color: "bg-pastel-peach",
    },
    // Additional pages would go here for all 26 letters
  ];
  
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handlePrint = () => {
    toast({
      title: "Print requested",
      description: "Your book would now be sent to printing in a real app",
    });
  };
  
  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your book PDF would now start downloading in a real app",
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share your creation",
      description: "Sharing options would appear here in a real app",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {childName}'s ABC Book - {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
        </h2>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" /> Print
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" /> Save
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" /> Share
          </Button>
        </div>
      </div>
      
      <div className="relative">
        <div className={`${pages[currentPage].color} rounded-2xl p-8 shadow-lg min-h-[500px] flex flex-col md:flex-row`}>
          <div className="md:w-1/2 flex flex-col justify-center">
            {currentPage === 0 ? (
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{pages[currentPage].content}</h1>
                <p className="text-xl">A personalized alphabet book</p>
              </div>
            ) : (
              <div>
                <span className="text-6xl font-bold block mb-4">{pages[currentPage].letter}</span>
                <p className="text-xl">{pages[currentPage].content}</p>
              </div>
            )}
          </div>
          
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img 
              src={pages[currentPage].image} 
              alt={`Illustration for ${pages[currentPage].letter}`} 
              className="rounded-xl max-h-[300px] w-full object-cover border-4 border-white shadow-md"
            />
          </div>
        </div>
        
        {/* Page navigation */}
        <div className="flex justify-between mt-6">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="flex items-center"
            variant="outline"
          >
            <ChevronLeft className="h-5 w-5 mr-1" /> Previous
          </Button>
          
          <div className="text-sm text-center">
            Page {currentPage + 1} of {pages.length}
          </div>
          
          <Button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="flex items-center"
            variant="outline"
          >
            Next <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
        
        {/* Thumbnail navigation */}
        <div className="mt-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-12 h-12 rounded-md flex items-center justify-center border-2 transition-all ${
                  currentPage === index
                    ? "border-blue-500 scale-110"
                    : "border-gray-200"
                }`}
              >
                <span className="font-bold">
                  {index === 0 ? "📖" : page.letter}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
