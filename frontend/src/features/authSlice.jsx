import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { resolvePath } from "react-router-dom";

const initialState ={
    token: null,
    user: null,
    isError: false,
    isSucess: false,
    isLoading: false,
    message: ""
}
const base64key = process.env.REACT_APP_BASE64_AUTH;
//const url_prefix = process.env.REACT_APP_SERVICE_URL;

/*
export const LoginUser= createAsyncThunk("user/loginUser", async(user, thunkAPI) => {
    try{

        const email = user.email;
        const password = user.password;

        const headers = {
            'Accept' : 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64key //+ base64(client_id: client_secret);
        }

        const response =await axios({
            method: 'post', 
            url: "http://localhost:3001" + "/v1/auth/tokens",
            data: 'username=' + email + '&password=' + password+'grant_type=password',
            headers: headers
        });
        return response.data;
    }catch(error){
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});


*/

export const LoginUser= createAsyncThunk("user/loginUser", async(user, thunkAPI) => {
    try{
        const response =await axios.post('http://localhost:5000/login',{
        email: user.email,
        password: user.password
        });
        return response.data;

    }catch(error){
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMe= createAsyncThunk("user/getMe", async(_, thunkAPI) => {
    try{
        const response =await axios.get('http://localhost:5000/me');
        return response.data;

    }catch(error){
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const LogOut= createAsyncThunk("user/LogOut", async() => {
        await axios.delete('http://localhost:5000/logout');
});


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(LoginUser.pending, (state) =>{
            state.isLoading = true;

        });
        builder.addCase(LoginUser.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSucess = true;
            state.user = action.payload.user;
            state.token = action.payload.access_token;
        })
        builder.addCase(LoginUser.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        })

        //Get User Login
        builder.addCase(getMe.pending, (state) =>{
            state.isLoading = true;

        });
        builder.addCase(getMe.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSucess = true;
            state.user = action.payload;
        })
        builder.addCase(getMe.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        })



    }
});
export const{reset} = authSlice.actions;

export default authSlice.reducer;