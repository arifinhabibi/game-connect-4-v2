class Game {
    constructor(){
        this.display = document.querySelector('.display-game')
        this.gridTemplate = document.querySelector('.grid')
        this.cells = []
        this.canClick = true
    }
    mount(){
        this.display.classList.add('active')
    }
    unMount(){
        this.display.classList.remove('active')
    }
    render(){
        this.create()
        this.listen()
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

    listen(){
        this.cells.forEach((cell) => {
            cell.domCell.addEventListener('click', () => {
                if(this.canClick) {
                    this.canClick = false;
                    this.userChoose(cell.col)

                    setTimeout(() => {
                        this.check();
                    }, 200)
                    
                    setTimeout(() => {
                        this.botChoose()
                        setTimeout(() => {
                            this.check();
                        }, 200)
                        this.canClick = true;
                    }, 1000);
                }
            })
        })
    }

    check() {

        // vertical 
        for(let col = 1; col <= 7; col++) {
            
            let start = 1;
            let rowMatches = [];
            for(let len = 1; len <= 3; len++) {
                let cellMatches = new Array(4).fill(0).map((data, i) => i + start);

                cellMatches = cellMatches.map(row => {
                    let cell = this.cells.find(cell => cell.row === row && cell.col === col);
                    return cell;
                })

                rowMatches.push(cellMatches);  
                start++;
            }  

            
            rowMatches.forEach((row) => {
                // console.log(row)
                let userWin =  row.every((turns) => turns.turn == 'user')
                let botWin =  row.every((turns) => turns.turn == 'bot')

                if (userWin) {
                    setTimeout(() => {
                        alert('user menang')
                        location.reload()
                    }, 200)
                }
                
                if (botWin) {
                    setTimeout(() => {
                        alert('bot menang')
                        location.reload()   
                    }, 200)
                }
                
            })
            
        }

        
        // horizontal
        for(let row = 1; row <= 6; row++) {
            
            let start = 1;
            let rowMatches = [];
            for(let len = 1; len <= 4; len++) {
                let cellMatches = new Array(4).fill(0).map((data, i) => i + start);
                
                cellMatches = cellMatches.map(col => {
                    let cell = this.cells.find(cell => cell.row === row && cell.col === col);
                    return cell;
                })

                rowMatches.push(cellMatches);  
                start++;
            }  
            
            
            rowMatches.forEach((row) => {
                // console.log(row)
                let userWin =  row.every((turns) => turns.turn == 'user')
                let botWin =  row.every((turns) => turns.turn == 'bot')

                if (userWin) {
                    setTimeout(() => {
                        alert('user menang')
                        location.reload()   
                    }, 200)
                }
                
                if (botWin) {
                    setTimeout(() => {
                        alert('bot menang')
                        location.reload()   
                    }, 200)
                }
                
            })
            
        }
        
        // diagonal
        let allMatches = []
        
        
        // diagonal kiri ke kanan
        const diagonalLeftToRight = [
            [14, 22, 30, 38],
            [7, 15, 23, 31],
            [15, 23, 31, 39],
            [0, 8, 16, 24],
            [8, 16, 24, 32],
            [16, 24, 32, 40],
            [1, 9, 17, 25],
            [9, 17, 25, 33],
            [17, 25, 33, 41],
            [2, 10, 18, 26],
            [10, 18, 26, 34],
            [3, 11, 19, 27]
        ]

        diagonalLeftToRight.forEach((index) => {
            let diagonalMatches = []
            for (let i = 0; i <= 3; i++) {
                let data = this.cells.find((cell, cellIndex) => cellIndex == index[i])
                diagonalMatches.push(data)
            }
            allMatches.push(diagonalMatches)
        })

        // diagonal kiri ke kanan
        const diagonalRightToLeft = [
            [3, 9, 15, 21],
            [4, 10, 16, 22],
            [10, 16, 22, 28],
            [5, 11, 17, 23],
            [11, 17, 23, 29],
            [17, 23, 29, 35],
            [6, 12, 18, 24],
            [12, 18, 24, 30],
            [18, 24, 30, 36],
            [13, 19, 25, 31],
            [19, 25, 31, 37],
            [20, 26, 32, 38]
        ]
        
        
        diagonalRightToLeft.forEach((index) => {
            let diagonalMatches = []
            for (let i = 0; i <= 3; i++) {
                let data = this.cells.find((cell, cellIndex) => cellIndex == index[i])
                diagonalMatches.push(data)
            }
            
            allMatches.push(diagonalMatches)
            
        })

    
        
        allMatches.forEach(match => {
            // console.log(match)
            let userWin =  match.every((turns) => turns.turn == 'user')
                let botWin =  match.every((turns) => turns.turn == 'bot')

                if (userWin) {
                    setTimeout(() => {
                        alert('user menang')
                        location.reload()   
                    }, 200)
                }
                
                if (botWin) {
                    setTimeout(() => {
                        alert('bot menang')
                        location.reload()   
                    }, 200)
                }
            });
            
        
    }  

    userChoose(col){
         
        // cek turn dulu
        let rowTurnNull = []

        var stop = false
        let rowPermanent = 6

        while(!stop) {
            let check = this.cells.find(cell => cell.col == col && cell.turn != null && cell.row == rowPermanent)
            if (check) {
                rowTurnNull.push(check.row - 1)
                if (rowTurnNull.length > 1) {
                    rowTurnNull.shift()
                }
            } 
            rowPermanent--
            if (rowPermanent == 0) {
                stop = true
            }

        }


        this.cells.forEach((cell) => {
            if (cell.row == 6 && cell.col == col && cell.turn == null) {
                cell.turn = 'user'


                // animation
                const findCellStart = this.cells.find((cell) => cell.col == col && cell.row == 1)

                const dom = document.createElement('div')
                dom.classList.add('ball-animation')

                this.gridTemplate.append(dom)

                const domAnimation = document.querySelector('.ball-animation')
                domAnimation.style.left = findCellStart.domCell.offsetLeft + 'px' 
                domAnimation.style.backgroundColor = 'rgb(55, 255, 0)'
                domAnimation.style.top = findCellStart.domCell.offsetTop +'px'
                
                let start = 0
                setInterval(() => {
                    domAnimation.style.top =  start +'px'
                    if (start >= cell.domCell.offsetTop) {
                        dom.classList.remove('ball-animation')
                        cell.domCell.classList.add('user')
                        start = 0
                    }
                    start += 10
                }, 1)
                

            } else if (cell.row == rowTurnNull && cell.col == col){
                cell.turn = 'user'
                
                
                // animation
                const findCellStart = this.cells.find((cell) => cell.col == col && cell.row == 1)

                const dom = document.createElement('div')
                dom.classList.add('ball-animation')

                this.gridTemplate.append(dom)

                const domAnimation = document.querySelector('.ball-animation')
                domAnimation.style.left = findCellStart.domCell.offsetLeft + 'px' 
                domAnimation.style.backgroundColor = 'rgb(55, 255, 0)'
                domAnimation.style.top = (findCellStart.domCell.offsetTop - 80 ) +'px'
                
                let start = 0
                setInterval(() => {
                    domAnimation.style.top =  start +'px'
                    if (start >= cell.domCell.offsetTop) {
                        dom.classList.remove('ball-animation')
                        cell.domCell.classList.add('user')
                        start = 0
                    }
                    start += 10
                }, 1)


                setTimeout(() => {
                    cell.domCell.classList.add('user')
                }, 2000)
            }
        })
    }

    botChoose(){

        var col = Math.ceil(Math.random() * 7)
        
        // cek turn dulu
         let rowTurnNull = []

         var stop = false
         let rowPermanent = 6
 
         while(!stop) {
             let check = this.cells.find(cell => cell.col == col && cell.turn != null && cell.row == rowPermanent)
             if (check) {
                 rowTurnNull.push(check.row - 1)
                 if (rowTurnNull.length > 1) {
                     rowTurnNull.shift()
                 }
             } 
             rowPermanent--
             if (rowPermanent == 0) {
                 stop = true
             }
 
         }
 
         this.cells.forEach((cell) => {
             if (cell.row == 6 && cell.col == col && cell.turn == null) {
                 cell.turn = 'bot'


                 // animation
                const findCellStart = this.cells.find((cell) => cell.col == col && cell.row == 1)

                const dom = document.createElement('div')
                dom.classList.add('ball-animation-bot')

                this.gridTemplate.append(dom)
                
                const domAnimation = document.querySelector('.ball-animation-bot')
                domAnimation.style.left = findCellStart.domCell.offsetLeft + 'px' 
                domAnimation.style.top = findCellStart.domCell.offsetTop +'px'
                
                let start = 0
                setInterval(() => {
                    domAnimation.style.top =  start +'px'
                    if (start >= cell.domCell.offsetTop) {
                        dom.classList.remove('ball-animation-bot')
                        cell.domCell.classList.add('bot')
                        start = 0
                    }
                    start += 10
                }, 1)

                
            } else if (cell.row == rowTurnNull && cell.col == col){
                cell.turn = 'bot'
                
                // animation
                const findCellStart = this.cells.find((cell2) => cell2.col == col && cell2.row == cell.row)
                
                console.l

                const dom = document.createElement('div')
                dom.classList.add('ball-animation-bot')
                
                this.gridTemplate.append(dom)
                
                const domAnimation = document.querySelector('.ball-animation-bot')
                domAnimation.style.left = findCellStart.domCell.offsetLeft + 'px' 
                domAnimation.style.top = findCellStart.domCell.offsetTop +'px'
                
                let start = 0
                setInterval(() => {
                    domAnimation.style.top =  start +'px'
                    if (start >= cell.domCell.offsetTop) {
                        dom.classList.remove('ball-animation-bot')
                        cell.domCell.classList.add('bot')
                        start = 0
                    }
                    start += 10
                }, 1)
                 
             }
         })
    }
}