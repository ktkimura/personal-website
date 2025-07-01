"use client";

import { useState } from "react";

const projects = [
  {
    title: "Accessible Web App",
    description:
      "A React app focused on ARIA roles and keyboard accessibility.",
    media: "/images/project1.png",
    details:
      "This project was built to improve the web experience for users relying on assistive technologies. It uses semantic HTML, WAI-ARIA landmarks, and custom keyboard navigation.",
  },
  {
    title: "UX Research Dashboard",
    description: "A data dashboard designed for usability testing insights.",
    media: "/images/project2.png",
    details:
      "Built with Next.js and Tailwind CSS, this tool helps UX teams analyze user sessions and generate visual reports. Includes filters, tagging, and real-time updates.",
  },
  {
    title: "Inclusive Design System",
    description: "A component library made with accessibility in mind.",
    media: "/images/project3.png",
    details:
      "This design system provides reusable UI components with built-in color contrast checks, keyboard support, and screen reader-friendly behavior.",
  },
];

export default function ProjectsSection() {
  // const [openIndex, setOpenIndex] = useState(null);

  // const toggle = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow transition duration-300"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left px-6 py-4 text-lg font-semibold hover:bg-blue-100 rounded-t-2xl"
          >
            <span>{project.title}</span>
            <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          <div
            className={`transition-all overflow-hidden px-6 ${
              openIndex === index ? "max-h-screen py-4" : "max-h-0"
            }`}
          >
            <p className="mb-2 text-gray-700">{project.description}</p>
            {project.media && (
              <img
                src={project.media}
                alt={project.title}
                className="rounded mb-4 w-full max-h-64 object-cover"
              />
            )}
            <p className="text-gray-800">{project.details}</p>
          </div>
        </div>
      ))} */}
      <p className="text-center p-10 text-2xl">
        Under Construction!
      </p>
    </div>
  );
}
