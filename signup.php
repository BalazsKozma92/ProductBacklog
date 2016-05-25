<!DOCTYPE html>
<html lang="hu">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="signup.css">
	<script src="main.js"></script>
	<title>Registration page</title>
</head>
<body>
	<div id="wrapper">
		<div id="formDiv">
			<form method="POST" action="signup.php" enctype="multipart/form-data">
				<label>Username:</label><br>
				<input type="text" name="uname"><br><br>
				<label>Password:</label><br>
				<input type="password" name="pword"><br><br>
				<label>Enter password again:</label><br>
				<input type="password" name="pwordRe"><br><br>
				<input id="submit" class="box" type="submit" name="submit" value="Submit">
				<input id="back" class="box" onclick="goMain()" type="button" name="goback" value="Back">
			</form>
		</div>
	</div>
</body>
</html>

<?php
	include("connect.php");
	
	if(isset($_POST['submit'])){
		$userName = $_POST['uname'];
		$password = $_POST['pword'];
		$passwordRe = $_POST['pwordRe'];
		$sql = "INSERT INTO registration.users (userName, password)
			VALUES ('$userName', '$password')";
			
		if($password == $passwordRe){
			if ($con->query($sql) === TRUE) 
			{
				echo "New record created successfully";
				$q = mysqli_query($con, "UPDATE registration.users SET password = MD5(password)");
			} 
			else 
			{
				echo "Error: " . $sql . "<br>" . $con->error;
			}
		} 
		else 
		{ 
			echo '<script language="javascript">';
			echo 'alert("The passwords do not match.")';
			echo '</script>';
		}
	}
	
	$con->close();
?>