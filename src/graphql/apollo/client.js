import { ApolloClient, from } from '@apollo/client';
import { cache } from './cache/in-memory-cache';
import { errorLink } from './links/error-link';
import { forwardLink } from './links/forward-link';
import { httpLink } from './links/http-link';

export const apolloClient = new ApolloClient({
  link: from([errorLink, forwardLink, httpLink]),
  cache,
});
