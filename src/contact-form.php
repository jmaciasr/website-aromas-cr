<?php
	header('Location: sended-form.html');
	if (!isset($_POST['submit'])) {
			echo "Error: Tienes que enviar el formulario";
		}
		$name = $_POST['name'];
		$email = $_POST['email'];
		$cel = $_POST['cel'];
		$message = $_POST['message'];

		$email_from = 'info@aromas-cr.com';
		$email_subject = 'Has recibido un correo nuevo a aromas-cr.com';
		$email_body = "Nos escribe: " . $name . "\nCorreo: " . $email . "\nCelular: " .  $cel . "\nMensaje: " . $message;
		$to = 'info@aromas-cr.com';
		$headers = 'From: $email_from \r\n';

		mail($to, $email_subject, $email_body, $headers);
?>