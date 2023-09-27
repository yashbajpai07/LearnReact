import { useContext } from "react";

import UserContext from "../context/UserContext";


export const Profile = () => {

    const {user}=useContext(UserContext)
    console.log(user)

    if(!user)
    return (<div>Please Login</div>)
    else
    return (<div>Welcome {user.name}</div>)
}
