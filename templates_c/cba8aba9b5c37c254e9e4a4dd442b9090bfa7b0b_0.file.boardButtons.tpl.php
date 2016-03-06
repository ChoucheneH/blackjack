<?php /* Smarty version 3.1.27, created on 2016-03-06 23:24:20
         compiled from "C:\wamp64\www\blackjack\app\view\boardButtons.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:79456dcbc24593438_76294015%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'cba8aba9b5c37c254e9e4a4dd442b9090bfa7b0b' => 
    array (
      0 => 'C:\\wamp64\\www\\blackjack\\app\\view\\boardButtons.tpl',
      1 => 1457209716,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '79456dcbc24593438_76294015',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56dcbc2459e1d5_28021044',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56dcbc2459e1d5_28021044')) {
function content_56dcbc2459e1d5_28021044 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '79456dcbc24593438_76294015';
?>
<div class="col-md-3">
    <button id="btn-hold" class="btn btn-primary disabled" onclick="hold();"  >FIN DU TOUR</button>
    <button id="btn-abandon" class="btn btn-warning disabled" onclick="reset();" >ABANDON</button>
    <button  id="btn-add-card" class="btn btn-info disabled" onclick="addCard();">CARTE SUPPLEMENTAIRE</button>
</div>
<div class="col-md-6">
    <input id="inputBeginMise" data-slider-ticks="[20,100,200, 300]" data-slider-id='inputBeginMiseSlider' 
            type="text" data-slider-min="20" data-slider-max="300" data-slider-step="20" 
            data-slider-ticks-labels='["$20", "$100","$200","$300"]' data-slider-value="20"/>
    <button class="btn btn-info" id="btn-bet" onclick="bet()" >MISER</button>
</div>
<div class="col-md-3">
    <button id="btn-next" class="btn btn-danger disabled" onclick="next();"  >TOUR SUIVANT</button>
    <button id="btn-exit" class="btn btn-danger" onclick="exit();" >QUITTER LA TABLE</button>
</div>
<?php }
}
?>