import Hero from "../components/home/HomeHero";

import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Yash Pathik | Portfolio";
    }, []);

    return (
        <>
            <Hero />
        </>
    );
};

export default Home;
