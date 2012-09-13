Package.describe({
  summary: "Anonymous account support."
});

Package.on_use(function (api, where) {
  api.use('accounts-base', ['client', 'server']);
  
  api.add_files('anonymous_server.js', 'server');
  api.add_files('anonymous_client.js', 'client');
});