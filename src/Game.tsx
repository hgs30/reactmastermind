import Board from "./Board";
// @ts-ignore
import styled from "styled-components";
import ColorPicker from "./ColorPicker";
import Header from "./Header";
import Colors from "./model";
import {useState} from "react";

const DEFAULT_Y = 13
const DEFAULT_X = 4

const Main = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const StyledButton = styled.button`
  width: 150px;
  height: 150px;
  border-style: solid;
  background-color: black;
  color: white;
  font-size: 20px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
`

const boardCreator = (length: number, width: number) => {
    let board: string[] = [];
    for (let i=0; i < length * width; i++) {
        board.push("")
    }
    return board;
}

// @ts-ignore
const createSolution = (colors: string[]) => {
    if (colors.length === Object.values(Colors).length - 4) {
        return []
    }
    let shuffled = colors
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    return [shuffled.pop()].concat(createSolution(shuffled))
}


const Game: React.FC = () => {
    const [board, setBoard] = useState(boardCreator(DEFAULT_Y, DEFAULT_X));
    const [red, setRed] = useState(boardCreator(DEFAULT_Y, DEFAULT_X));
    const [white, setWhite] = useState(boardCreator(DEFAULT_Y, DEFAULT_X));
    const [solution, setSolution] = useState(createSolution(Object.values(Colors)))
    const [row, setRow] = useState(0)

    const handleBackClick = () => {
        let iMinusOne = -1;
        let inserted: boolean = false;
        let newBoard = [];
        for (let i=0; i < board.length; i++) {
            if (board[i] === "" && !inserted && i > row * 4) {
                newBoard[iMinusOne] = "";
                inserted = true
            }
            newBoard.push(board[i])
            iMinusOne++;
        }
        setBoard(newBoard)
    }

    const checkSolution = () => {
        let solIndex = 0
        let red: string[] = []
        let white: string[] = []
        for (let i = (row * 4); i < (row * 4 + 4); i++) {
            if (board[i] === solution[solIndex]) {
                red.push(board[i]);
            } else if (solution.includes(board[i])) {
                white.push(board[i]);
            }
            solIndex++;
        }
        return {red: red, white: white.filter(value => !red.includes(value))}
    }

    const resetGame = () => {
        setSolution(createSolution(Object.values(Colors)));
        setRow(0)
        setBoard(boardCreator(DEFAULT_Y, DEFAULT_X));
    }

    const checkRow = () => {
        const {red, white} = checkSolution()
        if (red.length === 4) {
            alert("You won!");
            resetGame()
        } else {
            alert(`Red: ${red.length}, white: ${white.length}`)
            setRow(row + 1);
        }
    }

    return (
        <Main style={{display: "flex"}}>
            <header>
                <Header solution={solution}/>
            </header>
            <Board board={board} red={red} white={white}/>
            <Footer>
                <StyledButton onClick={handleBackClick}>Back</StyledButton>
                <ColorPicker board={board} setBoard={setBoard} row={row}/>
                <StyledButton onClick={checkRow}>Check</StyledButton>
            </Footer>
        </Main>
    )
}

export default Game;