import { useEffect } from "react";

import AboutHero from "../components/about/AboutHero";
import Journey from "../components/about/Journey";
import Toolkit from "../components/about/Toolkit";
import Career from "../components/about/Career";
import AboutCta from "../components/about/AboutCta";

const About = () => {
    useEffect(() => {
        document.title = "Yash Pathik | About Me";
    }, []);

    return (
        <>
            <AboutHero />
            <Journey />
            <Toolkit />
            <Career />
            <AboutCta />
        </>
    );
};

export default About;
