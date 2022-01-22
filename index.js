const inquirer = require("inquirer");
const fs = require("fs");

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your name?",
			},
			{
				type: "input",
				name: "email",
				message: "Where are you from?",
			},
			{
				type: "input",
				name: "id",
				message: "What is your favorite hobby?",
			},
		])
		.then((answers) => {
			console.info("Answer:", answers);
		});
};

const generateHTML = ({ name, email, id }) =>
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
	
	
	
	
	
		<!--src JS goes here to generate-->
	
	
		<!-- Option 1: Bootstrap Bundle with Popper -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
			crossorigin="anonymous"></script>
	</body>
	
	</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
	promptUser()
		// Use writeFileSync method to use promises instead of a callback function
		.then((answers) =>
			fs.writeFileSync("index.html", generateHTML(answers))
		)
		.then(() => console.log("Successfully wrote to index.html"))
		.catch((err) => console.error(err));
};

init();
