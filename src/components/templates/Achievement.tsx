import React from "react";
import Image from "next/image";

const Achievement = () => {
  const achievements = [
    {
      image: "/images/design-award.png",
      title: "Juara Harapan 3 Design Packaging",
      description: "Expo dan Pekan Ilmiah Mahasiswa - Politeknik Negeri Jember",
    },
    {
      image: "/images/cert1.png",
      title: "Sertifikat Apresiasi",
      description: "Seminar Teknologi dan Seni",
    },
    {
      image: "/images/cert2.png",
      title: "Sertifikat Apresiasi",
      description: "Design Competition",
    },
    {
      image: "/images/cert3.png",
      title: "Sertifikat Penghargaan",
      description: "Nominasi Peserta Terbaik Lomba Menulis Online",
    },
    {
      image: "/images/cert4.png",
      title: "Sertifikat Penghargaan",
      description: "Nominasi Peserta Terbaik Lomba Menulis Online",
    },
    {
      image: "/images/upskill1.png",
      title: "Sertifikat Upskill",
      description: "Panduan Dasar Editing dengan Capcut Desktop",
    },
    {
      image: "/images/upskill2.png",
      title: "Sertifikat Upskill",
      description: "Panduan Cara dari Nol Mendisain dengan Mudah untuk Pemula",
    },
    {
      image: "/images/upskill3.png",
      title: "Sertifikat Upskill",
      description: "Panduan Dasar Editing pada Capcut Mobile",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A051E] via-[#1A0B3E] to-[#0A051E] text-white py-24">
      <div className="container mx-auto px-6 mt-10">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Achievement
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-pink-600 rounded-full" />
            <div className="w-4 h-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A051E] via-[#0A051E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 w-full">
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-600">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
