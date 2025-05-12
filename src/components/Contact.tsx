import { Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 py-6 max-w-3xl mx-auto text-green-400 font-mono text-sm sm:text-base space-y-6 flex flex-col items-center">

      <h2 className="text-2xl sm:text-4xl underline decoration-green-500 mb-4 sm:mb-7 text-center">
        Contact Information
      </h2>

      {/* Info grid */}
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-y-3 gap-x-4 text-left">
          <span className="text-green-500">email (personal):</span>
          <a 
            href="mailto:darricksilvester@gmail.com" 
            className="hover:underline break-words"
          >
            darricksilvester@gmail.com
          </a>

          <span className="text-green-500">email (UNSW):</span>
          <a 
            href="mailto:d.silvester@student.unsw.edu.au" 
            className="hover:underline break-words"
          >
            d.silvester@student.unsw.edu.au
          </a>

          <span className="text-green-500">phone:</span>
          <a 
            href="tel:+61416340343" 
            className="hover:underline"
          >
            +61 416 340 343
          </a>
        </div>
      </div>

      {/* Social buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full max-w-lg">
        <a
          href="https://github.com/DarrickSilvs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-green-500 text-green-400 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors w-full sm:w-auto"
        >
          <Github size={18} />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/darrick-silvester-6781b8262"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-green-500 text-green-400 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors w-full sm:w-auto"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>

    </div>
  );
};

export default Contact;
