import {Navigate,Outlet} from "react-router-dom"

import { useSelector } from "react-redux"

const Guard=()=>{
    const isAuth=useSelector(state=>state.auth.isAuthenticated)
    return isAuth?<Outlet/>:<Navigate to="/sign-in"/>
}

export default Guard