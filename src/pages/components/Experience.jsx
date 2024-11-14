// src/pages/components/Experience.jsx
import React from 'react';

const Experience = ({ experienceRef }) => {

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'PT. ADI Consulting Indonesia',
      year: 'Sept 2024 - Present'
    },
    {
      title: 'Frontend Developer',
      company: 'PT. Indocyber Teknologi Indonesia',
      year: 'Jun 2023 - Feb 2024'
    },
    {
      title: 'Frontend Developer',
      company: 'PT. Soluix Finteknologi Indonesia',
      year: 'Nov 2021 - May 2023'
    },
    {
      title: 'Web Developer',
      company: 'PT. Hexacore Bina Sejahtera',
      year: 'Nov 2020 - Nov 2021'
    }
  ]

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="space-y-6 bg-slate-100 min-h-screen snap-start p-8 lg:p-12 shadow-inner rounded-md"
    >
      <h2 className="text-2xl font-bold">Experience</h2>
      <div className="grid gap-6">
        {experience.map((job, index) => (
          <div
            key={index}
            className="card shadow-lg rounded-md bg-gray-50 transition-colors cursor-pointer group"
          >
            <div className="card-body">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="card-title">{job.title}</h3>
                  <p className="text-md">{job.company}</p>
                  <p className="text-base-content/70 mt-2">{job.year}</p>
                </div>
                <div>
                  {/* Add icons or other visual elements here */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;