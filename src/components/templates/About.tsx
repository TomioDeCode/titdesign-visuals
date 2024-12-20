import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen bg-[#0A051E] text-white py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center mb-20">
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/about.png"
            alt="Profile"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-red-600 text-2xl font-bold">About Me</h2>
          <h1 className="text-5xl font-bold">
            Hai, nama saya
            <div className="text-red-600 mt-2">Tito Bryan Ardiansyah</div>
          </h1>
          <p className="text-xl text-gray-300">
            Saya seorang pelajar dan grafik desain asal Jember, Jawa Timur,
            Indonesia.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Software</h3>
            <div className="flex gap-4">
              <Image
                src="/images/figma.png"
                alt="Figma"
                width={50}
                height={50}
              />
              <Image
                src="/images/photoshop.png"
                alt="Photoshop"
                width={50}
                height={50}
              />
              <Image
                src="/images/coreldraw.png"
                alt="CorelDraw"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">
          Jenjang <span className="text-red-600">Pendidikan</span>
        </h2>
        <h3 className="text-xl text-gray-300 mb-12">
          Berikut adalah sekolah dan pendidikan yang saya tempuh
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: "/images/sdn.jpg",
              name: "SDN Yosoroti 01 Sumber-Baru",
            },
            {
              image: "/images/smp.jpg",
              name: "SMPN 01 Sumber-Baru",
            },
            {
              image: "/images/smk.jpg",
              name: "SMKN 6 Jember",
            },
          ].map((school, index) => (
            <div key={index} className="rounded-3xl overflow-hidden shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-[#1E0A2C]">
                <h4 className="text-lg font-medium">{school.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
