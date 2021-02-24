import React, { Component } from 'react';
import Square from './Square'

class Grid extends Component {
    createSquare(i) {
        return (
        <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
        )}
    render() {
        return (
            <div> 
                <div className="border-row">
                {this.createSquare(0)}
                {this.createSquare(1)}
                {this.createSquare(2)}
                </div>
                <div className="border-row">
                {this.createSquare(3)}
                {this.createSquare(4)}
                {this.createSquare(5)}
                </div>
                <div className="border-row">
                {this.createSquare(6)}
                {this.createSquare(7)}
                {this.createSquare(8)}
                </div>
                
            </div>
        )
    }
}

export default Grid
