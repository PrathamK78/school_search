"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/addSchool");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #011 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 90% at 50% 100%, #011 60%, transparent 100%)",
    }}>
      {/* <div className="min-h-screen w-full relative"> */}
        {/* Azure Depths */}
        {/* <div
          className="absolute inset-0 z-0"
          
        /> */}
        {/* Your Content/Components */}


      {/* </div> */}
      <h1 className="text-4xl sm:text-4xl md:text-3xl text-center font-bold text-white mb-4">
        Welcome to Student Management System!
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center mb-6 px-4 sm:px-6 md:px-12 text-white">
        Manage your school&apos;s information efficiently.
      </p>
      <button onClick={handleGetStarted} className="bg-white text-blue-500 py-2 px-4 sm:py-2 md:py-4 md:px-8 rounded-lg hover:bg-gray-100">
        Get Started
      </button>
    </div>
  );
}
