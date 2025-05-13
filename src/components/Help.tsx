import { Sparkles } from "lucide-react"

const Help: React.FC = () => {
  return (
    <div className="flex justify-center items-start md:items-center min-h-full">
      <div className="px-4 sm:px-10 py-12 max-w-7xl mx-auto text-green-400 font-mono text-base sm:text-lg flex flex-col gap-10">
        {/* Commands + Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl mb-4 underline decoration-green-500">Available Commands</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li><code className="text-green-500">help</code> — display this help menu</li>
              <li><code className="text-green-500">home</code> — return to home</li>
              <li><code className="text-green-500">cd [section]</code> — go to a section (e.g. <code>cd about</code>)</li>
              <li><code className="text-green-500">tab</code> — autocomplete commands or sections</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl mb-4 underline decoration-green-500">Tips</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>You can also click the buttons above to navigate</li>
              <li>Try typing an invalid command for a surprise</li>
              <li>Commands are case-insensitive</li>
              <li>Explore freely — it's your terminal</li>
              <li>This website is best used on a desktop!</li>
            </ul>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-6">
          <h2 className="text-2xl sm:text-3xl mb-4 underline decoration-green-500 flex items-center justify-center gap-2">
            <Sparkles className="animate-pulse text-green-300" /> Have Fun
          </h2>
          <p className="text-base sm:text-lg text-green-300 max-w-2xl mx-auto leading-relaxed">
            This portfolio is fully interactive. Treat it like a real terminal — type, explore, and discover.<br />
            Try <code className="text-green-500">ls</code> or <code className="text-green-500">cd about</code> to start.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
