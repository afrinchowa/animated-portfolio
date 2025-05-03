/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div className="py-20 relative z-0">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title="Soya's Projects" href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`tech-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => openModal(item)}
                    className="inline-flex items-center px-4 py-2 bg-purple text-white rounded-lg text-sm"
                  >
                    View Details <FaLocationArrow className="ms-2" />
                  </button>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6">
          <div className="bg-[#1a1c2c] text-white p-6 rounded-xl w-full max-w-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl text-gray-300 hover:text-red-400"
            >
              ✕
            </button>
            <img src={selectedProject.img} alt="project-img" className="w-full mb-4 rounded-md" />
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="mb-4 text-gray-300">{selectedProject.des}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.iconLists.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`tech-${index}`}
                  className="w-10 h-10 bg-black p-2 rounded-full border border-white/20"
                />
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple text-white rounded-lg"
            >
              Visit Site <FaLocationArrow className="ms-2" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
