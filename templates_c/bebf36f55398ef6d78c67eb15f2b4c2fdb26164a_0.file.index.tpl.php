<?php /* Smarty version 3.1.27, created on 2016-03-06 23:24:20
         compiled from "C:\wamp64\www\blackjack\app\view\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2361256dcbc244480d3_79762542%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bebf36f55398ef6d78c67eb15f2b4c2fdb26164a' => 
    array (
      0 => 'C:\\wamp64\\www\\blackjack\\app\\view\\index.tpl',
      1 => 1457211482,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2361256dcbc244480d3_79762542',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56dcbc2452d9e8_28659948',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56dcbc2452d9e8_28659948')) {
function content_56dcbc2452d9e8_28659948 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2361256dcbc244480d3_79762542';
echo $_smarty_tpl->getSubTemplate ("app/view/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


    <div class="row">
	 
        <div class="mainContent col-md-10">
		<div class="checkbox" >
  <label><input id="check-debutant" type="checkbox" value="check"><h4>Mode Débutant</h4></label>
</div>
            <div class="bankContent row">
                <div class="col-md-12">
                    <h2><i class="fa fa-university fa-3x"></i><br />Banque</h2> 
                    <div id="bankCards">                                               
                    </div>
                    <div>
                        <p id="score-current-bank" class="hidden-div" >0</p>
                    </div>
                    <hr class="border-dotted"/>
                    <div>
                        <p id="score-current-player" class="hidden-div" >0</p>
                    </div>
                    <h2>
                        <i class="fa fa-user fa-3x"></i>
                        <br />Joueur
                    </h2>
                    <div id="playerCards">
                    </div>
                    <div class="row boardControls">
                        <?php echo $_smarty_tpl->getSubTemplate ("app/view/boardButtons.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

                    </div>
                    <div class="row gameState">
                       <?php echo $_smarty_tpl->getSubTemplate ("app/view/gameStates.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

                    </div>
                </div>
            </div>
        </div>
        <?php echo $_smarty_tpl->getSubTemplate ("app/view/highScore.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

        
    </div>
      
<?php echo $_smarty_tpl->getSubTemplate ("app/view/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);

}
}
?>