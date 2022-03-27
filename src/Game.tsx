import Board from "./Board";
// @ts-ignore
import styled from "styled-components";
import ColorPicker from "./ColorPicker";
import Header from "./Header";
import Colors from "./model";
import {useEffect, useState} from "react";
import board from "./Board";

const DEFAULT_Y = 13
const DEFAULT_X = 4

const Main = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const BackButton = styled.button`
  width: 150px;
  height: 150px;
  border-style: solid;
  background-color: black;
  color: white;
  font-size: 20px;
`

const Footer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
`

const testSolution = [
    Colors.green,
    Colors.blue,
    Colors.red,
    Colors.grey
]

const boardCreator = (length: number, width: number) => {
    return Array(length)
        .fill([])
        .map(() =>
            Array(width).fill([]).map(() => ""))
}

const Game: React.FC = () => {
    const [board, setBoard] = useState(boardCreator(DEFAULT_Y, DEFAULT_X));
    const [xIndex, setXIndex] = useState(0);
    const [yIndex, setYIndex] = useState(0);
    const [currentColor, setCurrentColor] = useState("white");
    const x = DEFAULT_X;
    const y = DEFAULT_Y;


    const handleBackClick = () => {
        setXIndex((xIndex === 0) ? (yIndex !== y) ? DEFAULT_X : 0 : xIndex - 1);
        setYIndex((xIndex === 0) ? (yIndex !== y) ? yIndex - 1  : 0: yIndex);
    }

    const increment = () => {
        setXIndex((xIndex === x - 1) ? 0 : xIndex + 1);
        setYIndex((xIndex === x - 1) ? yIndex + 1 : yIndex);
    }

    useEffect(() => {
        let newBoard: string[][] = [];
        for (let i = 0; i < y; i++) {
            let newRow: string[] = [];
            for (let j = 0; j < x; j++) {
                if (j === xIndex && i === yIndex) {
                    newRow.push(currentColor);
                } else {
                    newRow.push(board[i][j]);
                }
            }
            newBoard.push(newRow);
        }
        setBoard(newBoard);
    }, [xIndex])

    return (
        <Main style={{display: "flex"}}>
            <header>
                <Header solution={testSolution}/>
            </header>
            <Board setBoard={setBoard} board={board}/>
            <Footer>
                <ColorPicker setCurrentColor={setCurrentColor} increment={increment}/>
                <BackButton onClick={handleBackClick}>←</BackButton>
            </Footer>
        </Main>
    )
}

export default Game;