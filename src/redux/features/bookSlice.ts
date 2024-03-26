import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState={bookItems:[]}

export const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        
    }
})

// export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer