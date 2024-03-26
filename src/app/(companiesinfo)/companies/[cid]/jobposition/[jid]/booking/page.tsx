"use client"
import { useState, useEffect } from "react"
import { TextField,  Select, MenuItem } from "@mui/material"
import { useSession } from 'next-auth/react';
import getUserProfile from "@/libs/getUserProfile";
import DateReserve from "@/components/DateReserve";
import dayjs, {Dayjs} from "dayjs";
import getCompanies from "@/libs/getCompanies";
import { User } from "next-auth";
import getBooking from "@/libs/getBooking";
import createBooking from "@/libs/createBooking";
import { JobpositionItem, UserItem, CompanyItem } from "../../../../../../../../interface";
import getCompany from "@/libs/getCompany";
import getJobposition from "@/libs/getJobposition";

export default function Booking({params}:{params:{cid:string,jid:string}}) {
    const [bookingDate, setBookingDate]=useState<Dayjs|null>(null);
    const {data:session} = useSession()
    const [loading, setLoading] = useState(false)
    const [profile, setProfile]=useState<UserItem>()
    const [company, setcompany]=useState<CompanyItem>()
    const [position, setPosition]=useState<JobpositionItem>()
    const [BookingItem, setBookingItem]=useState<number>()
    const [error,setError]=useState<string>("")

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
        const fetchgetCompany = async () => {
                try {
                    const company = await getCompany(params.cid)
                    setcompany(company.data)
                } catch (error) {
                    throw new Error("can't fetch company")
                }
                
            }
        fetchgetCompany()
    },[])

    useEffect(()=>{
        const fetchgetPosition = async () => {
            if(session) {
                try {
                    const position = await getJobposition(params.jid, session.user.token)
                    setPosition(position.data)
                } catch (error) {
                    throw new Error("can't fetch jobposition")
                }
            }
        }
        fetchgetPosition()
    },[])

    useEffect(()=>{
        const fetchgetBooking = async () => {
            if(session) {
                try {
                    const data = await getBooking(session.user.token)
                    setBookingItem(data.count)
                } catch (error) {
                    console.error("can't fetch get Booking", error)
                }
            }
        }
        fetchgetBooking()
    },[])

    if(session?.user.role === "user" && BookingItem === 3) {
        return <div className="text-[20px] m-5 font-bold text-red-500 rounded-lg p-3 text-center">You have already booking Interview Date 3 time</div>
    }

    const makeBooking = async () => {
        setLoading(true);
        if(session) {
            if(bookingDate !== null) {
                const date1st = dayjs('2022-05-09 23:59:59');
                const date2nd = dayjs('2022-05-14 00:00:00');
                const selectedDate = dayjs(bookingDate);
                if(selectedDate.isAfter(date1st,'day') && selectedDate.isBefore(date2nd, 'day')) {
                    await createBooking(
                        params.cid,
                        params.jid,
                        selectedDate.format("YYYY/MM/DD/HH/mm/ss"),
                        session.user.token
                    )
                } else {
                    alert("Cannot Book Appointment in 2022-05-10 and 2022-05-13 dates.")
                    setError("Cannot Book Appointment in 2022-05-10 and 2022-05-13 dates.");
                    console.log(error)
                    setLoading(false);
                    return;
                }
            }
        }
        setLoading(false);
    };

    return (
        <main className="w-[100%] h-[40vw] flex flex-col bg-white">
            <div className="text-5xl font-thin text-neutral-400 font-family: 'Roboto' pr-4 mt-8">BOOKING</div>
            <div className="text-5xl font-bold text-black font-family: 'Roboto'  pr-4">INTERVIEW</div>
            <div className="flex justify-center w-10/12 mx-auto mt-8">
                <div className="border-b border-gray-300 w-full"></div> 
            </div>
            <div className="flex flex-col items-center">
                <form className="bg-slate-100 rounded-lg px-4 py-5 w-fit space-y-5 my-20 flex flex-col items-center">
                    <div className="text-xl font-medium text-black">Interview Booking</div>
                    <div className="flex flex-row">
                        <p className="text-gray-700 text-medium mr-2">Name: </p>
                        <p className="text-gray-700 text-xl">{profile?.name}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-gray-700 text-medium mr-2">Email: </p>
                        <p className="text-gray-700 text-xl">{profile?.email}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-gray-700 text-medium mr-2">TEL: </p>
                        <p className="text-gray-700 text-xl">{profile?.tel}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-gray-700 text-medium mr-2">Company: </p>
                        <p className="text-gray-700 text-xl">{company?.name}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-gray-700 text-medium mr-2">Position: </p>
                        <p className="text-gray-700 text-xl">{position?.position}</p>
                    </div>
                    <div>
                    <p className="text-gray-700 text-[11px] mr-2">Book date between 05-10-2022 and 05-13-2022</p>
                        <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}}/>
                    </div>
                    <div>
                        <button type="button" name="intvDate" className="text-white p-2 text-2xl bg-zinc-700 rounded-xl hover:bg-zinc-950" onClick={makeBooking}>
                            Book Interview Date
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}