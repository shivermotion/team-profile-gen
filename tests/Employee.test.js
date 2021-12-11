const Employee = require("../lib/Employee");

describe("Employee", () => {
	describe("instantiation pass and instatiate object correctly", () => {
		it("should pass and instantiate object correctly", () => {
			//Arrange
			let testEmployee = new Employee(
				"Jason",
				1,
				"jason.day.blue@gmail.com"
			);

			expect(testEmployee.name).toBe("Jason");
			expect(testEmployee.id).toBe(1);
			expect(testEmployee.email).toBe(
				"jason.day.blue@gmail.com"
			);
		});
	});

	describe("getEmail", () => {
		it("should return email correctly.", () => {
			let testEmployee = new Employee(
				"Jason",
				1,
				"jason.day.blue@gmail.com"
			);
			let email = testEmployee.getEmail();
			expect(email).toBe("jason.day.blue@gmail.com");
		});
	});

	describe("getId", () => {
		it("should return id correctly", () => {
			let testEmployee = new Employee(
				"Jason",
				1,
				"jason.day.blue@gmail.com"
			);

			let id = testEmployee.getId();

			expect(id).toBe(1);
		});
	});

	describe("getName", () => {
		it("should return name correctly", () => {
			let testEmployee = new Employee(
				"Jason",
				1,
				"jason.day.blue@gmail.com"
			);

			let name = testEmployee.getName();

			expect(name).toBe("Jason");
		});
	});

	describe("getRole", () => {
		it("should return role correctly", () => {
			let testEmployee = new Employee(
				"Jason",
				1,
				"jason.day.blue@gmail.com"
			);

			let role = testEmployee.getRole();

			expect(role).toBe("Employee");
			console.log(role);
		});
	});
});
