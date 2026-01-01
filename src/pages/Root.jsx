import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { AnimatedDotsBackground } from "../components/animations/AnimateBackground";

import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <Outlet />
                <AnimatedDotsBackground />
            </main>
            <Footer />
        </div>
    );
};

export default Root;
