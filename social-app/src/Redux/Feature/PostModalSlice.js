import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    postModal: false,
    postInfo: {}
}

const postModalSlice = createSlice({
    name: "postModal",
    initialState,
    reducers: {
      openModal: (state,action) => {
          state.postModal = true;
          state.postInfo = action?.payload
      },

      closeModal: (state) => {
          state.postModal = false;
          state.postInfo = {}
      }

    },
})

export const {openModal,closeModal} = postModalSlice.actions;
export const postModalRedcer = postModalSlice.reducer