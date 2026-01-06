import { useEffect } from "react";

import ContactSection from "../components/contact/ContactMe";

const Contact = () => {
    useEffect(() => {
        document.title = "Yash Pathik | Contact Me";
    }, []);

    return (
        <>
            <ContactSection />
        </>
    );
};

export default Contact;
