<?php
// Database connection details
$host = 'localhost';
$dbname = 'mon_contact_db';
$username = 'root';
$password = '';

// Connect to MySQL
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}
?>
