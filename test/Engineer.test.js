const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
	describe("instantiation", () => {
		it("should pass and instantiate object correctly", () => {
			let testEngineer = new Engineer(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"https://github.com/shivermotion"
			);

			expect(testEngineer.name).toBe("Jason");
			expect(testEngineer.email).toBe(
				"jason.day.blue@gmail.com"
			);
			expect(testEngineer.id).toBe(1);
		});
	});
	describe("getName", () => {
		it("should return name correctly", () => {
			let testEngineer = new Engineer(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"https://github.com/shivermotion"
			);

			let name = testEngineer.getName();
			expect(name).toBe("Jason");
		});
	});
	describe("getEmail", () => {
		it("should return email selected", () => {
			let testEngineer = new Engineer(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"https://github.com/shivermotion"
			);

			let email = testEngineer.getEmail();
			expect(email).toBe("jason.day.blue@gmail.com");
		});
	});
	describe("getId", () => {
		it("should return id correctly. ", () => {
			let testEngineer = new Engineer(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"https://github.com/shivermotion"
			);

			let id = testEngineer.getId();
			expect(id).toBe(1);
		});
	});
	describe("getRole", () => {
		it("should return role correctly ", () => {
			let testEngineer = new Engineer(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"https://github.com/shivermotion"
			);

			let role = testEngineer.getRole();
			expect(role).toBe("Engineer");
		});
	});
	describe("getGithub", () => {
		it("should return github correctly ", () => {
			let testEngineer = new Engineer(
				"Jason",
				"jason.day.blue@gmail.com",
				1,
				"https://github.com/shivermotion"
			);

			let github = testEngineer.getGithub();
			expect(github).toBe("https://github.com/shivermotion");
		});
	});
});
