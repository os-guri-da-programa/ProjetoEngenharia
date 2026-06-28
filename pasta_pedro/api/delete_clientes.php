<?php
header("Content-Type: application/json");
include 'mysql_connection.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $password, $options);

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!empty($data['id'])) {
        
        $sql = "DELETE FROM clientes WHERE id = :id";
        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            ':id' => $data['id']
        ]);

        echo json_encode(['success' => true, 'message' => 'Cliente excluído com sucesso!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Data incompleta fornecida.']);
    }

} catch (\PDOException $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}

?>