class Countdown {
    constructor(){
        this.display = document.querySelector('.display-countdown')
        this.number = document.querySelector('.number')
    }
    mount(){
        this.display.classList.add('active')
        this.render()
    }
    unMount(){
        this.display.classList.remove('active')
    }
    render(){
        let num = 3
        this.number.innerHTML = num
        const interval  = setInterval(() => {
            this.number.innerHTML = num
            if (num <= 0) {
                connect4.setActiveScreen('game')
                clearInterval(interval)
            }
            num--
        }, 1000)
    }
}