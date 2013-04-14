Meteor.loginAnonymously = function(fn) {
  Meteor.call('login', {anonymous: true}, function(err, result) {
    Accounts._makeClientLoggedIn(result.id, result.token);
    fn && fn();
  });
}
