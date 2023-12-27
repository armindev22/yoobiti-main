import React from 'react'


// SVGs
import { ReactComponent as InfoIcon } from '../../../assets/icons/Info-Circle.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right-white.svg';
import DashboardTable from './DashboardTable';
import DashboardBillTable from './DashboardBillTable';

const DashboardDetails = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='bg-white rounded-10 flex items-center justify-between py-2 px-3' style={{
                boxShadow: ' 0px 0px 30px 0px rgba(0, 0, 0, 0.07)'
            }}>
                <div className="flex items-center gap-x-2">
                    <div className="w-1 h-[50px] bg-tertiary-10 rounded-lg"></div>
                    <InfoIcon className='text-tertiary-10' />
                    <div className="flex flex-col">
                        <p className='text-text-30 text-h8 font-medium'>titleYou have a new message!</p>
                        <p className='text-text-40 text-bae font-normal'>Click and check unread messages.</p>
                    </div>
                </div>
                <div className="">
                    <ArrowRightIcon className='text-text-20' />
                </div>
            </div>
            <div className='bg-white rounded-10 flex items-center justify-between py-2 px-3' style={{
                boxShadow: ' 0px 0px 30px 0px rgba(0, 0, 0, 0.07)'
            }}>
                <div className="flex items-center gap-x-2">
                    <div className="w-1 h-[50px] bg-error-10 rounded-lg"></div>
                    <InfoIcon className='text-error-10' />
                    <div className="flex flex-col">
                        <p className='text-text-30 text-h8 font-medium'>You have an unpaid bill!</p>
                        <p className='text-text-40 text-bae font-normal'>Click and pay now.</p>
                    </div>
                </div>
                <div className="">
                    <ArrowRightIcon className='text-text-20' />
                </div>
            </div>
            <DashboardTable />
            <DashboardBillTable />
        </div>
    )
}

export default DashboardDetails