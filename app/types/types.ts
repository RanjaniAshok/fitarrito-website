export interface menuItem {
    title: string;
    imagesrc: { src: string };
    content: string | undefined;
    price: number | string;
    rating: number | string;
    reviews: string;
    url: string;
    category?: string;
    nutrient?: {
      regular: { cals: string; protein: string; fat: string; carbs: string,price:string };
      jumbo: { cals: string; protein: string; fat: string; carbs: string ,price:string};
    };
  }

  export interface addOnsItem {
    type: string;
    value: Array<{
      item: string;
      imagesrc: { src: string };
      nutrient?: {
        regular?: { cals: string; protein: string; fat: string; carbs: string };
        jumbo?: { cals: string; protein: string; fat: string; carbs: string };
      };
    }>;
  }
  export interface PreOrderMenuItem {
    tabName:string;
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
  export interface NutrientCalItem {
tabName:string;
    addOns?: Array<addOnsItem>;
    specificAddons?: Array<addOnsItem>;
  }