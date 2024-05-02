import { Route, Routes } from "react-router";

import HomePages from './pages/home-pages';
import StorePages from './pages/store-pages';
import MacPages from "./pages/mac-pages";
import IpadPages from "./pages/ipad-pages";
import WatchPages from "./pages/watch-pages";
import AirpodsPages from "./pages/airpods-pages";
import FunnyPages from "./pages/funny-pages";
import CartPages from "./pages/cart-pages";
import TvAndFamilyPages from "./pages/tv-and-family-pages";
import IphonePages from "./pages/iphone-page";

const App = () => {
    return (
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
				element={<MacPages/>}
			/>
			<Route
				path="/ipad"
				element={<IpadPages/>}
			/>
			<Route
				path="/watch"
				element={<WatchPages/>}
			/>
			<Route
				path="/airPods"
				element={<AirpodsPages/>}
			/>
			<Route
				path="/funny"
				element={<FunnyPages/>}
			/>
			<Route
				path="/cart"
				element={<CartPages/>}
			/>
			<Route
				path="/tv-and-family"
				element={<TvAndFamilyPages/>}
			/>
			<Route
				path="/iPhone"
				element={<IphonePages/>}
			/>

		</Routes>
    )
}

export default App;