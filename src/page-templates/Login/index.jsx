import { useMutation } from '@apollo/client';
import { AuthForm } from 'components/AuthForm';
import { DefaultError } from 'components/DefaultError';
import { Loading } from 'components/Loading';
import { GQL_LOGIN } from 'graphql/mutations/auth';
import { Helmet } from 'react-helmet';
import { loginFormVar } from 'graphql/reactive-var/login-form';
import { authDataManager } from 'graphql/reactive-var/auth';

export const Login = () => {
  loginFormVar.use();

  const [login, { loading, data, error }] = useMutation(GQL_LOGIN, {
    onError() {},
    onCompleted(data) {
      authDataManager.setVar(
        loginFormVar.get().userName,
        data.login.userId,
        true,
      );
      window.location.href = '/';
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userNameInput = form.username;
    const userPasswordInput = form.password;

    const variables = {
      userName: userNameInput.value,
      password: userPasswordInput.value,
    };

    loginFormVar.set({ ...variables });

    await login({
      variables,
    });
  };

  if (loading) return <Loading loading={loading} />;
  // if (error) return <DefaultError error={error} />;

  console.log(data);

  return (
    <>
      <Helmet title="Login - GraphQL + Apollo-Client - Otávio Miranda" />

      <AuthForm
        handleLogin={handleLogin}
        formDisabled={loading}
        formError={error?.message}
      />
    </>
  );
};
