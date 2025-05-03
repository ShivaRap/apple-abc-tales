
// Template models for Pusthakam

export type BookFormat = "abc-book" | "comic-book" | "storybook";
export type PageLayout = "full-image" | "split" | "panels" | "cover";

export interface PageTemplate {
  id: string;
  name: string;
  layout: PageLayout;
  description: string;
  imagePositions: {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation?: number;
  }[];
  textPositions: {
    x: number;
    y: number;
    width: number;
    height: number;
    fontSize: number;
    fontWeight: string;
  }[];
  backgroundOptions: string[];
}

export interface BookTemplate {
  id: string;
  name: string;
  format: BookFormat;
  description: string;
  coverTemplate: PageTemplate;
  pageTemplates: Record<string, PageTemplate[]>;  // Letter -> templates
  defaultTheme: string;
  supportedThemes: string[];
  ageRange: {
    min: number;
    max: number;
  };
}

// Placeholder templates
export const DEFAULT_ABC_TEMPLATE: BookTemplate = {
  id: "default-abc",
  name: "Classic ABC",
  format: "abc-book",
  description: "A classic alphabet book with one letter per page",
  coverTemplate: {
    id: "default-cover",
    name: "Standard Cover",
    layout: "cover",
    description: "Standard book cover with title and child's image",
    imagePositions: [{ x: 0.5, y: 0.5, width: 0.8, height: 0.6 }],
    textPositions: [
      { x: 0.5, y: 0.2, width: 0.8, height: 0.2, fontSize: 32, fontWeight: "bold" },
      { x: 0.5, y: 0.85, width: 0.8, height: 0.1, fontSize: 18, fontWeight: "normal" }
    ],
    backgroundOptions: ["pastel-blue", "pastel-pink", "pastel-purple"]
  },
  pageTemplates: {
    "default": [
      {
        id: "letter-focus",
        name: "Letter Focus",
        layout: "split",
        description: "Large letter with illustration and text",
        imagePositions: [{ x: 0.75, y: 0.5, width: 0.4, height: 0.6 }],
        textPositions: [
          { x: 0.25, y: 0.3, width: 0.4, height: 0.4, fontSize: 72, fontWeight: "bold" },
          { x: 0.5, y: 0.8, width: 0.8, height: 0.15, fontSize: 16, fontWeight: "normal" }
        ],
        backgroundOptions: ["pastel-blue", "pastel-pink", "pastel-green", "pastel-yellow", "pastel-purple"]
      }
    ]
  },
  defaultTheme: "adventure",
  supportedThemes: ["adventure", "animals", "space", "fairy tale", "nature"],
  ageRange: {
    min: 1,
    max: 10
  }
};

export const DEFAULT_COMIC_TEMPLATE: BookTemplate = {
  id: "default-comic",
  name: "Hero Comic",
  format: "comic-book",
  description: "A superhero comic book featuring your child as the main character",
  coverTemplate: {
    id: "comic-cover",
    name: "Comic Cover",
    layout: "cover",
    description: "Dynamic comic book cover with hero pose",
    imagePositions: [{ x: 0.5, y: 0.6, width: 0.7, height: 0.7 }],
    textPositions: [
      { x: 0.5, y: 0.2, width: 0.8, height: 0.15, fontSize: 36, fontWeight: "bold" },
      { x: 0.5, y: 0.9, width: 0.8, height: 0.08, fontSize: 14, fontWeight: "normal" }
    ],
    backgroundOptions: ["pastel-blue", "pastel-purple", "pastel-peach"]
  },
  pageTemplates: {
    "default": [
      {
        id: "comic-3-panels",
        name: "3 Panels",
        layout: "panels",
        description: "Classic 3-panel comic layout",
        imagePositions: [
          { x: 0.25, y: 0.25, width: 0.45, height: 0.45 },
          { x: 0.75, y: 0.25, width: 0.45, height: 0.45 },
          { x: 0.5, y: 0.75, width: 0.9, height: 0.45 }
        ],
        textPositions: [
          { x: 0.25, y: 0.4, width: 0.4, height: 0.1, fontSize: 12, fontWeight: "normal" },
          { x: 0.75, y: 0.4, width: 0.4, height: 0.1, fontSize: 12, fontWeight: "normal" },
          { x: 0.5, y: 0.9, width: 0.8, height: 0.1, fontSize: 12, fontWeight: "normal" }
        ],
        backgroundOptions: ["white"]
      }
    ]
  },
  defaultTheme: "adventure",
  supportedThemes: ["adventure", "space", "fairy tale"],
  ageRange: {
    min: 3,
    max: 10
  }
};
