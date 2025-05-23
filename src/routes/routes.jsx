import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Loader from "../components/ui/Loader";
import ViewDetails from "../pages/ViewDetails";
import MyBookings from "../pages/MyBookings";
import Reviews from "../pages/Reviews";
import ServicesPage from "../pages/ServicesPage";
import EmergencyPage from "../pages/EmergencyPage";
import Blogs from "../pages/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loader />,
                loader: () => fetch('../doctors.json'),
                Component: Home
            },
            {
                path: 'doctor-details/:id',
                hydrateFallbackElement: <Loader />,
                loader: () => fetch('../doctors.json'),
                Component: ViewDetails
            },
            {
                path: 'my-bookings',
                hydrateFallbackElement: <Loader />,
                loader: () => fetch('../doctors.json'),
                Component: MyBookings

            },
            {
                path: '/reviews',
                Component: Reviews
            },
            {
                path: '/blogs',
                Component: Blogs
            },
            {
                path: '/services',
                Component: ServicesPage,
            },
            {
                path: '/emergency',
                Component: EmergencyPage
            }


        ]

    },
    { path: '*', Component: ErrorPage }
]);

export default router;