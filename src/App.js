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
    const setLoggedUserStateFunction = (user) => {
        setLoggedUserState(state => {
            console.log(user)
            return {
                ...state,
                loggedUser: user
            }
        })
    }

    const [loggedUserState, setLoggedUserState] = useState({
        loggedUser: {
            kind: "",
            localId: "",
            email: "",
            displayName: "",
            idToken: "",
            registered: "",
            refreshToken: "",
            expiresIn: "",
            remain: ""
        },
        setLoggedUser: setLoggedUserStateFunction
    });

    // Auto Login after F5
    useEffect(() => {
        const loadedLoggedUser = loadLoggedUserFromLocalStorage();
        if (loadedLoggedUser !== null) {
            setLoggedUserStateFunction(loadedLoggedUser)
        }
    }, [])

    console.log(loggedUserState.loggedUser.idToken)
    return (<BrowserRouter>
        <AuthContext.Provider value={loggedUserState}>
            <StyledContainer maxWidth={"md"}>
                <Switch>
                    <Route path={"/login"}>
                        {loggedUserState.loggedUser.idToken === null ? <Login/> : <Redirect to={"/"}/>}
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
