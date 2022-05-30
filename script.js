var container = document.querySelector('.container')

//Seting up game loop thath refreshes every half of second
var gameState = 0
var gamePrep = window.setInterval(gamePrep, 1000);

var shouldStartTheGane = 0

var numOfCombinations = 4
var currentCellCount = 0

let listOfCells = []

function gamePrep() {
    if(gameState === 0){
        shouldStartTheGane++
    }
    if(shouldStartTheGane === 2){
        gameState = 1
    }

    listOfCells.forEach(element => {
        element.classList.remove("active")
    });

    if(gameState === 1){
        var rand =  Math.floor(Math.random() * 9) 
        var curentCell = container.children[rand]

        curentCell.classList.add("active")

        listOfCells.push(curentCell)
        currentCellCount++
    }

    if(currentCellCount === numOfCombinations+1){
        gameState = 2
    }

    if(gameState === 2){
        listOfCells.forEach(element => {
            element.classList.remove("active")
        });

        listOfCells.pop(numOfCombinations + 1)

        clearInterval(gamePrep)
    }
}

