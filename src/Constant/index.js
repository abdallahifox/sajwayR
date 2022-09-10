//TODO: Resoruces Image
import ChoseFood from "./../assets/chooseFoodicon.png";
import PlaceOrder from "./../assets/placeOrdericon.png";
import GoIcon from "./../assets/goicon.png";

export const navLinks = [
  {
    id: "home-1",
    title: "Home",
    link: "/",
  },
  {
    id: "about-1",
    title: "About",
    link: "/about",
  },
  {
    id: "Menus-1",
    title: "Today's Menus",
    link: "menus",
  },
  {
    id: "contact-1",
    title: "Contact",
    link: "/contact",
  },
];

export const navLinksMobile = [
  {
    id: "home-1",
    title: "Home",
    link: "/",
    icon: "https://api.iconify.design/eva:home-outline.svg?color=%23ffffff",
  },
  {
    id: "about-1",
    title: "About",
    link: "/about",
    icon: "https://api.iconify.design/eva:info-outline.svg?color=%23ffffff",
  },
  {
    id: "Menus-1",
    title: "Menus",
    link: "/menus",
    icon: "https://api.iconify.design/ic:twotone-restaurant-menu.svg?color=%23ffffff",
  },
];

export const choseFoodSection = [
  {
    id: "choseFood",
    title: "Choose Food",
    desc: "It is a long establed fact <br/> will distracted readable <br/> looking at layou.",
    image: ChoseFood,
  },
  {
    id: "PlaceOrder",
    title: "Place Order",
    desc: "It is a long establed fact <br/> will distracted readable <br/> looking at layou.",
    image: PlaceOrder,
  },
  {
    id: "GoIcon",
    title: "Receive & Go",
    desc: "It is a long establed fact <br/> will distracted readable <br/> looking at layou.",
    image: GoIcon,
  },
];

export const menus = [
  {
    id: "1",
    name: "Chicken",
    image: "https://via.placeholder.com/183x273",
    catigory: "meals",
    special: true,
  },
  {
    id: "12",
    name: "Shawrma",
    image: "https://via.placeholder.com/183x273",
    catigory: "Shandwitch",
    special: false,
  },
];
