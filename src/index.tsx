import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { GloabalStyle } from './global.styled';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<GloabalStyle />
		<App />
	</React.StrictMode>
);

