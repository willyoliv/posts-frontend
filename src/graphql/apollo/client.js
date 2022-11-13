import { ApolloClient } from '@apollo/client';
import { cache } from './cache/in-memory-cache';
import { httpLink } from './links/http-link';

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
