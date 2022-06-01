var container = document.querySelector('.container')
const cells = document.querySelectorAll('.cell')

//Seting up prep loop thath refreshes every half of second
var gameState = 0
var gamePrep = window.setInterval(gamePrep, 1000);

var shouldStartTheGane = 0

var numOfCombinations = 4
var currentCellCount = 0
var lastRandNum

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
        do{
            var rand =  Math.floor(Math.random() * 9)
        }while(rand === lastRandNum)

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

cells.forEach(cell => {
    cell.addEventListener('click', playerInput)
})

var numOfCorrect = 0

function playerInput(event){
    if(gameState === 2){
        if(event.target === listOfCells[numOfCorrect]){
            event.target.classList.add("correct")
            numOfCorrect++
    
            if(numOfCorrect === numOfCombinations){
                window.open("https://www.youtube.com/shorts/ko6qdSKmV_o", '_blank')
            }
        }else
        window.open("https://www.youtube.com/watch?v=5Q_2nrp9OTg", '_blank')
    }
}