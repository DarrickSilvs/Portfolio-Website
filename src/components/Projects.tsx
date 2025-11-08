import websiteProjectImage from '../assets/projects/website-project.png';
import cliOrganizerProjectImage from '../assets/projects/cli-organizer-project.png';
import cliSecureFileDeletionImage from '../assets/projects/cli-secure-file-deletion.png';

const projects = [
  {
    title: "Portfolio Website",
    description: "This is the portfolio you're looking at. I built it using React, Tailwind, and TypeScript to create an interactive terminal-style experience, inspired by the macOS terminal and old-school BIOS aesthetics.",
    image: websiteProjectImage,
    github: "https://github.com/DarrickSilvs/Portfolio-Website",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
  },
  {
    title: "Secure File Deletion",
    description: "A secure file deletion CLI-tool that safely deletes files permanently on the OS level, making files unrecoverable even by forensic means.",
    image: cliSecureFileDeletionImage,
    github: "https://github.com/DarrickSilvs/secure-file-deletion",
    tags: ["Rust", "File System", "OsRng", "CLI"]
  },
  {
    title: "CLI File Organizer",
    description: "A simple Rust tool that organizes files by extension. I built it after completing a uni Rust course to apply what I learned.",
    image: cliOrganizerProjectImage,
    github: "https://github.com/DarrickSilvs/cli-organizer",
    tags: ["Rust", "Clap", "File System", "CLI"],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="px-4 sm:px-6 py-8 max-w-5xl mx-auto text-green-400 font-mono space-y-12 sm:space-y-16">
        <h2 className="text-2xl sm:text-3xl underline decoration-green-500 text-center mb-4 sm:mb-6">Projects</h2>
        
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-4 sm:gap-6`}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 h-auto rounded shadow-md border border-green-700"
            />
            
            {/* Project Info */}
            <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 mt-4 md:mt-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl underline text-green-300 hover:text-green-100"
              >
                {project.title}
              </a>
              <p className="text-sm sm:text-base mt-2 sm:mt-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-800 text-green-100 px-2 py-0.5 rounded text-xs sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;