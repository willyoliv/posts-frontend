const { HttpLink } = require('@apollo/client');

export const httpLink = new HttpLink({
  uri: process.env.BASE_URL,
  credentials: 'include',
});
