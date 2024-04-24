import { Route, Routes } from "react-router";

import HomePages from './pages/home-pages';
import StorePages from './pages/store-pages';
import MacPages from "./pages/mac-pages";
import IpadPages from "./pages/ipad-pages";
import WatchPages from "./pages/watch-pages";

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

		</Routes>
    )
}

export default App;