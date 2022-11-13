import { gql } from '@apollo/client';
import { GQL_FRAGMENT_COMMENT } from 'graphql/fragments/comment';
import { GQL_FRAGMENT_USER } from 'graphql/fragments/user';

export const GQL_CREATE_COMMENT = gql`
  mutation CREATE_COMMENT($comment: String!, $postId: String!) {
    createComment(data: { comment: $comment, postId: $postId }) {
      ...comment
      user {
        ...user
      }
    }
  }

  ${GQL_FRAGMENT_USER}
  ${GQL_FRAGMENT_COMMENT}
`;
