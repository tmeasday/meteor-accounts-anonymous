(function() {
  // handler to login anonymously
  Accounts.registerLoginHandler(function(options) {
    if (!options.anonymous)
      return undefined; // don't handle
    
    // Create and insert a user, bypassing everything. All we want is the token.
    return Accounts.insertUserDoc({generateLoginToken:true}, {services: {}});
  });
})();