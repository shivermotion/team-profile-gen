const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, email, id, github) {
		super(name, email, id);
		this.github = github;
	}
	getRole() {
		console.log("Engineer");
	}
	getGithub() {
		console.log(`www.github.com/${this.github}`);
	}
}

module.exports = Engineer;
