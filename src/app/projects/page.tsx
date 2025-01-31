// app/projects/page.js
export default function Projects() {
    const projects = [
      { name: 'Portfolio Website', description: 'A personal portfolio site built with React.' },
      { name: 'E-commerce App', description: 'An online store built with Next.js and Firebase.' },
    ];
  
    return (
      <div>
        <h1>My Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } 
