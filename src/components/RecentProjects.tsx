/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { projects } from "@/data";

import MagicButton from "./MagicButton";
import Modal from "./ProjectModal";


const RecentProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="py-20 relative z-0">
      <h1 className="heading text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center p-4 mt-12">
        {projects.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer w-[90vw] sm:w-[42rem] lg:w-[38rem] bg-[#13162D] rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple/20 transition-transform hover:scale-[1.015]"
          >
            <div className="relative rounded-2xl overflow-hidden h-64 mb-6">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>

            <h1 className="text-xl lg:text-xl font-bold text-white mb-2">
              {item.title}
            </h1>

            <p className="text-gray-300 text-base lg:text-lg mb-4 line-clamp-3">
              {item.des}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {item.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E2035] border border-white/20"
                >
                  <img src={icon} alt={`tech-${index}`} className="w-6 h-6" />
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button onClick={() => openModal(item)}>
                <MagicButton
                  title="View Details"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default RecentProjects;
