<?php
session_start();
if(isset($_SESSION["user"])){
?>

<html>
<?php
	echo "<h1>Welcome" . $_SESSION["user"] . "</h1>";
?>
<a href="?logout">Logout</a>
</html>

<?php
if(isset($_GET["logout"])){
	session_destroy();
	header("Location: index.php");
	}
} else{
	header("Location: index.php");
}
?>