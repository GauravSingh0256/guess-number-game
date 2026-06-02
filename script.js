let secretNumber =
Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let bestScore = null;

function checkGuess(){

let guess =
Number(document.getElementById("guess").value);

let msg =
document.getElementById("message");

if(document.getElementById("guess").value === ""){

    msg.innerText =
    "⚠ Please enter a number";

    msg.style.color = "#ff6600";

    return;
}

    let hint =
    document.getElementById("hint");

    /* Restart animation */
    msg.style.animation = "none";

    msg.offsetHeight;

    msg.style.animation = "";

    attempts++;

    document.getElementById("attempts")
    .innerText = attempts;
    
    let difference =
Math.abs(secretNumber - guess);

if(difference > 30){

    hint.innerText =
    "❄️ Very Far Away";
}

else if(difference > 10){

    hint.innerText =
    "🌤 Getting Closer";
}

else{

    hint.innerText =
    "🔥 Very Close!";
}

    if(guess > secretNumber){

        msg.innerText = "📈 Too High";

        msg.style.color = "red";
    }

    else if(guess < secretNumber){

        msg.innerText = "📉 Too Low";

        msg.style.color = "orange";
    }

    else{

        msg.innerText =
        "🎉 Correct!";

        msg.style.color = "green";


       hint.innerText =
       "🏆 You found the number!";
       document.querySelector("button")
       .disabled = true;

        if(
            bestScore === null ||
            attempts < bestScore
        ){

            bestScore = attempts;

            document.getElementById("bestScore")
            .innerText = bestScore;
        }
    }
}

function restartGame(){

    secretNumber =
    Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("attempts")
    .innerText = 0;

    document.getElementById("message")
    .innerText = "";

    document.getElementById("guess")
    .value = "";
    document.getElementById("hint")
    .innerText = "";
    document.querySelector("button")
    .disabled = false;
}
document.getElementById("guess")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        checkGuess();
    }
});