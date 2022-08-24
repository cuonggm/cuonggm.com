import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, styled} from "@mui/material";
import {Login} from "./pages/Login";

const StyledContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 0 16px;
`;

const App = () => {
    return (<BrowserRouter>
        <StyledContainer maxWidth={"md"}>
            <Switch>
                <Route path={"/login"}>
                    <Login/>
                </Route>
            </Switch>
        </StyledContainer>
    </BrowserRouter>);
}

export default App;
