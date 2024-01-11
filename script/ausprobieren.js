this.checkAufgabe = function() {
    if (i < aufgabe.length &&
        choices[i].classList.contains(aufgabe[i])) {
        // Die aktuelle Auswahl stimmt mit der Aufgabenstellung überein
        console.log("Richtig! Du hast das Bild in der richtigen Reihenfolge ausgewählt.");

        // Überprüfen, ob alle Aufgaben abgeschlossen sind
        if (i === choices.length - 1) {
            console.log("Herzlichen Glückwunsch! Du hast die Aufgabe erfolgreich gelöst.");
            // Hier können Sie weitere Aktionen für den Gewinn hinzufügen
            return true; // Aufgabe erfolgreich abgeschlossen
        }

        // Es gibt noch mehr Aufgaben, also fahre fort
        return false;
    } else {
        console.log("Falsch! Versuche es erneut.");
        return false; // Aufgabe nicht erfolgreich
    }
}

/*
//von chat gpt zum checkaufgabe
 this.checkAufgabe = function() {
        for (var j = 0; j < aufgabe1.length; j++) {
            //j ist der Inhalt der Aufgabe, definiert durch die ID, die dem Bild zugeordnet wurde
            var currentId = aufgabe1[j];

            if (!Array.from(choices).some(choice => choice.id === currentId && choice.style.visibility === "visible")){
                // Falls ein Bild in der Aufgabenstellung nicht sichtbar ist
                console.log("Falsch! Versuche es erneut.");
                return false; // Aufgabe nicht erfolgreich
            }
        }

        console.log("Herzlichen Glückwunsch! Du hast die Aufgabe erfolgreich gelöst.");
        return true; // Aufgabe erfolgreich abgeschlossen
    }*/


