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
// import AppleSmoothie from "@/images/menuimages/AppleSmoothie.svg";
// import BananaSmoothie from "@/images/menuimages/BananaSmoothie.svg";
// import MangoSmoothie from "@/images/menuimages/MangoSmoothie.svg";
// import ChocolateSmoothie from "@/images/menuimages/ChocolateSmoothie.svg";
import PaneerLaksa from "@/images/menuimages/PaneerLaksa.svg";
import VegLaksa from "@/images/menuimages/VegLaksa.svg";
import MushroomSalad from "@/images/menuimages/MushroomSalad.svg";
import BBQChickenSalad from "@/images/menuimages/BBQChickenSalad.svg";
import TeriyakiChickenSalad from "@/images/menuimages/TeriyakiChickenSalad.svg";
import TeriyakiPaneerSalad from "@/images/menuimages/PaneerTeriyakiSalad.svg";
// interface items {
//   imagesrc: { src: string };
//   title: string;
//   content: string;
//   price: number | string;
//   rating: number | string;
//   reviews: string;
//   url: string;
//   nutrient?: {
//     regular: { cals: string; protein: string; fat: string; carbs: string };
//     jumbo: { cals: string; protein: string; fat: string; carbs: string };
//   };
// }
interface Item {
  title: string;
  imagesrc: { src: string };
  content: string;
  price: number | string;
  rating: number | string;
  reviews: string;
  category?: string;

  url: string;
  nutrient?: {
    regular: {
      cals: string;
      protein: string;
      fat: string;
      carbs: string;
      price: string;
    };
    jumbo: {
      cals: string;
      protein: string;
      fat: string;
      carbs: string;
      price: string;
    };
  };
}

export const Burrito: Array<Item> = [
  {
    imagesrc: ChickenBurrito,
    title: "Chicken Burrito",
    content: "Tortilla roll infused with chicken and veggies",
    price: "120",
    rating: "5.0",
    reviews: "87",
    url: "#",

    nutrient: {
      regular: {
        cals: "562.5",
        protein: "37.5g",
        fat: "22.5g",
        carbs: "45.0g",
        price: "120",
      },
      jumbo: {
        cals: "750 ",
        protein: "50g",
        fat: "30g",
        carbs: "60g",
        price: "180",
      },
    },
  },
  {
    imagesrc: MuttonBurrito,
    title: "Mutton Burrito",
    content:
      "A hearty tortilla roll filled with slow-cooked spiced mutton, fresh veggies, beans, and flavorful sauces.",
    price: "200",
    rating: "4.8",
    reviews: "32",
    url: "#",
    nutrient: {
      regular: {
        cals: "562.5",
        protein: "33.0g",
        fat: "25.5g",
        carbs: "45.0g",
        price: "120",
      },
      jumbo: {
        cals: "750 ",
        protein: "45g",
        fat: "35g",
        carbs: "60g",
        price: "180",
      },
    },
  },
  {
    imagesrc: PannerBurrito,
    title: "Paneer Burrito",
    content:
      "A soft tortilla filled with spiced paneer, sautéed bell peppers, onions, beans, and a tangy yogurt sauce.",
    price: "120",
    rating: "4.9",
    reviews: "89",
    url: "#",
    nutrient: {
      regular: {
        cals: "465.0",
        protein: "22.5g",
        fat: "21.0g",
        carbs: "48.0g",
        price: "120",
      },
      jumbo: {
        cals: "620 ",
        protein: "30g",
        fat: "28g",
        carbs: "65g",
        price: "180",
      },
    },
  },
  {
    imagesrc: MushroomBurrito,
    title: "Mushroom Burrito",
    content:
      "A delicious mix of sautéed mushrooms, beans, rice, fresh veggies, and creamy avocado wrapped in a tortilla.",
    price: "120",
    rating: "4.6",
    reviews: "12",
    url: "#",
    nutrient: {
      regular: {
        cals: "375.0",
        protein: "15.0g",
        fat: "10.5g",
        carbs: "52.5g",
        price: "120",
      },
      jumbo: {
        cals: "500 ",
        protein: "20g",
        fat: "15g",
        carbs: "70g",
        price: "180",
      },
    },
  },
  {
    imagesrc: ChickenBurrito,
    title: "Egg Burrito",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    price: "120",
    rating: "5.0",
    reviews: "61",
    url: "#",
    nutrient: {
      regular: {
        cals: "390.0",
        protein: "25.5g",
        fat: "16.5g",
        carbs: "37.5g",
        price: "120",
      },
      jumbo: {
        cals: "520 ",
        protein: "35g",
        fat: "22g",
        carbs: "50g",
        price: "180",
      },
    },
  },
];
export const Bowl: Array<Item> = [
  {
    imagesrc: ChickenBurrito,
    title: "Chicken Burrito Bowl",
    content: "Tortilla roll infused with chicken and veggies",
    price: "150",
    rating: "5.0",
    reviews: "87",
    url: "#",
    nutrient: {
      regular: {
        cals: "562.5",
        protein: "37.5g",
        fat: "22.5g",
        carbs: "45.0g",
        price: "120",
      },
      jumbo: {
        cals: "750 ",
        protein: "50g",
        fat: "30g",
        carbs: "60g",
        price: "180",
      },
    },
  },
  {
    imagesrc: MuttonBurrito,
    title: "Mutton Burrito Bowl",
    content:
      "A hearty tortilla roll filled with slow-cooked spiced mutton, fresh veggies, beans, and flavorful sauces.",
    price: "330",
    rating: "4.8",
    reviews: "32",
    url: "#",
    nutrient: {
      regular: {
        cals: "562.5",
        protein: "33.0g",
        fat: "25.5g",
        carbs: "45.0g",
        price: "120",
      },
      jumbo: {
        cals: "750 ",
        protein: "45g",
        fat: "35g",
        carbs: "60g",
        price: "180",
      },
    },
  },
  {
    imagesrc: PannerBurrito,
    title: "Paneer Burrito Bowl",
    content:
      "A soft tortilla filled with spiced paneer, sautéed bell peppers, onions, beans, and a tangy yogurt sauce.",
    price: "179",
    rating: "4.9",
    reviews: "89",
    url: "#",
    nutrient: {
      regular: {
        cals: "465.0",
        protein: "22.5g",
        fat: "21.0g",
        carbs: "48.0g",
        price: "120",
      },
      jumbo: {
        cals: "620 ",
        protein: "30g",
        fat: "28g",
        carbs: "65g",
        price: "180",
      },
    },
  },
  {
    imagesrc: MushroomBurrito,
    title: "Mushroom Burrito Bowl",
    content:
      "A delicious mix of sautéed mushrooms, beans, rice, fresh veggies, and creamy avocado wrapped in a tortilla.",
    price: "179",
    rating: "4.6",
    reviews: "12",
    url: "#",
    nutrient: {
      regular: {
        cals: "375.0",
        protein: "15.0g",
        fat: "10.5g",
        carbs: "52.5g",
        price: "120",
      },
      jumbo: {
        cals: "500 ",
        protein: "20g",
        fat: "15g",
        carbs: "70g",
        price: "180",
      },
    },
  },
  {
    imagesrc: ChickenBurrito,
    title: "Egg Burrito Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    price: "159",
    rating: "5.0",
    reviews: "61",
    url: "#",
    nutrient: {
      regular: {
        cals: "390.0",
        protein: "25.5g",
        fat: "16.5g",
        carbs: "37.5g",
        price: "120",
      },
      jumbo: {
        cals: "520 ",
        protein: "35g",
        fat: "22g",
        carbs: "50g",
        price: "180",
      },
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
    nutrient: {
      regular: {
        cals: "360.0",
        protein: "16.5g",
        fat: "13.5g",
        carbs: "40.5g",
        price: "120",
      },
      jumbo: {
        cals: "480",
        protein: "22g",
        fat: "18g",
        carbs: "55g",
        price: "180",
      },
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
    nutrient: {
      regular: {
        cals: "450.0",
        protein: "37.5g",
        fat: "15.0g",
        carbs: "45.0g",
        price: "120",
      },
      jumbo: {
        cals: "600",
        protein: "50g",
        fat: "20g",
        carbs: "60g",
        price: "180",
      },
    },
  },

  {
    imagesrc: VegLaksa,
    title: "Veg Laksa",
    content: "A spicy coconut-based noodle soup with tofu and vegetables.",
    price: "180",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrient: {
      regular: {
        cals: "375.0",
        protein: "12.0g",
        fat: "18.0g",
        carbs: "60.0g",
        price: "120",
      },
      jumbo: {
        cals: "500 ",
        protein: "16g",
        fat: "24g",
        carbs: "80g",
        price: "180",
      },
    },
  },
  {
    imagesrc: PaneerLaksa,
    title: "Paneer Laksa",
    content: "A rich and creamy laksa with paneer and coconut milk.",
    price: "200",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrient: {
      regular: {
        cals: "420.0",
        protein: "18.0g",
        fat: "22.5g",
        carbs: "52.5g",
        price: "120",
      },
      jumbo: {
        cals: "560 ",
        protein: "24g",
        fat: "30g",
        carbs: "70g",
        price: "180",
      },
    },
  },
  {
    imagesrc: SingaporeLaksa,
    title: "Chicken Laksa",
    content: "A fragrant laksa with tender chicken and rice noodles.",
    price: "235",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrient: {
      regular: {
        cals: "450.0",
        protein: "27.0g",
        fat: "15.0g",
        carbs: "60.0g",
        price: "120",
      },
      jumbo: {
        cals: "600 ",
        protein: "36g",
        fat: "20g",
        carbs: "80g",
        price: "180",
      },
    },
  },
];
export const Salad: Array<Item> = [
  {
    imagesrc: TeriyakiPaneerSalad,
    title: "Teriyaki Paneer Salad",
    content: "Tomato Salad & Carrot",
    price: "180",
    rating: "5.0",
    reviews: "87",
    url: "#",
    nutrient: {
      regular: {
        cals: "300.0",
        protein: "15.0g",
        fat: "7.5g",
        carbs: "30.0g",
        price: "120",
      },
      jumbo: {
        cals: "400",
        protein: "20g",
        fat: "10g",
        carbs: "40g",
        price: "180",
      },
    },
  },
  {
    imagesrc: MushroomSalad,
    title: "Mushroom Salad",
    content: "Hamburger & Fries",
    price: "180",
    rating: "4.9",
    reviews: "89",
    url: "#",
  },
  {
    imagesrc: BBQChickenSalad,
    title: "Barbeque chicken Salad",
    content: "Crispy Soyabeans",
    price: "180",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
  {
    imagesrc: TeriyakiChickenSalad,
    title: "Chicken Teriyaki Salad",
    content: "Crispy Soyabeans",
    price: "180",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
];
export const Nachos: Array<Item> = [
  {
    imagesrc: Fiesta,
    title: "Nachos Fiesta",
    content: "Tomato Salad & Carrot",
    price: "180",
    rating: "5.0",
    reviews: "87",
    url: "#",
  },
  {
    imagesrc: ChickenNachos,
    title: "Spicy Chicken Nachos Bowl",
    content: "Cheese Pizza",
    price: "190",
    rating: "4.8",
    reviews: "32",
    url: "#",
  },
  {
    imagesrc: PannerNachos,
    title: "Spicy Panner Nachos Bowl",
    content: "Hamburger & Fries",
    price: "190",
    rating: "4.9",
    reviews: "89",
    url: "#",
  },
  {
    imagesrc: ButterChickenNachos,
    title: "Butter Chicken Nachos Bowl",
    content: "Crispy Soyabeans",
    price: "190",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
  {
    imagesrc: BBQCHickenNachos,
    title: "Barbeque Chicken Nachos Bowl",
    content: "Roasted Chicken & Egg",
    price: "190",
    rating: "4.2",
    reviews: "19",
    url: "#",
  },
  {
    imagesrc: MushroomNachos,
    title: "Mushroom Nachos Bowl",
    content: "Deepfried Chicken",
    price: "180",
    rating: "5.0",
    reviews: "61",
    url: "#",
  },
];
export const Taco: Array<Item> = [
  {
    imagesrc: Chickentaco,
    title: "Chicken Taco",
    content: "Tomato Salad & Carrot",
    price: "80",
    rating: "5.0",
    reviews: "87",
    url: "#",
  },
  {
    imagesrc: Muttontaco,
    title: "Mutton Taco",
    content: "Cheese Pizza",
    price: "120",
    rating: "4.8",
    reviews: "32",
    url: "#",
  },
  {
    imagesrc: EggTaco,
    title: "Egg Taco",
    content: "Hamburger & Fries",
    price: "70",
    rating: "4.9",
    reviews: "89",
    url: "#",
  },
  {
    imagesrc: Paneertaco,
    title: "Paneer Taco",
    content: "Crispy Soyabeans",
    price: "70",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
  {
    imagesrc: MushroomTaco,
    title: "Mushroom Taco",
    content: "Roasted Chicken & Egg",
    price: "70",
    rating: "4.2",
    reviews: "19",
    url: "#",
  },
];
export const Quesadillas: Array<Item> = [
  {
    imagesrc: VegOuesadilla,
    title: "Veg Quesadillas",
    content: "A crispy tortilla filled with cheese, beans, and vegetables.",
    price: "160",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrient: {
      regular: {
        cals: "480.0",
        protein: "15.0g",
        fat: "18.0g",
        carbs: "67.5g",
        price: "120",
      },
      jumbo: {
        cals: "640 ",
        protein: "20g",
        fat: "24g",
        carbs: "90g",
        price: "180",
      },
    },
  },
  {
    imagesrc: ChickenQuesadilla,
    title: "Chicken Quesadillas",
    content: "A cheesy tortilla filled with grilled chicken and peppers.",
    price: "249",
    rating: "4.2",
    reviews: "160",
    url: "#",
    nutrient: {
      regular: {
        cals: "525.0",
        protein: "33.0g",
        fat: "21.0g",
        carbs: "57.0g",
        price: "120",
      },
      jumbo: {
        cals: "700 ",
        protein: "44g",
        fat: "28g",
        carbs: "76g",
        price: "180",
      },
    },
  },
];
// export const Smoothie: Array<Item> = [
//   {
//     imagesrc: AppleSmoothie,
//     title: "Apple Smoothie",
//     content: "Tomato Salad & Carrot",
//     price: "99",
//     rating: "5.0",
//     reviews: "87",
//     url: "#",
//   },
//   {
//     imagesrc: BananaSmoothie,
//     title: "Banana Smoothie",
//     content: "Cheese Pizza",
//     price: "99",
//     rating: "4.8",
//     reviews: "32",
//     url: "#",
//   },
//   {
//     imagesrc: MangoSmoothie,
//     title: "Mango Smoothie",
//     content: "Hamburger & Fries",
//     price: "99",
//     rating: "4.9",
//     reviews: "89",
//     url: "#",
//   },
//   {
//     imagesrc: ChocolateSmoothie,
//     title: "Chocolate smoothie",
//     content: "Crispy Soyabeans",
//     price: "99",
//     rating: "4.6",
//     reviews: "12",
//     url: "#",
//   },
// ];
