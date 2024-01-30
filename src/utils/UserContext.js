import { createContext } from "react";

const UserContext = createContext({
    isLoggedIn : false,
    userName : "default User"
})

export default UserContext;