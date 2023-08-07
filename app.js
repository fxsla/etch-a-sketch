function createGrid(size){
    for(let i=1; i<=size;i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j=1; j<=size;j++){
            let box = document.createElement("div");
            box.classList.add("box")
            row.appendChild(box)
            
        }
        container.appendChild(row)
    }
}

let container = document.querySelector(".container")
let button = document.querySelector(".reset");


button.addEventListener("click", () => {
    let gridSizeInput = prompt("Please enter a grid size:");
    if(gridSizeInput<=100) {
        let rows = document.querySelectorAll('.row')
        rows.forEach((row) => {
            row.remove();
        })
        createGrid(gridSizeInput);
    }
    
})

createGrid(16)

