class Intro {
    constructor(){
        this.display = document.querySelector('.display-intro')
    }
    mount(){
        this.display.classList.add('active')
    }
    unMount(){
        this.display.classList.remove('active')
    }
}