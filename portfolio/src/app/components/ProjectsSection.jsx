// ProjectsSection.jsx
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NETFLIXGPT",
    description: "Netflix Clone Application, powered by the GPT-3.5-turbo API.",
    role: "Full Stack Engineer",
    image: "/images/projects/netflixgpt.PNG", // Update or ensure correct image paths
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/av0907/React/tree/main/netflixgpt",
    previewUrl: "https://example.com/preview1", // Replace with actual preview link if available
  },
  {
    id: 2,
    title: "Food Delivery Website",
    description: "Application similar to UberEats to order food from restaurants.",
    role: "Frontend Developer",
    image: "/images/projects/speedeats.PNG",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/av0907/React/tree/main/speed_eats",
    previewUrl: "https://example.com/preview2",
  },
  {
    id: 3,
    title: "Code Editor",
    description: "Web-based editor for HTML, CSS and Javascript using React.js and CodeMirror.",
    role: "Frontend Developer",
    image: "/images/projects/codeeditor.PNG",
    tag: ["All", "Reat.js"],
    gitUrl: "https://github.com/av0907/React/tree/main/Code_Editor",
    previewUrl: "https://example.com/preview3",
  },
  {
    id: 4,
    title: "Bug Hound",
    description: "Application to track and resolve bugs.",
    role: "Frontend Developer",
    image: "/images/projects/bughound.PNG",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/av0907/React/tree/main/BugHound",
    previewUrl: "https://example.com/preview4",
  },
  /*{
    id: 5,
    title: "We Go Jim",
    description: "App for gym enthusiasts.",
    role: "UI/UX Designer & Frontend Developer",
    image: "/images/projects/GYM.webp",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Akshith2307/We-Go-Jim",
    previewUrl: "https://example.com/preview5",
  },
  {
    id: 6,
    title: "Spotify Dashboard",
    description: "Dashboard for Spotify analytics.",
    role: "Data Analyst",
    image: "/images/projects/Spotify.webp",
    tag: ["All", "Analytics"],
    gitUrl: "https://github.com/Akshith2307/Spotify-Dashboard",
    previewUrl: "https://example.com/preview6",
  },*/
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
/*
<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={() => handleTagChange("Machine Learning")} name="Machine Learning" isSelected={tag === "Machine Learning"} />
        <ProjectTag onClick={() => handleTagChange("Analytics")} name="Analytics" isSelected={tag === "Analytics"} />
        <ProjectTag onClick={() => handleTagChange("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
        
      </div>
      */
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">MY PROJECTS</h2>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              role={project.role}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
