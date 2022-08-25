import React from "react";

const defaultValue = {
    loggedUser: null,
    setLoggedUser: () => {}
}

const AuthContext = React.createContext(defaultValue)

export default AuthContext;