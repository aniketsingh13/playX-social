import {  createSlice } from "@reduxjs/toolkit"

const initialState = {
    profileModal: false,
    profileInfo : {}
}


const profileEditModalSlice =  createSlice({
    name: "profileEditModal",
    initialState,
    reducers : {
        show_profileModal: (state) =>{
            state.profileModal = true
        },
        hide_profileModal: (state) => {
            state.profileModal = false;
            state.profileInfo = {}
        }
    }
})


export const {show_profileModal,hide_profileModal} = profileEditModalSlice.actions;

export const profileEditModalReducer = profileEditModalSlice.reducer