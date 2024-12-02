<?php
// Details de connexion 
$host = 'localhost';
$dbname = 'mon_contact_db';
$username = 'root';
$password = '';

// Connexion a mySQL
$conn = new mysqli($host, $username, $password, $dbname);

// Verif rapide de la connexion
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}
?>
