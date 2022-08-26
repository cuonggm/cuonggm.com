import {Slide, Snackbar, SnackbarContent, styled} from "@mui/material";

const TransitionDown = (props) => {
    return <Slide {...props} direction="down"/>;
}

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: white;
  color: black;
`;

const Toast = (props) => {
    return <Snackbar {...props} anchorOrigin={{vertical: "top", horizontal: "center"}} autoHideDuration={3000}
                        TransitionComponent={TransitionDown}>
        <StyledSnackbarContent message={props.message && props.message}/>
    </Snackbar>
}

export default Toast