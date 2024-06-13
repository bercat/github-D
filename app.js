const gameBoard = document.querySelector("#gameboard")

const infoDisplay = document.querySelector("#info")

const startCells = [
    "", "", "",
    "", "", "",
    "", "", ""
]

let go = "circle"


infoDisplay.textContent = "Circle goes first"

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        //make a id from 1 to 9
        cellElement.id = index

        //Add a event with addGO every time a click happen on cellElement
        cellElement.addEventListener("click", addGo)


        gameBoard.append(cellElement)
    })
}

createBoard()

/*This setup ensures that when the button 
with id 0 to 9 is clicked, a new div 
with the class go will be created and 
appended to the button.
*/

function addGo(e) {
    
    //console.log("clicked", e.target);
    
    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go)
    e.target.append(goDisplay)

    /*reassigning go`s value.
    the value of go alternates 
    between "circle" and "cross" */
    go = go === "circle" ? "cross" : "circle"
    console.log(go)

}

//addGo()


//const circleElement = document.createElement("div")
//circleElement.classList.add("cross")

//adding the circle element to cellElement
//cellElement.append(circleElement)

//cellElement.innerHTML = index