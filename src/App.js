import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Container, styled} from "@mui/material";
import {Login} from "./pages/Login";
import {RefreshToken} from "./pages/RefreshToken";
import AuthContext from "./contexts/auth-context";
import {useEffect, useState} from "react";
import {loadLoggedUserFromLocalStorage} from "./pages/Login/login-api";

const StyledContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 0 16px;
`;

const App = () => {
    const isLoggedIn = () => {
        return localStorage.getItem("idToken") !== null
    }

    const setLoggedUserStateFunction = (user) => {
        setLoggedUserState(state => {

            return {
                ...state,
                loggedUser: user
            }
        })
    }

    const [loggedUserState, setLoggedUserState] = useState({
        loggedUser: null,
        setLoggedUser: setLoggedUserStateFunction
    });

    // Auto Login after F5
    useEffect(() => {
        const loadedLoggedUser = loadLoggedUserFromLocalStorage();
        if (loadedLoggedUser !== null) {
            setLoggedUserStateFunction(loadedLoggedUser)
        } else {
            setLoggedUserStateFunction(null);
        }
    }, [])
    return (<BrowserRouter>
        <AuthContext.Provider value={loggedUserState}>
            <StyledContainer maxWidth={"md"}>
                <Switch>
                    <Route path={"/login"}>
                        {!isLoggedIn() ? <Login/> : <Redirect to={"/"}/>}
                    </Route>
                    <Route path={"/refreshToken"}>
                        <RefreshToken/>
                    </Route>

                </Switch>
            </StyledContainer>
        </AuthContext.Provider>
    </BrowserRouter>);
}

export default App;
