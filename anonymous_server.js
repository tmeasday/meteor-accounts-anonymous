// handler to login anonymously
Accounts.registerLoginHandler(function(options) {
  if (!options.anonymous)
    return undefined; // don't handle
  _.extend(options, {generateLoginToken: true});
  return Accounts.insertUserDoc(options, {});
});
