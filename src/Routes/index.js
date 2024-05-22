import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePages from '../Pages/homePages.js';
import StorePages from '../Pages/storePages.js';
import MacPages from "../Pages/macPages.js";
import IpadPages from "../Pages/ipadPages.js";
import WatchPages from "../Pages/watchPages.js";
import AirpodsPages from "../Pages/airpodsPages.js";
import FunnyPages from "../Pages/funnyPages.js";
import CartPages from "../Pages/cartPages.js";
import TvAndFamilyPages from "../Pages/tvAndFamilyPages.js";
import IphonePages from "../Pages/iphonePages.js";

const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route
                    index
                    path="/"
                    element={<HomePages />}
                />
                <Route
                    path="/store"
                    element={<StorePages />}
                />
                <Route
                    path="/mac"
                    element={<MacPages />}
                />
                <Route
                    path="/ipad"
                    element={<IpadPages />}
                />
                <Route
                    path="/watch"
                    element={<WatchPages />}
                />
                <Route
                    path="/airPods"
                    element={<AirpodsPages />}
                />
                <Route
                    path="/funny"
                    element={<FunnyPages />}
                />
                <Route
                    path="/cart"
                    element={<CartPages />}
                />
                <Route
                    path="/tv-and-family"
                    element={<TvAndFamilyPages />}
                />
                <Route
                    path="/iPhone"
                    element={<IphonePages />}
                />

            </Routes>
        </Router>
    )
}

export default AppRoute;