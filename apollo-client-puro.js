import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: 'https://post-graphql-api.herokuapp.com/',
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query GET_USERS(
      $sort: String = "indexRef"
      $order: ApiFilterOrder = DESC
      $start: Int = 0
      $limit: Int = 10
    ) {
      users(
        input: { _sort: $sort, _order: $order, _start: $start, _limit: $limit }
      ) {
        ...user
      }
    }

    fragment user on User {
      id
      firstName
      lastName
      userName
      createdAt
    }
  `,
  variables: {},
}).then((response) => {
  console.log(response.data)
});
