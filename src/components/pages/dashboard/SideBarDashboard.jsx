import React, { useState } from 'react'
import { useHistory, } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Components
import useQuery from '../../../route/useQuery';

// SVGs
import { ReactComponent as UserImage } from '../../../assets/dashboard/user-img.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/Edit.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/icons/Logout.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';
import { ReactComponent as RotateIcon } from '../../../assets/icons/Rotate Left.svg';
import { ReactComponent as TrashIcon } from '../../../assets/icons/Trash Bin.svg';

const SideBarDashboard = ({ data }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const queryParams = useQuery();
    const history = useHistory();


    return (
        <>
            <div className="w-full h-full bg-white dashboard-boxshadow py-10 px-3 rounded-[20px]">
                <div className="flex flex-col items-center ">
                    <div className="relative">
                        <UserImage />
                        <div
                            onClick={handleShow}
                            style={{ boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.10)' }}
                            className="absolute -right-3 bottom-3 bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center">
                            <EditIcon className="text-primary-20 cursor-pointer" />

                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose} centered className='my-modal'>
                        <Modal.Header className='border-none'>
                            <div className="flex justify-between items-center w-full">
                                <p>Change Profile</p>
                                <CloseIcon onClick={handleClose} className='text-error-10 cursor-pointer' />
                            </div>
                        </Modal.Header>
                        <Modal.Body className='border-none'>
                            <div className='flex flex-col items-center'>
                                <p className='mb-2 text-primary-20 font-normal'>current image</p>
                                <UserImage />
                            </div>
                        </Modal.Body>
                        <Modal.Footer className='flex justify-center items-center gap-x-3'>
                            <button className='p-2 flex items-center gap-x-1 error-gradient rounded-[5px] text-white text-xs font-normal' onClick={handleClose}>
                                <TrashIcon className='text-white' />
                                delete
                            </button>
                            <button className='p-2 flex items-center gap-x-1 bg-primary-5 rounded-[5px] text-white text-xs font-normal' onClick={handleClose}>
                                <RotateIcon className='text-white' />
                                change photo
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <div className="">
                        <p className="text-xl font-medium text-primary-20 mt-3 capitalize">Sara Azimi</p>
                    </div>
                    <div className="dashboard-gradient-button w-full h-12 flex items-center justify-center gap-x-4 mt-6">
                        <PlusIcon className='text-white' />
                        <p className="text-white text-base font-normal">add project</p>
                    </div>
                    <hr className="border-2 border-surface-20 w-full my-[16px]" />
                    {data.map((item, index) => {
                        return (
                            <div
                                onClick={() => {
                                    history.push(`/dashboard?active_tab=${item.slug}`)
                                }}
                                className={`${queryParams.get("active_tab") === item.slug ? 'dashboard-blue-gradient' : 'rounded-10 border border-stroke-30'}  w-full h-12 flex justify-between items-center  mt-3 px-3 cursor-pointer`}>
                                <div className="flex items-center gap-x-3">
                                    {
                                        queryParams.get("active_tab") === item.slug ? (<>{item.imageSelected}</>) : (<>{item.image}</>)
                                    }
                                    <p className={`${queryParams.get("active_tab") === item.slug ? 'text-white' : 'text-primary-20'} text-base font-normal`}>{item.title}</p>
                                </div>
                                {item.hasRed && (
                                    <div className="w-[10px] h-[10px] error-gradient rounded-full"></div>
                                )}
                            </div>
                        )
                    })}
                    <hr className="border-2 border-surface-20 w-full my-[16px]" />
                    <div className="w-full bg-error-20 rounded-10 flex justify-center items-center h-12 gap-x-2">
                        <LogoutIcon className="text-error-10" />
                        <p className="text-error-10 text-base font-medium">Logout</p>
                    </div>
                </div>


            </div>

        </>
    )
}

export default SideBarDashboard