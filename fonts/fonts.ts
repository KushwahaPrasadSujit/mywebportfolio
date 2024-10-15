import { Inter, Roboto, Source_Code_Pro } from "next/font/google";

export const sourceCodePro = Source_Code_Pro({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal"],
});
