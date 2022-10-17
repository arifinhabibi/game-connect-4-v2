class Game {
    constructor(){
        this.display = document.querySelector('.display-game')
        this.gridTemplate = document.querySelector('.grid')
        this.cells = []
    }
    mount(){
        this.display.classList.add('active')
    }
    unMount(){
        this.display.classList.remove('active')
    }
    render(){
        this.create()


        // debug
        this.cells.forEach(element => {
            if (element.row == 5 && element.col == 6) {
                element.domCell.classList.add('user')
            }
            if (element.row == 2 && element.col == 4) {
                element.domCell.classList.add('bot')
            }
            console.log(element)
        });


    }

    create(){
        // cells
        for (let row = 1; row <= 6; row++) {
            for (let col = 1; col <= 7; col++) {
                const cell = new Cell(row, col)
                cell.render()
                this.cells.push(cell)
            }
        }
    }
}