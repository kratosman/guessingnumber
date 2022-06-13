//DOM SELECTOR
var number = document.querySelector('.number');
var typeNumber = document.getElementById('typeNumber'); 
var btnRoll = document.querySelector('.btn-roll-number');
var reset = document.querySelector('.reset');
let lives = 5;

//button to start
btnRoll.addEventListener('click', () => {
    if(typeNumber.value === "") {
        alert("Enter a number")
    } else {
        //generate random number
        const randomNumber = Math.floor(Math.random() * 5);
        //display the randomnumber
        number.innerHTML = randomNumber;
            if(randomNumber == typeNumber.value){
                alert("Congratulations!")
                
                var modalCons = document.querySelector('.modal-cons');
                modalCons.style.display = "block";

                //reset button
                reset.addEventListener('click', () => {
                    modalCons.style.display = "none";
                    typeNumber.value = '';
                    number.innerHTML = '0';
                })
            } else {
                alert("OPPSS!!");
            }
    }
})



var resetGameOver = document.querySelector('.reset-game-over');
resetGameOver.addEventListener('click', () => {
    var gameOver = document.querySelector('.modal-cons-game-over');
    gameOver.style.display = "none";
})
