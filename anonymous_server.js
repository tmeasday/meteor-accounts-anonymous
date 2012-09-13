(function() {
  
  // handler to login anonymously
  Meteor.accounts.registerLoginHandler(function(options) {
    if (!options.anonymous)
      return undefined; // don't handle
    
    // ok; if they are logging in, this means they don't have
    // a user yet. Create one. We don't need to ever find it again.
    var user = Meteor.accounts.onCreateUserHook({}, {}, {exists: true});
    var userId = Meteor.users.insert(user);
    
    // create a login token (this is how we remember them)
    var loginToken = Meteor.accounts._loginTokens.insert({userId: userId});
    return {token: loginToken, id: userId};
  });
})();