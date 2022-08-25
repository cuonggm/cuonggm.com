import {Button, Stack, styled, TextField, Typography} from "@mui/material";
import {refreshToken} from "../Login/login-api";
import {useState} from "react";

const StyledContainer = styled(Stack)`
  margin: 0;
  height: 100%;
`;

const StyledLoginContainer = styled(Stack)`
  margin-top: 140px;
`;

const StyledButton = styled(Button)`
  width: 304px;
  //height: 56px;
`;

export const RefreshToken = (props) => {

    const onRefreshClick = async () => {
        await refreshToken(localStorage.getItem("refreshToken"))
    }

    return <StyledContainer direction={"column"} alignItems={"center"}>
        <StyledLoginContainer direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}
                              width={"fit-content"}>
            <Typography textAlign={"center"} variant="h3" gutterBottom>
                RefreshToken
            </Typography>
            <StyledButton variant="contained" onClick={onRefreshClick}>Refresh Token</StyledButton>
        </StyledLoginContainer>
    </StyledContainer>

}