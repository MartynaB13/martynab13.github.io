function sentencja() {
    var sent = ['Kogut myslal o niedzieli, a w sobote leb ucieli', 'Kto w poniedzialek przeproznuje, we wtorek nie bedzie miaĹ co jesc', 'Ostatni wtorek wskazuje, jaka pogoda w poscie panuje', 'Wtorek srode wzial pod brode. Chodzmy sitkiem czerpac wode', 'Nie pij Piotrek, nie pij w czwartek. Picie w czwartek nic nie warte', 'W piatek zly poczatek', 'Przy sobocie po robocie'];
    var nazwy_dni = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    var tydz = new Date().getDay();
    document.getElementById("powiedzenia").innerHTML = "Dzisiejsza data: " + nazwy_dni[tydz] + ", a sentencja na dzis, to: " + sent[tydz];
}
