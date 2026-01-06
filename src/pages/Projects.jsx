import { useEffect } from "react";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Projects = () => {
    useEffect(() => {
        document.title = "Yash Pathik | Projects";
    }, []);

    return (
        <>
            <ProjectsHero />
            <ProjectsGrid />
        </>
    );
};

export default Projects;
