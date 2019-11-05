<!-- 
	 defines database server & connection
	 defines ________ folder name???
	 defines password for database
	 defines database
-->
<?php
	define('DB_SERVER', 'localhost:3036');
	define('DB_SERVER', 'root');
	define('DB_PASSWORD', 'rootpassword');
	define('DB_DATABASE', 'database');
	$db = msqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

?>	