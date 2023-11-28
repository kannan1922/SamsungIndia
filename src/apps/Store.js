import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../posts/PostSlice";
import UsersSlice from "../posts/UsersSlice";
import UserReducer from "../redux/UserSlice";
const store=configureStore({
reducer:{
   posts:PostSlice,
   users:UsersSlice,
   user:UserReducer
}
})
export default store