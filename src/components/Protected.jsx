import { useContext } from "react"
import userContext from "../context/userContext"
import { Navigate, Outlet } from "react-router-dom";


const Protected = () => {
    const {isAuth}= useContext(userContext);
  return (
    <>{isAuth?<Outlet/>:<Navigate to={"/login"}/>}</>
  )
}

export default Protected