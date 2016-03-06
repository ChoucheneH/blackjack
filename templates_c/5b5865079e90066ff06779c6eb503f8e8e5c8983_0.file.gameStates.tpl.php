<?php /* Smarty version 3.1.27, created on 2016-03-06 23:24:20
         compiled from "C:\wamp64\www\blackjack\app\view\gameStates.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2823556dcbc245cd457_70512695%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5b5865079e90066ff06779c6eb503f8e8e5c8983' => 
    array (
      0 => 'C:\\wamp64\\www\\blackjack\\app\\view\\gameStates.tpl',
      1 => 1457211728,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2823556dcbc245cd457_70512695',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56dcbc245d9107_52033108',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56dcbc245d9107_52033108')) {
function content_56dcbc245d9107_52033108 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2823556dcbc245cd457_70512695';
?>
<div class="col-md-4">
    <h2> Mon argent disponible </h2>
    <h3>
        <i class="fa fa-money fa-2x"></i> $
        <label id="wallet">1000</label>
    </h3>
</div>
<div class="col-md-4 myGame">
    <h2> Mon jeu </h2>
    <h3>
        <i class="fa fa-money fa-2x"></i> $
        <label id="current-bet">0</label> 
    </h3>
    <!--<h3>Etat de la main : 
        <label id="resultMainJoueur">0</label>
    </h3>-->
</div>
<div class="col-md-4">
    <h2> La Banque </h2>
    <h3>
        <i class="fa fa-money fa-2x"></i> ∞ 
    </h3>
    <!--<h3>Etat de sa main : 
        <label id="resultMainBanque">0</label>
    </h3>-->
</div><?php }
}
?>