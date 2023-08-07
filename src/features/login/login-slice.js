import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"


const initialLoginState = {
    isAuthenticated : false
}
export const login = createAsyncThunk('auth/login',
async ({username,password})=>{

})
const loginSlice = createSlice({
    name:'authentication',
    initialState : initialLoginState,
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

export const loginActions = loginSlice.actions
export default loginSlice.reducer