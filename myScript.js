    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var attempts = 0;

    function checkGuess() {
        let userGuess = Number(document.getElementById("guess").value);
        attempts++;

        //Question 1: In the bracket, check that userGuess is equal to secretNumber
        if (userGuess == secretNumber) {
            document.getElementById("message").textContent = 
                `✅ Correct! You guessed it in ${attempts} tries.`;
        } 
        //Question 2: In the bracket, check that userGuess is greater than secretNumber
        else if (userGuess > secretNumber) {
            document.getElementById("message").textContent = "📈 Too high! Try a smaller number.";
        } 
        //Question 3: In the bracket, check that userGuess is less than secretNumber
        else if (userGuess < secretNumber) {
            document.getElementById("message").textContent = "📉Too low! Try a bigger number.";
        }
    }