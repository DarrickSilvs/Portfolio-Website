import { Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto text-green-400 font-mono text-base space-y-6 flex flex-col items-center">

      <h2 className="text-4xl underline decoration-green-500 mb-7 text-center">
        Contact Information
      </h2>

      {/* Info grid */}
      <div className="grid grid-cols-[minmax(160px,_auto)_1fr] gap-y-3 gap-x-4 w-full max-w-lg">
        <span className="text-green-500">email (personal):</span>
        <span>darricksilvester@gmail.com</span>

        <span className="text-green-500">email (UNSW):</span>
        <span>d.silvester@student.unsw.edu.au</span>

        <span className="text-green-500">phone:</span>
        <span>+61 416 340 343</span>
      </div>

      {/* Social buttons */}
      <div className="mt-6 flex gap-4 justify-center">
        <a
          href="https://github.com/DarrickSilvs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-green-500 text-green-400 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors"
        >
          <Github size={18} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/darrick-silvester-6781b8262"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-green-500 text-green-400 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
