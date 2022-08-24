import {Button, Stack, styled, TextField, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

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
  height: 56px;
`;

export const Login = (props) => {
    return <StyledContainer container direction={"column"} alignItems={"center"}>

        <StyledLoginContainer direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}
               width={"fit-content"}>
            <Typography textAlign={"center"} variant="h3" gutterBottom>
                Login
            </Typography>
            <StyledTextField variant={"filled"}
                             label={"Username"}
                             required/>
            <StyledTextField variant={"filled"} label={"Password"}
                             required/>
            <StyledButton variant="contained">Login</StyledButton>
        </StyledLoginContainer>

    </StyledContainer>
}