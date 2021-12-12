//page creation
const generateHTML = require("./src/generateHTML");

// modules
const fs = require("fs");
let inquirer = require("inquirer");

//employee choices
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");

//team array
const teamArray = [];

//initial prompt
const addManager = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Who is the manager of this team?",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log(
							"Please enter the manager's name!"
						);
						return false;
					}
				},
			},
			{
				type: "input",
				name: "id",
				message: "Please enter the manager's ID.",
				validate: (nameInput) => {
					if (isNaN(nameInput)) {
						console.log(
							"Please enter the manager's ID!"
						);
						return false;
					} else {
						return true;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "Please enter the manager's email.",
				validate: (email) => {
					if (email) {
						return true;
					} else {
						console.log(
							"Please enter an email!"
						);
						return false;
					}
				},
			},
			{
				type: "input",
				name: "officeNumber",
				message: "Please enter the manager's office number",
				validate: (officeNumber) => {
					if (officeNumber) {
						return true;
					} else {
						console.log(
							"Please enter an office number!"
						);
						return false;
					}
				},
			},
		])

		.then((managerInput) => {
			const { name, id, email, officeNumber } = managerInput;
			const manager = new Manager(
				name,
				id,
				email,
				officeNumber
			);

			teamArray.push(manager);
			console.log(manager);
		});
};
