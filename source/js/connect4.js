const intro = new Intro()

const countdown = new Countdown()

const game = new Game()


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
        this.setActiveScreen()
    }

    setActiveScreen(screen){

    }
}


const connect4 = new Connect4()
connect4.render()