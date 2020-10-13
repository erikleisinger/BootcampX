SELECT teachers.name, COUNT(assistance_requests.*) AS total_assistance
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;
