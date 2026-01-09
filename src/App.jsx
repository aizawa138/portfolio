import Card from "./components/Card/Card.jsx";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import Introduction from "./components/Introduction/Introduction.jsx";
import React, {useEffect, useState} from "react";

function App() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, [])

    const content = (
        <>
            <Introduction></Introduction>
        </>
    );

  return (
    <>
        {isLoading ? <LoadingScreen></LoadingScreen> : content}
    </>

  )
}

export default App
