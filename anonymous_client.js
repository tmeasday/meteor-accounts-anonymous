(function() {
  Meteor.loginAnonymously = function(fn) {
    Meteor.call('login', {anonymous: true}, function(err, result) {
      Meteor.accounts.makeClientLoggedIn(result.id, result.token);
      fn && fn();
    });
  }
})();