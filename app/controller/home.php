<?php

include_once('app/assets/lib/Smarty.class.php');
//include_once('config.php');*/

//session_name();
//session_start();
//$_SESSION=array();

//$_SESSION['title'] = "Estimation des produits";

$smarty = new Smarty();


$match = $router->match();

switch ($match['name']) {
    
    case "home":
    	$smarty->display("app/view/index.tpl");
        
        break;

    default:
        header("HTTP/1.0 404 Not Found");
        require '404.html';
        break;
}
?>
