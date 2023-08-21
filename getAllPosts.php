<?php
include 'db_connection.php';

$stmt = $conn->prepare("SELECT * FROM posts");
$stmt->execute();
$result = $stmt->get_result();

$posts = [];
while($row = $result->fetch_assoc()) {
    $posts[] = $row;
}

echo json_encode($posts);
?>
