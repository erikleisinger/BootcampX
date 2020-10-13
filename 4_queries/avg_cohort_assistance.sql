SELECT cohorts.name, AVG(completed_at - started_at) as average_assistance_request_time
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.id
GROUP BY cohorts.name
ORDER BY average_assistance_request_time;
