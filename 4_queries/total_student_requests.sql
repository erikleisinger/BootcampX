SELECT students.name, COUNT(assistance_requests.*) AS total_requests
FROM students
JOIN assistance_requests ON student_id = students.id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;
