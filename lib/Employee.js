class Employee {
	constructor(name, email, id) {
		this.name = name;
		this.email = email;
		this.id = id;
	}

	getName() {
		return this.name;
	}
	getEmail() {
		return this.email;
	}
	getId() {
		return this.id;
	}
	getRole() {
		return "Employee";
	}

	printInfo() {
		console.log(`${this.name} is now an employee`);
		console.log(`This employee has an id of ${this.id}`);
	}
}
module.exports = Employee;
