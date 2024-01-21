import {
  whatsapp,
  facebook,
  shieldTick,
  support,
  truckFast,
} from "../assets/icons";
import {
  customer1,
  customer2,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  Image1,
  Image2,
  Image3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: Image1,
    bigShoe: Image1,
  },
  {
    thumbnail: Image2,
    bigShoe: Image2,
  },
  {
    thumbnail: Image3,
    bigShoe: Image3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: Image1,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: Image2,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: Image3,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: Image1,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  // {
  //   title: "Products",
  //   links: [
  //     { name: "Air Force 1", link: "/" },
  //     { name: "Air Max 1", link: "/" },
  //     { name: "Air Jordan 1", link: "/" },
  //     { name: "Air Force 2", link: "/" },
  //     { name: "Nike Waffle Racer", link: "/" },
  //     { name: "Nike Cortez", link: "/" },
  //   ],
  // },
  // {
  //   title: "Help",
  //   links: [
  //     { name: "About us", link: "/" },
  //     { name: "FAQs", link: "/" },
  //     { name: "How it works", link: "/" },
  //     { name: "Privacy policy", link: "/" },
  //     { name: "Payment policy", link: "/" },
  //   ],
  // },
  {
    title: "Hours of Operation",
    links: [
      { name: "Monday - Saturday :	8:30 AM – 5:00PM" },

      { name: "Sunday: Holiday" },
    ],
  },
  {
    title: "Get Direction",
    links: [
      {
        name: "S V Road, Angol Road Belgaum, Karnataka 590006",
        link: "https://www.google.com/maps/dir//R+V+Engineering+Works/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbf669f5095362f:0x52a0bba40bf5e482!2m2!1d74.50466899999999!2d15.850359999999998",
      },

      { name: "Call : 0831 248 0056", link: "tel:0831 248 0056" },
    ],
  },
];

export const socialMedia = [
  { src: whatsapp, alt: "whatsapp logo", name: "9880975593" },
  // { src: facebook, alt: "facebook logo" },
  // { src: twitter, alt: "twitter logo" },
];

export const footerTimings = [];
