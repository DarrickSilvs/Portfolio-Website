const projects = [
    {
      title: "Portfolio Website",
      description: "This is the portfolio you’re looking at. I built it using React, Tailwind, and TypeScript to create an interactive terminal-style experience, inspired by the macOS terminal and old-school BIOS aesthetics.",
      image: "website-project.png", // placeholder
      github: "https://github.com/DarrickSilvs/Portfolio-Website",
      tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
    },
    // {
    //   title: "Placeholder Project",
    //   description:
    //     "A boilerplate space for future projects. Will be replaced with real work soon — stay tuned.",
    //   image: "/projects/placeholder.png",
    //   github: "#",
    // },
];

const Projects: React.FC = () => {
    return (
        <div className="px-6 py-10 max-w-5xl mx-auto text-green-400 font-mono space-y-16 overflow-y-auto">
            <h2 className="text-3xl underline decoration-green-500 text-center mb-6">Projects</h2>
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    className={`flex flex-col md:flex-row ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                    } items-center gap-6`}
                >
                        {/* Project Image */}
                        <img
                        src={`projects/${project.image}`}
                        alt={project.title}
                        className="w-full md:w-1/2 h-auto rounded shadow-md border border-green-700"
                        />
        
                        {/* Project Info */}
                        <div className="md:w-1/2 space-y-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl underline text-green-300 hover:text-green-100"
                        >
                            {project.title}
                        </a>
        
                        <p className="text-base mt-3">{project.description}</p>
        
                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags?.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-green-800 text-green-100 px-2 py-0.5 rounded text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;