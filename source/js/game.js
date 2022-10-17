class Game {
    constructor(){
        this.display = document.querySelector('.display-game')
    }
    mount(){
        this.display.classList.add('active')
    }
    unMount(){
        this.display.classList.remove('active')
    }
}