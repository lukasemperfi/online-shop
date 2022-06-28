import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { GloabalStyle } from './styles/global.styled';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GloabalStyle />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

