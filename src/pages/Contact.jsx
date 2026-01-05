import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        document.title = "Yash Pathik | Contact Me";
    }, []);

    return <div>Contact</div>;
};

export default Contact;
