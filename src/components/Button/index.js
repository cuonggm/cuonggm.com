import styled from "styled-components";
import {color, fontSize} from "../../const/const";

const StyledButton = styled.button`
  height: 40px;
  padding: 16px 24px;
  text-align: center;
  line-height: 0;
  background-color: ${color.primary};
  color: ${color.light};
  border: solid 0 black;
  border-radius: 24px;
  font-size: ${fontSize.standard};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${color.primaryHover};
  }
`;

export const Button = (props) => {
    return <StyledButton {...props} onClick={props.onClick && props.onClick}>{props.children}</StyledButton>
};

export const SecondaryButton = styled(Button)`
  background-color: ${color.secondary};
  color: ${color.dark};

  &:hover {
    background-color: ${color.secondaryHover};
  }
`;

export const DarkButton = styled(Button)`
  background-color: ${color.dark};
  color: ${color.light};
  border: solid 1px ${color.primary};

  &:hover {
    background-color: ${color.darkHover};
  }
`;

export const LightButton = styled(Button)`
  background-color: ${color.light};
  color: ${color.primary};
  border: solid 1px ${color.primary};

  &:hover {
    background-color: ${color.lightHover};
    color: ${color.primary};
  }
`;