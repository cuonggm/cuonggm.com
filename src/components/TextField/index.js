import styled from "styled-components";
import {color} from "../../const";

const Container = styled.div`
  z-index: 1;
  margin: 16px;
  position: relative;
  height: 56px;
  width: 350px;
  background-color: #61dafb;
  display: flex;
  gap: 0;
  flex-direction: column;
  padding: 0px 4px 0px 4px;
  background-color: ${color.background};
`;

const Label = styled.div`
  display: block;
  color: ${color.primary};
  padding: 0 4px;
  width: auto;
  font-size: 12px;
  height: 16px;
  position: absolute;
  top: 0px;
  left: 16px;
  background-color: ${color.background};
`;

const Input = styled.input`
  background-color: ${color.background};
  margin: 8px 0 0 0;
  border: solid 1px ${color.primary};
  border-radius: 6px;
  height: 38px;
  padding: 0 16px;
  &:focus {
    outline: none;
  }
`;

export const TextField = (props) => {
    return <Container>
        <Label>Label *</Label>
        <Input/>
    </Container>
}