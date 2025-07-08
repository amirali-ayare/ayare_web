import React from 'react'
import Navbar from './Navbar'
import ProfilePicture from './ProfilePicture'

function ProfileSide() {
    return (
        <div className='bg-zinc-900 py-5 md:rounded-lg rounded-tr-lg rounded-tl-lg md:shadow-[-6px_9px_20px_0px_rgba(0,_0,_0,_0.60)] z-50'>
            <Navbar />
            <ProfilePicture />
        </div>
    )
}

export default ProfileSide