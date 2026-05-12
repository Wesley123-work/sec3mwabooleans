/* Pokémon Choose Battle Game
   Using arrays + for loop + CSS animation + random turns/damage
*/

//Q1. To declare an array name myPokemons that contains all the pokemon names
var myPokemons = ["Pikachu", "Charmandar", "Squirtle", "Bulbasaur"]; 
//Q2. To declare an array name myPokemonImages that contains all the pokemon images
var myPokemonImages = [
   "images/pikachu.png",
   "images/charmandar.png",
   "images/squirtle.png",
   "images/bulbasaur.png"
];
 

// Wild Pokémon (resettable)
var wildPokemon = "Zubat";
var wildHp = 30;

function log(message) {
  var logDiv = document.getElementById("log");
  logDiv.innerHTML += message + "<br>";
  logDiv.scrollTop = logDiv.scrollHeight;
}

function choosePokemon(index) {
  document.getElementById("log").innerHTML = ""; 
  document.getElementById("restartBtn").style.display = "none"; 

  var chosenName = myPokemons[index];
  var chosenImg = document.querySelectorAll(".pokemon-choice img")[index];

  log(chosenName + " jumps into battle!");

  chosenImg.classList.add("attack");
  chosenImg.addEventListener("animationend", function() {
    chosenImg.classList.remove("attack");

    // 🎲 Random number of turns between 2 and 5
    var totalTurns = Math.floor(Math.random() * 4) + 2;

    // FOR loop with random damage each turn
    //Q3. Add in the initialisation of the for loop e.g start at var i = 1 and i < totalTurns and increment i
    for (var i=1; i<=totalTurns; i++) {
      var damage = Math.floor(Math.random() * 15) + 5; // random damage 5–20
      wildHp -= damage;
      log("Turn " + i + ": " + chosenName + " hits for " + damage + " damage! Wild " + wildPokemon + " HP = " + Math.max(wildHp, 0));

      if (wildHp <= 0) {
        log("🎉 " + chosenName + " defeated the wild " + wildPokemon + "!");
        document.getElementById("restartBtn").style.display = "inline-block";
        return;
      }
    }

    // If battle ends but wild still alive
    if (wildHp > 0) {
      log("The wild " + wildPokemon + " escaped with " + wildHp + " HP left!");
      document.getElementById("restartBtn").style.display = "inline-block";
    }
  }, { once: true });
}

function restartGame() {
  wildHp = 30; // reset wild HP
  document.getElementById("log").innerHTML = "";
  log("A wild " + wildPokemon + " appeared again!");
  document.getElementById("restartBtn").style.display = "none";
}
