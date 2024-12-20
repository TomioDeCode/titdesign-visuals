/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Project {
  image: string;
  isVideo: boolean;
  title?: string;
  project: Project;
  openPreview: (project: Project) => void;
}

const ProjectCard: React.FC<Project> = ({ project, openPreview }) => {
  return (
    <div className="relative group">
      <div className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-all duration-300 group overflow-hidden">
        {project.isVideo ? (
          <div className="relative aspect-video overflow-hidden">
            <video
              src={project.image}
              autoPlay
              muted
              loop
              className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ) : (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title || "Project image"}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
      </div>
      <button
        onClick={() => openPreview(project)}
        className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
      >
        Preview
      </button>
    </div>
  );
};

export default ProjectCard;
