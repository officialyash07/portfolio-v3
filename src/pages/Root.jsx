import Header from "../layout/Header";
import Footer from "../layout/Footer";

import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;
