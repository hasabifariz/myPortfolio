const Projects = () => {
  const projects = [
    { id: 1, name: 'Project One', description: 'Description of project one.' },
    { id: 2, name: 'Project Two', description: 'Description of project two.' },
  ];

  return (
    <div className="p-10 bg-base-200">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(project => (
          <div key={project.id} className="card bg-base-100 shadow-xl p-5">
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
