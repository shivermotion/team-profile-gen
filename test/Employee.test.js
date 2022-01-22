const {
	getMaxListeners,
	hasUncaughtExceptionCaptureCallback,
} = require("process");
const Employee = require("../lib/Employee");

describe("Employee", () => {
	describe("instantiation", () => {
		it("should pass and instantiate object correctly", () => {
			let testEmployee = new Employee(
				"Jason",
				1,
				"jason.day.blue@gmail.com"
			);

			expect(testEmployee.name).toBe("Jason");
			expect(testEmployee.id).toBe(1);
			expect(testEmployee.email).toBe(
				"jason.day.blue.gmail.com"
			);
		});
	});
	describe("getName", () => {
		it("should ", () => {});
	});
	describe("getEmail", () => {
		it("should ", () => {});
	});
	describe("getId", () => {
		it("should ", () => {});
	});
	describe("getRole", () => {
		it("should ", () => {});
	});
});
