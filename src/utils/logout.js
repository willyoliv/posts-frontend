import { GQL_LOGOUT } from 'graphql/mutations/auth';
import { authDataManager } from 'graphql/reactive-var/auth';

export const logout = async (client, userName, callback) => {
  authDataManager.reset();

  try {
    await client.mutate({
      mutation: GQL_LOGOUT,
      variables: {
        userName,
      },
    });
  } catch (e) {
    console.log(e.message);
  }

  if (callback) {
    callback();
  }
};
