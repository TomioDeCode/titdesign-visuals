import Image from "next/image";
import React from "react";

export const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0A051E] via-[#1E0A2C] to-[#260A2C]">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-pink-600">
            <Image
              src="/images/home.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="font-semibold -mb-12 -mt-10 text-white text-[96px]">
            Hai{" "}
            <span className="text-red-600 text-[96px]">Semuanya!</span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-md">
            Jangan salfok fotoku ya, kalo kamu salting aku ga tanggung jawab
          </p>
        </div>
      </div>
    </div>
  );
};