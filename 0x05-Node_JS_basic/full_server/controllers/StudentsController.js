const readDatabase = require("../utils");

class StudentsController {
    static getAllStudents (request, response) {
	readDatabase(process.argv[2].toString()).then((students) => {
	    response.statusCode = 200;
	    response.status(200).send("This is the list of our students");
	    const keys = Object.keys(students);
	    keys.sort();
	    for (let i=0; i<keys.length; i++) {
		let output = "";
		output += "Number of students in " + keys[i] + ": " + students[keys[i]] + ". ";
		output += "List: " + students[keys[i]].join(', ');
		response.status(200).send(output);
	    }
	    response.end();
	}).catch((error) => {
	    response.statusCode = 500;
	    response.status(500).send("Cannot load the database");
	});
    }

    static getAllStudentsByMajor(request, response) {
	readDatabase(process.argv[2].toString()).then((students) => {
	    let output = "";
	    switch (request.url) {
	    case "/students/CS":
		output += "List: " + students["CS"].join(', ');
		response.status(200).send(output);
		break
	    case "/students/SWE":
		output += "List: " + students["SWE"].join(', ');
		response.status(200).send(output);
		break
	    default:
		response.status(500).send("Major parameter must be CS or SWE");
	    }
	}).catch((error) => {
	    response.status(500).send("Cannot load the database");
	});
    }
}

module.exports = StudentsController;
