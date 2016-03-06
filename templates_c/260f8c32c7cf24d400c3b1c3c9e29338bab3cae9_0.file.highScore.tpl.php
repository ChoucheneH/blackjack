<?php /* Smarty version 3.1.27, created on 2016-03-06 23:24:20
         compiled from "C:\wamp64\www\blackjack\app\view\highScore.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:4056dcbc246016c3_49346451%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '260f8c32c7cf24d400c3b1c3c9e29338bab3cae9' => 
    array (
      0 => 'C:\\wamp64\\www\\blackjack\\app\\view\\highScore.tpl',
      1 => 1457176931,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4056dcbc246016c3_49346451',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56dcbc2460a7b5_93313589',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56dcbc2460a7b5_93313589')) {
function content_56dcbc2460a7b5_93313589 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '4056dcbc246016c3_49346451';
?>
<div class="helpContent col-md-2">	
            <div class="centered">
				TOP SCORE : <br><br>
                <p> Afficher score top 10 - À compléter </p>
				 <br><br> <br><br>
                <i class="fa fa-question-circle fa-3x orange"></i>
                <hr class="border-dotted"/>     
				<h4> Règles du jeu </h4> 				
                <p class="help-descriptor">
				<a href="https://fr.wikipedia.org/wiki/Blackjack_%28jeu%29"> Suivre ce lien </a></p>
            </div>
        </div>
<?php }
}
?>