function sentencja() {
    var sent = ['Astronauci na Międzynarodowej Stacji Kosmicznej obserwują w ciągu jednej doby 16 wschodów i zachodów Słońca', 'Słońce jest ponad 300 000 razy większe niż ziemia', 'Wenus jest najgorętszą planetą w naszym układzie słonecznym o temperaturze powierzchni ponad 450 stopni celcjusza', 'Wenus jskoko jedyny obraca się w przeciwną stronę, czyli wstecznie do kierunku Słońca. ', 'Zachód słońca na Marsie wydaje się niebieski', 'Cztery największe księżyce Jowisza nazwane są Europa, Ganymede, Callisto i Io', 'Wielu naukowców uważa, że uderzenie asteroidów spowodowało wymarcie dinozaurów około 65 milionów lat temu'];
    var nazwy_dni = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    var tydz = new Date().getDay();
    document.getElementById("powiedzenia").innerHTML = "Dzisiejsza data: " + nazwy_dni[tydz] + ", a sentencja na dzis, to: " + sent[tydz];
}
