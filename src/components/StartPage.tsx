import Error from "./Error";
import Help from "./Help";
import Home from "./Home";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { useEffect, useState, type JSX } from "react";
const StartPage: React.FC = () => {
    const [component, setComponent] = useState<JSX.Element | null>(null);
    const [command, setCommand] = useState("");

    const handleCommand = (cmd: string) => {
        switch (cmd.toLowerCase().trim()) {
            case "cd home":
            case "home":
                setComponent(<Home />);
                break;
            case "cd resume":
            case "resume":
                setComponent(<Resume />);
                break;
            case "cd about":
            case "about":
                setComponent(<About />);
                break;
            case "cd contact":
            case "contact":
                setComponent(<Contact />);
                break;
            case "cd projects":
            case "projects":
                setComponent(<Projects />);
                break;
            case "help":
                setComponent(<Help />);
                break;
            default:
                setComponent(<Error />);
        }
    };

    const handleComplete = (currentInput: string) => {
        const availableCommands = [
            "cd home", "home", "help", "cd about", "about",
            "cd projects", "projects", "cd resume", "resume",
            "cd contact", "contact"
        ];

        const matches = availableCommands.filter((cmd) => 
            cmd.startsWith(currentInput.toLowerCase())
        );

        return matches.length === 1 ? matches[0] : currentInput;
    }

    useEffect(() => {
        setComponent(<Home />)
    }, [])

    return (
        <div className="w-screen h-screen overflow-hidden bg-black text-green-500 font-mono flex flex-col">
            <div className="px-4 py-2 border-b border-green-700 bg-black fixed top-0 left-0 right-0 z-10 align-middle text-center">
                <button className="hover:underline" onClick={() => handleCommand("home")}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl">Darrick Silvester</h1>
                </button>
            </div>

            <div className="px-4 sm:px-10 py-2 border-b border-green-700 flex flex-wrap gap-2 sm:gap-10 bg-black text-xs sm:text-base fixed top-[3.1rem] sm:top-[3.1rem] md:top-[3.2rem] lg:top-[3.3rem] left-0 right-0 z-10 justify-center sm:justify-evenly">
                <button className="hover:underline px-2 sm:px-0 whitespace-nowrap" onClick={() => handleCommand("home")}>
                    Home
                </button>
                <button className="hover:underline px-2 sm:px-0 whitespace-nowrap" onClick={() => handleCommand("about")}>
                    About
                </button>
                <button className="hover:underline px-2 sm:px-0 whitespace-nowrap" onClick={() => handleCommand("projects")}>
                    Projects
                </button>
                <button className="hover:underline px-2 sm:px-0 whitespace-nowrap" onClick={() => handleCommand("resume")}>
                    Resume
                </button>
                <button className="hover:underline px-2 sm:px-0 whitespace-nowrap" onClick={() => handleCommand("contact")}>
                    Contact
                </button>
            </div>

            <div className="flex-1 overflow-y-auto pt-[7rem] pb-[4rem] px-4 sm:px-10">
                {component}
            </div>

            <div className="px-4 py-2 border-t border-green-700 bg-black fixed bottom-0 left-0 right-0 z-10">
                <span className="text-green-500">~/portfolio &gt; </span>
                <input
                type="text"
                className="bg-black text-green-500 outline-none ml-2 w-4/5 caret-green-500"
                autoFocus
                value={command}
                placeholder='type "help" to get started'
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleCommand(command);
                        setCommand("");
                    }

                    if (e.key === "Tab") {
                        e.preventDefault();
                        const completed = handleComplete(command);
                        setCommand(completed);
                    }
                }}
                />
            </div>

        </div>
    )
}

export default StartPage;