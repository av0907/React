import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, role, gitUrl }) => {
  return (
    <Link href={gitUrl} aria-label={`GitHub repository for ${title}`} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" className="block transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-52 md:h-72">
          <Image
            src={imgUrl}
            alt={`Screenshot of ${title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4 bg-gray-900 text-white">
          <h5 className="text-xl font-bold mb-2">{title}</h5>
          <p>{description}</p>
          <p>{role}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
