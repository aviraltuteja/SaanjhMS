import { Cormorant_Garamond, Poppins, Ms_Madi } from "next/font/google";

export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600"],
  style: ["italic", "normal"],
  display: "swap",
});

export const sans_serif = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600", "100", "200"],
  style: ["italic", "normal"],
  display: "swap",
});
export const cursive = Ms_Madi({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});
