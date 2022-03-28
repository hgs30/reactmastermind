import styled from "styled-components";

type OwnProps = {
    board: string[];
    red: string[];
    white: string[];
}

const BoardRowContainer = styled.div`
  display: flex;
  background-color: rgb(105,105,105);
`



const BoardRow: React.FC<OwnProps> = (props) => {

    const redScore = props.red.length
    const whiteScore = props.white.length

    return (
        <BoardRowContainer>
            // ToDo: Call this with 4 length strings

        </BoardRowContainer>
    )
}

export default BoardRow;