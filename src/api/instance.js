import axios from "axios";
import { BASE_URL } from "./constantes";


export const instanceAxios = axios.create({
    baseURL: BASE_URL
})