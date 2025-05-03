
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface AlphabetPreviewProps {
  childName: string;
  theme: string;
}

const AlphabetPreview: React.FC<AlphabetPreviewProps> = ({ childName, theme }) => {
  const { toast } = useToast();
  const name = childName || "Alex";
  
  // Colors for letter backgrounds
  const letterColors = [
    "bg-pastel-pink",
    "bg-pastel-blue",
    "bg-pastel-green",
    "bg-pastel-yellow",
    "bg-pastel-purple",
    "bg-pastel-peach",
  ];
  
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  const getStorySnippet = (letter: string): string => {
    const themeBasedSnippets: Record<string, Record<string, string>> = {
      adventure: {
        A: `${name} went on an Amazing Adventure`,
        B: `${name} found a Big, Brave Bear`,
        C: `${name} Climbed the Colorful Castle`,
        // Add more for remaining letters
      },
      animals: {
        A: `${name} met an Adorable Aardvark`,
        B: `${name} played with a Beautiful Butterfly`,
        C: `${name} cuddled a Cute Cat`,
        // Add more for remaining letters
      },
      space: {
        A: `${name} flew among the Amazing Asteroids`,
        B: `${name} saw a Bright Blue planet`,
        C: `${name} watched Comets Circle the sky`,
        // Add more for remaining letters
      },
      "fairy tale": {
        A: `${name} found an Ancient magic Apple`,
        B: `${name} met a Beautiful fairy in the Bushes`,
        C: `${name} discovered a Cosmic Castle in the clouds`,
        // Add more for remaining letters
      },
      nature: {
        A: `${name} explored the Amazing Amazon forest`,
        B: `${name} smelled Beautiful Blossoms`,
        C: `${name} found a Curious Caterpillar`,
        // Add more for remaining letters
      },
    };
    
    const defaultSnippets: Record<string, string> = {
      A: `${name} found an Amazing Apple`,
      B: `${name} read a Big Book`,
      C: `${name} ate a Crunchy Cookie`,
      D: `${name} saw a Dancing Dolphin`,
      E: `${name} found an Exciting Egg`,
      F: `${name} met a Friendly Fox`,
      G: `${name} got a Green Gift`,
      H: `${name} hugged a Happy Hippo`,
      I: `${name} ate Icy Ice cream`,
      J: `${name} jumped with Joy`,
      K: `${name} flew a Kite in the sky`,
      L: `${name} saw a Lovely Lion`,
      M: `${name} made Marvelous Music`,
      N: `${name} found a Nice Nest`,
      O: `${name} observed an Orange Octopus`,
      P: `${name} painted a Pretty Picture`,
      Q: `${name} found a Quiet Quail`,
      R: `${name} rode a Red Rocket`,
      S: `${name} saw a Singing Star`,
      T: `${name} touched a Tiny Turtle`,
      U: `${name} went Under an Umbrella`,
      V: `${name} visited a Vibrant Valley`,
      W: `${name} watched a White Whale`,
      X: `${name} found an X-ray at the doctor`,
      Y: `${name} ate Yummy Yogurt`,
      Z: `${name} visited the Zoo`,
    };
    
    // Return themed snippet if available, otherwise default
    return themeBasedSnippets[theme]?.[letter] || defaultSnippets[letter] || `${letter} is for Adventure`;
  };
  
  const handleLetterClick = (letter: string) => {
    toast({
      title: `${letter} is for...`,
      description: getStorySnippet(letter),
    });
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">
        {name}'s Alphabet Adventure
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {alphabet.map((letter, index) => (
          <motion.div
            key={letter}
            className={cn(
              "letter-card cursor-pointer",
              letterColors[index % letterColors.length],
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLetterClick(letter)}
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">{letter}</span>
              <p className="text-sm text-center text-gray-700 line-clamp-2">
                {getStorySnippet(letter).substring(0, 20)}...
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetPreview;
