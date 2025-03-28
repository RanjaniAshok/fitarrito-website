import ChickenBurrito from "@/images/menuimages/ChickenBurrito.svg";
import MuttonBurrito from "@/images/menuimages/MuttonBurrito.svg";
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
interface Item {
  title: string;
  imagesrc: { src: string };
  content: string;
  category?: string;
  nutrient?: {
    cals: string;
    protein: string;
    fat: string;
    carbs: string;
  };
  addOns: Array<addOnsItem>;
}
const addOns: Array<addOnsItem> = [
  {
    type: "Protein",
    value: [
      {
        item: "Chicken",
        imagesrc: ChickenBurrito,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "750 ",
            protein: "50",
            fat: "30",
            carbs: "60",
          },
        },
      },
      {
        item: "Mutton",
        imagesrc: MuttonBurrito,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "750 ",
            protein: "50",
            fat: "30",
            carbs: "60",
          },
        },
      },
      {
        item: "Fish",
        imagesrc: MuttonBurrito,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "750 ",
            protein: "50",
            fat: "30",
            carbs: "60",
          },
        },
      },
    ],
  },
  {
    type: "Rice",
    value: [
      {
        item: "White Rice",
        imagesrc: ChickenBurrito,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "750 ",
            protein: "50",
            fat: "30",
            carbs: "60",
          },
        },
      },
      {
        item: "Brown Rice",
        imagesrc: MuttonBurrito,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "750 ",
            protein: "50",
            fat: "30",
            carbs: "60",
          },
        },
      },
    ],
  },
  {
    type: "Beans",
    value: [
      {
        item: "Black Beans",
        imagesrc: ChickenBurrito,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "750 ",
            protein: "50",
            fat: "30",
            carbs: "60",
          },
        },
      },
      {
        item: "Pinto Beans",
        imagesrc: MuttonBurrito,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "750 ",
            protein: "50",
            fat: "30",
            carbs: "60",
          },
        },
      },
    ],
  },
];
export const Bowl: Array<Item> = [
  {
    imagesrc: ChickenBurrito,
    title: "Burrito Bowl",
    content: "Tortilla roll infused with chicken and veggies",
    category: "Burrito Bowl",
    nutrient: {
      cals: "00",
      protein: "37.5",
      fat: "22.5",
      carbs: "45.0",
    },
    addOns: addOns,
  },
  {
    imagesrc: VegHummusBuddhaBowl,
    title: "Hummus Buddha Bowl",
    category: "Hummus Bowl",
    content:
      "A nutritious bowl with hummus, quinoa, fresh greens, roasted chickpeas, and tahini dressing.",
    nutrient: {
      cals: "00",
      protein: "00",
      fat: "00",
      carbs: "00",
    },
    addOns: addOns,
  },

  {
    imagesrc: QuinoaBowl,
    title: "Quinoa Bowl",
    category: "Quiona Bowl",
    content:
      "A nutritious bowl with hummus, quinoa, fresh greens, roasted chickpeas, and tahini dressing.",
    nutrient: {
      cals: "00",
      protein: "00",
      fat: "00",
      carbs: "00",
    },
    addOns: addOns,
  },
  {
    imagesrc: StirFryVeggiesBowl,
    title: "Stir Fry veggies Bowl",
    category: "Quiona Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    nutrient: {
      cals: "00",
      protein: "00",
      fat: "00",
      carbs: "00",
    },
    addOns: addOns,
  },
  {
    imagesrc: SpudBowl,
    title: "Spud Bowl",
    category: "Quiona Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    nutrient: {
      cals: "00",
      protein: "00",
      fat: "00",
      carbs: "00",
    },
    addOns: addOns,
  },

  {
    imagesrc: VegLaksa,
    title: "Laksa Noodles",
    category: "Soup Noodles",

    content: "A spicy coconut-based noodle soup with tofu and vegetables.",
    nutrient: {
      cals: "00",
      protein: "00",
      fat: "00",
      carbs: "00",
    },
    addOns: addOns,
  },
];
export const Salad: Array<Item> = [
  {
    imagesrc: TeriyakiPaneerSalad,
    title: "Teriyaki Paneer Salad",
    content: "Tomato Salad & Carrot",
    category: "Salad",
    nutrient: {
      cals: "00",
      protein: "00",
      fat: "00",
      carbs: "00",
    },
    addOns: addOns,
  },
];
