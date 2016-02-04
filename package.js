Package.describe({
  name: 'tmeasday:healthcheck-handler',
  version: '0.0.1',
  summary: 'A connect handler to shortcircuit galaxy healthchecks'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'webapp']);
  api.addFiles('healthcheck-handler.js');
});
