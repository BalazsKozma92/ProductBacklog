<!DOCTYPE html>
<html lang="hu">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="main_loginpage.css">
	<script src="main.js"></script>
	<title>Product Backlog</title>
</head>
<body>	
	<div class="loginSignup">
		<h1>Login</h1>
		<div id="inputs">
			<p>
				<label for="username" class="uname">Enter your username</label><br>
				<input class="inputs" id="username" name="username" type="text" placeholder="Username">
			</p>
			<p>
				<label for="password" class="pword">Enter your password</label><br>
				<input class="inputs" id="password" name="password" type="password" placeholder="Password">
			</p>	
				<input id="submit" class="box" type="submit" name="submit" value="Submit">
				<div class="box" id="boxReg" onclick="register()">Register</div>
		</div>
	</div>
</body>
</html>

<?php	
	include("connect.php");
	
	session_start();
	$error = "";
	if(!empty($_POST['submit'])){
		if(empty($_POST['username']) || empty($_POST['password'])){
			$error = "Both fields are required.";
		}	
		else {
			$userName = $_POST['username'];
			$password = $_POST['password'];
	 
			$userName = stripslashes($userName);
			$password = stripslashes($password);
			$userName = mysqli_real_escape_string($con, $userName);
			$password = mysqli_real_escape_string($con, $password);
			$password = md5($password);
	 
			$result = mysqli_query($con, "SELECT * FROM registration.users WHERE userName='$userName' AND password='$password'");
			$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
			
			if(mysqli_num_rows($result) == 1){
				$_SESSION['username'] = $userName;
				header("location: mainpage.html");
			}
			else{
				echo '<script language="javascript">';
				echo 'alert("Invalid username or password.")';
				echo '</script>';
			}	 
		}
	}
?>