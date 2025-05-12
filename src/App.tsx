import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import StartPage from "./components/StartPage";

const App: React.FC = () => {
    const [started, setStarted] = useState(false);

    return started ? (
      <StartPage />
    ) : (
      <WelcomeScreen onDone={() => setStarted(true)} />
    )
}

export default App;