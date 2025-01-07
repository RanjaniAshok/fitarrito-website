import ChickenBurrito from "@/images/menuimages/ChickenBurrito.svg";
import MuttonBurrito from "@/images/menuimages/MuttonBurrito.svg";
import PannerBurrito from "@/images/menuimages/PannerBurrito.svg";
import MushroomBurrito from "@/images/menuimages/MushroomBurrito.svg";
import BrocolliBurrito from "@/images/menuimages/BrocolliBurrito.svg";
import MalaxiangGuo from "@/images/menuimages/MalaxiangGuo.svg";
import VegHummusBuddhaBowl from "@/images/menuimages/VegHummusBowl.svg";
import ChickenHummusBuddhaBowl from "@/images/menuimages/ChickenHummusBowl.svg";
import SingaporeLaksa from "@/images/menuimages/SingaporeLaksa.svg";
import Fiesta from "@/images/menuimages/fiesta.svg";
import ChickenNachos from "@/images/menuimages/ChickenNachos.svg";
import PannerNachos from "@/images/menuimages/PannerNachos.svg";
import ButterChickenNachos from "@/images/menuimages/ButterChickenNachos.svg";
import BBQCHickenNachos from "@/images/menuimages/BBQChickenNachos.svg";
import MushroomNachos from "@/images/menuimages/MushroomNachos.svg";
import BroccoliNachos from "@/images/menuimages/BroccolliNachos.svg";
import Chickentaco from "@/images/menuimages/ChickenTaco.svg";
import Muttontaco from "@/images/menuimages/MuttonTaco.svg";
import EggTaco from "@/images/menuimages/EggTaco.svg";
import Paneertaco from "@/images/menuimages/PaneerTaco.svg";
import MushroomTaco from "@/images/menuimages/MushroomTaco.svg";
import BroccoliTaco from "@/images/menuimages/BroccoliTaco.svg";
import VegOuesadilla from "@/images/menuimages/VegQuesadilla.svg";
import ChickenQuesadilla from "@/images/menuimages/ChickenQuesadilla.svg";
import AppleSmoothie from "@/images/menuimages/AppleSmoothie.svg";
import BananaSmoothie from "@/images/menuimages/BananaSmoothie.svg";
import MangoSmoothie from "@/images/menuimages/MangoSmoothie.svg";
import ChocolateSmoothie from "@/images/menuimages/ChocolateSmoothie.svg";

interface tabItem {
  imagesrc: { src: string };
  title: string;
  content: string;
  price: string;
  rating: string;
  reviews: string;
  url: string;
}

export const Main: Array<tabItem> = [
  {
    imagesrc: ChickenBurrito,
    title: "Chicken Burrito/Bowl",
    content: "Tortilla roll infused with chicken and veggies",
    price: "₹239",
    rating: "5.0",
    reviews: "87",
    url: "#",
  },
  {
    imagesrc: MuttonBurrito,
    title: "Mutton Burrito/Bowl",
    content: "Tortilla roll infused with chicken and veggies",
    price: "₹330",
    rating: "4.8",
    reviews: "32",
    url: "#",
  },
  {
    imagesrc: PannerBurrito,
    title: "Panner Burrito/Bowl",
    content: "Hamburger & Fries",
    price: "₹7.99",
    rating: "4.9",
    reviews: "89",
    url: "#",
  },
  {
    imagesrc: MushroomBurrito,
    title: "Mushroom Burrito/Bowl",
    content: "Crispy Soyabeans",
    price: "₹8.99",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
  {
    imagesrc: BrocolliBurrito,
    title: "Brocolli Burrito/Bowl",
    content: "Roasted Chicken & Egg",
    price: "₹7.99",
    rating: "4.2",
    reviews: "19",
    url: "#",
  },
  {
    imagesrc: ChickenBurrito,
    title: "Egg Burrito/Bowl",
    content: "Deepfried Chicken",
    price: "₹2.99",
    rating: "5.0",
    reviews: "61",
    url: "#",
  },
  {
    imagesrc: MalaxiangGuo,
    title: "Mala Xiong Guo",
    content: "Mexican Chilli",
    price: "₹3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
  },
  {
    imagesrc: VegHummusBuddhaBowl,
    title: "Hummus Buddha bowl (veg)",
    content: "Mexican Chilli",
    price: "₹3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
  },
  {
    imagesrc: ChickenHummusBuddhaBowl,
    title: "Chicken Hummus Buddha bowl",
    content: "Mexican Chilli",
    price: "₹3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
  },
  {
    imagesrc: SingaporeLaksa,
    title: "Singapore Laksa",
    content: "Mexican Chilli",
    price: "₹3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
  },
  {
    imagesrc: VegOuesadilla,
    title: "Veg Quesadillas",
    content: "Mexican Chilli",
    price: "₹3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
  },
  {
    imagesrc: ChickenQuesadilla,
    title: "Chicken Quesadillas",
    content: "Mexican Chilli",
    price: "₹3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
  },
];
export const Nachos: Array<tabItem> = [
  {
    imagesrc: Fiesta,
    title: "Nachos Fiesta",
    content: "Tomato Salad & Carrot",
    price: "₹5.99",
    rating: "5.0",
    reviews: "87",
    url: "#",
  },
  {
    imagesrc: ChickenNachos,
    title: "Spicy Chicken Nachos Bowl",
    content: "Cheese Pizza",
    price: "₹2.99",
    rating: "4.8",
    reviews: "32",
    url: "#",
  },
  {
    imagesrc: PannerNachos,
    title: "Spicy Panner Nachos Bowl",
    content: "Hamburger & Fries",
    price: "₹7.99",
    rating: "4.9",
    reviews: "89",
    url: "#",
  },
  {
    imagesrc: ButterChickenNachos,
    title: "Butter Chicken Nachos Bowl",
    content: "Crispy Soyabeans",
    price: "₹8.99",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
  {
    imagesrc: BBQCHickenNachos,
    title: "Barbeque Chicken Nachos Bowl",
    content: "Roasted Chicken & Egg",
    price: "₹7.99",
    rating: "4.2",
    reviews: "19",
    url: "#",
  },
  {
    imagesrc: MushroomNachos,
    title: "Mushroom Nachos Bowl",
    content: "Deepfried Chicken",
    price: "₹2.99",
    rating: "5.0",
    reviews: "61",
    url: "#",
  },
  {
    imagesrc: BroccoliNachos,
    title: "Broccoli Nachos Bowll",
    content: "Mexican Chilli",
    price: "₹3.99",
    rating: "4.2",
    reviews: "95",
    url: "#",
  },
];
export const Taco: Array<tabItem> = [
  {
    imagesrc: Chickentaco,
    title: "Chicken Taco",
    content: "Tomato Salad & Carrot",
    price: "₹5.99",
    rating: "5.0",
    reviews: "87",
    url: "#",
  },
  {
    imagesrc: Muttontaco,
    title: "Mutton Taco",
    content: "Cheese Pizza",
    price: "₹2.99",
    rating: "4.8",
    reviews: "32",
    url: "#",
  },
  {
    imagesrc: EggTaco,
    title: "Egg Taco",
    content: "Hamburger & Fries",
    price: "₹7.99",
    rating: "4.9",
    reviews: "89",
    url: "#",
  },
  {
    imagesrc: Paneertaco,
    title: "Paneer Taco",
    content: "Crispy Soyabeans",
    price: "₹8.99",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
  {
    imagesrc: MushroomTaco,
    title: "Mushroom Taco",
    content: "Roasted Chicken & Egg",
    price: "₹7.99",
    rating: "4.2",
    reviews: "19",
    url: "#",
  },
  {
    imagesrc: BroccoliTaco,
    title: "Roasted Broccoli Taco",
    content: "Deepfried Chicken",
    price: "₹2.99",
    rating: "5.0",
    reviews: "61",
    url: "#",
  },
];
export const Smoothie: Array<tabItem> = [
  {
    imagesrc: AppleSmoothie,
    title: "Apple Smoothie",
    content: "Tomato Salad & Carrot",
    price: "₹5.99",
    rating: "5.0",
    reviews: "87",
    url: "#",
  },
  {
    imagesrc: BananaSmoothie,
    title: "Banana Smoothie",
    content: "Cheese Pizza",
    price: "₹2.99",
    rating: "4.8",
    reviews: "32",
    url: "#",
  },
  {
    imagesrc: MangoSmoothie,
    title: "Mango Smoothie",
    content: "Hamburger & Fries",
    price: "₹7.99",
    rating: "4.9",
    reviews: "89",
    url: "#",
  },
  {
    imagesrc: ChocolateSmoothie,
    title: "Chocolate smoothie",
    content: "Crispy Soyabeans",
    price: "₹8.99",
    rating: "4.6",
    reviews: "12",
    url: "#",
  },
];
