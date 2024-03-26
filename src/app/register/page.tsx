"use client"
import { TextField, Button, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';

export default function Reservations() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [name ,setName] = useState('')
    const [tel,setTel] = useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const handleSubmit = async () => {
        
        const submitData = {name,tel,email,password,role:'user'}
    
        try {
          const res = await fetch('http://localhost:5000/api/v1/auth/register',{
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
              'content-type': 'application/json'
            }
          })
          console.log(res)
          if(res.ok){
            console.log("Yeai!")
          }else{
            console.log("Oops! Something is wrong.")
          }
        } catch (error) {
            console.log(error)
        }
        setName('')
        setTel('')
        setEmail('')
        setPassword('')
      }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <form onSubmit={handleSubmit} className="bg-white px-4 py-5 max-w-[1000px] space-y-5 my-20 flex flex-col items-center">
                <div className="font-bold text-red-500 font-family: 'Roboto'">REGIS<span className="font-bold text-black font-family: 'Roboto'">TER</span></div>
                
                <TextField 
                    fullWidth 
                    name="name" 
                    label="Name" 
                    sx={{ width: '25ch' }}
                    onChange={e => setName(e.target.value)}
                />
                
                <TextField 
                    fullWidth 
                    name="tel" 
                    label="Tel" 
                    sx={{ width: '25ch' }}
                    onChange={e=> setTel(e.target.value)}
                />
                
                <TextField 
                    fullWidth 
                    name="email" 
                    label="Email" 
                    sx={{ width: '25ch' }}
                    onChange={e=> setEmail(e.target.value)}
                />
                
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormControl>
                
                <div>
                <button type="submit" name="register" className="text-white text-sm bg-black hover:bg-red-500 w-[200px] py-2" >
                    Register
                </button>
                </div>
            </form>
        </main>
    )
}
