import React from 'react';

export default function Profile() {
    return (
        <main className="w-[100%] flex flex-col bg-white">
            <div className="text-4xl font-light text-neutral-400 font-family: 'Roboto' pr-4">YOUR</div>
            <div className="text-4xl font-bold text-black font-family: 'Roboto'  pr-4">PROFILE</div>
            <div className="flex justify-center w-10/12 mx-auto">
                <div className="border-b border-gray-300 w-full"></div> {/* Small and thin line */}
            </div>
            
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="bg-gray-100 p-4 w-10/12 mx-auto mb-4">
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
            
            </div>
        </main>

    );
}