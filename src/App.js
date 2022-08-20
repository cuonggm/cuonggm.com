// import './App.css';
import styled from "styled-components";
import {NavigationBar} from "./components/NavigationBar";
import {BrowserRouter} from "react-router-dom";
import {color} from "./const";
import {TextField} from "./components/TextField";

const StyledApp = styled.div`
  margin-top: 0;
  padding-top: 0;
  height: 100vh;
  background-color: ${color.background};
  z-index: 0;
`;

/*
* Navigation Links Setup
* */
const navLinks = [{
    label: "Notes", to: "/notes",
}, {
    label: "Create note", to: "/createNote",
}];

const App = () => {
    return (<BrowserRouter>
        <StyledApp>
            <NavigationBar links={navLinks} isLoggedIn={true}/>
            <TextField/>
        </StyledApp>
    </BrowserRouter>);
}

export default App;
