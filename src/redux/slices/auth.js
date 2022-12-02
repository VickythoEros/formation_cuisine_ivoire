import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { USER_TOKEN_ITEM } from "../../api/constantes";
import authServices from "../../services/auth.services";
import { setMessage } from "./messages";


const userToken = localStorage.getItem(USER_TOKEN_ITEM)

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async(payload,thunkAPI)=>{
        try {
          console.log(payload)

            const response = await authServices.registerUser(payload)
            console.log(response)
            thunkAPI.dispatch(setMessage(response.data.message))
        } catch (error) {
            console.error(error)
            // const errorMessage  = error.message
            // thunkAPI.dispatch(setMessage(errorMessage))
            return thunkAPI.rejectWithValue()
        }
    }
)


export const loginUser  =  createAsyncThunk(
    "user/loginUser",
    async(payload,thunkAPI)=>{
        try {
            const response = await authServices.loginUser(payload)
            return {user : response.data}
        } catch (error) {
            console.error(error)
            // const errorMessage  = error.message
            // thunkAPI.dispatch(setMessage(errorMessage))
            return thunkAPI.rejectWithValue()
        }
    }
)


export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async () => {
    await authServices.logoutUser();
});
  


const initialState = userToken ? { isLoggedIn: true, user: userToken } : { isLoggedIn: false, user: null };
  
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
      [registerUser.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
      },
      [registerUser.rejected]: (state, action) => {
        state.isLoggedIn = false;
      },
      [loginUser.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      },
      [loginUser.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
      [logoutUser.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
  });
  
  const { reducer } = authSlice;
  export default reducer;