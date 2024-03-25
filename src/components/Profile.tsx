import React from 'react';

export default function Profile() {
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
                    <p className="text-gray-700 text-xl">Moss Rudyang</p>
                </div>
            
                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4">
                    <p className="text-gray-700 text-medium">Email</p>
                    <p className="text-gray-700 text-xl">MossRud@email.com</p>
                </div>
            
                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4">
                    <p className="text-gray-700 text-medium">TEL</p>
                    <p className="text-gray-700 text-xl">091-XXX-XXX</p>
                </div>

                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4">
                    <p className="text-gray-700 text-medium">ROLE</p>
                    <p className="text-gray-700 text-xl">USER</p>
                </div>

            </div>
        </main>
    );
}
