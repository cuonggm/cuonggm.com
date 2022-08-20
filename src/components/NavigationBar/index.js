import styled from "styled-components";
import {breakPoints, color, fontSize} from "../../const";
import {Button, LightButton} from "../Button";
import {Link as StandardLink} from "../Link";
import logo from "../../icons/icons8-pig-100.png"
import moreIcon from "../../icons/icons8-more-100.png";
import {useState} from "react";

/*
* Props item:
* 1. onLogin
* 2. onLogout
* 3. links: [{to, label}]
* 4. isLoggedIn
* */

const StyledNavigationBar = styled.div`
  height: 64px;
  background-color: ${color.primary};
  margin: 0;
  padding: 0;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  gap: 16px;
  justify-content: space-between;
`;

const StyledPanel = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 16px;
`;

const StyledList = styled.ul`
  width: auto;
  padding: 0;
  display: flex;
  gap: 16px;
  list-style-type: none;
  color: #1ea7fd;
  align-items: center;

  @media (max-width: ${breakPoints.small}) {
    gap: 0;
  }
`;

const StyledLeftList = styled(StyledList)`
  flex-direction: row;
  justify-items: flex-start;
`;

// Drawer
const StyledRightList = styled(StyledList)`
  z-index: 10;
  flex-direction: row;

  @media (max-width: ${breakPoints.small}) {
    display: ${props => !props.isDrawerShow && "none"};
    position: ${props => props.isDrawerShow && "fixed"};
    top: 64px;
    left: 0;
    bottom: 0;
    //height: 100%;
    width: 70%;
    max-width: 273px;
    margin: 0;
    border-radius: 0 24px 24px 0;
    flex-direction: column;
    background-color: ${color.dark};
    padding: 16px 0 16px 0;
    overflow: auto;
  }
`;

const StyledItem = styled.li`
  width: auto;
  color: ${color.light};
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  font-size: ${fontSize.standard};

  &:hover {
    color: ${color.lightHover};
  }

  @media (max-width: ${breakPoints.small}) {
    width: 100%;
    height: 48px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${color.light};
    font-weight: bold;

    &:hover {
      color: ${color.lightHover};
    }
  }
`;

const AutoShowItem = styled(StyledItem)`
  @media (min-width: ${breakPoints.small}) {
    display: none;
  }
`;

const Link = styled(StandardLink)`
  @media (max-width: ${breakPoints.small}) {
    width: 100%;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 48px;
  width: 48px;
  color: ${color.light};
`;

const SpanLogo = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 32px;
  font-weight: lighter;
  color: ${color.light};
`;

const IconButton = styled.img`
  width: ${"24px"};
  height: ${"24px"};
`;

export const NavigationBar = (props) => {
    const [isDrawerShow, setDrawerShow] = useState(false);

    // Show Drawer
    const onMoreClick = () => {
        setDrawerShow(state => {
            return !state;
        });
    };

    // Hide Drawer
    const onHideDrawer = () => {
        setDrawerShow(state => {
            return false;
        });
    }

    // onLogin
    const onLogin = () => {
        props.onLogin && props.onLogin("username", "password");
        setDrawerShow(state => {
            return false;
        });
    }

    // onLogin
    const onLogout = () => {
        props.onLogout && props.onLogout();
        setDrawerShow(state => {
            return false;
        });
    }

    return <StyledNavigationBar {...props}>
        <StyledPanel>
            <StyledLeftList>
                <SpanLogo>{"<"}<Logo src={logo}/>{"/>"}</SpanLogo>
            </StyledLeftList>
        </StyledPanel>
        <StyledPanel>
            <StyledRightList isDrawerShow={isDrawerShow}>
                {props.links && props.isLoggedIn && props.links.map(link => {
                    return <StyledItem>
                        <Link to={link.to && link.to} onClick={onHideDrawer}>{link.label ? link.label : "Link"}</Link>
                    </StyledItem>
                })}
                {!props.isLoggedIn && <StyledItem>
                    <Link to="/login" onClick={onLogin}>Login</Link>
                </StyledItem>}
                {props.isLoggedIn && <StyledItem>
                    <Link to="#" onClick={onLogout}>Logout</Link>
                </StyledItem>}
            </StyledRightList>
            <AutoShowItem>
                <Button as={LightButton} onClick={onMoreClick}><IconButton src={moreIcon}/></Button>
            </AutoShowItem>
        </StyledPanel>
    </StyledNavigationBar>
}