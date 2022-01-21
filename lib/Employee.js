class Employee {
	constructor(name, email, id) {
		this.name = name;
		this.email = email;
		this.id = id;
	}

	getName() {
		console.log(this.name);
	}
	getEmail() {
		console.log(this.email);
	}
	getId() {
		console.log(this.id);
	}
	getRole() {
		console.log("Employee");
	}

	printInfo() {
		console.log(`${this.name} is now an employee`);
		console.log(`This employee has an id of ${this.id}`);
	}
}
module.exports = Employee;
