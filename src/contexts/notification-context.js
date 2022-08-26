import React from "react"

const NotificationContext = React.createContext({
    open: false,
    message: ""
})

export default NotificationContext