import Image from "next/image";
import { Inter } from "next/font/google";
import Balatro from "@/components/Balatro";

const interfont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div
      className={`${interfont.className} items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] w-full`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full bg-[#001852]">
        <div className="w-full h-[100vh] relative">
          <h1 className="text-[84px] font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            LegendTruck
          </h1>
        </div>
        <div className="w-full h-[600px] relative">
          <Balatro
            isRotate={false}
            mouseInteraction={false}
            pixelFilter={700}
            style={{ height: "600px", width: "100%", position: "absolute", top: 0, left: 0 }}
            color1="#1347c9"
            color2="#f3bb90"
            color3="#ffffff"
          />
          <h1 className="text-[84px] font-extrabold absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 ml-10 text-[#001852]">
            Your ultimate RC car, packed with AI features.
          </h1>
        </div>
      </main>
    </div>
  );
}
