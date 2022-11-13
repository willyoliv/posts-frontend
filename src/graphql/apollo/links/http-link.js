const { HttpLink } = require('@apollo/client');

export const httpLink = new HttpLink({
  uri: 'https://post-graphql-api.herokuapp.com/',
  credentials: 'include',
});
