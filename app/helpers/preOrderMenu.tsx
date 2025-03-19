import ChickenBurrito from "@/images/menuimages/ChickenBurrito.svg";
// import MuttonBurrito from "@/images/menuimages/MuttonBurrito.svg";
// import PannerBurrito from "@/images/menuimages/PannerBurrito.svg";
// import MushroomBurrito from "@/images/menuimages/MushroomBurrito.svg";
import SpudBowl from "@/images/menuimages/SpudBowl.svg";
import VegHummusBuddhaBowl from "@/images/menuimages/VegHummusBowl.svg";
import QuinoaBowl from "@/images/menuimages/QuinoaBowl.svg";
import StirFryVeggiesBowl from "@/images/menuimages/StirFryVeggiesBowl.svg";
// import ChickenHummusBuddhaBowl from "@/images/menuimages/ChickenHummusBowl.svg";
// import SingaporeLaksa from "@/images/menuimages/SingaporeLaksa.svg";
// import Fiesta from "@/images/menuimages/fiesta.svg";
// import ChickenNachos from "@/images/menuimages/ChickenNachos.svg";
// import PannerNachos from "@/images/menuimages/PannerNachos.svg";
// import ButterChickenNachos from "@/images/menuimages/ButterChickenNachos.svg";
// import BBQCHickenNachos from "@/images/menuimages/BBQChickenNachos.svg";
// import MushroomNachos from "@/images/menuimages/MushroomNachos.svg";
// import Chickentaco from "@/images/menuimages/ChickenTaco.svg";
// import Muttontaco from "@/images/menuimages/MuttonTaco.svg";
// import EggTaco from "@/images/menuimages/EggTaco.svg";
// import Paneertaco from "@/images/menuimages/PaneerTaco.svg";
// import MushroomTaco from "@/images/menuimages/MushroomTaco.svg";
// import VegOuesadilla from "@/images/menuimages/VegQuesadilla.svg";
// import ChickenQuesadilla from "@/images/menuimages/ChickenQuesadilla.svg";
// import AppleSmoothie from "@/images/menuimages/AppleSmoothie.svg";
// import BananaSmoothie from "@/images/menuimages/BananaSmoothie.svg";
// import MangoSmoothie from "@/images/menuimages/MangoSmoothie.svg";
// import ChocolateSmoothie from "@/images/menuimages/ChocolateSmoothie.svg";
// import PaneerLaksa from "@/images/menuimages/PaneerLaksa.svg";
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
//     mini: { cals: string; protein: string; fat: string; carbs: string };
//     regular: { cals: string; protein: string; fat: string; carbs: string };
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
    mini: { cals: string; protein: string; fat: string; carbs: string };
    regular: { cals: string; protein: string; fat: string; carbs: string };
  };
}

export const Bowl: Array<Item> = [
  {
    imagesrc: ChickenBurrito,
    title: "Burrito Bowl",
    content: "Tortilla roll infused with chicken and veggies",
    price: "150",
    rating: "5.0",
    reviews: "87",
    category: "Burrito Bowl",
    url: "#",
    nutrient: {
      mini: { cals: "562.5", protein: "37.5g", fat: "22.5g", carbs: "45.0g" },
      regular: { cals: "750 ", protein: "50g", fat: "30g", carbs: "60g" },
    },
  },
  {
    imagesrc: VegHummusBuddhaBowl,
    title: "Hummus Buddha Bowl",
    category: "Hummus Bowl",

    content:
      "A nutritious bowl with hummus, quinoa, fresh greens, roasted chickpeas, and tahini dressing.",
    price: "190",
    rating: "4.2",
    reviews: "95",
    url: "#",

    nutrient: {
      mini: {
        cals: "360.0",
        protein: "16.5g",
        fat: "13.5g",
        carbs: "40.5g",
      },
      regular: { cals: "480", protein: "22g", fat: "18g", carbs: "55g" },
    },
  },

  {
    imagesrc: QuinoaBowl,
    title: "Quinoa Bowl",
    category: "Quiona Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    price: "159",
    rating: "5.0",
    reviews: "61",
    url: "#",
    nutrient: {
      mini: { cals: "390.0", protein: "25.5g", fat: "16.5g", carbs: "37.5g" },
      regular: { cals: "520 ", protein: "35g", fat: "22g", carbs: "50g" },
    },
  },
  {
    imagesrc: StirFryVeggiesBowl,
    title: "Stir Fry veggies Bowl",
    category: "Quiona Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    price: "159",
    rating: "5.0",
    reviews: "61",
    url: "#",
    nutrient: {
      mini: { cals: "390.0", protein: "25.5g", fat: "16.5g", carbs: "37.5g" },
      regular: { cals: "520 ", protein: "35g", fat: "22g", carbs: "50g" },
    },
  },
  {
    imagesrc: SpudBowl,
    title: "Spud Bowl",
    category: "Quiona Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    price: "159",
    rating: "5.0",
    reviews: "61",
    url: "#",
    nutrient: {
      mini: { cals: "390.0", protein: "25.5g", fat: "16.5g", carbs: "37.5g" },
      regular: { cals: "520 ", protein: "35g", fat: "22g", carbs: "50g" },
    },
  },

  {
    imagesrc: VegLaksa,
    title: "Laksa Noodles",
    category: "Soup Noodles",

    content: "A spicy coconut-based noodle soup with tofu and vegetables.",
    price: "180",
    rating: "4.2",
    reviews: "95",
    url: "#",
    nutrient: {
      mini: { cals: "375.0", protein: "12.0g", fat: "18.0g", carbs: "60.0g" },
      regular: { cals: "500 ", protein: "16g", fat: "24g", carbs: "80g" },
    },
  },
];
export const Salad: Array<Item> = [
  {
    imagesrc: TeriyakiPaneerSalad,
    title: "Teriyaki Paneer Salad",
    content: "Tomato Salad & Carrot",
    category: "Salad",

    price: "180",
    rating: "5.0",
    reviews: "87",
    url: "#",
    nutrient: {
      mini: { cals: "300.0", protein: "15.0g", fat: "7.5g", carbs: "30.0g" },
      regular: { cals: "400", protein: "20g", fat: "10g", carbs: "40g" },
    },
  },
  {
    imagesrc: MushroomSalad,
    title: "Mushroom Salad",
    category: "Salad",

    content: "Hamburger & Fries",
    price: "180",
    rating: "4.9",
    reviews: "89",
    url: "#",
  },
  {
    imagesrc: BBQChickenSalad,
    category: "Salad",

    title: "Barbeque chicken Salad",
    content: "Crispy Soyabeans",
    price: "180",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
  {
    imagesrc: TeriyakiChickenSalad,
    category: "Salad",

    title: "Chicken Teriyaki Salad",
    content: "Crispy Soyabeans",
    price: "180",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
];
