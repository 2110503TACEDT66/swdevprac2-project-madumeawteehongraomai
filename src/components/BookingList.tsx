import getBooking from "@/libs/getBooking";
import { useState, useEffect } from "react"
import { useSession } from 'next-auth/react';
import { BookingItem, UserItem } from "../../interface";
import deleteBooking from "@/libs/deleteBooking";
import getUserProfile from "@/libs/getUserProfile";
import DateReserve from "./DateReserve";
import { Dayjs } from "dayjs";

export default function BookingList() {
    const {data:session} = useSession()
    const [BookItems, setBookingItem]=useState<BookingItem[]>([])
    const [profile, setProfile]=useState<UserItem>()
    const [checkdelete , setCheckdelete]=useState<boolean>(true)
    const [loading, setLoading] = useState(false)
    const [bookingDate, setBookingDate]=useState<Dayjs|null>(null);

    // const updateBooking = async () => {
    //     setLoading(true);
    //     if(session) {
    //         if()
    //     }
    // }


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
    },[checkdelete])

    return (
        <>
            {
                BookItems.map((BookingItems:BookingItem)=>(
                    <div className="bg-[#F9F9F9] rounded  px-5 mx-5 py-2 my-2 "
                    key={BookingItems._id}>
                        <div className="text-xl text-[#969696]">
                            {BookingItems.company.name}
                        </div>
                        <div className="text-l text-[#C4C4C4]">
                            {BookingItems.job_position.position}
                        </div>
                        <div className="text-m text-[#C4C4C4]">
                            NAME : {profile?.name}
                        </div>
                        <div className="text-m text-[#C4C4C4]">
                            {BookingItems.intvDate}
                        </div>
                        <div>
                        <button type="button" name="Book Vaccine" className="text-white text-2xl bg-zinc-700 rounded-xl hover:bg-zinc-950"
                        onClick={
                            async function deletebooking() {
                                if(session) {
                                    await deleteBooking(BookingItems._id, session.user.token);
                                }
                                setCheckdelete(!checkdelete)
                            }
                        }>
                            Remove from Booking
                        </button>
                        
                            <div>
                                <p className="text-gray-700 text-[11px] mr-2">Book date between 05-10-2022 and 05-13-2022</p>
                                <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}}/>
                            </div>
                        </div>


                    </div>
                ))
            }
        </>
    )
}