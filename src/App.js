import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Container, styled} from "@mui/material";
import {Login} from "./pages/Login";
import {RefreshToken} from "./pages/RefreshToken";
import AuthContext from "./contexts/auth-context";
import {useEffect, useState} from "react";
import {loadLoggedUserFromLocalStorage} from "./pages/Login/login-api";
import NotificationContext from "./contexts/notification-context";
import Toast from "./components/Toast";

const StyledContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 0 16px;
`;

// Main Component
const App = () => {

    // Notification
    // Assign to Snackbar
    const onCloseNotification = () => {
        setNotificationState(state => {
            return {
                ...state,
                open: false,
                message: ""
            }
        })
    }

    // Assign to function that inside Context Object (State Object)
    const updateNotificationState = (update) => {
        setNotificationState(state => {
            return {
                ...state,
                ...update
            }
        })
    }

    // notificationState for hold status
    const [notificationState, setNotificationState] = useState({
        open: false,
        message: "",
        setNotification: updateNotificationState
    })

    // Event Handlers
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

    // Auto LoginScreen after F5
    useEffect(() => {
        const loadedLoggedUser = loadLoggedUserFromLocalStorage();
        if (loadedLoggedUser !== null) {
            setLoggedUserStateFunction(loadedLoggedUser)
        } else {
            setLoggedUserStateFunction(null);
        }
    }, [])
    return (<BrowserRouter>
        <NotificationContext.Provider value={notificationState}>
            <AuthContext.Provider value={loggedUserState}>

                <StyledContainer maxWidth={"md"}>
                    <Toast open={notificationState.open} message={notificationState.message}
                           onClose={onCloseNotification}/>
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
        </NotificationContext.Provider>
    </BrowserRouter>);
}

export default App;
