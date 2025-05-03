
export interface StoryTemplate {
  letter: string;
  templates: Array<{
    text: string;
    requiresName: boolean;
  }>;
}

export interface BookTheme {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  letterTemplates: Record<string, StoryTemplate>;
}

export const bookThemes: BookTheme[] = [
  {
    id: "adventure",
    name: "Adventure",
    description: "An exciting journey through mysterious places",
    primaryColor: "bg-pastel-blue",
    secondaryColor: "bg-pastel-green",
    letterTemplates: {
      A: {
        letter: "A",
        templates: [
          { text: "{name} went on an Amazing Adventure", requiresName: true },
          { text: "An Amazing Airplane flew overhead", requiresName: false },
        ],
      },
      B: {
        letter: "B",
        templates: [
          { text: "{name} found a Big, Brave Bear", requiresName: true },
          { text: "A Beautiful Butterfly landed on a flower", requiresName: false },
        ],
      },
      // Additional letters would be defined here
    },
  },
  {
    id: "animals",
    name: "Animals",
    description: "A delightful safari featuring adorable creatures",
    primaryColor: "bg-pastel-yellow",
    secondaryColor: "bg-pastel-peach",
    letterTemplates: {
      A: {
        letter: "A",
        templates: [
          { text: "{name} met an Adorable Aardvark", requiresName: true },
          { text: "An Agile Antelope jumped over the fence", requiresName: false },
        ],
      },
      B: {
        letter: "B",
        templates: [
          { text: "{name} watched a Beautiful Bird build a nest", requiresName: true },
          { text: "A Brown Bear caught a fish in the stream", requiresName: false },
        ],
      },
      // Additional letters would be defined here
    },
  },
  {
    id: "space",
    name: "Space",
    description: "An interstellar journey through the cosmos",
    primaryColor: "bg-pastel-purple",
    secondaryColor: "bg-pastel-blue",
    letterTemplates: {
      A: {
        letter: "A",
        templates: [
          { text: "{name} flew among the Amazing Asteroids", requiresName: true },
          { text: "An Astronaut fixed the space station", requiresName: false },
        ],
      },
      B: {
        letter: "B",
        templates: [
          { text: "{name} saw a Bright Blue planet", requiresName: true },
          { text: "A Big Black hole swirled in the distance", requiresName: false },
        ],
      },
      // Additional letters would be defined here
    },
  },
  {
    id: "fairy tale",
    name: "Fairy Tale",
    description: "A magical world of wonder and enchantment",
    primaryColor: "bg-pastel-pink",
    secondaryColor: "bg-pastel-purple",
    letterTemplates: {
      A: {
        letter: "A",
        templates: [
          { text: "{name} found an Ancient magic Apple", requiresName: true },
          { text: "An Amazing fairy granted three wishes", requiresName: false },
        ],
      },
      B: {
        letter: "B",
        templates: [
          { text: "{name} met a Beautiful fairy in the Bushes", requiresName: true },
          { text: "A Brave knight rescued the princess", requiresName: false },
        ],
      },
      // Additional letters would be defined here
    },
  },
  {
    id: "nature",
    name: "Nature",
    description: "Explore the wonders of the natural world",
    primaryColor: "bg-pastel-green",
    secondaryColor: "bg-pastel-yellow",
    letterTemplates: {
      A: {
        letter: "A",
        templates: [
          { text: "{name} explored the Amazing Amazon forest", requiresName: true },
          { text: "An Amber sunset colored the sky", requiresName: false },
        ],
      },
      B: {
        letter: "B",
        templates: [
          { text: "{name} smelled Beautiful Blossoms", requiresName: true },
          { text: "A Buzzing Bee collected pollen", requiresName: false },
        ],
      },
      // Additional letters would be defined here
    },
  },
];

export const generateStory = (
  letter: string,
  childName: string,
  themeId: string
): string => {
  const theme = bookThemes.find((t) => t.id === themeId);
  
  if (!theme || !theme.letterTemplates[letter]) {
    // Default fallback if theme or letter not found
    return `${letter} is for Adventure. ${childName} had a wonderful time learning about the letter ${letter}.`;
  }
  
  const letterTemplate = theme.letterTemplates[letter];
  
  // Find a template that fits our needs
  const template = letterTemplate.templates.find((t) => 
    t.requiresName === !!childName
  ) || letterTemplate.templates[0];
  
  // Replace {name} with the child's name if required
  let story = template.text;
  if (template.requiresName && childName) {
    story = story.replace('{name}', childName);
  }
  
  return `${letter} is for ${story.split(' ')[template.requiresName ? 3 : 1]}. ${story}.`;
};

export const getPageBackgroundColor = (pageIndex: number): string => {
  const colors = [
    "bg-pastel-blue",
    "bg-pastel-pink",
    "bg-pastel-green",
    "bg-pastel-yellow",
    "bg-pastel-purple",
    "bg-pastel-peach",
  ];
  
  return colors[pageIndex % colors.length];
};
