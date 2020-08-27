import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HomeWrapper } from './components/style'



ReactDOM.render(
	<React.StrictMode>
		<HomeWrapper>
			<App />
		</HomeWrapper>
	</React.StrictMode>,
	document.getElementById('root')
);

