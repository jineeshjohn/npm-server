var npm = require('npm');
npm.load({
    prefix: './testinfolder'
}, function(a, b) {

    console.log("JJJJJ", b.config.list[0].prefix)
  npm.commands.run(['test']);
});