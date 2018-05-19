// Koordinaten der Städte
//var xKoord = ["113", "290", "447","605","384","105","675","542","763","573","831","744","240","189","898","829", "362"]; 
//var yKoord = ["237", "321", "388","487","510","471","325","235","551","645","301","223","629","129","445","792", "900"];

var coordinates = [
    [445, 250, "Loot Lake"]
];

var offset = [-45, 55]

var anzahlStaedte = coordinates.length;

function randomize(){
    // Cursor sichtbar machen
    $('#cursor').css('visibility', 'visible');
    console.log('visible!')
	// Zufallsstadt
    var randomNumber = Math.floor((Math.random() * anzahlStaedte)); // randomNumber von allen Kordinaten
    console.log(coordinates[randomNumber][0] + offset[0])
    $('#cursor').css('left',(coordinates[randomNumber][0] + offset[0]) + 'px');
    $('#cursor').css('top', (coordinates[randomNumber][1] + offset[1]) + 'px');
}