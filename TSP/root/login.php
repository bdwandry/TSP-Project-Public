<?php
	include("config.php");
	session_start();
	
	if($_SERVER["REQUEST_METHOD"]=="POST"){
		//username and password sent from form
		
		$myusername = mysqli_real_escape_string($db, $_POST['username']);
		$mypassword = mysqli_real_escape_string($db, $_POST['password']);
		
		//MAY NEED TO CHANGE TO MATCH DB
		$sql = "SELECT id from admin where username = '$myusername' and passcode = '$mypassword'";
		$result = mysqli_query($db,$sql);
		$row = $mysqli_fetch_array($result, MYSQLI_ASSOC);
		$active = $row['active'];
		
		$count = mysqli_num_rows($result);
		
		//If result matched username and password from db, table row must be one row
		if($count == 1){
			session_resgister("myusername");
			$_SESSION['login_user'] = $myusername;
			
			//MAY NEED TO CHANGE, TAKES TO WELCOME PAGE
			header("location: welcome.php");
		}else{
			$error = "Your Username or Password is invalid";
		}
	}
?>
<html>

<head>
	<link rel="stylesheet" type="text/css" href="../css/login-index.css" >

	<title>TSP</title>
</head>

<body>
<!-- Main Body container - everything will be contained in this for formatting purposes -->
<div id="container">
	<!-- Header -->
	<div id="header">
		<h1>Login Page</h1>
	</div>
	<!-- Login -->
	<div id="login">
	
		<!--Username:&nbsp; <input name="Text1" type="text" > <br >
		Password:&nbsp; <input name="Password1" type="password" > -->
		<form action="" method="post">
			 <label>Username  :&nbsp; </label><input type = "text" name = "username" class = "box"><br><br >
             <label>Password  :&nbsp; </label><input type = "password" name = "password" class = "box" ><br><br >
             <input type = "submit" value = " Submit "><br >
		</form>
	
	</div>


</div>

</body>

</html>

