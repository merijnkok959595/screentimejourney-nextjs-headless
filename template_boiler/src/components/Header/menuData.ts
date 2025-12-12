import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "About Me",
    newTab: false,
    path: "/about-me",
  },
  {
    id: 2,
    title: "Start Now",
    newTab: false,
    path: "/product/screentimejourney",
  },
  {
    id: 3,
    title: "Milestones",
    newTab: false,
    path: "/milestones",
  },
  {
    id: 4,
    title: "Leaderboard",
    newTab: false,
    path: "/leaderboard",
  },
  {
    id: 5,
    title: "More",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 51,
        title: "FAQ",
        newTab: false,
        path: "/faq",
      },
      {
        id: 52,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 53,
        title: "Job Opportunities",
        newTab: false,
        path: "/job-opportunities",
      },
      {
        id: 54,
        title: "Blog",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 55,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
    ],
  },
];
