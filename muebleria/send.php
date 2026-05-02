<?php
header("Access-Control-Allow-Origin: https://tudominio.com"); // cambiá por tu dominio
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

$body = json_decode(file_get_contents("php://input"), true);

$name    = htmlspecialchars(trim($body["name"] ?? ""));
$email   = htmlspecialchars(trim($body["email"] ?? ""));
$message = htmlspecialchars(trim($body["message"] ?? ""));

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Datos inválidos"]);
    exit;
}

$to      = "info@aduomobiliario.com"; // tu correo destino
$subject = "Nuevo mensaje de contacto — $name";
$body    = "Nombre: $name\nCorreo: $email\n\nMensaje:\n$message";
$headers = implode("\r\n", [
    "From: no-reply@aduomobiliario.com",
    "Reply-To: $email",
    "X-Mailer: PHP/" . phpversion(),
]);

$sent = mail($to, $subject, $body, $headers);

echo json_encode(["success" => $sent]);