import {Button, Stack, styled, TextField, Typography} from "@mui/material";
import {useState} from "react";

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
`

const LoginScreen = (props) => {

    // Username
    const [username, setUsername] = useState("")
    const onUsernameChange = (event) => {
        setUsername(state => {
            return event.target.value;
        })
    }

    // Password
    const [password, setPassword] = useState("")
    const onPasswordChange = (event) => {
        setPassword(state => {
            return event.target.values;
        })
    }

    // LoginScreen Button
    const onLoginClick = (event) => {
        if(props.onLogin) {
            props.onLogin(username, password);
        }
    }

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
        </StyledLoginContainer>
    </StyledContainer>
}

export default LoginScreen