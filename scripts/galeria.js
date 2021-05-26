var obrazki = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
var nr = 0;

document.write('Teraz zobaczysz galerię zdjęć kosmosu')

function poprzedni() {
    var galeria = document.getElementById("galeria");
    nr--;
    if (nr < 0) {
        nr = obrazki.length - 1;
    }
    galeria.src = "images/galeria/" + obrazki[nr];
}

function nastepny() {
    var galeria = document.getElementById("galeria");
    nr++;
    if (nr >= obrazki.length) {
        nr = 0;
    }
    galeria.src = "images/galeria/" + obrazki[nr];
}

function zmiana() {
    nastepny();
    setTimeout("zmiana()", 2000);
}
window.onload = function() {
    var t = setTimeout(zmiana, 2000);
};
