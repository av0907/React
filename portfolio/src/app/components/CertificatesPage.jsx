// import React from 'react';
// import Certificates from '../components/Certificates';
// import certificatesData from '../data/certificatesData'; // Adjust if necessary based on your actual path

// const CertificatesPage = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-center my-4" >My Certifications</h1>
//       <Certificates certificates={certificatesData} />
//     </div>
//   );
// };

// export default CertificatesPage;


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assuming certificatesData is passed as props or imported
const CertificatesSection = () => {
  if (!certificatesData.length) {
    return <p className="text-center text-white">No certificates available at this time.</p>;
  }

  return (
    <section id="certificates" className="my-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">CERTIFICATES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificatesData.map((certificate) => (
          <Link href={certificate.link} key={certificate.id}>
            <a target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={certificate.imageUrl}
                  alt={certificate.name}
                  layout="fill"
                  objectFit="contain"
                  className="hover:opacity-75"
                />
              </div>
              <div className="bg-gray-800 p-4">
                <h3 className="text-lg text-white font-semibold">{certificate.name}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
