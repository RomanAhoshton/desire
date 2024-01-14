import {
  headerLogo,
  footerFacebook,
  footerInstagram,
  footerPinterest,
  footerYoutube,
  footerWhatsApp,
  HowWorksImages,
} from "../images";

import { HOME, ABOUT, GALLERY, CONTACT } from "./routes";

export const menuLinks = [
  {
    name: "Home",
    href: HOME,
  },
  {
    name: "About",
    href: ABOUT,
  },

  {
    logo: headerLogo,
    href: HOME,
  },
  {
    name: "Gallery",
    href: GALLERY,
  },
  {
    name: "Contact",
    href: CONTACT,
  },
];

export const footerSocialLinks = [
  {
    link: "Facebook",
    image: footerFacebook,
    href: "/",
  },
  {
    link: "Instagram",
    image: footerInstagram,
    href: "/",
  },
  {
    link: "Pinterest",
    image: footerPinterest,
    href: "/",
  },
  {
    link: "WhatsApp",
    image: footerWhatsApp,
    href: "/",
  },
  {
    link: "Youtube",
    image: footerYoutube,
    href: "/",
  },
];

export const footerLinks = [
  {
    link: "Delivery",
    href: "/",
  },
  {
    link: "FAQ",
    href: "/",
  },
  {
    link: "Help",
    href: "/",
  },
  {
    link: "More About Us",
    href: "/",
  },
];

export const howItWorks = [
  {
    image: HowWorksImages.first,
    title: "Designer Consultation",
    description:
      "Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
  },

  {
    image: HowWorksImages.second,
    title: "Production",
    description: "Everyday carry actually neutra authentic kogi shabby chic",
  },
  {
    image: HowWorksImages.third,
    title: "Measurements",
    description:
      "Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
  },
];

export const filteringButton = [
  { type: "Chairs" },
  { type: "Sofa" },
  { type: "Table" },
  { type: "All" },
];

export const contactSocial = [
  {
    image: footerFacebook,
    href: "/",
  },
  {
    image: footerInstagram,
    href: "/",
  },
  {
    image: footerPinterest,
    href: "/",
  },
  {
    image: footerWhatsApp,
    href: "/",
  },
  {
    image: footerYoutube,
    href: "/",
  },
];
