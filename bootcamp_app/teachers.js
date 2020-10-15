const args = process.argv;

const cohortName = args[2];
const values = [`%${cohortName}%`];

const query = `SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;`;

const { Pool } = require('pg');

const pool = new Pool ({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(query, values).then((res) => {
  res.rows.forEach(user => {
    console.log(`${args[2]}: ${user.teacher}`);
  })
}).catch(err => {
  console.error('query error', err.stack)
})