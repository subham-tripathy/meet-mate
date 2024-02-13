import React from 'react'

const HeroSection = () => {
    return (
        <div className='m-10 mx-16 w-[50%]'>
            <div className='mb-16'>
                <h1 className='text-5xl font-semibold mb-3 leading-tight'>
                    Premium Quality
                    <br />
                    Meetings/Video Conferencing
                </h1>
                <p>We have designed the best platform to have a great experience of quality video conferencing.</p>
            </div>

            <button className='font-semibold text-white text-shadow-sm rounded px-3 py-1.5 bg-orange-500 dark:bg-red-500'>New Meeting</button>
        </div>
    )
}

export default HeroSection