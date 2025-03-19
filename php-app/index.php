<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form submission
    $name = $_POST['name'];

    // Insert into database
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "student_db"; // Replace with your actual DB name

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO students (name) VALUES ('$name')"; // Adjust table name and column names
    if ($conn->query($sql) === TRUE) {
        echo "New student added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="name">Student Name:</label>
    <input type="text" id="name" name="name" required>
    <input type="submit" value="Add Student">
</form>
