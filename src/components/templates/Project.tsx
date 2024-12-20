"use client";

import React, { useEffect, useState } from "react";

import ProjectCard from "../fragments/ProjectCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { projects } from "@/data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface Project {
  image: string;
  isVideo: boolean;
  title?: string;
}

export interface ProjectsData {
  [key: string]: Project[];
}

const ProjectPage = () => {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const openPreview = (project: Project) => {
    setPreviewProject(project);
  };

  const closePreview = () => {
    setPreviewProject(null);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-6 py-24">
        <div className="space-y-4 mb-16">
          <div className="flex items-center space-x-4">
            <div className="h-1 w-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full" />
            <h1 className="text-4xl font-bold text-white">Projects</h1>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Explore my latest projects and technical work. Each project
            represents my passion for creating innovative solutions.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="bg-gray-800/50 border border-gray-700">
            {Object.keys(projects).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={cn(
                  "data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400",
                  "text-gray-400"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(projects).map(([category, projectList]) => (
            <TabsContent key={category} value={category}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={32}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                }}
                className="w-full"
              >
                {projectList.map((project, index) => (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project} openPreview={openPreview} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {previewProject && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
          onClick={closePreview}
        >
          <div
            className="relative bg-gray-900 p-6 rounded-lg max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
            >
              ✕
            </button>
            {previewProject.isVideo ? (
              <video
                src={previewProject.image}
                controls
                className="w-full rounded-md h-auto"
              />
            ) : (
              <Image
                src={previewProject.image}
                alt={previewProject.title || "Preview image"}
                width={1000}
                height={1000}
                className="rounded-md w-full h-auto"
              />
            )}
            {previewProject.title && (
              <h3 className="mt-4 text-lg font-semibold text-white">
                {previewProject.title}
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
