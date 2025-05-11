/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { companies, skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-10  dark:bg-[#0f0f0f]">
      {/* Section Heading */}
      <h1 className="heading text-center mb-12">
        Skills That <span className="text-purple">Power My Work</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Infinite Cards Section (Unchanged) */}
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={skills} direction="right" speed="slow" />
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className=" dark:bg-[#1c1c1c] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{skill.level}</p>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{skill.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{skill.items}</p>
            </motion.div>
          ))}
        </div>

        {/* Companies Section */}
        <div className="mt-20 w-full text-center">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">
            Tools & Companies I’ve Worked With
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {companies.map((company) => (
              <div key={company.id} className="flex flex-col items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-14 h-14 md:w-20 md:h-20 object-contain"
                />
                <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
