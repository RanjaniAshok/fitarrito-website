import ChickenBurrito from "@/images/menuimages/ChickenBurrito.svg";
import MuttonBurrito from "@/images/menuimages/MuttonBurrito.svg";
import PannerBurrito from "@/images/menuimages/PannerBurrito.svg";
import MushroomBurrito from "@/images/menuimages/MushroomBurrito.svg";

import VegHummusBuddhaBowl from "@/images/menuimages/VegHummusBowl.svg";
import ChickenHummusBuddhaBowl from "@/images/menuimages/ChickenHummusBowl.svg";
import SingaporeLaksa from "@/images/menuimages/SingaporeLaksa.svg";
import Fiesta from "@/images/menuimages/fiesta.svg";
import ChickenNachos from "@/images/menuimages/ChickenNachos.svg";
import PannerNachos from "@/images/menuimages/PannerNachos.svg";
import ButterChickenNachos from "@/images/menuimages/ButterChickenNachos.svg";
import BBQCHickenNachos from "@/images/menuimages/BBQChickenNachos.svg";
import MushroomNachos from "@/images/menuimages/MushroomNachos.svg";
import Chickentaco from "@/images/menuimages/ChickenTaco.svg";
import Muttontaco from "@/images/menuimages/MuttonTaco.svg";
import EggTaco from "@/images/menuimages/EggTaco.svg";
import Paneertaco from "@/images/menuimages/PaneerTaco.svg";
import MushroomTaco from "@/images/menuimages/MushroomTaco.svg";
import VegOuesadilla from "@/images/menuimages/VegQuesadilla.svg";
import ChickenQuesadilla from "@/images/menuimages/ChickenQuesadilla.svg";
import AppleSmoothie from "@/images/menuimages/AppleSmoothie.svg";
import BananaSmoothie from "@/images/menuimages/BananaSmoothie.svg";
import MangoSmoothie from "@/images/menuimages/MangoSmoothie.svg";
import ChocolateSmoothie from "@/images/menuimages/ChocolateSmoothie.svg";
import PaneerLaksa from "@/images/menuimages/PaneerLaksa.svg";
import VegLaksa from "@/images/menuimages/VegLaksa.svg";
import MushroomSalad from "@/images/menuimages/MushroomSalad.svg";
import BBQChickenSalad from "@/images/menuimages/BBQChickenSalad.svg";
import TeriyakiChickenSalad from "@/images/menuimages/TeriyakiChickenSalad.svg";
import TeriyakiPaneerSalad from "@/images/menuimages/PaneerTeriyakiSalad.svg";

interface tabItem {
  imagesrc: { src: string };
  title: string;
  content: string;
  price: number | string;
  rating: number | string;
  reviews: string;
  url: string;
  nutrient?: {
    mini: { cals: string; protein: string; fat: string; carbs: string };
    regular: { cals: string; protein: string; fat: string; carbs: string };
  };
  nutrients: {
    cals: string;
    protein: string;
    fat: string;
    carbs: string;
  };
}

export const Main: Array<tabItem> = [
  {
    imagesrc: ChickenBurrito,
    title: "Chicken Burrito/Bowl",
    content: "Tortilla roll infused with chicken and veggies",
    price: "239",
    rating: "5.0",
    reviews: "87",
    url: "#",
    nutrients: {
      cals: "750 kcal",
      protein: "45g",
      fat: "35g",
      carbs: "60g",
    },
  },

  {
    imagesrc: MuttonBurrito,
    title: "Mutton Burrito/Bowl",
    content:
      "A hearty tortilla roll filled with slow-cooked spiced mutton, fresh veggies, beans, and flavorful sauces.",
    price: "330",
    rating: "4.8",
    reviews: "32",
    url: "#",
    nutrients: {
      cals: "750 kcal",
      protein: "45g",
      fat: "35g",
      carbs: "60g",
    },
  },

  {
    imagesrc: PannerBurrito,
    title: "Paneer Burrito/Bowl",
    content:
      "A soft tortilla filled with spiced paneer, sautéed bell peppers, onions, beans, and a tangy yogurt sauce.",
    price: "179",
    rating: "4.9",
    reviews: "89",
    url: "#",
    nutrients: {
      cals: "620 kcal",
      protein: "30g",
      fat: "28g",
      carbs: "65g",
    },
  },
  {
    imagesrc: MushroomBurrito,
    title: "Mushroom Burrito/Bowl",
    content:
      "A delicious mix of sautéed mushrooms, beans, rice, fresh veggies, and creamy avocado wrapped in a tortilla.",
    price: "179",
    rating: "4.6",
    reviews: "12",
    url: "#",
    nutrients: {
      cals: "500 kcal",
      protein: "20g",
      fat: "15g",
      carbs: "70g",
    },
  },
  {
    imagesrc: ChickenBurrito,
    title: "Egg Burrito/Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    price: "159",
    rating: "5.0",
    reviews: "61",
    url: "#",
    nutrients: {
      cals: "520 kcal",
      protein: "35g",
      fat: "22g",
      carbs: "50g",
    },
  },
  {
    imagesrc: VegHummusBuddhaBowl,
    title: "Hummus Buddha Bowl (Veg)",
    content:
      "A nutritious bowl with hummus, quinoa, fresh greens, roasted chickpeas, and tahini dressing.",
    price: "190",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrients: {
      cals: "480 kcal",
      protein: "22g",
      fat: "18g",
      carbs: "55g",
    },
  },
  {
    imagesrc: ChickenHummusBuddhaBowl,
    title: "Chicken Hummus Buddha Bowl",
    content:
      "A high-protein bowl with grilled chicken, hummus, quinoa, roasted veggies, and garlic tahini dressing.",
    price: "240",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrients: {
      cals: "600 kcal",
      protein: "50g",
      fat: "20g",
      carbs: "60g",
    },
  },
  {
    imagesrc: VegLaksa,
    title: "Singapore Veg Laksa",
    content: "Mexican Chilli",
    price: "180",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: PaneerLaksa,
    title: "Singapore Paneer Laksa",
    content: "Mexican Chilli",
    price: "200",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: SingaporeLaksa,
    title: "Singapore Chicken Laksa",
    content: "Mexican Chilli",
    price: "235",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },

  {
    imagesrc: VegOuesadilla,
    title: "Veg Quesadillas",
    content: "Mexican Chilli",
    price: "3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: ChickenQuesadilla,
    title: "Chicken Quesadillas",
    content: "Mexican Chilli",
    price: "3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
];
export const Salad: Array<tabItem> = [
  {
    imagesrc: TeriyakiPaneerSalad,
    title: "Teriyaki Paneer Salad",
    content: "Tomato Salad & Carrot",
    price: "179",
    rating: "5.0",
    reviews: "87",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: MushroomSalad,
    title: "Mushroom Salad",
    content: "Hamburger & Fries",
    price: "179",
    rating: "4.9",
    reviews: "89",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: BBQChickenSalad,
    title: "Barbeque chicken Salad",
    content: "Crispy Soyabeans",
    price: "229",
    rating: "4.6",
    reviews: "12",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: TeriyakiChickenSalad,
    title: "Chicken Teriyaki Salad",
    content: "Crispy Soyabeans",
    price: "229",
    rating: "4.6",
    reviews: "12",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
];
export const Nachos: Array<tabItem> = [
  {
    imagesrc: Fiesta,
    title: "Nachos Fiesta",
    content: "Tomato Salad & Carrot",
    price: "219",
    rating: "5.0",
    reviews: "87",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: ChickenNachos,
    title: "Spicy Chicken Nachos Bowl",
    content: "Cheese Pizza",
    price: "259",
    rating: "4.8",
    reviews: "32",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: PannerNachos,
    title: "Spicy Panner Nachos Bowl",
    content: "Hamburger & Fries",
    price: "229",
    rating: "4.9",
    reviews: "89",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: ButterChickenNachos,
    title: "Butter Chicken Nachos Bowl",
    content: "Crispy Soyabeans",
    price: "249",
    rating: "4.6",
    reviews: "12",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: BBQCHickenNachos,
    title: "Barbeque Chicken Nachos Bowl",
    content: "Roasted Chicken & Egg",
    price: "249",
    rating: "4.2",
    reviews: "19",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: MushroomNachos,
    title: "Mushroom Nachos Bowl",
    content: "Deepfried Chicken",
    price: "229",
    rating: "5.0",
    reviews: "61",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
];
export const Taco: Array<tabItem> = [
  {
    imagesrc: Chickentaco,
    title: "Chicken Taco",
    content: "Tomato Salad & Carrot",
    price: "129",
    rating: "5.0",
    reviews: "87",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: Muttontaco,
    title: "Mutton Taco",
    content: "Cheese Pizza",
    price: "189",
    rating: "4.8",
    reviews: "32",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: EggTaco,
    title: "Egg Taco",
    content: "Hamburger & Fries",
    price: "109",
    rating: "4.9",
    reviews: "89",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: Paneertaco,
    title: "Paneer Taco",
    content: "Crispy Soyabeans",
    price: "99",
    rating: "4.6",
    reviews: "12",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: MushroomTaco,
    title: "Mushroom Taco",
    content: "Roasted Chicken & Egg",
    price: "99",
    rating: "4.2",
    reviews: "19",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
];
export const Smoothie: Array<tabItem> = [
  {
    imagesrc: AppleSmoothie,
    title: "Apple Smoothie",
    content: "Tomato Salad & Carrot",
    price: "99",
    rating: "5.0",
    reviews: "87",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: BananaSmoothie,
    title: "Banana Smoothie",
    content: "Cheese Pizza",
    price: "99",
    rating: "4.8",
    reviews: "32",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: MangoSmoothie,
    title: "Mango Smoothie",
    content: "Hamburger & Fries",
    price: "99",
    rating: "4.9",
    reviews: "89",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
  {
    imagesrc: ChocolateSmoothie,
    title: "Chocolate smoothie",
    content: "Crispy Soyabeans",
    price: "99",
    rating: "4.6",
    reviews: "12",
    url: "#",
    nutrients: {
      cals: "0g",
      protein: "0g",
      fat: "0g",
      carbs: "0g",
    },
  },
];
