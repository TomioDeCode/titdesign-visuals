import Navbar from "@/components/fragments/Navbar";
import { Home } from "@/components/templates/Home";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black/90 text-white">
      <Navbar />
      <div className="relative z-10">
        <Home />
      </div>
    </main>
  );
};

export default page;