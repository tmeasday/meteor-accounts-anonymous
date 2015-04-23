AccountsAnonymous = {
  autoLogin: true
};

AccountsAnonymous.login = function(callback) {
  Accounts.callLoginMethod({
    methodArguments: [{anonymous: true}],
    userCallback: callback
  });
}


Meteor.startup(function() {
  if (AccountsAnonymous.autoLogin && ! Meteor.userId()) {
    AccountsAnonymous.login();
  }
});