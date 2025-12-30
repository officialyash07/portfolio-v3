import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root, Home, About, Projects, Contact } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "contact", element: <Contact /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
