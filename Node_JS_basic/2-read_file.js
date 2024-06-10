const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      const fieldCounts = {};

      lines.forEach(line => {
        const [name, age, field] = line.split(',');

        if (fieldCounts[field]) {
          fieldCounts[field].count++;
          fieldCounts[field].students.push(name);
        } else {
          fieldCounts[field] = { count: 1, students: [name] };
        }
      });

      const totalStudents = lines.length;

      const results = {
        totalStudents,
        fieldCounts,
      };

      resolve(results);
    });
  });
}

module.exports = countStudents;
