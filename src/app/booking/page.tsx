"use client"
import { useState, useEffect } from "react"
import { TextField,  Select, MenuItem } from "@mui/material"
import { useSession } from 'next-auth/react';
import getUserProfile from "@/libs/getUserProfile";
import DateReserve from "@/components/DateReserve";
import {Dayjs} from "dayjs";
import getCompanies from "@/libs/getCompanies";

export default async function Booking() {
    const [name, setName]=useState<string>('');
    const [lastname, setLastname]=useState<string>('');
    const [citizenID, setCitizenID]=useState<string>('');
    const [location, setLocation]=useState('Chula');
    const [vaccineDate, setVaccineDate]=useState<Dayjs|null>(null);
    const {data:session} = await useSession()
    if(!session) {
        return null
    }
    const profile = await getUserProfile(session.user.token)

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
                        <p className="text-gray-700 text-xl">{profile.data.name}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-gray-700 text-medium mr-2">Email: </p>
                        <p className="text-gray-700 text-xl">{profile.data.email}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-gray-700 text-medium mr-2">TEL: </p>
                        <p className="text-gray-700 text-xl">{profile.data.tel}</p>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <DateReserve onDateChange={(value:Dayjs)=>{setVaccineDate(value)}}/>
                    </div>
                    <div>
                        <button type="button" name="Book Vaccine" className="text-white text-2xl bg-zinc-700 rounded-xl hover:bg-zinc-950">
                            Book Vaccine
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}