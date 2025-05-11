import { Routes, Route, useNavigate } from "react-router"
import StartPage from "./StartPage";
import { useEffect } from "react";

const Pages: React.FC =  () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/")
    }, [navigate]);
    
    return (
        <Routes>
            <Route path="/" element={<StartPage />}/>
        </Routes>
    )
}

export default Pages;