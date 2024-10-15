import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { FaMedium, FaXTwitter } from "react-icons/fa6";

export const menuList = [
  {
    id: 1,
    name: "About",
    key: "aboutSection"
  },
  {
    id: 2,
    name: "Experience",
    key: "experienceSection"
  },
  {
    id: 3,
    name: "Projects",
    key: "projectSection"
  },
  {
    id: 4,
    name: "Blogs",
    key: "blogsSection"
  },
];

export const socialMedia = [
  {
    id: 1,
    title: "Github",
    icon: <FaGithub />,
    link: "https://github.com/SujitPrasaddKushwaha"
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sujit-prasad-kushwaha-499693170/"
  },
  {
    id: 3,
    title: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/kushwaha.prasad.sujit/"
  },
  {
    id: 4,
    title: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@roniejo.rm"
  },
  {
    id: 5,
    title: "Facebook",
    icon: <FaFacebookSquare />,
    link: "https://www.facebook.com/ohboieeee"
  },
  // {
  //   id: 6,
  //   title: "Twitter",
  //   icon: <FaXTwitter />,
  // },
];
