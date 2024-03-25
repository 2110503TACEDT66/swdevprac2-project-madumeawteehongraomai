import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState={bookItems:[]}

export const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        addBooking: (state, action:PayloadAction<BookingItem>)=> {
            const remainBooking = state.bookItems.filter((obj)=>{
                return obj.id!==action.payload.id
            })
            remainBooking.push(action.payload)
            state.bookItems=remainBooking;
            console.log(state.bookItems)
        },
        removeBooking: (state, action:PayloadAction<string>)=> {
            const remainBooking = state.bookItems.filter((obj)=>{
                return obj.id!==action.payload
            })
            state.bookItems=remainBooking
        }
    }
})

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer