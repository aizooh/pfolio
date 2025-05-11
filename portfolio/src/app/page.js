// src/app/page.js
import Image from "next/image";
import dynamic from 'next/dynamic'; // Add dynamic import
import bg from "@/public/background/home-background.png"; // Import the background image
import RenderModel from "@/components/RenderModel"; // Import the RenderModel component
import Wizard from "@/componentsmodels/wizard.png"; // Import the wizard image

// Dynamically import RenderModel with SSR disabled
const RenderModel = dynamic(
  () => import('@/components/RenderModel'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src="/background/home-background.png"
        alt="background-image"
        layout="fill"
        objectFit="cover"
        fill className="-z-50 w-full h-screen object-cover object-center opacity-25"
        priority
      />
      <div className="w-full h-screen">
        <RenderModel>
          <wizard/>
          </RenderModel>
      </div>
    </main>
  );
}