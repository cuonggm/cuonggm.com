import {Button, Stack, styled, TextField, Typography} from "@mui/material";
import {useContext, useState} from "react";
import {loadLoggedUserFromLocalStorage, login, signUp} from "./login-api";
import NotificationContext from "../../contexts/notification-context";
import AuthContext from "../../contexts/auth-context";

const StyledContainer = styled(Stack)`
  margin: 0;
  height: 100%;
`;

const StyledLoginContainer = styled(Stack)`
  margin-top: 140px;
`;

const StyledTextField = styled(TextField)`
  width: 304px;
`;

const StyledButton = styled(Button)`
  width: 304px;
  //height: 56px;
`;

export const Login = (props) => {
    // Get authContext
    const authContext = useContext(AuthContext)

    // Get notificationContext
    const notificationContext = useContext(NotificationContext)

    // Hold state of Username Textfield
    const [username, setUsername] = useState("");
    const onUsernameChange = (event) => {
        setUsername(state => {
            return event.target.value;
        })
    }

    // Hold state of Password Textfield
    const [password, setPassword] = useState("");
    const onPasswordChange = (event) => {
        setPassword(state => {
            return event.target.value;
        })
    }

    // Event Click Login Button
    const onLoginClick = async (event) => {
        login(username, password)
            .then(data => {
                const loggedUser = loadLoggedUserFromLocalStorage();
                if (loggedUser !== null) {
                    authContext.setLoggedUser(data);
                    notificationContext.setNotification({
                        open: true,
                        message: "Logging in successfully"
                    })
                }
            })
            .catch(error => {
                notificationContext.setNotification({
                    open: true,
                    message: "Logging in failed"
                })
            })


    }

    // Event Click Sign Up Button
    const onSignUpClick = async () => {
        const data = await signUp(username, password)
        console.log(data)
    }

    // Render Component
    return <StyledContainer direction={"column"} alignItems={"center"}>
        <StyledLoginContainer direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}
                              width={"fit-content"}>
            <Typography textAlign={"center"} variant="h3" gutterBottom>
                Login
            </Typography>
            <StyledTextField variant={"filled"}
                             label={"Username"}
                             required
                             defaultValue={username}
                             onChange={onUsernameChange}/>
            <StyledTextField type={"password"}
                             variant={"filled"} label={"Password"}
                             required
                             defaultValue={password}
                             onChange={onPasswordChange}/>
            <StyledButton variant="contained" onClick={onLoginClick}>Login</StyledButton>
            <StyledButton variant="outlined" onClick={onSignUpClick}>Sign Up</StyledButton>
        </StyledLoginContainer>
    </StyledContainer>

}