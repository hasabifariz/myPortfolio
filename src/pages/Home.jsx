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
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';


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
        { name: "JavaScript", icon: jsIcon, url: "https://www.javascript.com/" },
        { name: "HTML", icon: htmlIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: "CSS", icon: cssIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: "Tailwind", icon: tailwindIcon, url: "https://tailwindcss.com/" },
        { name: "DaisyUI", icon: daisyUIIcon, url: "https://daisyui.com/" },
        { name: "Material UI", icon: materialUIIcon, url: "https://mui.com/" },
        { name: "Git", icon: gitIcon, url: 'https://git-scm.com' },
        { name: "NPM", icon: npmIcon, url: 'https://www.npmjs.com' },
        { name: "Vite", icon: viteIcon, url: 'https://vitejs.dev' },
        { name: "VS Code", icon: vcsIcon, url: 'https://code.visualstudio.com' },
        { name: "Postman", icon: postmanIcon, url: 'https://www.postman.com' },
        { name: "Jira", icon: jiraIcon, url: 'https://www.atlassian.com/software/jira' },
        { name: "Bitbucket", icon: bitbucketIcon, url: 'https://bitbucket.org' },
        { name: "Slack", icon: slackIcon, url: 'https://slack.com' },
      ]
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
              className="btn btn-circle btn-sm btn-primary hover:scale-125 transition-transform duration-300"
              data-tip="Email"
            >
              <Mail className="w-4 h-4" color='white' />
            </a>
            <a
              href="https://www.linkedin.com/in/hasabifariz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-primary hover:scale-125 transition-transform duration-300"
              data-tip="LinkedIn"
            >
              <Linkedin className="w-4 h-4" color='white' />
            </a>
          </div>
          <br />
          <nav className="flex flex-col space-y-2 mt-8 hidden md:block">
            <a
              onClick={() => handleScrollTo(aboutRef)}
              className={`cursor-pointer flex items-center text-base-content/80 hover:text-primary transition-all duration-200 ${activeSection === 'about' ? 'text-primary font-bold ' : 'hover:pl-4'
                }`}
            >
              {activeSection === 'about' ? <Minus size={16} /> : ''}
              About Me
            </a>

            <a
              onClick={() => handleScrollTo(experienceRef)}
              className={`navmenu cursor-pointer flex items-center text-base-content/80 hover:text-primary transition-all duration-200 ${activeSection === 'experience' ? 'text-primary font-bold' : 'hover:pl-4'
                }`}
            >
              {activeSection === 'experience' ? <Minus size={16} /> : ''}
              Experience
            </a>
            <a
              onClick={() => handleScrollTo(projectsRef)}
              className={`navmenu cursor-pointer flex items-center text-base-content/80 hover:text-primary transition-all duration-200 ${activeSection === 'projects' ? 'text-primary font-bold' : 'hover:pl-4'
                }`}
            >
              {activeSection === 'projects' ? <Minus size={16} /> : ''}
              Projects
            </a>
          </nav>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-base-content/70 mt-[30px] tech-stack pt-10">TECH STACK & TOOLS</h2>
            <div className="space-y-8">
              {techStack.map((category, index) => (
                <div key={index} className="space-y-4">
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
                          <a href={tech.url} target="_blank" rel="noopener noreferrer"
                          // className="block p-3 rounded-md bg-slate-200 hover:bg-slate-300 transition-colors"
                          >
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className={`w-7 h-7 group-hover:scale-150 transition-transform duration-300`}
                            />
                          </a>
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
        <div className="">

          {/* About Section */}
          <AboutMe aboutRef={aboutRef} />

          {/* Experience Section */}
          <Experience experienceRef={experienceRef} />

          {/* Projects Section */}
          <Projects projectsRef={projectsRef} />


        </div>
      </div>
    </div>
  );
};

export default Home;
