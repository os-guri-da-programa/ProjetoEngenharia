<?php
  
$host       = "localhost";
$db         = "banco_engenharia";
$user       = "root";
$password   = "";
$charset    = "utf8mb4";

        
try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

?>