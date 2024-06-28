//routes management
import AppRoute from "./Routes/index.js";

//state management
import { Provider } from 'react-redux';
import store from './reducer/store.js';

// import sass
import './Sass/style.sass';

const App = () => {
	return (
		<Provider store={store}>
			<AppRoute />
		</Provider>
	)
}

export default App;