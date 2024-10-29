'use client'
import React, { useState } from 'react'

const page = () => {
    const [status, setStatus] = useState(null)
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => ({ ...prev, [name]: value }));
    }
    const onSubmitVal = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message,
                })
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit the form');
            }
            if (response.status === 200) {
                setStatus({
                    username: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.log(error);
        }
        console.log(user);
    }
    console.log(status);
    

    return (
        <div className='w-full flex flex-col items-center'>
            <p className='text-4xl font-bold'>Fill the form</p>

            <form action="/" className='flex flex-col mt-10 px-4 py-6 border border-gray-300 rounded' onSubmit={onSubmitVal}>
                <label htmlFor={``}>Username :</label>
                <input type="text" name='username' className='outline-none border border-gray-300 px-2' onChange={handleChange} />

                <label htmlFor={``} className='mt-3'>Email :</label>
                <input type="email" name='email' className='outline-none border border-gray-300 px-2' onChange={handleChange} />

                <label htmlFor={``} className='mt-3'>Phone :</label>
                <input type="number" name='phone' className='outline-none border border-gray-300 px-2' onChange={handleChange} />

                <label htmlFor={``} className='mt-3'>Message :</label>
                <textarea name="message" id="" className='outline-none border border-gray-300 px-2' onChange={handleChange}></textarea>
                <div className="flex flex-col">
                    <p>{status === 'success' && "Thank you to message us"}</p>
                    <p>{status === 'error' && "Try again letter"}</p>
                </div>
                <button className='bg-blue-500 px-4 py-1 font-semibold rounded mt-5 text-white' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default page
