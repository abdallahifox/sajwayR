//TODO: Resoruces Image
import ChoseFood from "./../assets/chooseFoodicon.png";
import PlaceOrder from "./../assets/placeOrdericon.png";
import GoIcon from "./../assets/goicon.png";
import OurStory from "./../assets/ourStory.png";
import OurMission from "./../assets/OurMission.png";
import OurVission from "./../assets/ourVission.png";

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
  //image must be 200x300
  {
    id: "1",
    name: "Chicken",
    image:
      "https://cdn-icons-png.flaticon.com/512/1255/1255229.png?w=740&t=st=1662865527~exp=1662866127~hmac=832bd6f95708cd2bcd79cfaaad65ec0ebd669a53699764c245a58641b1b3c571",
    catigory: "meals",
    special: true,
    price: "89.00",
    ingrediants: ["1x Chicken", "Cheese", "Fires", "Tomato"],
  },
  {
    id: "12",
    name: "Burger Mood",
    image:
      "https://cdn-icons-png.flaticon.com/512/1256/1256423.png?w=740&t=st=1662865589~exp=1662866189~hmac=fb9962bfe8f076d9bf1a392155054bffa1c04548416bda65a85d5438a8d0aff3",
    catigory: "Shandwitch",
    special: false,
    price: "50.00",
    ingrediants: ["1x Chicken/Beef", "Chesse", "Tomato"],
  },
  {
    id: "2",
    name: "Pizza",
    image:
      "https://cdn-icons-png.flaticon.com/512/1205/1205772.png?w=740&t=st=1662865718~exp=1662866318~hmac=b61cb7f236b75510c81b12c05bfd007d8c4d048785a7f25e542521a9909d1adb",
    catigory: "Pizza",
    special: false,
    price: "50.00",
    ingrediants: ["Pizza, 1x Soda Cola"],
  },
  {
    id: "3",
    name: "Donats",
    image:
      "https://cdn-icons-png.flaticon.com/512/1231/1231317.png?w=740&t=st=1662865669~exp=1662866269~hmac=16c4497ca628c8a429b6a56c8ca25fd99ecdb482e256eca702c4339c323ae718",
    catigory: "dessert",
    special: false,
    price: "50.00",
    ingrediants: ["Donats, chooco"],
  },
  {
    id: "4",
    name: "Humburger Hot Dog",
    image: "https://cdn-icons-png.flaticon.com/512/1249/1249335.png",
    catigory: "shandwitch",
    special: false,
    price: "50.00",
    ingrediants: ["1x burger", "Cheese", "Fires", "Tomato"],
  },
];

export const aboutUs = [
  {
    id: "Our Story",
    title: " Sajway Have 3+ <br /> Years Of Experiance.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Libero corrupti eaque qui perspiciatis impedit odit culpa <br /> numquam tempore suscipit vel excepturi et ut teneturquod velit! Aliquam aliquid magnam laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Libero corrupti eaque qui perspiciatis impedit odit culpa,<br /> numquam tempore suscipit vel excepturi et ut tenetur quod velit! Aliquam aliquid magnam laudantium.",
    image: OurStory,
  },
  {
    id: "Our Mission",
    title: " Sajway Misson Is to <br /> Lorem ipsum dolor sit amet, ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Libero corrupti eaque qui perspiciatis impedit odit culpa <br /> numquam tempore suscipit vel excepturi et ut teneturquod velit! Aliquam aliquid magnam laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Libero corrupti eaque qui perspiciatis impedit odit culpa,<br /> numquam tempore suscipit vel excepturi et ut tenetur quod velit! Aliquam aliquid magnam laudantium.",
    image: OurMission,
  },
  {
    id: "Our Vission",
    title: "Sajway Vission Is to <br /> Lorem ipsum dolor sit amet, ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Libero corrupti eaque qui perspiciatis impedit odit culpa <br /> numquam tempore suscipit vel excepturi et ut teneturquod velit! Aliquam aliquid magnam laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Libero corrupti eaque qui perspiciatis impedit odit culpa,<br /> numquam tempore suscipit vel excepturi et ut tenetur quod velit! Aliquam aliquid magnam laudantium.",
    image: OurVission,
  },
];
