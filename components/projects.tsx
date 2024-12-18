import { CodeXml } from "lucide-react";
import React from "react";
import ProjectCard from "./ui/project-card";
import { projects } from "@/data/data";

export default function Projects() {
  return (
    <div className="max-content-width overflow-hidden">
      <span className="flex gap-2 items-center text-primary">
        <CodeXml /> Projects
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.date} {...project} />
        ))}
      </div>
    </div>
  );
}
