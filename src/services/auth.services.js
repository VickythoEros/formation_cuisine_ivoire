import { USER_TOKEN_ITEM } from "../api/constantes"
import { instanceAxios } from "../api/instance"



const registerUser = (payload)=>{
    return instanceAxios.post(payload)
}

const logoutUser = (payload)=>{
     
    const response = instanceAxios.post(payload)
    if(response.data.token){
        localStorage.setItem(USER_TOKEN_ITEM,response.data.token)
        return response.data
    }
   
}

const logout = ()=>{
    localStorage.removeItem(USER_TOKEN_ITEM)
}


export default authServices ={registerUser,loginUser,logoutUser}

