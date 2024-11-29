<?php
// Database connection details
$host = 'sql307.infinityfree.com'; // Replace XXX with your database host
$dbname = 'if0_37814977_contact_db'; // Replace with your database name
$username = 'if0_37814977'; // Replace with your username
$password = '3qRtSD8KINtdFw'; // Replace with your database password

// Connect to MySQL
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}
?>
