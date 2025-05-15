import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import StartPage from "./components/StartPage";
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
    const [started, setStarted] = useState(false);

    return started ? (
      <>
        <StartPage />
        <Analytics />
      </>
    ) : (
      <WelcomeScreen onDone={() => setStarted(true)} />
    )
}

export default App;