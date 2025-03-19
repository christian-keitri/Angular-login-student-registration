<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form submission
    $name = $_POST['name'];

    // Fetch MySQL credentials from environment variables
    $servername = getenv('MYSQL_HOST');  // 'mysql' as per your docker-compose
    $username = getenv('MYSQL_USER');    // 'root' as per your docker-compose
    $password = getenv('MYSQL_PASSWORD'); // 'rootpassword' as per your docker-compose
    $dbname = getenv('MYSQL_DB');         // 'students_db' as per your docker-compose

    // Establish connection to MySQL using the environment variables
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert data into the students table
    $sql = "INSERT INTO students (name) VALUES ('$name')";
    if ($conn->query($sql) === TRUE) {
        echo "New student added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the connection
    $conn->close();
}
?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="name">Student Name:</label>
    <input type="text" id="name" name="name" required>
    <input type="submit" value="Add Student">
</form>
