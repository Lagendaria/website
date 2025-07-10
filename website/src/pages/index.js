import { Inter } from "next/font/google";
import Balatro from "@/components/Balatro";
import ScrollVelocity from "@/components/ScrollVelocity";
import BlurText from "@/components/BlurText";
import SpotlightCard from "@/components/SpotlightCard";
import Model from "@/components/Model";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

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
        <div className="w-full h-[100vh] items-center justify-between flex flex-col overflow-x-hidden">
          <ScrollVelocity
            texts={['legendary', 'Carrr']}
            velocity={100}
            className="custom-scroll-text text-[#032f99]"
          />
          <div className="relative h-[600px] w-full flex flex-col items-center justify-center">
            <BlurText
              text="LegendTruck"
              delay={200}
              animateBy="letters"
              direction="bottom"
              className="text-[132px] mb-8 text-center text-white font-extrabold absolute"
            />
            <Canvas className="w-full absolute" gl={{
              toneMapping: THREE.ACESFilmicToneMapping
            }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={3} />
              <Model />
            </Canvas>
          </div>

          <ScrollVelocity
            texts={['Best thing frfr', 'You will LOVE it']}
            velocity={100}
            className="custom-scroll-text text-[#032f99]"
          />
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

        <div className="w-full h-[600px] items-center justify-center flex flex-row gap-[64px] p-20">
          <SpotlightCard className="h-[400px]">
            <h2 className="text-[40px] font-bold text-white mb-4">AI-Powered Navigation</h2>
            <p className="text-gray-300 text-[20px]">
              Paired with a camera, it allows the car to navigate autonomously through complex terrains, avoiding obstacles and adapting to its environment.
            </p>
          </SpotlightCard>
          <SpotlightCard className="h-[400px]">
            <h2 className="text-[40px] font-bold text-white mb-4">Controllers</h2>
            <p className="text-gray-300 text-[20px]">
              Control the car with voice or a controller via Wi-Fi, bluetooth or LoRa, making it versatile for different users and scenarios.
            </p>
          </SpotlightCard>
          <SpotlightCard className="h-[400px]">
            <h2 className="text-[40px] font-bold text-white mb-4">Stair Climbing</h2>
            <p className="text-gray-300 text-[20px]">
              Climb stairs and navigate uneven surfaces with ease, thanks to its advanced design and powerful motors.
            </p>
          </SpotlightCard>
        </div>
      </main>
    </div>
  );
}
