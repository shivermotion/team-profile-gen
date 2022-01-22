const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
	describe("instantiation", () => {
		it("should pass and instantiate object correctly", () => {
			let testIntern = new Intern(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"Collin College"
			);

			expect(testIntern.name).toBe("Jason");
			expect(testIntern.email).toBe(
				"jason.day.blue@gmail.com"
			);
			expect(testIntern.id).toBe(1);
			expect(testIntern.school).toBe("Collin College");
		});
	});
	describe("getName", () => {
		it("should return name correctly", () => {
			let testIntern = new Intern(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"Collin College"
			);

			let name = testIntern.getName();
			expect(name).toBe("Jason");
		});
	});
	describe("getEmail", () => {
		it("should return email selected", () => {
			let testIntern = new Intern(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"Collin College"
			);

			let email = testIntern.getEmail();
			expect(email).toBe("jason.day.blue@gmail.com");
		});
	});
	describe("getId", () => {
		it("should return id correctly. ", () => {
			let testIntern = new Intern(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"Collin College"
			);

			let id = testIntern.getId();
			expect(id).toBe(1);
		});
	});
	describe("getRole", () => {
		it("should return role correctly ", () => {
			let testIntern = new Intern(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"Collin College"
			);

			let role = testIntern.getRole();
			expect(role).toBe("Intern");
		});
	});
	describe("getSchool", () => {
		it("should return school correctly ", () => {
			let testIntern = new Intern(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"Collin College"
			);

			let school = testIntern.getSchool();
			expect(school).toBe("Collin College");
		});
	});
});
