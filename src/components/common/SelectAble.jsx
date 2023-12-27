import React from 'react'

import { ReactComponent as ArrowDown } from '../../assets/icons/Arrow-Down.svg';


const SelectAble = ({ header, title, className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <p className='text-text-30 font-normal text-h9'>{header}</p>
            <div className={`mt-[15px] flex justify-between items-center  border border-stroke-40  rounded-[5px] px-4 py-2`}>
                <p className='text-primary-5 font-normal text-h10'>{title}</p>
                <ArrowDown className='text-text-40' />
            </div>
        </div>
    )
}

export default SelectAble