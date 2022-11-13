const { makeVar, useReactiveVar } = require('@apollo/client');

const initialValue = {
  userName: '',
  password: '',
};

const loginFormVarFn = makeVar(initialValue);

const useLoginFormVar = () => {
  return useReactiveVar(loginFormVarFn);
};

export const loginFormVar = {
  set: (param) => loginFormVarFn(param),
  get: () => loginFormVarFn(),
  reset: () => loginFormVarFn(initialValue),
  use: useLoginFormVar,
};
