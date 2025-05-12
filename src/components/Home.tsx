import { useEffect, useState } from "react";
import asciiArt from "../assets/ASCII-Art-Night-Sky (1).txt?raw";
const Home: React.FC = () => {
    const [lastLogin, setLastLogin] = useState<string>("");

    useEffect(() => {
        const stored = localStorage.getItem("lastLogin");
        const now = new Date();
        const formattedNow = now.toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        if (stored) {
            setLastLogin(stored);
        } else {
            setLastLogin(formattedNow);
        }

        localStorage.setItem("lastLogin", formattedNow);
    }, []);

    const paddedAscii = asciiArt
        .split('\n')
        .map(line => line.padEnd(150, ' '))
        .join('\n');

    return (
        <div className="relative w-full h-full flex items-center justify-center font-mono overflow-hidden">
            {/* ASCII background */}
                <pre className="absolute inset-0 text-green-600 opacity-30 whitespace-pre text-xs leading-none animate-pulse pointer-events-none select-none text-center mx-auto">
                    {paddedAscii}
                </pre>
        
            {/* Content */}
            <div className="relative z-10 text-center text-green-400 text-xl space-y-4 px-6">
                <p className="text-sm">Last login: {lastLogin} on /dev/portfolio</p>
                <h1 className="text-3xl text-green-500">Welcome back to the terminal.</h1>
                <p>
                Type <code className="text-green-500">help</code> to view available commands, or use the buttons above to navigate.
                </p>
                <p>Feel free to explore — each section has something fun or useful.</p>
            </div>
        </div>
      );
      
};

export default Home;
