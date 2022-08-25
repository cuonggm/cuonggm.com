import {firebaseConst} from "../../const/firebase-const";
import {toTimestamp} from "../../utils/datetime-util";

export const signUp = async (username, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConst.apiKey}`
    const requestBody = {
        email: username,
        password: password,
        returnSecureToken: true
    }

    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(requestBody)
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error("Sign Up Username or password wrong: " + username + ", " + password)
    }
    saveLoggedUserToLocalStorage(data);
    return data;
}

export const login = async (username, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConst.apiKey}`
    const requestBody = {
        email: username,
        password: password,
        returnSecureToken: true
    }

    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(requestBody)
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error("Login Username or password wrong: " + username + ", " + password)
    }
    saveLoggedUserToLocalStorage(data);
    return data;
}

export const refreshToken = async (refreshToken) => {
    const url = `https://securetoken.googleapis.com/v1/token?key=${firebaseConst.apiKey}`
    const requestBody = {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
    }

    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(requestBody)
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error("Refresh Token Failed: " + refreshToken)
    }
    localStorage.setItem("idToken", data["id_token"])
    localStorage.setItem("remain", toTimestamp(data["expires_in"]))
    localStorage.setItem("refreshToken", data["refresh_token"])
    return data;
}

/*
* Private functions
* */
export const saveLoggedUserToLocalStorage = (user) => {
    console.log("saveLoggedUserToLocalStorage")
    console.log(user);
    console.log("----------")
    localStorage.setItem("kind", user.kind)
    localStorage.setItem("localId", user.localId)
    localStorage.setItem("email", user.email)
    localStorage.setItem("displayName", user.displayName)
    localStorage.setItem("idToken", user.idToken)
    localStorage.setItem("registered", user.registered)
    localStorage.setItem("refreshToken", user.refreshToken)
    localStorage.setItem("expiresIn", user.expiresIn)
    localStorage.setItem("remain", toTimestamp(user.expiresIn))
}

export const clearLoggedUserFromLocalStorage = (user) => {
    localStorage.removeItem("kind")
    localStorage.removeItem("localId")
    localStorage.removeItem("email")
    localStorage.removeItem("displayName")
    localStorage.removeItem("idToken")
    localStorage.removeItem("registered")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("expiresIn")
    localStorage.removeItem("remain")
}

export const loadLoggedUserFromLocalStorage = () => {
    if(localStorage.getItem("idToken") === null) {
        return null;
    }
    return {
        kind: localStorage.getItem("kind"),
        localId: localStorage.getItem("localId"),
        email: localStorage.getItem("email"),
        displayName: localStorage.getItem("displayName"),
        idToken: localStorage.getItem("idToken"),
        registered: localStorage.getItem("registered"),
        refreshToken: localStorage.getItem("refreshToken"),
        expiresIn: localStorage.getItem("expiresIn"),
        remain: localStorage.getItem("remain")
    }
}