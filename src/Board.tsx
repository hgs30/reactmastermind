import styled from "styled-components";


const BoardContainer = styled.div`
  display: flex;
  background-color: rgb(105,105,105);
`

const InputBox = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  padding: 10px;
  margin: 5px;
  background-color: ${(p) => (p.color === "") ? "black" : p.color};
`

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 225px;
`

type OwnProps = {
    board: string[];
    red: string[];
    white: string[];
}

const Board: React.FC<OwnProps> = (props) => {

    const {board, red, white} = props

    return (
        <BoardContainer>
            <Section>
                {white.map((color, index) => {
                    return <InputBox key={index} color={(color) ? color : "rgb(105,105,105)"}/>
                })}
            </Section>
            <Section>
                {board.map((color, index) => {
                    return <InputBox key={index} color={color}/>
                })}
            </Section>
            <Section>
                {red.map((color, index) => {
                    return <InputBox key={index} color={(color) ? color : "rgb(105,105,105)"}/>
                })}
            </Section>
        </BoardContainer>
    )
}

export default Board;