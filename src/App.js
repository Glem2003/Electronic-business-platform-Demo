import { Route, Routes } from "react-router";
import HomePages from './pages/HomePages';
import StorePages from './pages/StorePages';

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