import {Link as RouteLink} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(RouteLink)`
  text-decoration: none;
  color: unset;
`;

export const Link = (props) => {
    return <StyledLink {...props}>{props.children}</StyledLink>
}