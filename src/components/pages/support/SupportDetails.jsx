import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// Components
import AddButton from '../../common/Button/AddButton'
import SupportTable from './SupportTable'
import SelectAble from '../../common/SelectAble';
import SupportTicketMessage from './SupportTicketMessage';
import SupportCustomerMessage from './SupportCustomerMessage';

// SVGs
// import { ReactComponent as ArrowDown } from '../../../assets/icons/Arrow-Down.svg';


const SupportDetails = () => {
    const [stage, setStage] = useState('list');
    const history = useHistory()
    const handleButton = () => {
        history.push('/dashboard/addticket')
    }
    return (
        <div>
            {stage === 'list' && (
                <>
                    <div className="w-full flex justify-between items-center mb-4">
                        <div className="">
                            <AddButton title="add ticket" handleButton={handleButton} />
                        </div>
                        <SelectAble header={'sort by'} title={'this is a test'} className={'min-w-[260px]'} />
                    </div>
                    <SupportTable changeState={() => setStage('message')} />
                </>
            )}
            {stage === 'message' && (
                <>
                    <div className="w-full flex items-start mb-4 gap-x-4">
                        <div className="border border-stroke-30 rounded-[20px] flex w-full grow">
                            <div className="w-full flex justify-between py-7 px-6">
                                <div className="flex flex-col items-center justify-center w-1/5 border-r-2 border-stroke-20 ">
                                    <p className='text-text-20 font-medium text-base'>ticket number</p>
                                    <hr className='border-2 border-stroke-30 w-3/4 my-3' />
                                    <p className='text-primary-20 font-medium text-base'>#820fdf8</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/5  border-r-2 border-stroke-20">
                                    <p className='text-text-20 font-medium text-base'>Unit</p>
                                    <hr className='border-2 border-stroke-30 w-3/4 my-3' />
                                    <p className='text-primary-20 font-semibold text-base'>Tech</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-2/5  border-r-2 border-stroke-20">
                                    <p className='text-text-20 font-medium text-base'>subject</p>
                                    <hr className='border-2 border-stroke-30 w-3/4 my-3' />
                                    <p className='text-primary-20 font-medium text-base'>this is a test subject!</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-1/5">
                                    <p className='text-text-20 font-medium text-base'>state</p>
                                    <hr className='border-2 border-stroke-30 w-3/4 my-3' />
                                    <p className='rounded-[46px] text-tertiary-70 font-medium text-base bg-tertiary-1 px-4 py-2'>open</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <AddButton className={'min-w-[270px] justify-center'} title="add a new answer" handleButton={handleButton} />
                        </div>
                    </div>
                    <SupportTicketMessage />
                    <div className="mt-[50px]">
                        <SupportCustomerMessage />
                    </div>

                </>
            )}

        </div>
    )
}

export default SupportDetails;