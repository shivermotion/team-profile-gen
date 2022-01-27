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

const generateHTML = () =>
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
		<!--navbar-->
		<nav class="navbar navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
						class="bi bi-person-video" viewBox="0 0 16 16">
						<path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
						<path
							d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z" />
					</svg>
					Team Profile Generator
				</a>
			</div>
		</nav>
		<!--card grid-->
		<div class="container">
			<div class="row row-cols-2">
				<!--Manager-->
				<div class="col">
					<div class="card">
						<div class="row g-0">
							<div class="col-md-4">
								<image class="bd-placeholder-img" width="100%" height="250"
									src="assets/man-avatar-pngrepo-com.png" role="img" aria-label="Placeholder: Image"
									preserveAspectRatio="xMidYMid slice" focusable="false">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#868e96"></rect>
								</image>
	
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">Manager</h5>
									<ul style="list-style: none;">
										<li>
											<p class="card-text">${manager.name}</p>
										</li>
										<li>
											<p class="card-text">${email}</p>
										</li>
										<li>
											<p class="card-text">${id}</p>
										</li>
										<li>
											<p class="card-text">${officeNumber}</p>
										</li>
	
									</ul>
	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--Engineer-->
				<div class="col">
					<div class="card">
						<div class="row g-0">
							<div class="col-md-4">
								<image class="bd-placeholder-img" width="100%" height="250"
									src="assets/man-avatar-pngrepo-com.png" role="img" aria-label="Placeholder: Image"
									preserveAspectRatio="xMidYMid slice" focusable="false">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#868e96"></rect>
								</image>
	
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">Engineer</h5>
									<ul style="list-style: none;">
										<li>
											<p class="card-text">${name}</p>
										</li>
										<li>
											<p class="card-text">${email}</p>
										</li>
										<li>
											<p class="card-text">${id}</p>
										</li>
										<li>
											<p class="card-text">${gitub}</p>
										</li>
	
									</ul>
	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--Intern-->
				<div class="col">
					<div class="card">
						<div class="row g-0">
							<div class="col-md-4">
								<image class="bd-placeholder-img" width="100%" height="250"
									src="assets/man-avatar-pngrepo-com.png" role="img" aria-label="Placeholder: Image"
									preserveAspectRatio="xMidYMid slice" focusable="false">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#868e96"></rect>
								</image>
	
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title"> Intern </h5>
									<ul style="list-style: none;">
										<li>
											<p class="card-text">${name}</p>
								
							
											<p class="card-text">${email}</p>
								
							
											<p class="card-text">${id}</p>
								
							
											<p class="card-text">${school}</p>
										</li>
	
									</ul>
	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--card 4 (ME)-->
				<div class="col">
					<div class="card">
						<div class="row g-0">
							<div class="col-md-4">
								<image class="bd-placeholder-img" width="100%" height="250"
									src="assets/man-avatar-pngrepo-com.png" role="img" aria-label="Placeholder: Image"
									preserveAspectRatio="xMidYMid slice" focusable="false">
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#868e96"></rect>
								</image>
	
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">Programmer</h5>
									<ul style="list-style: none;">
										<li>
											<p class="card-text">Jason Day</p>
										</li>
										<li><a href="https://github.com/shivermotion">
												<p class="card-text">GitHub</p>
											</a></li>
										<li> <a href="https://shivermotion.github.io/jason-day/">
												<p class="card-text">Portfolio</p>
											</a></li>
	
									</ul>
	
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
