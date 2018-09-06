var slike = [
    '<img value="flamingo" src="./slike/flamingo.jpg" height="450px"">', 
    '<img value="panda" src="./slike/panda.jpg" height="450px">', 
    '<img value="maca" src="./slike/maca.jpg" height="450px"">', 
    '<img value="delfini" src="./slike/delfini.jpg" height="450px">', 
    '<img value="lav" src="./slike/lav.jpg" height="450px">',
    '<img value="konj" src="./slike/konj.jpg" height="450px">', 
    '<img value="orao" src="./slike/orao.jpg" height="450px">', 
    '<img value="bubamara" src="./slike/bubamara.jpg" height="450px">', 
    '<img value="kamila" src="./slike/kamila.jpg" height="450px">' 
];

var opis = [
    '<div  value="flamingo">flamingo</div>',
    '<div  value="panda">panda</div>',
    '<div  value="maca">maca</div>',
    '<div  value="delfini">delfini</div>',
    '<div  value="lav">lav</div>',
    '<div  value="konj">konj</div>',
    '<div  value="orao">orao</div>',
    '<div  value="bubamara">bubamara</div>',
    '<div  value="kamila">kamila</div>',

];

var slicice = [
    '<img id="flamingo" value="flamingo" class="slicice selektovana-slika" value="flamingo" src="./slike/flamingo.jpg">', 
    '<img id="panda" value="panda" class="slicice" src="./slike/panda.jpg">', 
    '<img id="maca" value="maca" class="slicice" src="./slike/maca.jpg">', 
    '<img id="delfini" value="delfini" class="slicice" src="./slike/delfini.jpg">', 
    '<img id="lav" value="lav" class="slicice" src="./slike/lav.jpg">',
    '<img id="konj" value="konj" class="slicice" src="./slike/konj.jpg">',
    '<img id="orao" value="orao" class="slicice" src="./slike/orao.jpg">', 
    '<img id="bubamara" value="bubamara" class="slicice" src="./slike/bubamara.jpg">', 
    '<img id="kamila" value="kamila" class="slicice" src="./slike/kamila.jpg">'
];

var trenutna = slike[0];
var trenutnaMala = slicice[0];
var tr = 0;
var txt = opis[0];

$(document).ready(function(){
    vrednosti();

    $(".mySlides").html(trenutna);
    $(".text").html(txt);
   
    $(".prev").click(function(){
      if (tr === 0){
          tr = slike.length-1;
        } else {
            tr = slike.indexOf(trenutna)-1;
        }
        trenutna =slike[tr];
        
        var txt = pronadji(opis, $(trenutna).attr("value"));
        $(".text").html(txt);

        var slika = pronadji(slicice, $(trenutna).attr("value"));  
        var idTrenutne = "#" + $(trenutnaMala).attr('id');
        $(idTrenutne).removeClass("selektovana-slika");
        trenutnaMala = slika;
        idTrenutne = "#" + $(slika).attr('id');
        $(idTrenutne).addClass("selektovana-slika");

        $(".mySlides").html(trenutna);
    });
    
    $(".next").click(function(){
      if (tr === 8){
          tr = 0;
        } else {
            tr=slike.indexOf(trenutna)+1;
        }
        trenutna =slike[tr];
        var txt = pronadji(opis, $(trenutna).attr("value"));
        $(".text").html(txt);

        var slika = pronadji(slicice, $(trenutna).attr("value"));
        var idTrenutne = "#" + $(trenutnaMala).attr('id');
        $(idTrenutne).removeClass("selektovana-slika");

        trenutnaMala = slika;
        idTrenutne = "#" + $(slika).attr('id');
        $(idTrenutne).addClass("selektovana-slika");

        $(".mySlides").html(trenutna);
    });
    
    
    $(".slicice").click(function() {
        var idTrenutne = "#" + $(trenutnaMala).attr('id');
        $(idTrenutne).removeClass("selektovana-slika");
        trenutnaMala = this;
        $(this).addClass("selektovana-slika");
        var slika = pronadji(slike, $(this).attr("id"));
        trenutna = slika;
        tr = slike.indexOf(trenutna);

        $(".mySlides").html(slika);
        
        var txt = pronadji(opis, $(slika).attr("value"));
        $(".text").html(txt);
    });
    
});

function vrednosti(){
    var tmpHtml = "";
    for (var i=0; i<slicice.length; i++){
        tmpHtml += slicice[i];
    }

    $(".maleSlike").html(tmpHtml);
}


function pronadji(pict, value) {
    for(var i=0; i<pict.length; i++) {
        if($(pict[i]).attr("value") === value) {
            return pict[i];
        }
    }
    return null;
}
