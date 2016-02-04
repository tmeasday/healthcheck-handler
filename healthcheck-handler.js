WebApp.rawConnectHandlers.use(function(req, res, next) {
  if (req.headers['user-agent'] === 'Galaxybot/1.0') {
    res.end('');
  } else {
    next();
  }
});
