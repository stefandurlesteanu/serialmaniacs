import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HomeWrapper } from './components/style'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: new InMemoryCache()
});





ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<HomeWrapper>
				<App />
			</HomeWrapper>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

