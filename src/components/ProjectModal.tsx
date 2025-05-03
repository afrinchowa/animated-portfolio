"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/index"; // adjust path if needed

type Project = typeof projects[0];

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">All Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer border rounded-lg shadow hover:shadow-lg transition"
          >
            <Image src={project.img} alt={project.title} width={500} height={300} className="rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.des.slice(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>

            <Image
              src={selectedProject.img}
              alt={selectedProject.title}
              width={600}
              height={400}
              className="rounded mb-4"
            />

            <p className="mb-4 text-gray-700">{selectedProject.des}</p>

            <div className="flex gap-3 flex-wrap mb-4">
              {selectedProject.iconLists.map((icon, idx) => (
                <Image key={idx} src={icon} alt="tech-icon" width={30} height={30} />
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
