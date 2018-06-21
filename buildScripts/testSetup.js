// this file isn't transpiled, so must use CommonJS and ES5

// Register babel to transple before tests run
require('babel-register')();

// Disable webpack features that Moch doesn't understand.
require.extensions['.css'] = function(){};
