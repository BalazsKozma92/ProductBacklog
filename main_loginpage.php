<!DOCTYPE html>
<html lang="hu">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="main.css">
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

<?php/*
	$servername = "localhost";
	$uname = "root";
	$pw = "";
	$dbname = "registration";

	$con = new mysqli($servername, $uname, $pw, $dbname);
	if ($con->connect_error) {
		die("Connection failed: " . $con->connect_error);
	}
	
	if(isset($_POST['submit'])){
		$userName = mysqli_real_escape_string($con,$_POST['username']);
		$password = mysqli_real_escape_string($con,$_POST['password']);
		//$userName = $_POST['username'];
		//$password = $_POST['password'];
		$sel_user = "SELECT * FROM registration.users WHERE userName = '$userName' AND password = '$password'";
		$run_user = mysqli_query($con, $sel_user);
		$check_user = mysqli_num_rows($run_user);
		
		if($check_user>0){
			$_SESSION['username'] = $userName;
			echo "<script>window.open('mainpage.html','_self')</script>";
		}
		else {
			echo "<script>alert('Invalid username or password.')</script>";
		}

	}*/	
	session_start();
	var_dump('sadg');
	$servername = "localhost";
	$uname = "root";
	$pw = "";
	$dbname = "registration";

	$con = new mysqli($servername, $uname, $pw, $dbname);
	if ($con->connect_error) {
		die("Connection failed: " . $con->connect_error);
	}
	 
	$error = "";
	if(!empty($_POST["submit"])){
		if(empty($_POST["username"]) || empty($_POST["password"])){
			$error = "Both fields are required.";
			var_dump('blah');
		}	
		else {
			$userName = $_POST['username'];
			$password = $_POST['password'];
	 
			$userName = stripslashes($userName);
			$password = stripslashes($password);
			$userName = mysqli_real_escape_string($con, $userName);
			$password = mysqli_real_escape_string($con, $password);
			$password = md5($password);
	 
			$sql="SELECT * FROM registration.users WHERE userName='$userName' AND password='$password'";
			$result=mysqli_query($con,$sql);
			$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
			var_dump($result);
			if(mysqli_num_rows($result) == 1){
				$_SESSION['username'] = $login_user;
				header("location: mainpage.html");
			}
			else{
				$error = "Incorrect username or password.";
			}	 
		}
	}
?>