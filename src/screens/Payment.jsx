// import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import InputIcon from '../components/common/Inputes/InputIcon';
// SVGs
import MasterCard from "../assets/icons/master.png";
// import GiftCard from '../assets/icons/Gift.svg';
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right-white.svg";
import { ReactComponent as EditIcon } from "../assets/icons/Edit.svg";
import { ReactComponent as VisaIcon } from "../assets/icons/visa.svg";
import { ReactComponent as PaymentIcon } from "../assets/icons/payment.svg";
import { ReactComponent as Sepa } from "../assets/icons/sepa-2 1.svg";
import { ReactComponent as GiftCard } from "../assets/icons/Gift.svg";


const Payment = () => {
    const history = useHistory();

    return (
        <div className='w-full px-40 mt-[100px]'>
            <div
                onClick={() => {
                    history.push('/dashboard?active_tab=billing')
                }}
                className="flex items-center gap-x-3 cursor-pointer">
                <div className="bg-surface-20 w-[41px] h-[41px] flex justify-center items-center rounded-[5px]">
                    <ArrowRightIcon className="text-text-30 rotate-180" />
                </div>
                <p className="text-black text-h7 capitalize font-medium">payment</p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-[100px]">
                <div className="col-span-1">
                    <div className="boxshadow-payment bg-white rounded-[20px] py-[20px] px-[30px]">
                        <div className="flex justify-between w-full ">
                            <p className='text-h8 font-medium'>address</p>
                            <div className='bg-primary-10 rounded-[5px] p-2' >
                                <EditIcon className='text-primary-5' />
                            </div>
                        </div>
                        <div className="">
                            <p className='text-primary-5 capitalize font-normal text-h8'>sara azimi</p>
                            <hr className="border-2 border-stroke-10 w-1/2" />
                            <p className='text-primary-20 capitalize font-normal text-h8'>24 FINISH LINE LN</p>
                            <hr className="border-2 border-stroke-10 w-1/2 " />
                            <p className='text-primary-20 capitalize font-normal text-h8'>HOUMA, LA 70360-2486</p>
                        </div>
                    </div>
                    <div className="boxshadow-payment bg-white rounded-[20px] py-[20px] px-[30px] mt-6">
                        <div className="flex justify-between w-full ">
                            <p className='text-h8 font-medium'>Payment Method</p>
                            <div className="flex items-center gap-x-3">
                                <div className='bg-primary-10 rounded-[5px] p-2 flex items-center' >
                                    <VisaIcon />
                                    <hr className="border border-stroke-30 w-6 rotate-90" />
                                    <img src={MasterCard} alt='master-card' />
                                </div>
                                <Sepa />
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="bg-surface-20 rounded-[5px] py-3 px-4 flex justify-between items-center">
                                <div className="flex items-center gap-x-2">
                                    <PaymentIcon className='text-text-20' />
                                    <p className='text-text-20 text-h9 font-normal'> card number </p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <p className='text-text-20 text-h9 font-normal'> MM/YY </p>
                                    <p className='text-text-20 text-h9 font-normal'> CVC </p>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between w-full my-[20px]">
                            <p className='text-h8 font-medium'>billing info</p>
                            <div className="flex items-center gap-x-3">
                                <div >
                                    <p className='text-h10 text-black font-medium'>personal</p>
                                </div>
                                <div className='bg-primary-10 rounded-[28px] px-3 flex items-center' >
                                    <p className='text-h10 text-black font-medium'>company</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <div className="bg-surface-20 rounded-[5px] py-3 px-4 flex justify-between items-center grow">
                                <div className="flex items-center gap-x-2">
                                    <p className='text-text-20 text-h9 font-normal'> card number </p>
                                </div>
                            </div>
                            <div className="bg-surface-20 rounded-[5px] py-3 px-4 flex justify-between items-center grow">
                                <div className="flex items-center gap-x-2">
                                    <p className='text-text-20 text-h9 font-normal'> VAT ID </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full">
                        <div className="flex justify-between w-full my-[20px]">
                            <p className='text-h5 font-semibold text-primary-20 capitalize'>Order Summary</p>
                        </div>
                        <div className="flex justify-between w-full my-[20px]">
                            <p className='text-text-20 capitalize font-normal text-h8'>Main license. Essential.</p>
                            <p className='text-primary-20 capitalize font-normal text-h8'>40 <span className='text-text-20'>$</span></p>
                        </div>
                        <div className="flex justify-between w-full my-[20px]">
                            <p className='text-text-20 capitalize font-normal text-h8'>Due now (net.)</p>
                            <p className='text-primary-20 capitalize font-normal text-h8'>14.70 <span className='text-text-20'>$</span></p>
                        </div>
                        <hr className="border border-stroke-30 w-full my-[20px]" />
                        <div className="flex justify-between w-full">
                            <p className='text-primary-20 capitalize font-normal text-h8'>total</p>
                            <p className='text-primary-20 capitalize font-normal text-h8'>54.70 <span className='text-text-20'>$</span></p>
                        </div>
                        <div className="flex justify-between w-full my-[20px]">
                            <p className='text-h7 font-semibold text-primary-20 capitalize'>Do you have a gift code?</p>
                        </div>
                        <div className="flex  w-full my-[20px] gap-x-4">
                            <InputIcon placeholder={'enter code ...'} ImageIcon={GiftCard} />
                            {/* <div className="flex items-center border border-stroke-40 rounded-[5px] w-full flex-1 grow px-3">
                                <GiftCard className='text-text-20' />
                                <hr className="border border-stroke-30 w-6 rotate-90" />
                                <input type="text" className='border-none bg-transparent placeholder:text-text-20' placeholder='enter code ...' />
                            </div> */}
                            <div className="flex grow-0">
                                <button className='bg-secondary-10 max-w-[170px] w-full  rounded-[5px] text-white px-4 py-[10px]'>apply</button>
                            </div>
                        </div>
                        <hr className="border border-stroke-30 w-full " />
                        <div className="">
                            <p className='text-text-20 font-normal text-h9'>By placing your order, you agree to yoobiti’s <span className='text-primary-5'>privacy notice </span>and <span className='text-primary-5 capitalize'>conditions of use.</span></p>
                        </div>
                        <div className="flex items-center gap-x-3 mt-[20px]">
                            <div className="flex justify-center grow-0 bg-error-10 rounded-10 py-3 max-w-[210px] w-full">
                                <button className=' text-white text-h9 font-medium  text-center'>cancel</button>
                            </div>
                            <div
                                onClick={() => {
                                    history.push('/dashboard/paymentstate')
                                }}
                                className="flex justify-center items-center rounded-10 w-full flex-1 grow px-3 py-3  bg-primary-5 ">
                                <ArrowRightIcon className='text-white' />
                                <button className='text-white text-h9 font-medium'>pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment