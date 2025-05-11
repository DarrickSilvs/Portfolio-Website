import { Routes, Route, useNavigate } from "react-router"
import StartPage from "./components/StartPage";
import WelcomeScreen from "./components/WelcomeScreen";
import { useEffect, useState } from "react";

const Pages: React.FC =  () => {
    const [started, setStarted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/")
    }, [navigate]);

    return (
        <>
            {started ? (
                <Routes>
                    <Route path="/" element={<StartPage />}/>
                </Routes>
            ) : (
                <WelcomeScreen onDone={() => setStarted(true)} />
            )}
        </>
    )
}

export default Pages;