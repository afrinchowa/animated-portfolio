/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineCheckCircle } from "react-icons/md";

// Modal Component to display Project details
const ProjectModal = ({ project, onClose, isOpen }: { project: any; onClose: () => void; isOpen: boolean }) => {
  useEffect(() => {
    if (isOpen) {
      // Disable scroll on body when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll when modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount or modal close
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="bg-[#0f0f1b] text-white p-6 rounded-xl max-w-6xl w-full h-full overflow-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <button onClick={onClose} className="text-white text-xl font-semibold">
            X
          </button>
        </div>

        {/* Hero Image */}
        <img
          src={project.img}
          alt="Project Hero"
          className="w-full rounded-xl shadow-lg mb-8"
        />

        {/* Overview */}
        <p className="text-lg text-gray-300 mb-8">{project.overview}</p>

        {/* Tech Icons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {project.iconLists.map((icon: string, idx: number) => (
            <img
              key={idx}
              src={icon}
              alt={`tech-${idx}`}
              className="w-10 h-10 bg-black p-2 rounded-full border border-white/20"
            />
          ))}
        </div>

        {/* Screenshots Grid */}
        {project.screenshots && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {project.screenshots.map((src: string, i: number) => (
              <img
                key={i}
                src={src}
                alt={`screenshot-${i}`}
                className="rounded-lg border border-white/10 hover:scale-105 transition-transform"
              />
            ))}
          </div>
        )}

        {/* Details Sections */}
        <div className="space-y-8 bg-white/5 p-6 rounded-xl shadow-xl">
          <Section title="Technologies Used" items={project.technologies} />
          <Section title="Core Features" items={project.features} />
          <Section title="Major Challenges" items={project.challenges} />
          <Section title="Future Plans" items={project.futurePlans} />
        </div>

        {/* Visit Site Button */}
        <div className="mt-10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg transition"
          >
            Visit Live Site <FaLocationArrow />
          </a>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-3 text-purple-400">{title}</h2>
    <ul className="list-none space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-gray-300">
          <MdOutlineCheckCircle className="text-green-400 mt-1" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectModal;
