const Engineer = require("C:/Users/Work/repos/Team-Profile-Gen/lib/Engineer");

describe("Engineer", () => {
	it("should ");
	describe("instantiation pass and instatiate object correctly", () => {
		it("should pass and instantiate object correctly", () => {
			//Arrange
			let testEngineer = new Engineer(
				"Jason",
				1,
				"jason.day.blue@gmail.com"
			);

			expect(testEngineer.name).toBe("Jason");
			expect(testEngineer.id).toBe(1);
			expect(testEngineer.email).toBe(
				"jason.day.blue@gmail.com"
			);
		});
	});

	describe("getGitHub", () => {
		it("should return github correctly.", () => {
			let testEngineer = new Engineer(
				"Jason",
				1,
				"jason.day.blue@gmail.com",
				"shivermotion"
			);
			let github = testEngineer.getGitHub();
			expect(github).toBe("shivermotion");
		});
	});
});
