import { Red_Hat_Display, Bebas_Neue } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
});

export {bebasNeue, redHatDisplay}