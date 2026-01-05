import { useEffect } from "react";

const Projects = () => {
    useEffect(() => {
        document.title = "Yash Pathik | Projects";
    }, []);

    return <div>Projects</div>;
};

export default Projects;
