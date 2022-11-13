const { makeReactiveVar } = require('./make-reactive-var');

export const notificationsVar = makeReactiveVar(
  { isActive: false },
  '__notification_var__',
);
