import ChickenBurrito from "@/images/menuimages/ChickenBurrito.svg";
import MuttonBurrito from "@/images/menuimages/MuttonBurrito.svg";
import Chicken from "@/images/menuimages/Chicken.svg";
import Mutton from "@/images/menuimages/Mutton.svg";
import WhiteRice from "@/images/menuimages/WhiteRice.svg";
import BrownRice from "@/images/menuimages/BrownRice.svg";
import BlackBeans from "@/images/menuimages/BlackBeans.svg";
import PintoBeans from "@/images/menuimages/PintoBeans.svg";
import circle from "@/images/menuimages/white-circle.svg";
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
import { PreOrderMenuItem } from "app/types/types";
// import MushroomSalad from "@/images/menuimages/MushroomSalad.svg";
// import BBQChickenSalad from "@/images/menuimages/BBQChickenSalad.svg";
// import TeriyakiChickenSalad from "@/images/menuimages/TeriyakiChickenSalad.svg";
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

const commonAddOns: Array<addOnsItem> = [
  {
    type: "Protein",
    value: [
      {
        item: "Chicken",
        imagesrc: Chicken,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "230 ",
            protein: "27",
            fat: "14",
            carbs: "0",
          },
        },
      },
      {
        item: "Mutton",
        imagesrc: Mutton,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "294 ",
            protein: "25",
            fat: "21",
            carbs: "0",
          },
        },
      },
      {
        item: "Fish",
        imagesrc: MuttonBurrito,

        nutrient: {
          mini: {
            cals: "206",
            protein: "22",
            fat: "12",
            carbs: "0",
          },
          regular: {
            cals: "206",
            protein: "22",
            fat: "12",
            carbs: "0",
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
        imagesrc: BlackBeans,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "67 ",
            protein: "3.2",
            fat: "0.4",
            carbs: "8",
          },
        },
      },
      {
        item: "Pinto Beans",
        imagesrc: PintoBeans,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "108",
            protein: "6",
            fat: "0.5",
            carbs: "19",
          },
        },
      },
      {
        item: "No Beans",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "0 ",
            protein: "0",
            fat: "0",
            carbs: "0",
          },
        },
      },
    ],
  },
  {
    type: "Veggies",
    value: [
      {
        item: "Corn Salsa",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "80",
            protein: "3",
            fat: "2",
            carbs: "16",
          },
        },
      },
      {
        item: "Pico De Gallo (Tomato Salad)",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "25",
            protein: "0",
            fat: "0",
            carbs: "4",
          },
        },
      },
      {
        item: "Roasted Tomato Salsa",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "30",
            protein: "0",
            fat: "0",
            carbs: "4",
          },
        },
      },
      {
        item: "Sour Cream",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "67",
            protein: "5",
            fat: "1",
            carbs: "2",
          },
        },
      },
      {
        item: "Fajita Veggies",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "20",
            protein: "1",
            fat: "0",
            carbs: "5",
          },
        },
      },
      {
        item: "Cheese",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "58",
            protein: "4",
            fat: "5",
            carbs: "0",
          },
        },
      },
      {
        item: "Lettuce",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "5",
            protein: "0",
            fat: "0",
            carbs: "1",
          },
        },
      },
    ],
  },
];
const bowlAddOns: Array<addOnsItem> = [
  {
    type: "Rice",
    value: [
      {
        item: "White Rice",
        imagesrc: WhiteRice,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "130",
            protein: "2.5",
            fat: "1",
            carbs: "28",
          },
        },
      },
      {
        item: "Brown Rice",
        imagesrc: BrownRice,

        nutrient: {
          mini: {
            cals: "562.5",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "110",
            protein: "2.5",
            fat: "1",
            carbs: "22",
          },
        },
      },
      {
        item: "No Rice",
        imagesrc: circle,

        nutrient: {
          mini: {
            cals: "0",
            protein: "37.5",
            fat: "22.5",
            carbs: "45.0",
          },
          regular: {
            cals: "0 ",
            protein: "0",
            fat: "0",
            carbs: "0",
          },
        },
      },
    ],
  },
];
export const Bowl: Array<PreOrderMenuItem> = [
  {
    imagesrc: ChickenBurrito,
    title: "Burrito Bowl",
    content: "infused with chicken and veggies",
    category: "Burrito Bowl",
    nutrient: {
      cals: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    },
    addOns: commonAddOns,
    specificAddons: bowlAddOns,
  },
  {
    imagesrc: VegHummusBuddhaBowl,
    title: "Hummus Buddha Bowl",
    category: "Hummus Bowl",
    content:
      "A nutritious bowl with hummus, quinoa, fresh greens, roasted chickpeas, and tahini dressing.",
    nutrient: {
      cals: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    },
    addOns: commonAddOns,
  },
  {
    imagesrc: QuinoaBowl,
    title: "Quinoa Bowl",
    category: "Quiona Bowl",
    content:
      "A nutritious bowl with hummus, quinoa, fresh greens, roasted chickpeas, and tahini dressing.",
    nutrient: {
      cals: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    },
    addOns: commonAddOns,
    specificAddons: bowlAddOns,
  },
  {
    imagesrc: StirFryVeggiesBowl,
    title: "Stir Fry veggies Bowl",
    category: "Quiona Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    nutrient: {
      cals: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    },
    addOns: commonAddOns,
    specificAddons: bowlAddOns,
  },
  {
    imagesrc: SpudBowl,
    title: "Spud Bowl",
    category: "Quiona Bowl",
    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    nutrient: {
      cals: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    },
    addOns: commonAddOns,
    specificAddons: bowlAddOns,
  },

  {
    imagesrc: VegLaksa,
    title: "Laksa Noodles",
    category: "Soup Noodles",
    content: "A spicy coconut-based noodle soup with tofu and vegetables.",
    nutrient: {
      cals: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    },
    addOns: commonAddOns,
  },
];
export const Salad: Array<PreOrderMenuItem> = [
  {
    imagesrc: TeriyakiPaneerSalad,
    title: "Teriyaki Paneer Salad",
    content: "Tomato Salad & Carrot",
    category: "Salad",
    nutrient: {
      cals: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    },
    addOns: commonAddOns,
  },
];
