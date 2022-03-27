import styled from "styled-components";

const ColorSolution = styled.div`
  width: 150px;
  height: 150px;
  border-style: solid;
  background-color: ${p => p.color}
`

const SolutionContainer = styled.div`
  display: flex;
  flex-direction: row
`

type OwnProps = {
    solution: string[]
}

const Header: React.FC<OwnProps> = (props) => {
    const {solution} = props;
    return (
        <SolutionContainer>
            {solution.map(color =>
                <ColorSolution color={color} key={color}/>
            )}
        </SolutionContainer>
    )
}

export default Header;