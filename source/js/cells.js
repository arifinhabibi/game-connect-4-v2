class Cell {
    constructor(row, col){
        this.row = row
        this.col = col
        this.domCell = null
        this.turn = null
    }
    render(){
        this.create()
    }
    create(){
        this.domCell = document.createElement('div')
        this.domCell.classList.add('cell')
        this.domCell.setAttribute('data-row', this.row)
        this.domCell.setAttribute('data-col', this.col)
        game.gridTemplate.append(this.domCell)
    }
}