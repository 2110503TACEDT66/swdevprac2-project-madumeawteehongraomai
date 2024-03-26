import getBooking from "@/libs/getBooking";
import { useState, useEffect } from "react"
import { useSession } from 'next-auth/react';
import { BookingItem, UserItem } from "../../interface";
import deleteBooking from "@/libs/deleteBooking";
import getUserProfile from "@/libs/getUserProfile";

export default function BookingList() {
    const {data:session} = useSession()
    const [BookItems, setBookingItem]=useState<BookingItem[]>([])
    const [profile, setProfile]=useState<UserItem>()

    useEffect(()=>{
        const fetchgetUserProfile = async () => {
            if(session) {
                try {
                    const profile = await getUserProfile(session.user.token)
                    setProfile(profile.data)
                } catch (error) {
                    throw new Error("can't fetch user")
                }
            }
        }
        fetchgetUserProfile()
    },[])

    useEffect(()=>{
        const fetchgetBooking = async () => {
            if(session) {
                try {
                    const bookitem = await getBooking(session.user.token)
                    setBookingItem(bookitem.data)
                } catch (error) {
                    console.error("can't fetch get Booking", error)
                }
            }
        }
        fetchgetBooking()
    },[])

    return (
        <>
            {
                BookItems.map((BookingItems:BookingItem)=>(
                    <div className="bg=slate-200 rounded px-5 mx-5 py-2 my-2"
                    key={BookingItems._id}>
                        <div className="text-xl">
                            {profile?.name}
                        </div>
                        <div className="text-sm">
                            {profile?.tel}
                        </div>
                        <div className="text-sm">
                            {profile?.email}
                        </div>
                        <div className="text-sm">
                            {BookingItems.company.name}
                        </div>
                        <div className="text-sm">
                            {BookingItems.position}
                        </div>
                        <button type="button" name="Book Vaccine" className="text-white text-2xl bg-zinc-700 rounded-xl hover:bg-zinc-950"
                        onClick={
                            async function gay() {
                                await deleteBooking(BookingItems._id);
                            }
                        }>
                            Remove from Booking
                        </button>
                    </div>
                ))
            }
        </>
    )
}