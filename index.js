// require tools
const inquirer = require("inquirer");
const fs = require("fs");

//import objects
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//team array
const team = [];

// prompts
const promptManager = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Manager name:",
			},
			{
				type: "input",
				name: "email",
				message: "Input Manager's email :",
			},
			{
				type: "input",
				name: "id",
				message: "Assign Manager an id :",
			},
			{
				type: "input",
				name: "officeNumber",
				message: "Manager phone number :",
			},
		])
		.then((response) => {
			const { name, email, id, officeNumber } = response;
			const manager = new Manager(
				name,
				email,
				id,
				officeNumber
			);
			team.push(manager);
			console.log(manager);
			console.log(team);
		});
};

const promptEngineer = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Engineer name:",
			},
			{
				type: "input",
				name: "email",
				message: "Input Engineer's email :",
			},
			{
				type: "input",
				name: "id",
				message: "Assign Engineer an id :",
			},
			{
				type: "input",
				name: "github",
				message: "Enter Engineer's Git Hub URL :",
			},
		])
		.then((response) => {
			const { name, email, id, github } = response;
			const engineer = new Engineer(name, email, id, github);
			team.push(engineer);
			console.log(engineer);
			console.log(team);
		});
};

const promptIntern = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Intern name:",
			},
			{
				type: "input",
				name: "email",
				message: "Intern email :",
			},
			{
				type: "input",
				name: "id",
				message: "Assign Intern an id :",
			},
			{
				type: "input",
				name: "school",
				message: "Name of school :",
			},
		])
		.then((response) => {
			const { name, email, id, school } = response;
			const intern = new Intern(name, email, id, school);
			team.push(intern);
			console.log(intern);
			console.log(team);
		});
};

// combine prompt responses and writeFile

async function combinePrompts() {
	promptManager()
		.then(promptEngineer)
		.then(promptIntern)
		.then((response) =>
			fs.writeFileSync("index.html", generateHTML(response))
		)
		.then(() => console.log("Successfully wrote to index.html"))
		.catch((err) => console.error(err));
}

combinePrompts();

const generateHTML = ({ name, email, id, officeNumber, github, school }) =>
	`<!doctype html>
	<html lang="en">

	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Bootstrap CSS -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
		<title>Hello, world!</title>
	</head>
	
	<body>
	<div class="bd-example">
        <div class="row  row-cols-1 row-cols-md-2 g-4">
         
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
	
	
	
	
		
	
	
		<!-- Option 1: Bootstrap Bundle with Popper -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
			crossorigin="anonymous"></script>
	</body>
	
	</html>`;
