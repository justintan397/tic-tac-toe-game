import React, { Component } from 'react';
import Grid from './Grid';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            moveNumber: 0,
            history: [
                {squares: Array(9).fill(null)}
            ]
        }
    }

    handleClick(i){
        const history = this.state.history.slice(0,this.state.moveNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        const winner = decideWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            moveNumber: history.length
        })
    }

    jumpTo(move) {
        this.setState({
            moveNumber: move,
            xIsNext: (move%2)===0,
            oIsNext: (move%2)===1
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.moveNumber];
        const winner = decideWinner(current.squares);
        const moves = history.map((move, moves) => {
            const desc = moves ? 'Go to #' + moves : 'Start the Game';
            return (                        
                <li key={moves}>
                    <button className="btn" onClick={() => {this.jumpTo(moves)}}>
                        {desc}
                    </button>
                </li>
            )
        });
        
        let status;
        if (winner) {
            status = 'Winner is ' + winner;
            window.alert('Congratulations, ' + winner + ' Win!');
        } else {
            status = 'Next Play is ' + (this.state.xIsNext ? 'X' : 'O');
        }
       
        return (
            <div className="game">
                <div className="game-grid">
                    <Grid onClick={(i)=>this.handleClick(i)}
                    squares={current.squares} />
                </div>
                <div className="game-status">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
            </div>
        )
    }
    handleReset = () => {
        this.setState({ 
            game: [
                0, 0, 0,
                0, 0, 0,
                0, 0, 0
            ],     
            isXTurn: false,
            winner: null
        })
    }
}

function decideWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var i=0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
}

export default Game
