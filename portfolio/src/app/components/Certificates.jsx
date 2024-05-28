import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Certificates = ({ certificates }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {certificates.map((certificate) => (
        <Link href={certificate.link} key={certificate.id}>
          <a target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative w-full h-64">
              <Image
                src={certificate.imageUrl}
                alt={certificate.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="bg-gray-900 p-4">
              <h5 className="text-white text-center text-lg group-hover:underline">
                {certificate.name}
              </h5>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Certificates;
