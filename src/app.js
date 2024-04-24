import { Route, Routes } from "react-router";
import HomePages from './pages/home-pages';
import StorePages from './pages/store-pages';

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
		</Routes>
    )
}

export default App;