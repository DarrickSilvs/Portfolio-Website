import { useState, useEffect } from "react";

const message = "Welcome to Darrick Silvester's Portfolio";
const prompt = "click anywhere to start";

const WelcomeScreen: React.FC<{ onDone: () => void }> = (props) => {
    const { onDone } = props;

    const [displayed, setDisplayed] = useState("");
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayed((prev) => {
                const nextChar = message[prev.length];
                if (nextChar) {
                    return prev + nextChar;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setShowPrompt(true), 600);
                    return prev;
                }
            });
        }, 100)
        return () => clearInterval(interval);
    }, []);

    return (
        <div
  className="flex items-center justify-center flex-col w-full h-dvh px-4 bg-black text-green-400 font-mono text-2xl sm:text-3xl md:text-5xl text-center cursor-pointer select-none"
  onClick={onDone}
>
  <div className="max-w-[90%] break-words">
    {displayed}
    <span className="blinking-cursor">|</span>
  </div>

  {showPrompt && (
    <div className="mt-6 text-lg sm:text-xl md:text-3xl opacity-80">
      <span className="blinking-text">{prompt}</span>
    </div>
  )}
</div>

    )
}

export default WelcomeScreen;