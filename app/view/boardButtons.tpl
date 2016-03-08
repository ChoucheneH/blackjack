<div class="col-md-3">
    <button id="btn-hold" class="btn btn-primary disabled" onclick="hold();"  >FIN DU TOUR</button>
    <button id="btn-abandon" class="btn btn-warning disabled" onclick="reset();" >ABANDON</button>
    <button id="btn-doubler" class="btn btn-warning disabled" onclick="doubler();" >DOUBLER</button>
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
