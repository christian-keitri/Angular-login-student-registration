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

$sql = "SELECT id, name, class FROM students";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Class: " . $row["class"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
