import { Scissors, Sparkles, Brush, Layers, Baby, Ruler } from "lucide-react";

export const SITE = {
  name: "Mr. Fresh Barbershop",
  phone: "(253) 246-7232",
  tel: "+12532467232",
  address: ["1601 W Meeker St", "Kent, WA 98032"],
  booksy:
    "https://booksy.com/en-us/rwg/1192121_mr-fresh-barbershop_barber-shop_39198_kent",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=1601+W+Meeker+St,+Kent,+WA+98032",
  closesToday: "Closes 7 PM",
  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
};

export const NAV = [
  "Home",
  "Services",
  "About",
  "Gallery",
  "Reviews",
  "Location",
];

// TODO: set real prices; leave "" to show "View price / Book"
export const SERVICES = [
  {
    name: "Haircut",
    icon: Scissors,
    desc: "Clean, precise haircut tailored to your style.",
    price: "",
  },
  {
    name: "Skin Fade",
    icon: Sparkles,
    desc: "Sharp fade with detailed blending and finishing.",
    price: "",
  },
  {
    name: "Beard Trim",
    icon: Brush,
    desc: "Professional beard shaping and cleanup.",
    price: "",
  },
  {
    name: "Haircut + Beard",
    icon: Layers,
    desc: "The complete grooming package.",
    price: "",
  },
  {
    name: "Kids Haircut",
    icon: Baby,
    desc: "Clean, stylish cuts for younger clients.",
    price: "",
  },
  {
    name: "Line Up",
    icon: Ruler,
    desc: "Sharp edges and detailed finishing.",
    price: "",
  },
];

// PLACEHOLDERS — replace with real team members and photos
export const BARBERS = [1, 2, 3].map(() => ({
  name: "Barber name",
  specialty: "Specialty goes here",
  bio: "Placeholder profile. Add a short bio for your barber.",
  photo: "",
}));

// GALLERY
// Replace these URLs with downloaded/local images later if desired.
export const GALLERY = [
  {
    label: "Fresh Fade",
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=85",
    tall: true,
  },
  {
    label: "Classic Haircut",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85",
    tall: false,
  },
  {
    label: "Beard Grooming",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85",
    tall: true,
  },
  {
    label: "Barber Chair",
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85",
    tall: false,
  },
  {
    label: "Barber Tools",
    src: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1200&q=85",
    tall: false,
  },
  {
    label: "Barbershop",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
    tall: true,
  },
  {
    label: "Precision Cut",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    tall: false,
  },
  {
    label: "Fresh Finish",
    src: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=85",
    tall: true,
  },
];

// PLACEHOLDERS — replace with real Google reviews
export const REVIEWS = [1, 2, 3, 4].map(() => ({
  name: "Customer name",
  text: "Placeholder: paste a real customer review here.",
}));

export const HOURS = [
  ["Monday", "Confirm hours"],
  ["Tuesday", "Confirm hours"],
  ["Wednesday", "Confirm hours"],
  ["Thursday", "Confirm hours"],
  ["Friday", "Confirm hours"],
  ["Saturday", "Confirm hours"],
  ["Sunday", "Confirm hours"],
];
