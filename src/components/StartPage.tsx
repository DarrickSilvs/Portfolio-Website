import { useNavigate } from "react-router";

const StartPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen overflow-hidden bg-black text-green-500 font-mono flex flex-col">
            <div className="px-4 py-2 border-b border-green-700 bg-black fixed top-0 left-0 right-0 z-1 align-middle text-center">
                <button className="hover:underline" onClick={() => navigate("/")}>
                    <h1 className="text-xl">Darrick Silvester</h1>
                </button>
            </div>

            <div className="mt-12 px-10 py-2 border-b border-green-700 flex gap-10 bg-black text-base fixed top-[2.5rem] left-0 right-0 z-10 justify-evenly">
                <button className="hover:underline" onClick={() => navigate("/")}>Home</button>
                <button className="hover:underline">About</button>
                <button className="hover:underline">Projects</button>
                <button className="hover:underline">Resume</button>
                <button className="hover:underline">Contact</button>
            </div>

            <div className="px-4 py-2 border-t border-green-700 bg-black fixed bottom-0 left-0 right-0 z-10">
                <span className="text-green-500">~/portfolio &gt; </span>
                <input
                type="text"
                className="bg-black text-green-500 outline-none ml-2 w-4/5 caret-green-500"
                autoFocus
                />
            </div>

        </div>
    )
}

export default StartPage;