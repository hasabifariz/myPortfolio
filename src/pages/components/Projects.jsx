import React, { useEffect, useState } from 'react'
import ClarityEccom from '../../assets/images/clarity ecommerce.png'
import WMSSignIn from '../../assets/images/wms login.png'
import WMSMenu from '../../assets/images/wms menu.png'
import KLSSignIn from '../../assets/images/kls sign in.png'
import KLSMenu from '../../assets/images/kls menu.png'
import UIMaxOSP from '../../assets/images/UIMaxOSP.jpeg'
import UIMaxISP from '../../assets/images/UIMax.jpeg'
import ITAM from '../../assets/images/ITAM.jpeg'

const Projects = ({ projectsRef }) => {
  const projects = [
    {
      name: 'Claim CMS',
      desc: 'Develop a claim management system web application for internal use, using thymeleaf, creating html template for sending email',
      role: 'Frontend Developer',
      tools: ['Java', 'HTML', 'CSS', 'Thymeleaf']
    },
    {
      name: 'AJAIB - Bank Bumi Arta',
      desc: 'Support developing a web application with other frontend, collaborate with ajaib teams for daily meeting or sprint review',
      role: 'Frontend Developer',
      tools: ['React', 'Next.js', 'HTML', 'CSS', 'AntDesign']
    },
    {
      name: 'Kawan Lama Group Invoice Portal',
      desc: 'Develop an invoice management system web application, implement ui from figma that has been designed by Bussiness Analyst, collaborated with backend vendor, weekly review',
      role: 'Frontend Developer',
      tools: ['React.js', 'HTML', 'CSS', 'Material UI'],
      images: [KLSSignIn, KLSMenu]
    },
    {
      name: 'Clarity',
      desc: 'Develop an e-commerce and admin for selling a furniture for the first time, implement ui from figma',
      role: 'Frontend Developer',
      tools: ['React.js', 'HTML', 'CSS', 'Material UI'],
      images: [ClarityEccom]
    },
    {
      name: 'WMS Honda',
      desc: 'Maintain a warehouse management web application for internal use, fixing bug and error, and enhancement',
      role: 'Frontend Developer',
      tools: ['React.js', 'HTML', 'CSS', 'Material UI'],
      images: [WMSSignIn, WMSMenu]
    },
    {
      name: 'UIMAX OSP (Unified Inventory Management to Accelerate Digital Business - Outside Plant)',
      desc: 'Enhancing and refactoring an inventory management web application, fixing, adding new feature, and create a new query using neo4J',
      role: 'Web Developer',
      tools: ['pugHTML', 'Node.js', 'Express.js', 'Semantic UI', 'Neo4J'],
      images: [UIMaxOSP]
    },
    {
      name: 'UIMAX ISP (Unified Inventory Management to Accelerate Digital Business - Inside Plant)',
      desc: 'Enhancing and refactoring an inventory management web application for internal use, fixing, and adding new feature, and create a new query using neo4J',
      role: 'Web Developer',
      tools: ['pugHTML', 'Node.js', 'Express.js', 'Semantic UI', 'Neo4J'],
      images: [UIMaxISP]
    },
    {
      name: 'ITAM (IT Assets Management)',
      desc: 'Build and develop an it asset management web application for internal use, create a new query using neo4J',
      role: 'Web Developer',
      tools: ['pugHTML', 'Node.js', 'Express.js', 'Semantic UI', 'Neo4J'],
      images: [ITAM]
    },

  ]

  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <section ref={projectsRef} id='projects' className="preview  min-h-screen snap-start p-8 lg:p-12  shadow-inner rounded-md">
      <h2 className="text-2xl font-bold">Featured Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (

          <div
            key={index}
            className="card shadow-lg bg-base-100 transition-colors cursor-pointer group lg:mx-10"
          >
            <div className="card-body">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="card-title">{project.name}</h3>
                  <p className="text-md">{project.role}</p>
                  <p className="text-base-content/70 mt-2 md:text-justify">
                    {project.desc}
                  </p>
                </div>
                {/* <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
              </div>
              {project.images && (
                <div className="flex  space-x-4 mt-4">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="w-[5rem] md:w-24  object-contain rounded-md cursor-pointer hover:opacity-75 hover:scale-125 transition-transform duration-300 border"
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              )}
              <div className="card-actions justify-end mt-4">
                {
                  project.tools.map((tool, index) => (
                    <div key={index} className="badge badge-accent badge-outline">{tool}</div>
                  ))
                }
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-5xl max-h-[90vh] p-4 bg-white preview rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image box
          >
            <img
              src={selectedImage}
              alt="Project screenshot"
              className="w-full h-full object-contain border rounded-md"
            />
          </div>
        </div>
      )}

    </section >
  )
}

export default Projects