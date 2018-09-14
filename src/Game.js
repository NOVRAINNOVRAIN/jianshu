import React from  'React'
import './index.css'

// class ShoppingList extends React.Component {
//     render () {
//         return (
//             <div className="shopping-list">
//                 <h1>Shopping List for {this.props.name}</h1>
//                 <ul>
//                     <li>Instagrame</li>
//                     <li>Whatsapp</li>
//                     <li>Facebook</li>
//                 </ul>
//             </div>
//         )
//     }
// }

// ReactDom.render(
//     <ShoppingList name="Apple"/>,
//     document.getElementById('root')
// )

// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square" onClick={()=>this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }


function Square (props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

function caculateWinner (squares) {
    const lines  = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,6],[0,4,8],[2,4,6]];

    for(let i = 0; i<lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={()=>this.props.onClick(i)}/>
        )
    }

    render() {
        // const winner = caculateWinner(this.state.squares);
        // let status;
        // if (winner) {
        //     status = "Winner: " + winner;
        // } else {
        //     status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o');
        // }
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        ) 
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        };
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (caculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'x' : 'o';
        this.setState({
            // squares: squares,
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step%2) ? false : true
        })
    }

    render () {
        const history = this.state.history;
        // const current = history[history.length-1];
        const current = history[this.state.stepNumber];
        const winner = caculateWinner(current.squares);

        const moves = history.map((step,move)=> {
            const desc = move ? 'Move #' + move : 'Get Start';
            return (
                <li key={move}>
                    <a href="#" onClick={()=>this.jumpTo(move)}>{desc}</a>
                </li>
            )
        })

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player is: " + (this.state.xIsNext ? 'x' : 'o'); 
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={(i)=>this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}


export default Game