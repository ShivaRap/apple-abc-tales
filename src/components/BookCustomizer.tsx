
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Sparkles, Palette, Heart, BookOpen, Camera } from "lucide-react";
import { Link } from "react-router-dom";

type BookTheme = "adventure" | "animals" | "space" | "fairy tale" | "nature";

const BookCustomizer = () => {
  const [childName, setChildName] = useState("");
  const [age, setAge] = useState<number>(5);
  const [theme, setTheme] = useState<BookTheme>("adventure");
  const [dedicationMessage, setDedicationMessage] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Placeholder for simulated uploaded photo
  const [hasUploadedPhoto, setHasUploadedPhoto] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    if (!childName.trim()) {
      toast({
        title: "Missing information",
        description: "Please enter your child's name",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would save this information or pass it to the next step
    console.log({ childName, age, theme, dedicationMessage });
    
    // Navigate to preview page
    navigate("/preview");
    
    toast({
      title: "Book created!",
      description: "Your personalized book is ready to preview",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Customize Your Pusthakam</h2>
        <p className="text-gray-600">
          Make it special by personalizing it just for your little one
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-pastel-blue/20 rounded-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="sm:w-1/4">
              {hasUploadedPhoto ? (
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                  <img 
                    src="/placeholder.svg" 
                    alt="Child's Photo" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => navigate("/photo-upload")}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="w-24 h-24 bg-pastel-purple/30 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                  <Camera className="h-10 w-10 text-purple-500" />
                </div>
              )}
            </div>
            <div className="sm:w-3/4 text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-2">Child's Photo</h3>
              <p className="text-gray-600 text-sm mb-3">
                Add your child's photo to create a personalized character
              </p>
              {!hasUploadedPhoto && (
                <Link to="/photo-upload">
                  <Button variant="outline" className="bg-white">
                    <Camera className="mr-2 h-4 w-4" /> Upload Photo
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="childName" className="text-lg">
              Child's Name
            </Label>
            <Input
              id="childName"
              placeholder="Enter child's name"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="input-field mt-1"
            />
          </div>

          <div>
            <Label htmlFor="age" className="text-lg">
              Age: {age} years old
            </Label>
            <Slider
              id="age"
              defaultValue={[5]}
              min={1}
              max={10}
              step={1}
              onValueChange={(value) => setAge(value[0])}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="theme" className="text-lg">
              Book Theme
            </Label>
            <Select
              value={theme}
              onValueChange={(value) => setTheme(value as BookTheme)}
            >
              <SelectTrigger className="input-field mt-1">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="animals">Animals</SelectItem>
                <SelectItem value="space">Space</SelectItem>
                <SelectItem value="fairy tale">Fairy Tale</SelectItem>
                <SelectItem value="nature">Nature</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="dedication" className="text-lg">
              Dedication Message (Optional)
            </Label>
            <Input
              id="dedication"
              placeholder="Write a special message"
              value={dedicationMessage}
              onChange={(e) => setDedicationMessage(e.target.value)}
              className="input-field mt-1"
            />
          </div>
        </div>

        <div className="bg-pastel-purple/20 rounded-xl p-4 flex gap-4 items-start">
          <Sparkles className="text-purple-500 mt-1" />
          <div>
            <h3 className="font-semibold">Make it magical</h3>
            <p className="text-sm text-gray-600">
              Your child will be the star of their own ABC adventure, with each letter telling a part of their story.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button type="submit" className="btn-primary flex-1">
            Create Your Book
          </Button>
          <Button type="button" variant="outline" className="flex-1">
            Save Draft
          </Button>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t">
        <div className="text-center">
          <div className="bg-pastel-green w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
            <Palette className="text-green-600" />
          </div>
          <h3 className="font-semibold">Beautiful Illustrations</h3>
          <p className="text-sm text-gray-500">Charming artwork on every page</p>
        </div>
        <div className="text-center">
          <div className="bg-pastel-blue w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
            <BookOpen className="text-blue-600" />
          </div>
          <h3 className="font-semibold">Educational Value</h3>
          <p className="text-sm text-gray-500">Makes learning the alphabet fun</p>
        </div>
        <div className="text-center">
          <div className="bg-pastel-pink w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
            <Heart className="text-pink-600" />
          </div>
          <h3 className="font-semibold">Lasting Memories</h3>
          <p className="text-sm text-gray-500">A keepsake they'll treasure</p>
        </div>
      </div>
    </div>
  );
};

export default BookCustomizer;
