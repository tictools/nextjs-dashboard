import { JetBrains_Mono, Montserrat, Roboto, Rubik } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });

export const jetBrainsMono = JetBrains_Mono({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const rubik = Rubik({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
});
