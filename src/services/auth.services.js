import { USER_TOKEN_ITEM } from "../api/constantes"
import { instanceAxios } from "../api/instance"



const registerUser = async(payload)=>{
    const response =  await instanceAxios.post(payload)
}

const loginUser = (payload)=>{
     
    const response = instanceAxios.post('/auth/local/register',payload)
    if(response.data.token){
        localStorage.setItem(USER_TOKEN_ITEM,response.data.token)
        return response.data
    }
   
}

const logoutUser = ()=>{
    localStorage.removeItem(USER_TOKEN_ITEM)
}


const authServices ={registerUser,loginUser,logoutUser}

export default authServices

