// src/pages/components/Experience.jsx
import { motion } from 'framer-motion';
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
      <motion.div className="grid gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {experience.map((job, index) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={index}
            className="card shadow-lg rounded-md bg-gray-50 transition-colors cursor-default group"
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;