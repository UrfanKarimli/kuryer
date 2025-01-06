import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./page/landing";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/" element={<Layout />} >
            <Route index element={<LandingPage />} />
            </Route>
        </Route>,
    )
);