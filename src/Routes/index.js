import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from 'react';

// Lazy load pages
const HomePages = lazy(() => import('../Pages/homePages'));
const MainPages = lazy(() => import('../Pages/mainPages'));
const MacPages = lazy(() => import("../Pages/macPages"));
const IpadPages = lazy(() => import("../Pages/ipadPages"));
const WatchPages = lazy(() => import("../Pages/watchPages"));
const AirpodsPages = lazy(() => import("../Pages/airpodsPages"));
const FunnyPages = lazy(() => import("../Pages/funnyPages"));
const CartPages = lazy(() => import("../Pages/cartPages"));
const TvAndFamilyPages = lazy(() => import("../Pages/tvAndFamilyPages"));
const IphonePages = lazy(() => import("../Pages/iphonePages"));

// Routes configuration
const routes = [
    { path: "/", element: <HomePages />, index: true },
    { path: "/main", element: <MainPages /> },
    { path: "/mac", element: <MacPages /> },
    { path: "/ipad", element: <IpadPages /> },
    { path: "/watch", element: <WatchPages /> },
    { path: "/airPods", element: <AirpodsPages /> },
    { path: "/funny", element: <FunnyPages /> },
    { path: "/cart", element: <CartPages /> },
    { path: "/tv-and-family", element: <TvAndFamilyPages /> },
    { path: "/iPhone", element: <IphonePages /> },
];

const AppRoute = () => (
    <Router>
        <Suspense fallback={<div></div>}>
            <Routes>
                {routes.map(({ path, element, index }) => (
                    <Route key={path} path={path} element={element} index={index} />
                ))}
            </Routes>
        </Suspense>
    </Router>
);

export default AppRoute;
