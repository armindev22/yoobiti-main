import React from 'react'

const InputIcon = ({ titleInput, placeholder, mainclassName, ImageIcon, iconClass }) => {
    return (
        <>
            {
                titleInput ? (
                    <div className='w-full ' >
                        <label htmlFor="input" className="text-text-30 text-base font-normal ">
                            {titleInput}
                        </label>
                        <div className={`flex items-center border border-stroke-40 rounded-[5px] h-11 w-full mt-2 px-3 ${mainclassName}`}>
                            <ImageIcon className={`${iconClass}`} />
                            {/* <img src={src} alt='icon' /> */}
                            {/* <GiftCard className='text-text-20' /> */}
                            <hr className="border border-stroke-30 w-6 rotate-90" />
                            <input type="text" className='border-none bg-transparent placeholder:text-text-20' placeholder={placeholder} />
                        </div>
                    </div >
                ) : (

                    <div className={`flex items-center border border-stroke-40 rounded-[5px] h-11 w-full mt-2 px-3 ${mainclassName}`}>
                        <ImageIcon className={`${iconClass}`} />
                        {/* <img src={src} alt='icon' /> */}
                        {/* <GiftCard className='text-text-20' /> */}
                        <hr className="border border-stroke-30 w-6 rotate-90" />
                        <input type="text" className='border-none bg-transparent placeholder:text-text-20' placeholder={placeholder} />
                    </div>

                )}
        </>

    )
}

export default InputIcon