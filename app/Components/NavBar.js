import Link from 'next/link'
import React from 'react'
import DateTime from './DateTime'

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center py-2 px-10 pr-20 text-gray-500 font-semibold dark:text-gray-300'>
            <Link href={'/'}><h1 className='text-4xl hover:text-black w-max dark:hover:text-white'>Meet Mate</h1></Link>
            <div>
                <DateTime/>
            </div>
        </nav>
    )
}

export default NavBar