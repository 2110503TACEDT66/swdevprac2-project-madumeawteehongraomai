"use client"
import { useState } from "react"
import { TextField,  Select, MenuItem } from "@mui/material"
import DateReserve from "@/components/DateReserve";
import {Dayjs} from "dayjs";

export default function Booking() {
    const [name, setName]=useState<string>('');
    const [lastname, setLastname]=useState<string>('');
    const [citizenID, setCitizenID]=useState<string>('');
    const [location, setLocation]=useState('Chula');
    const [vaccineDate, setVaccineDate]=useState<Dayjs|null>(null);

    return (
        <main className="w-[100%] h-[40vw] flex flex-col items-center space-y-4">
            <form className="bg-slate-100 rounded-lg px-4 py-5 w-fit space-y-5 my-20 flex flex-col items-center">
                <div className="text-xl font-medium text-black">Interview Booking</div>
                <div>
                    <TextField variant="standard" name="Name" label="Name" className=""
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <TextField variant="standard" name="Lastname" label="Lastname" className=""
                    onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div>
                    <TextField variant="standard" name="Citizen ID" label="Citizen ID" className=""
                    onChange={(e)=>setCitizenID(e.target.value)}/>
                </div>
                <div>
                    <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[200px]"
                    onChange={(e)=>setLocation((e.target as HTMLSelectElement).value)}>
                        <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                        <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
                    </Select>
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
        </main>
    )
}