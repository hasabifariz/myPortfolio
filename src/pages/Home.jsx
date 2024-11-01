import linkedinIcon from '../assets/icons/linkedin.svg';
import reactIcon from '../assets/icons/icons8-react.png';
import bitbucketIcon from '../assets/icons/icons8-bitbucket.png';
import cssIcon from '../assets/icons/icons8-css.svg';
import gitIcon from '../assets/icons/icons8-git.svg';
import gitkrakenIcon from '../assets/icons/icons8-gitkraken.svg';
import htmlIcon from '../assets/icons/icons8-html.svg';
import jsIcon from '../assets/icons/icons8-javascript.svg';
import jiraIcon from '../assets/icons/icons8-jira.svg';
import npmIcon from '../assets/icons/icons8-npm.svg';
import postmanIcon from '../assets/icons/icons8-postman.png';
import slackIcon from '../assets/icons/icons8-slack.svg';
import tailwindIcon from '../assets/icons/icons8-tailwind-css.svg';
import vcsIcon from '../assets/icons/icons8-visual-studio-code.svg';
import daisyUIIcon from '../assets/icons/logos--daisyui.svg';
import materialUIIcon from '../assets/icons/material-ui.svg';
import emailIcon from '../assets/icons/icons8-email.png';
import viteIcon from '../assets/icons/icons8-vite.svg';

import { useEffect, useRef, useState } from 'react'
import { Mail, Github, Linkedin, ExternalLink, StepForward, Minus, } from 'lucide-react'


const Home = () => {
  const [hoveredTech, setHoveredTech] = useState(null)

  const [activeSection, setActiveSection] = useState('');

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: aboutRef, id: 'about' },
      { ref: projectsRef, id: 'projects' },
      { ref: experienceRef, id: 'experience' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  const techStack = [
    {
      category: "", items: [
        { name: "React", icon: reactIcon, url: "https://react.dev/" },
        { name: "JavaScript", icon: jsIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "Tailwind", icon: tailwindIcon, url: "https://tailwindcss.com/" },
        { name: "DaisyUI", icon: daisyUIIcon, url: "https://daisyui.com/" },
        { name: "Material UI", icon: materialUIIcon, url: "https://mui.com/" },
        { name: "Git", icon: gitIcon },
        { name: "NPM", icon: npmIcon },
        { name: "Vite", icon: viteIcon },
        { name: "VS Code", icon: vcsIcon },
        { name: "Postman", icon: postmanIcon },
        { name: "Jira", icon: jiraIcon },
        { name: "Bitbucket", icon: bitbucketIcon },
        { name: "Slack", icon: slackIcon },
      ]
    },
  ]

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
      tools: ['React.js', 'HTML', 'CSS', 'Material UI']
    },
    {
      name: 'Clarity',
      desc: 'Develop an e-commerce and admin for selling a furniture for the first time, implement ui from figma',
      role: 'Frontend Developer',
      tools: ['React.js', 'HTML', 'CSS', 'Material UI']
    },
    {
      name: 'WMS Honda',
      desc: 'Maintain a warehouse management web application for internal use, fixing bug and error, and enhancement',
      role: 'Frontend Developer',
      tools: ['React.js', 'HTML', 'CSS', 'Material UI']
    },
    {
      name: 'UIMAX OSP (Unified Inventory Management to Accelerate Digital Business - Outside Plant)',
      desc: 'Enhancing and refactoring an inventory management web application, fixing, adding new feature, and create a new query using neo4J',
      role: 'Web Developer',
      tools: ['pugHTML', 'Node.js', 'Express.js', 'Semantic UI', 'Neo4J']
    },
    {
      name: 'UIMAX ISP (Unified Inventory Management to Accelerate Digital Business - Inside Plant)',
      desc: 'Enhancing and refactoring an inventory management web application for internal use, fixing, and adding new feature, and create a new query using neo4J',
      role: 'Web Developer',
      tools: ['pugHTML', 'Node.js', 'Express.js', 'Semantic UI', 'Neo4J']
    },
    {
      name: 'ITAM (IT Assets Management)',
      desc: 'Build and develop an it asset management web application for internal use, create a new query using neo4J',
      role: 'Web Developer',
      tools: ['pugHTML', 'Node.js', 'Express.js', 'Semantic UI', 'Neo4J']
    },

  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen" >
      {/* Left Panel */}
      <div className="relative p-8 lg:p-12 h-screen bg-slate-50 shadow-inner rounded-md">
        <div className="lg:sticky lg:top-0 space-y-4">
          {/* Introduction */}
          <div className="">
            <pre className="text-lg">Hello,</pre>
            <h1 className="text-4xl md:text-5xl font-bold">
              I'm Fariz Hasabi Adiwijaya
            </h1>
            <div className="flex items-center gap-2 text-xl">
              <span>A</span>
              <span className="font-bold">Frontend Developer</span>
            </div>
          </div>


          {/* Contact Links */}
          <div className="flex gap-4">
            <a
              href="mailto:hasabifariz@gmail.com"
              className="btn btn-circle btn-sm btn-primary"
              data-tip="Email"
            >
              <Mail className="w-4 h-4" color='white' />
            </a>
            <a
              href="https://www.linkedin.com/in/hasabifariz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-primary"
              data-tip="LinkedIn"
            >
              <Linkedin className="w-4 h-4" color='white' />
            </a>
            {/* <a
              href="https://api.whatsapp.com/send?phone=15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-sm hover:btn-primary"
              data-tip="Whatsapp"
            >
              <Phone className="w-4 h-4" />
            </a> */}
          </div>
          <br />
          <nav className="flex flex-col space-y-2 mt-8 hidden md:block">
            <a
              onClick={() => handleScrollTo(aboutRef)}
              className={`flex items-center text-base-content/80 hover:text-primary transition-all duration-200 ${activeSection === 'about' ? 'text-primary font-bold ' : 'hover:pl-4'
                }`}
            >
              {activeSection === 'about' ? <Minus size={16} /> : ''}
              About Me
            </a>

            <a
              onClick={() => handleScrollTo(experienceRef)}
              className={`flex items-center text-base-content/80 hover:text-primary transition-all duration-200 ${activeSection === 'experience' ? 'text-primary font-bold' : 'hover:pl-4'
                }`}
            >
              {activeSection === 'experience' ? <Minus size={16} /> : ''}
              Experience
            </a>
            <a
              onClick={() => handleScrollTo(projectsRef)}
              className={`flex items-center text-base-content/80 hover:text-primary transition-all duration-200 ${activeSection === 'projects' ? 'text-primary font-bold' : 'hover:pl-4'
                }`}
            >
              {activeSection === 'projects' ? <Minus size={16} /> : ''}
              Projects
            </a>
          </nav>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-base-content/70 mt-[30px]">TECH STACK & TOOLS</h2>
            <div className="space-y-8">
              {techStack.map((category) => (
                <div key={category.category} className="space-y-4">
                  <h3 className="text-xs font-medium text-base-content/50">{category.category}</h3>
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {category.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="group relative"
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <div className="tooltip" data-tip={tech.name}>
                          {tech.url ? (
                            <a
                              href={tech.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-3 rounded-xl bg-slate-200 hover:bg-base-100 transition-colors"
                            >
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-8 h-8 object-contain"
                              />
                            </a>
                          ) : (
                            <div className="p-3 rounded-xl bg-slate-200 hover:bg-base-100">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:col-span-2 lg:overflow-y-auto snap-y snap-mandatory" style={{ scrollBehavior: 'smooth' }}>
        <div className="space-y-12">

          {/* About Section */}
          <section ref={aboutRef} id='about' className="space-y-6 min-h-screen snap-start p-8 lg:p-12 shadow-inner rounded-md">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className='px-10 pt-10'>
              <p className="text-lg leading-relaxed text-base-content/80 text-justify">
                A frontend developer with over two years of experience specializing in creating user-friendly web applications. My journey began with a solid foundation in HTML, CSS, and JavaScript, which paved the way for my expertise in ReactJS. I have worked on a diverse range of projects in industries such as fintech, e-commerce, and insurance, allowing me to develop a well-rounded skill set and a deep understanding of user needs.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-base-content/80 text-justify">
                I excel at translating design concepts into functional, visually appealing interfaces, utilizing UI libraries like MaterialUI and PrimeReact to enhance user experience. My experience includes integrating APIs to create seamless interactions and collaborating with backend teams to ensure efficient data management. I value open communication and teamwork, striving to align technical solutions with business objectives.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-base-content/80 text-justify">
                I am committed to producing high-quality, maintainable code and continually seek to improve my skills by exploring new technologies and best practices. My goal is to develop applications that are not only effective but also enjoyable for users, and I look forward to tackling new challenges that allow me to innovate and grow as a developer.
              </p>
            </div>
          </section>

          <section ref={experienceRef} id='experience' className="space-y-6 min-h-screen snap-start p-8 lg:p-12 shadow-inner rounded-md">
            <h2 className="text-2xl font-bold">Experience</h2>
            {experience.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-md bg-base-100 hover:bg-base-200 transition-colors cursor-pointer group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-2xl">{job.title}</h3>
                    <p className="text-base-content/70">{job.company}</p>
                    <p className="text-sm text-base-content/60 mt-2">{job.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>


          <section ref={projectsRef} id='projects' className="space-y-6 min-h-screen snap-start p-8 lg:p-12 bg-slate-100 shadow-inner rounded-md">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="card bg-base-100 hover:bg-slate-200 transition-colors cursor-pointer group lg:mx-10"
                >
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="card-title">{project.name}</h3>
                        <p className="text-md">{project.role}</p>
                        <p className="text-base-content/70 mt-2">
                          {project.desc}
                        </p>
                      </div>
                      {/* <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                    </div>
                    <div className="card-actions justify-start mt-4">
                      {
                        project.tools.map((tool, index) => (
                          <div key={index} className="badge badge-outline">{tool}</div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;
