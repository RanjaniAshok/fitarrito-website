export interface RestaurantMenuItem {
    title: string;
    imagesrc: { src: string };
    content: string | undefined;
    price: number | string;
    rating: number | string;
    reviews: string;
    url: string;
    category?: string;
    nutrient?: {
      mini: { cals: string; protein: string; fat: string; carbs: string };
      regular: { cals: string; protein: string; fat: string; carbs: string };
    };
  }
  interface addOnsItem {
    type: string;
    value: Array<{
      item: string;
      imagesrc: { src: string };
      nutrient?: {
        mini: { cals: string; protein: string; fat: string; carbs: string };
        regular: { cals: string; protein: string; fat: string; carbs: string };
      };
    }>;
  }
  export interface PreOrderMenuItem {
    title?: string;
    imagesrc?: { src: string };
    content?: string;
    category?: string;
    nutrient?: {
      cals: number;
      protein: number;
      fat: number;
      carbs: number;
    };
    addOns?: Array<addOnsItem>;
    specificAddons?: Array<addOnsItem>;
  }