

 function resetBilder() {
   
    bilderRezept0.forEach(bild => {
        bild.classList.add("hidden");
    });
    bilderRezept1.forEach(bild => {
        bild.classList.add("hidden");
    });
    bilderRezept2.forEach(bild => {
        bild.classList.add("hidden");
    });
}

//chat gpt:

function auswahlÜbergeben() {
    // Sammle die sichtbaren Bilder aus den Bildgruppen
    var auswahl = [];

    ingredient1.forEach(bild => {
        if (bild.style.visibility === "visible") {
            auswahl.push(bild);
        }
    });

    ingredient2.forEach(bild => {
        if (bild.style.visibility === "visible") {
            auswahl.push(bild);
        }
    });

    Seal.forEach(bild => {
        if (bild.style.visibility === "visible") {
            auswahl.push(bild);
        }
    });

    return auswahl;
}

function checkRezept() {
    //auswahl [];
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[0] + "</p>") {
        if (aktuelleBilder == zahn, feder, wachs){
            console.log ("Jippie")
        }
        else {
            console.log ("falsch :c")
        }
}}
var aktuelleBilder = auswahlÜbergeben();

// Eventlistener für den Fertig_Button hinzufügen
document.getElementById("fertig_button").onclick = function() {
    // Hier werden die momentan sichtbaren Bilder an die checkRezept-Funktion übergeben
    auswahlÜbergeben;
    console.log("Aktuelle Bildauswahl:", aktuelleBilder);

    // Hier rufst du die checkRezept-Funktion auf und übergibst die aktuelle Bildauswahl
    checkRezept(aktuelleBilder);
}


// Holen der Bildgruppen
var ZutatenGruppen = document.querySelectorAll('.ingredient1', '.ingredient2', '.Seal');

// Erstellen eines ImageSwitcher für die Bildgruppen
var ZutatenGruppenSwitcher = new ImageSwitcher(ZutatenGruppen);

// Eventlistener für den Fertig_Button hinzufügen
document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    var aufgabeBestanden = ZutatenGruppenSwitcher.checkAufgabe();

    if (aufgabeBestanden) {
        // Hier können Sie weitere Aktionen für den Gesamtsieg hinzufügen
        console.log("Gesamtaufgabe erfolgreich abgeschlossen!");
        
        // Hier können Sie eine neue Aufgabe setzen oder andere Aktionen ausführen
    }
}; 




