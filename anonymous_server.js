// handler to login anonymously
Accounts.registerLoginHandler(function(options) {
  if (!options.anonymous)
    return undefined; // don't handle
  
  return {
    type: 'anonymous',
    userId: Accounts.insertUserDoc({profile: {}}, {anonymous: true})
  };
});
