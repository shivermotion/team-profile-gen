const Manager = require("../lib/Manager");

describe("Manager", () => {
	describe("instantiation", () => {
		it("should pass and instantiate object correctly", () => {
			let testManager = new Manager(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"555.555.5555"
			);

			expect(testManager.name).toBe("Jason");
			expect(testManager.email).toBe(
				"jason.day.blue@gmail.com"
			);
			expect(testManager.id).toBe(1);
		});
	});

	describe("getName", () => {
		it("should return name correctly", () => {
			let testManager = new Manager(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"555.555.5555"
			);

			let name = testManager.getName();
			expect(name).toBe("Jason");
		});
	});

	describe("getEmail", () => {
		it("should return email selected", () => {
			let testManager = new Manager(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"555.555.5555"
			);

			let email = testManager.getEmail();
			expect(email).toBe("jason.day.blue@gmail.com");
		});
	});

	describe("getId", () => {
		it("should return id correctly. ", () => {
			let testManager = new Manager(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"555.555.5555"
			);

			let id = testManager.getId();
			expect(id).toBe(1);
		});
	});

	describe("getRole", () => {
		it("should return role correctly ", () => {
			let testManager = new Manager(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"555.555.5555"
			);

			let role = testManager.getRole();
			expect(role).toBe("Manager");
		});
	});

	describe("getOfficeNumber", () => {
		it("should return officeNumber correctly ", () => {
			let testManager = new Manager(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"555.555.5555"
			);

			let officeNumber = testManager.getOfficeNumber();
			expect(officeNumber).toBe("555.555.5555");
		});
	});
});
