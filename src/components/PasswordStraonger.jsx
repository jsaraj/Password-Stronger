

import React from 'react'

export default function PasswordStraonger() {
    return (
        <div className='bg-gray-200 mx-auto my-20 w-4/12 rounded-md p-5'>
            <div className='flex justify-center pb-8'>
                <h2 className='text-2xl  text-center w-8/12'>Enter Your Password</h2>
            </div>
            <div>
                <input type='text' className='w-full p-2 focus:outline-none shadow-sm rounded-md mb-8'></input>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-500">
                    <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{width: "45%"}}></div>
                </div>
                <p className='text-center'>Strong</p>
            </div>
        </div>

    )
}
