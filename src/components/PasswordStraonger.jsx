

import React, { useState } from 'react'
import zxcvbn from 'zxcvbn';

export default function PasswordStraonger() {

    const [pass, setPass] = useState('');
    const res = zxcvbn(pass).score * 100 / 4;

    const progressColor = () => {
        switch (res) {
            case 25:
                return "#ff5722";
            case 50:
                return "#ffeb3b";
            case 75:
                return "#8bc34a";
            case 100:
                return "#4caf50";
            default:
                return "none"
        }
    }

    const progressTitle = () => {
        switch (res) {
            case 25:
                return "Very Weak";
            case 50:
                return "Weak";
            case 75:
                return "Strong";
            case 100:
                return "Very Strong";
            default:
                return "none"
        }
    }

    return (
        <div className='bg-gray-200 mx-auto my-20 w-4/12 rounded-md p-5'>
            <div className='flex justify-center pb-8'>
                <h2 className='text-2xl  text-center w-8/12'>Enter Your Password</h2>
            </div>
            <div>
                <input type='text' onChange={(e) => setPass(e.target.value)} className='w-full p-2 focus:outline-none shadow-sm rounded-md mb-8'></input>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-500">
                    <div className=" h-2.5 rounded-full" style={{ width: res + "%", background: progressColor() }}></div>
                </div>
                <p className='text-center' style={{ color: progressColor() }}>{progressTitle()}</p>
            </div>
        </div>

    )
}
