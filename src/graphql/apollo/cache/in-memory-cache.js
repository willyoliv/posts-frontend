import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          keyArgs: false,
          merge(existing = [], incoming = []) {
            return [...existing, ...incoming];
          },
        },
      },
    },
    Post: {
      fields: {
        numberOfComments(_, { readField }) {
          const comments = readField('comments');
          return comments?.length ?? 0; // comments.length
        },
      },
    },
  },
});
