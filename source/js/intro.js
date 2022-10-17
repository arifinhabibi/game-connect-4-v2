class Intro {
    constructor(){
        this.display = document.querySelector('.display-intro')
        this.play = document.querySelector('.play')
    }
    mount(){
        this.display.classList.add('active')
        this.begin()
    }
    unMount(){
        this.display.classList.remove('active')
    }
    begin(){
        this.play.addEventListener('click', () => {
            connect4.setActiveScreen('countdown')
        })
    }
    render(){
        
    }
}