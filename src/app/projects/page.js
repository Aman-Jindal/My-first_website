// app/projects/page.js

// List of projects done
const projects = [
    {
        title : "Project One",
        description: "A brief description of project one.",
        link: "",
    },
    {
        title : "Project Two",
        description: "A brief description of project two.",
        link: "",
    }
];

export default function Projects() {
    return (
        <div>
            <h1 className="text-3x1 font-bold mb-4"> My Projects </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border p-4 rounded hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-x1 font-semibold mb-2">{project.title}</h2>
                        <p className="mb-2">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
}