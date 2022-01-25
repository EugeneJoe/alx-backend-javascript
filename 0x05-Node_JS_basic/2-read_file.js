const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const l = length - 1;
    process.stdout.write(`Number of students: ${l}\n`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        process.stdout.write(`Number of students in ${key}: ${value}. `);
        process.stdout.write(`List: ${students[key].join(', ')}\n`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database\n');
  }
}

module.exports = countStudents;
