/*TO DO
- checkRezept Funktion: if (Index == 0 && richtige Bilder angezeit), dann index ++ 
    und das für jeder rezept
    else: try again
- Gestaltung
- Generatives Element
- ESP Fertig Button
 */
 var RezeptArray = [
        '"Weiß bin ich und knochenhart, mische mich mit Rabenhaaren. Nun gibt es nicht mehr viel zu tun, mach mich zu mit Kerzenblut"',
        '"Schimmer, Glimmer und Veilchen Blätter. zuletzt ein Tuch von einem Ritter. "',
        '"Spitz und scharf bei Bedarf, Löckchen eines langen Barts. Es ist getan so soll es sein, bring den Stopfen von rotem Wein"'
    ];

let Index = -1 ;
// Holen des RezeptDiv-Elements
var rezeptDiv = document.getElementById("RezeptDiv");

function zeigeRezeptAn() {
    // Überprüfen, ob das Div-Element gefunden wurde
    if (rezeptDiv) {
        rezeptDiv.innerHTML = "<p>" + RezeptArray[Index] + "</p>";
    } 
    
    Index++;
}

// Aufruf von Rezepten
zeigeRezeptAn();
zeigeRezeptAn();



// Image Switcher um zwischen Bildern zu wählen
function ImageSwitcher(choices) {
    var i = 0;

    this.Next = function() {
        console.log("Next aufgerufen")
        hide_current_image();
        show_next_image();
    }

    var hide_current_image = function() {
        choices[i].style.visibility = "none";
        i += 1;
        if (i === choices.length) {
            i = 0;
        }
    }

    var show_next_image = function() {
        choices[i].style.visibility = "block";
    }

}


//Botton Funktion definiert
var ingredient1 = document.querySelectorAll(".ingredient1");
var ing1_chooser = new ImageSwitcher(ingredient1);

var ingredient2 = document.querySelectorAll(".ingredient2");
var ing2_chooser = new ImageSwitcher(ingredient2);

var Seal = document.querySelectorAll(".Seal");
var Seal_chooser = new ImageSwitcher(Seal);

document.getElementById("ingredient1_button").onclick = function() { ing1_chooser.Next(); };
document.getElementById("ingredient2_button").onclick = function() { ing2_chooser.Next(); };
document.getElementById("Seal_button").onclick = function() { Seal_chooser.Next(); console.log("seal button betätigt")}


//Variablen für alle Bilder Rezept 1
var zahn = document.getElementById("Zahn");
var feder = document.getElementById("Feder");
var wachs = document.getElementById("Wachs");
//Variablen für alle Bilder Rezept 2
var kristal = document.getElementById("Kristal");
var bluete = document.getElementById("Bluete");
var tuch = document.getElementById("Tuch");
//Variablen für alle Bilder Rezept 3
var kralle = document.getElementById("Kralle");
var haar = document.getElementById("Haar");
var korken = document.getElementById("Korken");

var bilderRezept0 = [zahn, feder, wachs];
var bilderRezept1 = [kristal, bluete, tuch]
var bilderRezept2 = [kralle, haar, korken]

console.log(bilderRezept0);

function resetBilder() {
    console.log("resetBilder aufgerufen");
    bilderRezept0.forEach(bild => (bild.classList.add("hidden")));
    bilderRezept1.forEach(bild => (bild.classList.add("hidden")));
    bilderRezept2.forEach(bild => (bild.classList.add("hidden")));
}

function checkRezept() {
    // Überprüfen, ob das aktuelle Rezept angezeigt wird
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[0] + "</p>") {
        // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
        var sichtbarBildRez0 = bilderRezept0.every(bild => bild.style.visibility === "visible");

        if (sichtbarBildRez0) {
            console.log("Aufgabe Bestanden");
            zeigeRezeptAn(); // Hier könntest du das nächste Rezept anzeigen
        } 
        else {
            console.log ("Auswahl falsch1");
        }
    } 

    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[1] + "</p>") {
        // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
        var sichtbarBildRez1 = bilderRezept1.every(bild => bild.style.visibility === "visible");

        if (sichtbarBildRez1) {
            console.log("Letzte Aufgabe Bestanden");
            zeigeRezeptAn(); // Hier könntest du das nächste Rezept anzeigen
        } 
        else {
            console.log ("Auswahl falsch2");
        }
    }
}

// Wenn das div das 2. Array enthält, wird geprüft, ob die richtiigen Bilder gezeigt werden
if (rezeptDiv.innerHTML === "<p>" + RezeptArray[2] + "</p>") {
    // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
    var sichtbarBildRez2 = bilderRezept2.every(bild => bild.style.visibility === "visible");

    if (sichtbarBildRez2) {
        console.log("Aufgabe Bestanden");
        alert ("Glückwunsch! Deine Zaubertrankausbildung ist abgecshlossen!")
    } else {
        console.log("3");
    }
}


// Eventlistener für den Fertig_Button hinzufügen
document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    resetBilder();
    checkRezept();

}