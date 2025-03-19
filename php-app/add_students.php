<?php
// Database connection settings
$servername = "mysql_db"; // MySQL service name in docker-compose
$username = "root"; // MySQL username
$password = "rootpassword"; // MySQL password
$dbname = "students_db"; // The database you created for students

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name']; // Get student name from POST data
$class = $_POST['class']; // Get student class from POST data

// Insert query
$sql = "INSERT INTO students (name, class) VALUES ('$name', '$class')";

if ($conn->query($sql) === TRUE) {
    echo "New student added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
