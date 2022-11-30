import { USER_TOKEN_ITEM } from "../api/constantes"

export const authHeader = ()=>{
    const userToken = localStorage.getItem(USER_TOKEN_ITEM)
    //return userToken ? { Authorization: `Bearer ${userToken}`} :{} // general way
    return userToken ? { 'x-access-token': userToken }: {} // for nodejs express backend
}