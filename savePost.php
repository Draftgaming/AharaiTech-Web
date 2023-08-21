<?php
include 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->content)) {
    $username = $data->username;
    $content = $data->content;

    $image_path = ""; // Default to empty path
    if(isset($_FILES["image"])) {
        $target_dir = "uploads/"; 
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        if(move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
            $image_path = $target_file;
        }
    }

    $stmt = $conn->prepare("INSERT INTO posts (username, content, image_path) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $content, $image_path);

    if($stmt->execute()) {
        echo json_encode(["status" => "success", "image_path" => $image_path]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}
?>
