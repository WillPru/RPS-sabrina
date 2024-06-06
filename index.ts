console.log("test")

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const possibleChoices: string[] = ["pierre", "papier", "ciseaux"];
let IAChoice: string;

function generateIAChoice() {
  IAChoice = possibleChoices[Math.floor(Math.random() * 3)];
}

function play() {
  let isInputValid: boolean = false;
  generateIAChoice();
  readline.question(
    "Pierre, papier, ciseaux ! (taper soit pierre soit papier soit ciseaux)\n",
    (input: string) => {
      const userInput: string = input.toLowerCase();

      if (
        userInput !== "pierre" &&
        userInput !== "ciseaux" &&
        userInput !== "papier"
      ) {
        console.log(
          `Veuillez saisir une entrée valide : 'pierre', 'papier' ou 'ciseaux'`
        );
        play();
      } else {
        if (userInput === IAChoice) {
          console.log("l'IA a choisi " + IAChoice);
          console.log("égalité");
          play();
        } else if (
          (userInput === "ciseaux" && IAChoice === "papier") ||
          (userInput === "papier" && IAChoice === "pierre") ||
          (userInput === "pierre" && IAChoice === "ciseaux")
        ) {
          console.log("l'IA a choisi " + IAChoice);
          console.log("Tu as gagné !");
          readline.question("play again ? (y/n)\n", (answer: string) => {
            const response = answer.toLowerCase();
            if (response === "y") {
              play();
            } else {
              readline.close();
            }
          });
        } else {
          console.log("l'IA a choisi " + IAChoice);
          console.log("Tu as perdu !");
          readline.question("play again ? (y/n)\n", (answer: string) => {
            const response = answer.toLowerCase();
            if (response === "y") {
              play();
            } else {
              readline.close();
            }
          });
        }
      }
    }
  );
}

play();
console.log("Hello world");
