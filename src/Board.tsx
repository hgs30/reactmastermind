import styled from "styled-components";



const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(232,232,232);
  padding: 10px;
`
const Column = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(105,105,105);
  justify-content: space-evenly;
`

const InputBox = styled.div`
  width: 25px;
  height: 25px;
  padding: 10px;
  margin: 5px;
  background-color: ${(p) => (p.color === "") ? "black" : p.color};
`

type OwnProps = {
    board: string[][];
    setBoard: (board: string[][]) => void;
}

const Board: React.FC<OwnProps> = (props) => {

    const {board, setBoard} = props

    return (
        <div>
            {board.map((row, index) => {
                return <Row key={index}>
                    {row.map((cell, index) => {
                        return <Column key={index}>
                            <InputBox color={cell}/>
                        </Column>
                    })
                    }
                </Row>
            })}
        </div>
    )
}

export default Board;