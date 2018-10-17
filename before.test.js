var npm = require('npm');

describe("Initialize docker", () => {
 

    it("This is to test the order of execution", () => {
        console.log("Check point 3");

        npm.load(function (a, b) {
            console.log("JJJJJ", b.config.list[0].prefix)
            npm.commands.run(['test']);
        });

    })


});
