(function() {
  Meteor.loginAnonymously = function(fn) {
    Meteor.call('login', {anonymous: true}, function(err, result) {
    	if(!err) {
     		Accounts._makeClientLoggedIn(result.id, result.token);
	    	fn && fn();
      	}
    });
  }
})();