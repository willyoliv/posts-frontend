const { HttpLink } = require('@apollo/client');

export const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BASE_URL,
  credentials: 'include',
});
