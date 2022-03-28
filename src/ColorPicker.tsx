// @ts-ignore
import styled from "styled-components";
import Colors from "./model";

const ColorSelection = styled.button`
  width: 150px;
  height: 150px;
  border-style: solid;
  background-color: ${(p) => p.color}
`

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row
  flex-grow: 2;
`

type OwnProps = {
    board: string[];
    setBoard: (board: string[]) => void;
    row: number;
}


const ColorPicker: React.FC<OwnProps> = (props) => {

    const {board, setBoard, row} = props

    const handleClick = (value: string) => {
        let inserted: boolean = false;
        const newBoard = board.map((color, index) => {
            if (color === "" && !inserted && index < (row * 4 + 4)) {
                inserted = true
                return value
            } else {
                return color
            }
        })
        setBoard(newBoard)
    }

    return (
        <ColorContainer>
            {Object.values(Colors).map(value => {
                return <ColorSelection color={value} onClick={() => handleClick(value)} key={value}/>
            })}
        </ColorContainer>

    )
}

export default ColorPicker;