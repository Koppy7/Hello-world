(function () {
		var count = 1;
		document.getElementById("inFunction").innerHTML = "Nous sommes ici à l'intérieur de la fonction, la valeur de count est égal à : " + count + " :)";
			
})();
//J'espere que tu ne pourras pas toucher à ma variable.
console.log(count);
// A partir d'ici je ne veux plus pouvoir faire un count = 2;
count = 2
console.log(count);
