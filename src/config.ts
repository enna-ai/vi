import type { Site } from "./types";

export const SITE: Site = {
  website: "https://ventries.vercel.app",
  author: "enna-ai",
  desc: "Blog",
  title: "V's Blog",
  ogImage: "fishcake.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
