// import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// SVGs
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right-white.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as InfoIcon } from '../assets/icons/Info-Circle.svg';
import { ReactComponent as QuestionIcon } from '../assets/icons/Qustion-Circle.svg';


const PaymentState = () => {
    const history = useHistory();

    return (
        <div className='w-full px-40 mt-[100px]'>
            <div
                onClick={() => {
                    history.push('/dashboard/payment')
                }}
                className="flex items-center gap-x-3 cursor-pointer">
                <div className="bg-surface-20 w-[41px] h-[41px] flex justify-center items-center rounded-[5px]">
                    <ArrowRightIcon className="text-text-30 rotate-180" />
                </div>
                <p className="text-black text-h7 capitalize font-medium">payment state</p>
            </div>
            <div className='bg-error-20 rounded-10 flex items-center justify-between py-4 px-3 mt-[50px]'>
                <div className="flex items-center gap-x-2 ">
                    <InfoIcon className='text-error-10' />
                    <p className='text-error-10 text-h7 font-medium'>Payment failed!</p>
                </div>

            </div>
            <div className="my-[20px]">
                <p className='text-text-20 capitalize text-h8 font-medium'>If an amount has been deducted from your account, it will be returned to your account within 24 hours.</p>
            </div>
            <div className='bg-white rounded-10 flex items-center justify-between py-2 px-3' style={{
                boxShadow: ' 0px 0px 30px 0px rgba(0, 0, 0, 0.07)'
            }}>
                <div className="flex items-center gap-x-2">
                    <div className="w-1 h-[50px] bg-tertiary-40 rounded-lg"></div>
                    <QuestionIcon className='text-tertiary-40' />
                    <div className="flex flex-col">
                        <p className='text-text-30 text-h8 font-medium'>Order cancellation notice!</p>
                        <p className='text-text-40 text-bae font-normal'>Your order will be pending for the next 24 hours, after which it will be automatically cancelled.</p>
                    </div>
                </div>
                <div className="">
                    <CloseIcon className='text-text-20' />
                </div>
            </div>
            <div className="border border-stroke-30 rounded-[20px] bg-white p-[20px] mt-[50px]">
                <div>
                    <p className='text-h8 font-medium text-primary-20 capitalize'>order detail</p>
                    <hr className="border border-stroke-30 w-[200px] my-3" />
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="">
                        <p className='text-text-20 font-medium text-h9'>Issue Tracking</p>
                        <p className='text-primary-20 font-medium text-h9'> _ </p>
                    </div>
                    <div className="">
                        <p className='text-text-20 font-medium text-h9'>date</p>
                        <p className='text-primary-20 font-medium text-h9'>2023/10/12</p>
                    </div>
                </div>
                <div className="">

                </div>
            </div>

            <div className="mt-[50px] flex items-center gap-x-4">
                <button className='max-w-[175px] w-full bg-primary-5 rounded-10 text-white  h-14'>pay again</button>
                <button className='max-w-[115px] w-full text-primary-5 border-2 border-primary-5 rounded-10 h-14'>back</button>
            </div>
        </div>
    )
}

export default PaymentState;