"use client"
import { useState } from "react"
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import {Dayjs} from "dayjs"

export default function DateReserve({onDateChange}:{onDateChange:Function}) {

    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)

    return (
        <div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker className="bg-white"
                label="Enter your interviewdate"
                value={reserveDate}
                onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
            </LocalizationProvider>

        </div>
    )
}