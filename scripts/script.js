// Koordinaten der Städte
var xKoord = ["113", "290", "447","605","384","105","675","542","763","573","831","744","240","189","898","829", "362"]; 
var yKoord = ["237", "321", "388","487","510","471","325","235","551","645","301","223","629","129","445","792", "900"];


var anzahlStaedte = xKoord.length;

function randomize(){
    // Cursor sichtbar machen
    document.getElementById('cursor').style.visibility = 'visible';

	// Zufallsstadt
    var zufallsZahl = Math.floor((Math.random() * anzahlStaedte)); // Zufallszahl von allen Kordinaten
    console.log(zufallsZahl)

	document.getElementById('cursor').style.left= xKoord[zufallsZahl]-42 + "px";
    document.getElementById('cursor').style.top = yKoord[zufallsZahl]-75 + "px";
}