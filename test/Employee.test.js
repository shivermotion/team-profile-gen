const Employee = require("../lib/Employee");

describe("Employee", () => {
	describe("instantiation", () => {
		it("should pass and instantiate object correctly", () => {
			let testEmployee = new Employee(
				"Jason",
				"jason.day.blue@gmail.com",
				1
			);

			expect(testEmployee.name).toBe("Jason");
			expect(testEmployee.email).toBe(
				"jason.day.blue@gmail.com"
			);
			expect(testEmployee.id).toBe(1);
		});
	});
	describe("getName", () => {
		it("should return name correctly", () => {
			let testEmployee = new Employee(
				"Jason",
				"jason.day.blue@gmail.com",
				1
			);

			let name = testEmployee.getName();
			expect(name).toBe("Jason");
		});
	});
	describe("getEmail", () => {
		it("should return email selected", () => {
			let testEmployee = new Employee(
				"Jason",
				"jason.day.blue@gmail.com",
				1
			);

			let email = testEmployee.getEmail();
			expect(email).toBe("jason.day.blue@gmail.com");
		});
	});
	describe("getId", () => {
		it("should return id correctly. ", () => {
			let testEmployee = new Employee(
				"Jason",
				"jason.day.blue@gmail.com",
				1
			);

			let id = testEmployee.getId();
			expect(id).toBe(1);
		});
	});
	describe("getRole", () => {
		it("should return role correctly ", () => {
			let testEmployee = new Employee(
				"Jason",
				"jason.day.blue@gmail.com",
				1
			);
			let role = testEmployee.getRole();
			expect(role).toBe("Employee");
		});
	});
});
