<?php
	include('../session.php');
?>
<html>
	<head>
		<title>Welcome</title>
	</head>
	
	<body>
		<h1>Welcome <?php echo $login_session; ?></h1>	
		<h2><a href="../logout.php">Log Out</a></h2>
		<h2><a href="root/login.php">Login</a></h2>
	</body>
</html>