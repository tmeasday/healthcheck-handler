# healthcheck-handler

A small snippet to ensure that Galaxy Healthchecks don't hit your Server Side Rendering code.

Simply ensure that this package is included in you `.meteor/packages` **before** `kadira:flow-router-ssr`. 

Tested only with `kadira:flow-router-ssr`, although in theory it should work with any SSR package.
