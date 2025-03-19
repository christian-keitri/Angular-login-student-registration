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

$id = $_POST['id']; // Get student ID from POST data

// Delete query
$sql = "DELETE FROM students WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Student deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
