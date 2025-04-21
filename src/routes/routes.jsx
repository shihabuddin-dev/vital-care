import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage/>
    },
]);

export default router;