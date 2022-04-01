<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require('depend/PHPMailer.php');
require('depend/Exception.php');
?>

<!DOCTYPE html>
<html lang="en">
  	<head>
		<?php include("./partials/google.php") ?>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="keywords" content="About us, staff, stockton, sacramento, san joaquin" />
		<meta name="Description" content="G&C Careers" />
		<title>G&amp;C Careers</title>
		
		<!-- Social Media posting -->
		<meta property="og:title" content="G&C Septic Career opportunities" />
		<meta property="og:description" content="Come and work with us at G&C Septic!" />
		<meta property="og:url" content="https://gandcseptic.com/apply-now" />
		<meta property="og:image" content="https://gandcseptic.com/images/handshake.jpg" />
		
		<!-- Bootstrap -->
		<link href="css/bootstrap-4.4.1.css" rel="stylesheet" />
		<link href="css/simple-sidebar.css" rel="stylesheet" />
		<style>
			.rotated {
				transform: rotate(180deg);
			}	
		</style>
  	</head>
	<body>
		<div class="container">
			<?php include("./partials/nav.php"); ?> 
			<h1 class="text-center jumbotron">Become a part of the G&amp;C Team</h1>
			<?php 
			if ($_SERVER['REQUEST_METHOD'] === 'POST') {
				
				$fName = filter_var($_POST["fname"], FILTER_SANITIZE_STRING);
				$lName = filter_var($_POST["lname"], FILTER_SANITIZE_STRING);
				$email = filter_var($_POST["contactEmail"], FILTER_SANITIZE_EMAIL);
				$phone = filter_var($_POST["contactPhone"], FILTER_SANITIZE_NUMBER_INT);
				$position = $_POST["jobRadio"];
				
				$mail = new PHPMailer;
				$mail->Host = 'localhost';
				$mail->SMTPAuth = false;
				$mail->SMTPAutoTLS = false; 
				$mail->Port = 25;

				$mail->setFrom('noreply@gandcseptic.com', 'ResumeRequest');
				$mail->addAddress('rebecca.brazier@septicservicesgroup.com', 'Rebecca');

				$mail->isHTML(true);
				$mail->Subject = 'Resume - ' . $fName;
				
				
				//email message table
				$message = "
					<!doctype html>
					<html>
						<head>
							<title>Job Contact Form</title>
						</head>
						<body>
							<table border='0' cellpadding='0' cellspacing='0' height='100%' width='100%' id='bodyTable'>
								<tr>
									<td align='center' valign='top'>
										<table border='0' cellpadding='20' cellspacing='0' width='600' id='emailContainer'>
											<tr>
												<td align='center' valign='top'>
													<table border='0' cellpadding='20' cellspacing='0' width='100%' id='emailHeader'>
														<tr>
															<td align='center' valign='top'>
																Job Contact Form
															</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td align='center' valign='top'>
													<table border='2px' cellpadding='10' cellspacing='0' width='100%' id='emailBody'>
														<tr>
															<td align='center' valign='top'>
																First Name
															</td>
															<td align='center' valign='top'>
																$fName
															</td>
														</tr>
														<tr>
															<td align='center' valign='top'>
																Last Name
															</td>
															<td align='center' valign='top'>
																$lName
															</td>
														</tr>
														<tr>
															<td align='center' valign='top'>
																Phone Number
															</td>
															<td align='center' valign='top'>
																$phone
															</td>
														</tr>
														<tr>
															<td align='center' valign='top'>
																Email
															</td>
															<td align='center' valign='top'>
																$email
															</td>
														</tr>
														<tr>
															<td align='center' valign='top'>
																Position Applying For
															</td>
															<td align='center' valign='top'>
																$position
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</body>
					</html>
					";

				$mail->Body    = $message;
				if(!empty($_FILES["resume"]["name"])){
                
					// File path config
					$targetDir = "uploads/";
					$fileName = basename($_FILES["resume"]["name"]);
					$targetFilePath = $targetDir . $fileName;
					$fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

					// Allow certain file formats
					$allowTypes = array('pdf');
					if(in_array($fileType, $allowTypes)){
						// Upload file to the server
						if(move_uploaded_file($_FILES["resume"]["tmp_name"], $targetFilePath)){
							$uploadedFile = $targetFilePath;
						}else{
							$statusMsg = "Sorry, there was an error uploading your file.";
						}
					}else{
						$statusMsg = 'Sorry, only PDF files are allowed to upload.';
					};

					$mail->addAttachment($uploadedFile, $fileName, 'base64', 'application/pdf', 'attachment'); 

					$mail->send();

					// Delete attachment file from the server
					@unlink($uploadedFile);
					
					echo(
						
						'<h3>Thank you for submitting the form</h3>'
					);
				}else{
					echo("<h3>There has been a problem sending your information. Please try again later!</h3>");
				};	
			}else {
				include("partials/careersSelector.php");//Has 2 child files: careers.js, applicationForm.php
			};
			?>
			<hr>
		</div>
		<?php include("./partials/footer.php") ?>
		
		<!-- File Validation Script -->
		<script type="text/javascript">
			function validate(file) {
				const reg = /\.pdf/;
				if(!reg.exec(file)) {
					alert("File must be a PDF");
					document.getElementById("resume").value = null
				};
			};
		</script>
		
		<!-- Menu Toggle Script -->
		<script>
			$("#menu-toggle").click(function(e) {
			  e.preventDefault();
			  $("#wrapper").toggleClass("toggled");
			});
		</script>
	</body>
</html>