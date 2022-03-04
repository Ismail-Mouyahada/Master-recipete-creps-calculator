
 // Declaring variables in a JS object
let ingredeients = {
	'sucre':0.008,
	'farine':0.075,
	'banane':1,
	'miel':0.0073,
	'nutella':0.01,
	'oeufs':1,
	'fleur':0.004,
	'beurre':0.02 }

// Units of the ingredients 
let units = {
	'kilo':' kg',
	'litre':' L',
	'oeufs':' Oeuf',
	'banane':' Banane',
	'cuillière':' Cuillère'
	 }

// Prompting the input value
 

// Declaring the data recievers 
 
 // A  "Combien()" Setup to do the calculs

function Combien(invited){
	invited = parseInt(document.querySelector("#data").value);

	if(invited == 0){
		 alert('vous devrez avoir en moins une seule personne dans le champs d\'invités');
	}else if (invited > 0 ) {
		
	 

	let fleurClass , oeufClass ,farineClass, sucreClass, bananeClass, nutellaClass, beurreClass, mielClass; 

	// values calculs
	fleurClass   = (ingredeients.fleur   * invited).toFixed(3) + units.kilo;
	farineClass  = (ingredeients.farine  * invited).toFixed(3) + units.kilo;
	sucreClass   = (ingredeients.sucre   * invited).toFixed(3) + units.kilo;
	nutellaClass = (ingredeients.nutella * invited).toFixed(3) + units.litre;
	beurreClass  = (ingredeients.beurre  * invited).toFixed(3) + units.kilo;
	mielClass    = (ingredeients.miel    * invited).toFixed(3) + units.litre;
	oeufClass    = (ingredeients.oeufs   * invited) + units.oeufs;
	bananeClass  = (ingredeients.banane  * invited) + units.banane;

	// Assiging the new values to the front-end tags.
	document.querySelector("body > div > div.ingredients-panels > div:nth-child(1)> span").textContent = fleurClass;
	document.querySelector("body > div > div.ingredients-panels > div:nth-child(2)> span").textContent = oeufClass;
	document.querySelector("body > div > div.ingredients-panels > div:nth-child(3)> span").textContent = farineClass;
	document.querySelector("body > div > div.ingredients-panels > div:nth-child(4)> span").textContent = sucreClass;
	document.querySelector("body > div > div.ingredients-panels > div:nth-child(5)> span").textContent = bananeClass;
	document.querySelector("body > div > div.ingredients-panels > div:nth-child(6)> span").textContent = nutellaClass;
	document.querySelector("body > div > div.ingredients-panels > div:nth-child(7)> span").textContent = beurreClass;
	document.querySelector("body > div > div.ingredients-panels > div:nth-child(8)> span").textContent = mielClass;
	}else {
		alert(' Vous devrez reseigner un valeur superieur à zero !');
	}

 
}

