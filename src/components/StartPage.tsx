import Error from "./Error";
import Help from "./Help";
import Home from "./Home";
import Resume from "./Resume";
import { useEffect, useState, type JSX } from "react";
const StartPage: React.FC = () => {
    const [component, setComponent] = useState<JSX.Element | null>(null);
    const [command, setCommand] = useState("");

    const handleCommand = (cmd: string) => {
        switch (cmd.toLowerCase().trim()) {
            case "home":
                setComponent(<Home />);
                break;
            case "cd resume":
                setComponent(<Resume />);
                break;
            case "help":
                setComponent(<Help />);
                break;
            default:
                setComponent(<Error />);
        }
    };

    useEffect(() => {
        setComponent(<Home />)
    }, [])

    return (
        <div className="w-screen h-screen overflow-hidden bg-black text-green-500 font-mono flex flex-col">
            <div className="px-4 py-2 border-b border-green-700 bg-black fixed top-0 left-0 right-0 z-1 align-middle text-center mb-2">
                <button className="hover:underline">
                    <h1 className="text-4xl">Darrick Silvester</h1>
                </button>
            </div>

            <div className="mt-5 px-10 py-2 border-b border-green-700 flex gap-10 bg-black text-base fixed top-[2.5rem] left-0 right-0 z-10 justify-evenly">
                <button className="hover:underline" onClick={() => handleCommand("home")}>Home</button>
                <button className="hover:underline" onClick={() => handleCommand("cd about")}>About</button>
                <button className="hover:underline" onClick={() => handleCommand("cd projects")}>Projects</button>
                <button className="hover:underline" onClick={() => handleCommand("cd resume")}>Resume</button>
                <button className="hover:underline" onClick={() => handleCommand("cd contact")}>Contact</button>
            </div>

            <div className="flex-1 h-full flex justify-center items-center">
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
                        handleCommand(command)
                        setCommand("")
                    }}}
                />
            </div>

        </div>
    )
}

export default StartPage;