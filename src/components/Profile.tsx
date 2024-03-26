"use client"



import React from 'react';
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth";
import { useSession } from 'next-auth/react';
import Link from 'next/link';



export default async function Profile() {
   
    const {data:session} = await useSession()
    console.log(session)

    if(!session|| !session.user.token){
        return (
            <main className='h-[70%] relative rounded-t-lg mx-5 my-5'>
                <div>
                    Please register.
                </div>
            </main>
        );
    }

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

   
    return (
        <main className="w-[100%] flex flex-col bg-white">
            <div className="text-5xl font-thin text-neutral-400 font-family: 'Roboto' pr-4 mt-8">YOUR</div>
            <div className="text-5xl font-bold text-black font-family: 'Roboto'  pr-4">PROFILE</div>
            <div className="flex justify-center w-10/12 mx-auto mt-8">
                <div className="border-b border-gray-300 w-full"></div> 
            </div>

            <div className="flex flex-col justify-center items-center h-screen">
                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4 mt-8">
                    <p className="text-gray-700 text-medium">Name</p>
                    <p className="text-gray-700 text-xl">{profile.data.name}</p>
                </div>
            
                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4">
                    <p className="text-gray-700 text-medium">Email</p>
                    <p className="text-gray-700 text-xl">{profile.data.email}</p>
                </div>
            
                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4">
                    <p className="text-gray-700 text-medium">TEL</p>
                    <p className="text-gray-700 text-xl">{profile.data.tel}</p>
                </div>

                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4">
                    <p className="text-gray-700 text-medium">ROLE</p>
                    <p className="text-gray-700 text-xl">{profile.data.role}</p>
                </div>

                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4">
                    <p className="text-gray-700 text-medium">Create At</p>
                    <p className="text-gray-700 text-xl">{createdAt.toString()}</p>
                </div>

              
            </div>
                
        </main>
    )
}
