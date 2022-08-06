import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App';
import { GloabalStyle } from './styles/global.styled';
import { persistor, store } from './store/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

console.log(process.env.REACT_APP_FIREBASE_API_KEY);


root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<GloabalStyle />
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>
	// </React.StrictMode>
);
