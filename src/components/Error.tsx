import { Bug } from "lucide-react";

const Error: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-green-400 font-mono text-center px-4 space-y-4">
            <Bug className="w-12 h-12 animate-pulse text-green-300 drop-shadow-lg" />
            <h1 className="text-3xl md:text-4xl">Uh oh! Command not found</h1>
            <h2 className="text-xl blinking-text">Type <code className="text-green-500">help</code> for guide</h2>
        </div>
    );
};

export default Error;
