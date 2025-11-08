import { Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center py-6">
      <div className="px-4 sm:px-6 max-w-3xl w-full text-green-400 font-mono text-sm sm:text-base space-y-6 flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl underline decoration-green-500 mb-4 sm:mb-7 text-center">
          Contact Information
        </h2>

        {/* Email */}
        <div className="w-full max-w-md text-center space-y-2">
          <div>
            <span className="text-green-500 block sm:inline">email:</span>{' '}
            <a
              href="mailto:dsilvester.dev@gmail.com"
              className="hover:underline break-words"
            >
              dsilvester.dev@gmail.com
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
            href="https://linkedin.com/in/darricksilvester"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-green-500 text-green-400 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors w-full sm:w-auto"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;