// @ts-ignore
import styled from "styled-components";
import Colors from "./model";
import {wait} from "@testing-library/user-event/dist/utils";

const ColorSelection = styled.button`
  width: 150px;
  height: 150px;
  border-style: solid;
  background-color: ${(p) => p.color}
`

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row
`

type OwnProps = {
    setCurrentColor: (color: string) => void;
    increment: () => void;
}


const ColorPicker: React.FC<OwnProps> = (props) => {

    const {setCurrentColor, increment} = props

    const handleClick = (value: string) => {
        setCurrentColor(value)
        increment()
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