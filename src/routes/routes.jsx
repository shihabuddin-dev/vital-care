import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {index: true, Component: Home}
        ]
        
    },
    {path: '*', Component: ErrorPage}
]);

export default router;