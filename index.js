"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
var possibleChoices = ["pierre", "papier", "ciseaux"];
var IAChoice;
function generateIAChoice() {
    IAChoice = possibleChoices[Math.floor(Math.random() * 3)];
}
function play() {
    var isInputValid = false;
    generateIAChoice();
    readline.question("Pierre, papier, ciseaux ! (taper soit pierre soit papier soit ciseaux)\n", function (input) {
        var userInput = input.toLowerCase();
        if (userInput !== "pierre" &&
            userInput !== "ciseaux" &&
            userInput !== "papier") {
            console.log("Veuillez saisir une entr\u00E9e valide : 'pierre', 'papier' ou 'ciseaux'");
            play();
        }
        else {
            if (userInput === IAChoice) {
                console.log("l'IA a choisi " + IAChoice);
                console.log("égalité");
                play();
            }
            else if ((userInput === "ciseaux" && IAChoice === "papier") ||
                (userInput === "papier" && IAChoice === "pierre") ||
                (userInput === "pierre" && IAChoice === "ciseaux")) {
                console.log("l'IA a choisi " + IAChoice);
                console.log("Tu as gagné !");
                readline.question("play again ? (y/n)\n", function (answer) {
                    var response = answer.toLowerCase();
                    if (response === "y") {
                        play();
                    }
                    else {
                        readline.close();
                    }
                });
            }
            else {
                console.log("l'IA a choisi " + IAChoice);
                console.log("Tu as perdu !");
                readline.question("play again ? (y/n)\n", function (answer) {
                    var response = answer.toLowerCase();
                    if (response === "y") {
                        play();
                    }
                    else {
                        readline.close();
                    }
                });
            }
        }
    });
}
play();
