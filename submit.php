<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'sahkelvin914@gmail.com';
    $subject = 'New Message from Contact Form';
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $name <$email>";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
