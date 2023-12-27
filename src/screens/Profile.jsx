import React from 'react'

const Profile = () => {
    const tabbar = [
        {
            name: "post"
        },
        {
            name: "commnet"
        },
        {
            name: "friends"
        },
    ]
    return (
        <div className='px-32 bg-red-300'>
            <div className="flex items-center gap-x-5">
                {tabbar.map((tab, index) => {
                    return (
                        <p key={index}>{tab.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Profile;