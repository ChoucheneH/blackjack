<?php
header("Content-Type: text/html");
include_once ('./app/assets/lib/AltoRouter.php');
$router = new AltoRouter();
$router->setBasePath('');

/*Mise en place des routes*/
$router->map('GET','/','app/controller/home.php','home');



$match = $router->match();
if($match){
	require $match['target'];
}else{
	header("HTTP/1.0 404 Not Found");
	require '404.html';
}
?>