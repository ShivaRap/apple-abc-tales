
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Upload, Camera, Image, ArrowRight } from "lucide-react";

const PhotoUploader = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.match('image.*')) {
        setImage(file);
        
        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file",
          variant: "destructive",
        });
      }
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      toast({
        title: "No image selected",
        description: "Please upload an image of your child",
        variant: "destructive",
      });
      return;
    }
    
    setIsUploading(true);
    
    // Here we would upload to Supabase and process the image
    // For now, we'll simulate a successful upload
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Photo uploaded successfully!",
        description: "Your child's photo has been transformed",
      });
      navigate("/customize");
    }, 2000);
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="space-y-6">
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center ${
            preview ? "border-green-300" : "border-gray-300"
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {preview ? (
            <div className="space-y-4">
              <div className="relative mx-auto max-w-sm">
                <img
                  src={preview}
                  alt="Preview"
                  className="rounded-lg mx-auto max-h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/5 rounded-lg flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="bg-white"
                    onClick={() => {
                      setImage(null);
                      setPreview(null);
                    }}
                  >
                    Change Photo
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-pastel-blue/30 flex items-center justify-center">
                <Upload className="text-blue-600 h-8 w-8" />
              </div>
              <div>
                <p className="text-lg font-semibold">Drag & Drop your photo here</p>
                <p className="text-gray-500 text-sm mt-1">
                  or click below to browse files
                </p>
              </div>
              <div>
                <label htmlFor="file-upload">
                  <div className="cursor-pointer inline-flex bg-pastel-blue hover:bg-pastel-blue/80 text-blue-700 font-medium px-4 py-2 rounded-lg transition-colors">
                    Browse Files
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-pastel-green/30 flex items-center justify-center mx-auto">
                    <Image className="text-green-600 h-6 w-6" />
                  </div>
                  <p className="text-sm font-medium mt-2">Upload Image</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-pastel-pink/30 flex items-center justify-center mx-auto">
                    <Camera className="text-pink-600 h-6 w-6" />
                  </div>
                  <p className="text-sm font-medium mt-2">Take Photo</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {preview && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">Photo Guidelines:</h3>
              <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                <li>Clear facial features</li>
                <li>Good lighting</li>
                <li>Front-facing portrait</li>
                <li>Neutral background if possible</li>
              </ul>
            </div>
            
            <Button 
              className="w-full" 
              onClick={handleSubmit}
              disabled={isUploading}
            >
              {isUploading ? (
                "Processing..."
              ) : (
                <>
                  Continue to Customization <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoUploader;
