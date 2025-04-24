import {
  appleImg,
  bagImg,
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  searchImg,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  { type: "image", value: appleImg, alt: "Apple", width: 12, height: 16 },
  { type: "text", value: "Store" },
  { type: "text", value: "Mac" },
  { type: "text", value: "iPad" },
  { type: "text", value: "iPhone" },
  { type: "text", value: "Watch" },
  { type: "text", value: "Vision" },
  { type: "text", value: "AirPods" },
  { type: "text", value: "TV & Home" },
  { type: "text", value: "Accessories" },
  { type: "text", value: "Support" },
  { type: "image", value: searchImg, alt: "Search", width: 14, height: 14 },
  { type: "image", value: bagImg, alt: "Bag", width: 14, height: 14 },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "The first iPhone built",
      "for Apple Intelligence.",
      "Personal, private,",
      "powerful.",
    ],
    video: highlightFirstVideo,
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: [
      "So fast. so fluid.",
      "Get a feel for the all-new",
      "Camera Control",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "4K 120 fps Dolby Vision.",
      "4 studio-quality mics.",
      "A Pro studio in your pocket.",
    ],
    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: [
      "All-new A18 Pro chip powers",
      "Unrivalled intelligence. And",
      "unprecedented performance.",
    ],
    video: highlightFourthVideo,
    videoDuration: 5,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 16 Pro in Natural Titanium",
    color: ["#C2BCB2", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 16 Pro in Desert Titanium",
    color: ["#BFA48F", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 16 Pro in White Titanium",
    color: ["#F2F1ED", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 16 Pro in Black Titanium",
    color: ["#3C3C3D", "#3b3b3b", "#181819"],
    img: blackImg,
  },
  {
    id: 5,
    title: "iPhone 16 Pro in Blue Titanium",
    color: ["#7D8ED1", "#3b3b3b", "#181819"],
    img: blueImg,
  },
];

export const sizes = [
  { label: '6.3"', value: "small" },
  { label: '6.9"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
