// Koordinaten der Städte
//var xKoord = ["113", "290", "447","605","384","105","675","542","763","573","831","744","240","189","898","829", "362"];
//var yKoord = ["237", "321", "388","487","510","471","325","235","551","645","301","223","629","129","445","792", "900"];

var coordinates = [
    [445, 250, "Loot Lake"],
    [210, 125, "Junk Junction"],
    [163, 218, "Haunted Hills"],
    [545, 241, "Anarchy Acres"],
    [290, 300, "Pleasant Park"],
    [669, 325, "Tomato Town"]

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
window.requestAnimFrame = (function () {
        return  window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    Math.randMinMax = function(min, max, round) {
        var val = min + (Math.random() * (max - min));

        if( round ) val = Math.round( val );

        return val;
    };
    Math.TO_RAD = Math.PI/180;
    Math.getAngle = function( x1, y1, x2, y2 ) {

        var dx = x1 - x2,
            dy = y1 - y2;

        return Math.atan2(dy,dx);
    };
    Math.getDistance = function( x1, y1, x2, y2 ) {

        var     xs = x2 - x1,
            ys = y2 - y1;

        xs *= xs;
        ys *= ys;

        return Math.sqrt( xs + ys );
    };

    var     FX = {};

    (function() {

        var canvas = document.getElementById('myCanvas'),
            ctx = canvas.getContext('2d'),
            lastUpdate = new Date(),
            mouseUpdate = new Date(),
            lastMouse = [],
            width, height;

        FX.particles = [];

        setFullscreen();
        document.getElementById('button').addEventListener('mousedown', buttonEffect);

        function buttonEffect() {

            var button = document.getElementById('button'),
                height = button.offsetHeight,
                left = button.offsetLeft,
                top = button.offsetTop,
                width = button.offsetWidth,
                x, y, degree;

            for(var i=0;i<40;i=i+1) {

                if( Math.random() < 0.5 ) {

                    y = Math.randMinMax(top, top+height);

                    if( Math.random() < 0.5 ) {
                        x = left;
                        degree = Math.randMinMax(-45,45);
                    } else {
                        x = left + width;
                        degree = Math.randMinMax(135,225);
                    }

                } else {

                    x = Math.randMinMax(left, left+width);

                    if( Math.random() < 0.5 ) {
                        y = top;
                        degree = Math.randMinMax(45,135);
                    } else {
                        y = top + height;
                        degree = Math.randMinMax(-135, -45);
                    }

                }
                createParticle({
                    x: x,
                    y: y,
                    degree: degree,
                    speed: Math.randMinMax(100, 150),
                    vs: Math.randMinMax(-4,-1)
                });
            }
        }
        window.setTimeout(buttonEffect, 100);

        loop();

        window.addEventListener('resize', setFullscreen );

        function createParticle( args ) {

            var options = {
                x: width/2,
                y: height/2,
                color: 'hsla('+ Math.randMinMax(160, 290) +', 100%, 50%, '+(Math.random().toFixed(2))+')',
                degree: Math.randMinMax(0, 360),
                speed: Math.randMinMax(300, 350),
                vd: Math.randMinMax(-90,90),
                vs: Math.randMinMax(-8,-5)
            };

            for (key in args) {
              options[key] = args[key];
            }

            FX.particles.push( options );
        }

        function loop() {

            var     thisUpdate = new Date(),
                delta = (lastUpdate - thisUpdate) / 1000,
                amount = FX.particles.length,
                size = 2,
                i = 0,
                p;

            ctx.fillStyle = 'rgba(15,15,15,0.25)';
            ctx.fillRect(0,0,width,height);

            ctx.globalCompositeStyle = 'lighter';

            for(;i<amount;i=i+1) {

                p = FX.particles[ i ];

                p.degree += (p.vd * delta);
                p.speed += (p.vs);// * delta);
                if( p.speed < 0 ) continue;

                p.x += Math.cos(p.degree * Math.TO_RAD) * (p.speed * delta);
                p.y += Math.sin(p.degree * Math.TO_RAD) * (p.speed * delta);

                ctx.save();

                ctx.translate( p.x, p.y );
                ctx.rotate( p.degree * Math.TO_RAD );

                ctx.fillStyle = p.color;
                ctx.fillRect( -size, -size, size*2, size*2 );

                ctx.restore();
            }

            lastUpdate = thisUpdate;

            requestAnimFrame( loop );
        }

        function setFullscreen() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
    })();
