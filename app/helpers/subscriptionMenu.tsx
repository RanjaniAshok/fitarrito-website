import ChickenBurrito from "@/images/menuimages/ChickenBurrito.svg";

// import PannerBurrito from "@/images/menuimages/PannerBurrito.svg";
// import MushroomBurrito from "@/images/menuimages/MushroomBurrito.svg";
import SpudBowl from "@/images/menuimages/SpudBowl.svg";
import VegHummusBuddhaBowl from "@/images/menuimages/VegHummusBowl.svg";
import QuinoaBowl from "@/images/menuimages/QuinoaBowl.svg";
import StirFryVeggiesBowl from "@/images/menuimages/StirFryVeggiesBowl.svg";

import { SubscriptionMenuItem } from "app/types/types";

export const Dish: Array<SubscriptionMenuItem> = [
  {
    imagesrc: ChickenBurrito,
    title: "Burrito Bowl",
    content: "infused with chicken and veggies",
    category: "Burrito Bowl",

    nutrient: {
      regular: {
        cals: "300.0",
        protein: "15.0g",
        fat: "7.5g",
        carbs: "30.0g",
        price: "160",
      },
      jumbo: {
        cals: "400",
        protein: "20g",
        fat: "10g",
        carbs: "40g",
        price: "200",
      },
    },
  },
  {
    imagesrc: VegHummusBuddhaBowl,
    title: "Hummus Buddha Bowl",
    category: "Hummus Bowl",

    content:
      "A nutritious bowl with hummus, quinoa, fresh greens, roasted chickpeas, and tahini dressing.",
    nutrient: {
      regular: {
        cals: "300.0",
        protein: "15.0g",
        fat: "7.5g",
        carbs: "30.0g",
        price: "160",
      },
      jumbo: {
        cals: "400",
        protein: "20g",
        fat: "10g",
        carbs: "40g",
        price: "200",
      },
    },
  },
  {
    imagesrc: QuinoaBowl,
    title: "Quinoa Bowl",
    category: "Quiona Bowl",

    content:
      "A nutritious bowl with hummus, quinoa, fresh greens, roasted chickpeas, and tahini dressing.",
    nutrient: {
      regular: {
        cals: "300.0",
        protein: "15.0g",
        fat: "7.5g",
        carbs: "30.0g",
        price: "160",
      },
      jumbo: {
        cals: "400",
        protein: "20g",
        fat: "10g",
        carbs: "40g",
        price: "200",
      },
    },
  },
  {
    imagesrc: StirFryVeggiesBowl,
    title: "Stir Fry veggies Bowl",
    category: "Quiona Bowl",

    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    nutrient: {
      regular: {
        cals: "300.0",
        protein: "15.0g",
        fat: "7.5g",
        carbs: "30.0g",
        price: "160",
      },
      jumbo: {
        cals: "400",
        protein: "20g",
        fat: "10g",
        carbs: "40g",
        price: "200",
      },
    },
  },
  {
    imagesrc: SpudBowl,
    title: "Spud Bowl",
    category: "Quiona Bowl",

    content:
      "A protein-rich burrito stuffed with scrambled eggs, beans, cheese, and fresh vegetables.",
    nutrient: {
      regular: {
        cals: "300.0",
        protein: "15.0g",
        fat: "7.5g",
        carbs: "30.0g",
        price: "160",
      },
      jumbo: {
        cals: "400",
        protein: "20g",
        fat: "10g",
        carbs: "40g",
        price: "200",
      },
    },
  },
];
