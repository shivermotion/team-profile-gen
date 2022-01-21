const Employee = require("./Employee");

class Intern extends Employee {
	constructor(name, email, id, school) {
		super(name, email, id);
		this.school = school;
	}
	getRole() {
		console.log("Engineer");
	}
	getSchool() {
		console.log(`${this.name} attends ${this.school}.`);
	}
}

module.exports = Intern;
