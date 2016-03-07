var cardClass = function (){};
cardClass.deck = [];
cardClass.cardsPlayer=[];
cardClass.cardsBank =[];
cardClass.moneyPlayer = 1000;
cardClass.betPlayer = 0;
cardClass.statusGame = {
	LOSE 	: 0 ,
	DUAL 	: 1 ,
	WIN  	: 2 ,
	ABANDON : 3 ,
	HELP	: 4
}

cardClass.reset =function () {
	this.cardsPlayer = [];
	this.cardsBank = [];
	this.betPlayer = 0;

}

cardClass.initializeDecks = function(){
	cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
	var cardForms = ["cardHearts","cardDiamonds","cardSpades","cardClubs"];
 	var cpt = 0;
	for(var i = 0; i < cardForms.length; i++)
		for(var j =0; j< cards.length; j++)
			this.deck[cpt++]=cardForms[i]+"-"+cards[j];
};

cardClass.getDeck = function(){
	return this.deck;
}

cardClass.setDeck = function(deck){
	this.deck = deck;
}

cardClass.removeItemDeck = function(id){
	if (id >= 0) this.deck.splice(id, 1);
}

cardClass.deckIsEmpty = function(){
	return (this.getDeck().length > 0)?false:true;
}

cardClass.getCardWithName = function(who){
	if(this.deckIsEmpty()){
		this.initializeDecks();
	}
	var id = Math.floor( Math.random() * this.getDeck().length);
	var cardName = this.deck[id];
	this.removeItemDeck(id);

	switch(who){
		case "player":
		this.cardsPlayer.push(cardName);
			break;
		case "bank":
		this.cardsBank.push(cardName);
				break;
		default:
			break;
	}
	return cardName;
}

cardClass.getCardsPlayer = function(){
	return this.cardsPlayer;
}

cardClass.getCardsBank = function(){
	return this.cardsBank;
}

cardClass.getTotal = function(arr){
	var total = 0;
	if(arr.length > 0)
		arr.forEach(function (value , index){
			//console.log("value : "+ value+' -  index '+index);
			var val = (value.split('-'))[1];
			if(isNaN(val)){
				if(val.indexOf("A") > -1){
					total+=11;
				}
				else{
					total+=10;
				}
			}			
			else
				total += parseInt(val);
		});
	for (var i = 0; i < this.getNumberOfAs(arr); i++) {
		if(total > 21)
			total-=10;
	}
	return total;
}

cardClass.getNumberOfAs = function (arr) {
	var count = 0;
	if(arr.length > 0){
		arr.forEach(function(v,i){
			if(v.indexOf("A") > -1)
				count++;
		});
	}
	return count;
};

cardClass.reduceMoneyPlayer = function(betValue){
	this.moneyPlayer-=( (this.moneyPlayer - betValue) >= 0 ) ? betValue : 0;
}

cardClass.getMoneyPlayer= function(){
	return this.moneyPlayer;
}

cardClass.addMoneyPlayer = function(betValue){
	this.moneyPlayer +=( betValue >= 0 ) ? betValue : 0;
}

cardClass.hasMoney=function(betValue){
	return ( (this.moneyPlayer - betValue) >= 0 ) ? true : false ;
}

cardClass.getBetPlayer = function(){
	return this.betPlayer;
}
cardClass.setBetPlayer = function(value){
	this.betPlayer = value;
}

cardClass.getNumberOfStatusGame = function(type){
	return this.statusGame[type];
}