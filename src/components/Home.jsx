import { useContext } from "react"
import userContext from "../context/userContext"
import colorContext from "../context/colorContext";


const Home = () => {

  const {user,setUser}= useContext(userContext);
  const colorData= useContext(colorContext);

  console.log(colorData.color)

  
  return (
    <div>Home

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2PJgpjJ1CqEXZFFj5Aer1DnMgLf0VtwQ0g&s'  alt='image' />

        <input type="text" className="bg-slate-500 mt-20 text-center" onChange={(e)=>setUser(e.target.value)} value={user}></input>

    </div>
  )
}

export default Home