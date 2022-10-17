const intro = new Intro()
intro.render()

const countdown = new Countdown()
// countdown.render()

const game = new Game()
game.render()

class Connect4 {
    constructor(){
        this.screens = {
            intro, 
            countdown,
            game
        }
        this.activeScreen = null
    }

    render(){
        this.setActiveScreen('intro')
        console.log(this.screens)
    }

    setActiveScreen(screen){
        if (this.activeScreen) {
            this.screens[this.activeScreen].unMount()
        }
        this.screens[screen]?.mount()
        this.activeScreen = screen
    }
}


const connect4 = new Connect4()
connect4.render()