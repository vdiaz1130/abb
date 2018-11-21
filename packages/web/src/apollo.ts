import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
	link: new HttpLink({
		credentials: 'include',
		uri: 'http://localhost:4000'
	}),
	cache: new InMemoryCache()
});
