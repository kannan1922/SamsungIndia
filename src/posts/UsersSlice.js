import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {  name: 'Samsung GALAXY Fold5' },
    {  name: 'Z-FLip 5' },
    {  name: 'Samsung Notebook' },
    {  name: 'Samsung Tab' },
    {  name: 'Galaxy A21s' },
    {  name: 'Galaxy Flip-2' },
    {  name: 'Samsung Fold-5' },
    {  name: 'Galaxy M31' },
    {  name: 'Xperia F13' },
    {  name: 'Samsung Ultra-7' },

]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer