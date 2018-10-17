var npm = require('npm');
npm.load(function(err) {
  npm.commands.run(['test']);
});