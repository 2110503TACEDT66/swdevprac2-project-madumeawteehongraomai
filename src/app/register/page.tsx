"use client"

import { TextField, Button } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Reservations() {
    
   

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <form className="bg-slate-100 px-4 py-5 w-fit space-y-5 my-20 flex flex-col items-center">
                <div className="font-bold text-red-500 font-family: 'Roboto'">REGIS<span className="font-bold text-black font-family: 'Roboto'">TER</span></div>
                <div>
                    <TextField fullWidth name="Name" label="Name" className=""/>
                </div>
                <div>
                    <TextField fullWidth name="Tel" label="Tel" className=""/>
                </div>
                <div>
                    <TextField fullWidth name="email" label="Email" className=""/>
                </div>
                <div>
                    <TextField variant="standard" name="Password" label="Password" className=""/>
                </div>
                
                
                <div>
                    <button type="button" name="register" className="text-white text-sm bg-black  hover:bg-red-500">
                        Register
                    </button>
                </div>
            </form>
        </main>
    )
}