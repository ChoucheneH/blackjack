{include file="app/view/header.tpl"}

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
                        {include file="app/view/boardButtons.tpl"}
                    </div>
                    <div class="row gameState">
                       {include file="app/view/gameStates.tpl"}
                    </div>
                </div>
            </div>
        </div>
        {include file="app/view/highScore.tpl"}
        
    </div>
      
{include file="app/view/header.tpl"}