import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// Components
import AddButton from '../../common/Button/AddButton';
// SVGs
import { ReactComponent as EditIcon } from "../../../assets/icons/Edit.svg";


const AddressDetails = () => {
    const history = useHistory()
    const handleButton = () => {
        history.push('/dashboard/addaddress')
    }
    return (
        <>
            <div className="w-full flex justify-between items-center mb-4">
                <div className="">
                    <AddButton title="add address" handleButton={handleButton} />
                </div>
            </div>

            <div className=" bg-white rounded-[20px] py-3 px-6" style={{
                boxShadow: ' 0px 0px 50px 0px rgba(0, 0, 0, 0.05)'
            }}>
                <p className='text-primary-20 text-h7 capitalize font-medium'>my address</p>
                <hr className="border-2 border-surface-20 w-full my-3" />
                <div className="grid grid-cols-3 gap-4">
                    {[1, 1,].map((item, index) => {
                        return (
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

                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default AddressDetails