class Countdown {
    constructor(){
        this.display = document.querySelector('.display-countdown')
    }
    mount(){
        this.display.classList.add('active')
    }
    unMount(){
        this.display.classList.remove('active')
    }
}