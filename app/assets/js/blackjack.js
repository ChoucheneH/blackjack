$(document).ready(function(){
	$('#inputBeginMise').slider({
        formatter: function(value) {
            return value + "$";
        }
    });
    cardClass.initializeDecks();
});

function hold(){
	if(isDisabled('btn-hold')) return;
	console.log('hold');
}

function addCard(){
	if(isDisabled('btn-add-card')) return;
	if(getTotal("player") < 21)
		getCard("player");

	if(getTotal("player") == 21)
		desactivateButtons("btn-add-card");
	else if (getTotal("player") > 21)
		arreterJeux("player");
	
	console.log('addCard');


}

function reset(){
	if(isDisabled('btn-abandon')) return;
	var message = "Vous avez abandonné !! "
	displayEtat(getStatusGame("ABANDON"),message);
	console.log("reset !!");
		

}

function bet(){
	if(isDisabled('btn-bet')) return;
	var value = parseInt($('#inputBeginMise').val());
	if(hasMoney(value)){
		console.log('bet');
		getCard("player");
		getCard("bank");
		getCard("player");
		$("#wallet").text(getMoney().toString());
		$("#current-bet").text( (getBet( setBet(value) ) ).toString());
		$('#inputBeginMise').slider('disable');
	}else{
		console.log('don\'t have money');
	}

}

function next(){
	if(isDisabled('btn-next')) return;
	resetBoard();
	console.log('next');

}

function exit(){
	if(isDisabled('btn-exit')) return;
	console.log('exit');

}

function isDisabled(id){
	return ($('#'+id).hasClass("disabled"))?true:false;
}

function getCard(who){
	var cardName = cardClass.getCardWithName(who);
	switch(who){
		case "player":
		addCardDiv("playerCards",cardName);
		displayTotal("score-current-player",getTotal(who));

		//cardsJoueur.push(cardName) ;
		//CalculeTotalCard() ;
  		//setScoreDiv("score-current-player",totale);
			break;
		case "bank":
		addCardDiv("bankCards",cardName);
		displayTotal("score-current-bank",getTotal(who));
		//cardBanque.push(cardName) ;
		//CalculeTotalCardBankcards() ;
  		//setScoreDiv("score-current-bank",totaleBanque)
				break;
		default:
			break;

	}
	sleepFor(0);
	activateButtons("btn-hold","btn-add-card","btn-abandon");
	desactivateButtons("btn-bet");
}



function sleepFor( duree ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + duree){  } 
}

function addCardDiv(id,cardName){
 	var divId = document.getElementById(id);
 	var addDiv = document.createElement('div');
	addDiv.className = 'card-added';
	var img = "app/assets/img/";
	img += cardName + ".png";
	addDiv.style.backgroundImage = " url("+img+")";
	divId.appendChild(addDiv);
}

function desactivateButtons(){
	if(arguments.length > 0)
		for (i = 0; i < arguments.length; i++)
			$(('#'+arguments[i])).addClass('disabled');
}

function activateButtons(){
	if(arguments.length > 0)
		for (i = 0; i < arguments.length; i++)
			$(('#'+arguments[i])).removeClass('disabled');
}

function displayTotal(id,score){
	if($("#"+id).hasClass("hidden-div"))
		$("#"+id).removeClass("hidden-div");
	$("#"+id).text(score);
}

function hasMoney(value){
	if(cardClass.hasMoney(value)){
		cardClass.reduceMoneyPlayer(value);
		return true;
	}else
		return false;
}

function getMoney(){
	return cardClass.getMoneyPlayer();
}

function setMoney(betValue) {
	if(betValue > 0 ) 
		cardClass.addMoneyPlayer(betValue);
}

function getBet() {
	return cardClass.getBetPlayer();
}

function setBet(value) {
	cardClass.setBetPlayer(value);
}

function getTotal(who) {
	switch(who){
		case "player":
			return cardClass.getTotal(cardClass.getCardsPlayer());
		case "bank":
			return cardClass.getTotal(cardClass.getCardsBank())
	}
}

function getStatusGame(type) {
	return cardClass.getNumberOfStatusGame(type);
}

//---------------------

function arreterJeux(who){
	var message = " Votre jeu est";
  	// 0 : lose ; 1 : dual ; 2 : win 
  	var etat = getStatusGame("LOSE");

	switch(who){
		/*
		case "bank":
			if(totaleBanque > 21){
				message+=" inférieur à 21 , et la banque supérieur à 21 , WIN !! ";
				etat = 2;
			}else if (totaleBanque == totale){
				message+=" égale à celui de la banque , DUAL !! ";
				etat = 1;
			}else if (totaleBanque > totale){
				message+=" "+totale+" , et la banque est "+totaleBanque+" , PERDU !! ";
				etat = 0;
			}else if (totaleBanque < totale){
				message+=" "+totale+" , et la banque est "+totaleBanque+" , WIN !! ";
				etat = 1;
			}	    
			else 
			{
				message += " terminé vous avez 21";
				resetGame(0);
			}
		break;*/

		case "player":
			if(getTotal("player") > 21)
				message+=" supérieur à 21 , PERDU !! ";
		break;

		default:
			console.log("arrête jeux " + who + " !!! ")
			//resetGame(1);
		break;
	}

  	if( message.length < 20 && getTotal("bank") < 17 ) console.log(totaleBanque + "  " + totale);
  	
  	displayEtat(etat,message);
	
	
}

function displayEtat(etat,message) {
	var isEtat = true;
	switch (etat){
		case 0 :
		    showNotification(message,"lose");
		break;

		case 1 :
		    showNotification(message,"dual");
		break;

		case 2 :
		    showNotification(message,"win");
		break;

		case 3 :
		    showNotification(message,"abandon");
		break;

		default:
			isEtat = false;
			console.log(" etat introuvable : "+ etat);
		break;
	}

	if(isEtat){
		resetGame(etat);
		resetStatusButtons();
	}
	
}
function resetStatusButtons() {
	//enable btn-next
	activateButtons("btn-next");
	//disable btn-[hold|reset|add]
	desactivateButtons("btn-hold","btn-abandon","btn-add-card");
}

//---------------

function resetGame(type){
	 var result = 0 ;
	// 0 : lose ; 1 : dual ; 2 : win ; 3 : abon
	sleepFor(0);
	switch (type){
		case 0 :
		result = 0;
		
		break;
		case 1 :
			result = getBet();
		
		break;
		case 2 :
			result = getBet() * 2 ;
		
		break;
		case 3 :
			result = getBet() / 2;
		
			break;
		default:
		  break;
	}
	$("#wallet").text(getMoney(setMoney(result)));
}

function removeCards(divArr) {
	if(arguments.length > 0)
		for (i = 0; i < arguments.length; i++)
			$(('#'+arguments[i])).find('.card-added').remove();
}

//--------------------
function resetBoard(){
	cardClass.reset();
	$("#current-bet").text( (getBet() ).toString());
	resetTotal("score-current-bank",getTotal("player"));
	resetTotal("score-current-player",getTotal("bank"));
	$('#inputBeginMise').slider('enable');
	removeCards("bankCards","playerCards");
	activateButtons("btn-bet");
	desactivateButtons("btn-next");
	
}
function resetTotal(id,score) {
	if(!($("#"+id).hasClass("hidden-div")))
		$("#"+id).addClass("hidden-div");
	$("#"+id).text(score);
}

function showNotification(message, type){
	
  	$.notify.addStyle('lose', {
	    html: "<div><span data-notify-text/></div>",
	    classes: {
	      	base: {
		        "white-space": "nowrap",
		        "background-color": "lightblue",
		        "padding": "5px"
	      	},
	      	superblue: {
		        "color": "white",
		        "background-color": "blue"
	      	}
    	}
  	});
   	$.notify.addStyle('dual', {
	    html: "<div><span data-notify-text/></div>",
	    classes: {
	      	base: {
		        "white-space": "nowrap",
		        "background-color": "#FA5858",
		        "padding": "5px"
	      	},
	      	superRed: {
		        "color": "white",
		        "background-color": "#FA5858"
	      	}
    	}
  	});
	$.notify.addStyle('win', {
	    html: "<div><span data-notify-text/></div>",
	    classes: {
	      	base: {
		        "white-space": "nowrap",
		        "background-color": "lightblue",
		        "padding": "5px"
	      	},
	      	superblue: {
		        "color": "white",
		        "background-color": "blue"
	      	}
    	}
  	});
   	$.notify.addStyle('abandon', {
	    html: "<div><span data-notify-text/></div>",
	    classes: {
	      	base: {
		        "white-space": "nowrap",
		        "background-color": "#FA5858",
		        "padding": "5px"
	      	},
	      	superRed: {
		        "color": "white",
		        "background-color": "#FA5858"
	      	}
    	}
  	});
	$.notify.addStyle('help', {
	    html: "<div><span data-notify-text/></div>",
	    classes: {
	      	base: {
		        "white-space": "nowrap",
		        "background-color": "#FA5858",
		        "padding": "5px"
	      	},
	      	superRed: {
		        "color": "white",
		        "background-color": "#FA5858"
	      	}
    	}
  	});

   	switch(type){
		case "lose":
			$.notify(message, {
			style: type
			});
		break;
		case "dual":
			$.notify(message, {
			style: type
			});
		break;
		case "win":
			$.notify(message, {
			style: type
			});
		break;
		case "help":
			$.notify(message, {
			style: type
			});
		break;
		case "abandon":
			$.notify(message, {
			style: type
			});
		break;
	}
  
}
