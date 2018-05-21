// Koordinaten der Städte
//var xKoord = ["113", "290", "447","605","384","105","675","542","763","573","831","744","240","189","898","829", "362"];
//var yKoord = ["237", "321", "388","487","510","471","325","235","551","645","301","223","629","129","445","792", "900"];

var coordinates = [
    [445, 360, "Loot Lake"],
    [210, 125, "Junk Junction"],
    [163, 218, "Haunted Hills"],
    [545, 241, "Anarchy Acres"],
    [290, 300, "Pleasant Park"],
    [669, 325, "Tomato Town"],
    [829, 301, "Wailing Woods"],
    [745, 211, "Risky Reels"],
    [733, 409, "Scrapyard"],
    [589, 451, "Dusty Depot"],
    [609, 506, "Dusty Divot"],
    [895, 434, "Lonely Lodge"],
    [380, 501, "Tilted Towers"],
    [98, 458, "Snobby Shores"],
    [250, 494, "Stadium"],
    [770, 538, "Retail Row"],
    [571, 625, "Salty Springs"],
    [371, 643, "Shifty Shafts"],
    [235, 626, "Greasy Grove"],
    [605, 768, "Fatal Fields"],
    [764, 734, "Prison"],
    [556, 913, "Lucky Landing"],
    [360, 875, "Flush Factory"]

];
var offset = [-55, -50]
var randomNumber;
var anzahlStaedte = coordinates.length;
var pic;
var pic_offset;
setInterval(function() {
    updatePin();
  }, 1
function setPinLocation() {
    pic = $('#map');
    pic_offset = pic.offset();
    randomNumber = Math.floor((Math.random() * anzahlStaedte)); 
} 
function updatePin(){
    try {
        $('#cursor').css('left',(coordinates[randomNumber][0] + offset[0] + pic_offset.left) + 'px');
        $('#cursor').css('top', (coordinates[randomNumber][1] + offset[1] + pic_offset.top) + 'px');
        $('#cursor').css('visibility', 'visible');
    } catch (error) {   
    }
}