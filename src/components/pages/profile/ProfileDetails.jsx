import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Components
import InputIcon from '../../common/Inputes/InputIcon';
// SVGs
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/User.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-right-white.svg";
import { ReactComponent as InfoIcon } from '../../../assets/icons/Info-Circle.svg';
import { ReactComponent as KeyIcon } from '../../../assets/icons/Key.svg';
import { ReactComponent as TickIcon } from '../../../assets/icons/Tick.svg';


const ProfileDetails = () => {
    const history = useHistory();

    return (
        <div>
            <div className=" bg-white rounded-[20px] py-3 px-6" style={{
                boxShadow: ' 0px 0px 50px 0px rgba(0, 0, 0, 0.05)'
            }}>
                <p className='text-primary-20 text-h7 capitalize font-medium'>my address</p>
                <hr className="border-2 border-surface-20 w-full my-3" />
                {/* <InputIcon ImageIcon={UserIcon} titleInput={'full name'} placeholder={'sara azimi'} iconClass={'text-text-40'} /> */}
                <div className="flex items-center gap-x-6">
                    <InputIcon ImageIcon={UserIcon} titleInput={'first name'} placeholder={'sara'} />
                    <InputIcon ImageIcon={UserIcon} titleInput={'last name'} placeholder={'azimi'} />
                </div>
                <div className="flex items-end gap-x-3 mt-8">
                    <InputIcon ImageIcon={CloseIcon} iconClass={'text-error-10'} titleInput={'Email'} placeholder={'saraazimi@gmail.com'} />
                    <button
                        onClick={() => {
                            history.push('/dashboard/choosetemp')
                        }}
                        className="max-w-[150px] w-full  flex justify-center items-center text-white bg-tertiary-70 rounded-10 h-12 text-base font-normal gap-x-2">
                        <ArrowRight className="text-white" />
                        confirm
                    </button>
                </div>
                <div className="mt-[32px]">
                    <div className='bg-white rounded-10 flex items-center justify-between py-2 px-3' style={{
                        boxShadow: ' 0px 0px 30px 0px rgba(0, 0, 0, 0.07)'
                    }}>
                        <div className="flex items-center gap-x-2">
                            <div className="w-1 h-[50px] bg-error-10 rounded-lg"></div>
                            <InfoIcon className='text-error-10' />
                            <div className="flex flex-col">
                                <p className='text-text-30 text-h8 font-medium'>confirm email!</p>
                                <p className='text-text-40 text-bae font-normal'>Confirm your email.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white rounded-[20px] py-3 px-6" style={{
                boxShadow: ' 0px 0px 50px 0px rgba(0, 0, 0, 0.05)'
            }}>
                <p className='text-primary-20 text-h7 capitalize font-medium'>change password</p>
                <hr className="border-2 border-surface-20 w-full my-3" />
                {/* <InputIcon ImageIcon={UserIcon} titleInput={'full name'} placeholder={'sara azimi'} iconClass={'text-text-40'} /> */}

                <InputIcon ImageIcon={KeyIcon} iconClass={'text-text-40'} titleInput={'old password'} placeholder={'********'} />
                <div className="flex items-center gap-x-5 mt-8">
                    <InputIcon ImageIcon={KeyIcon} iconClass={'text-text-40'} titleInput={'new password'} placeholder={'enter a new password...'} />
                    <InputIcon ImageIcon={KeyIcon} iconClass={'text-text-40'} titleInput={'new confirm passwrd'} placeholder={'re-enter a new password...'} />
                </div>

                <div className="flex items-center gap-x-5 mt-8">
                    <button
                        // onClick={() => {
                        //     history.push('/dashboard/choosetemp')
                        // }}
                        className="max-w-[230px] w-full mt-[20px] flex justify-center items-center text-white bg-primary-5 rounded-10 h-12 text-base font-normal gap-x-2">
                        <TickIcon className="text-white" />
                        save change
                    </button>
                    <button
                        // onClick={() => {
                        //     history.push('/dashboard/choosetemp')
                        // }} 
                        className="max-w-[170px] mt-[20px] flex justify-center items-center text-white bg-text-20 rounded-10 w-full h-10 text-base font-normal">
                        cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails