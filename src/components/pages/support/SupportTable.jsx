import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const SupportTable = ({ changeState }) => {
    const data = [
        { name: 'support', type: '#project 1', plan: 'Order not registered', color: "#B7A92D", hasMessage: true, state: "open", updateDate: "2023/10/12", key: 'support' },
        { name: 'support', type: '#project 1', plan: 'Order not registered', color: "#FF4444", hasMessage: false, state: "close", updateDate: "2023/10/12", key: 'support' },
    ];
    const [headerEvenetTable] = useState([
        { name: 'unit', key: 'unit' },
        { name: 'project', key: 'projectName' },
        { name: 'subject', key: 'subject' },
        { name: 'state', key: 'state' },
        { name: 'update date', key: 'update date' },
    ]);
    const history = useHistory();

    return (
        <div className=" bg-white rounded-[20px] py-3 px-6" style={{
            boxShadow: ' 0px 0px 50px 0px rgba(0, 0, 0, 0.05)'
        }}>
            <p className='text-primary-20 text-h7 capitalize font-medium'>my ticket</p>
            <hr className="border-2 border-surface-20 w-full my-3" />
            <div className="grid grid-cols-7 gap-4">
                {/* Header */}
                {headerEvenetTable.map((item, index) => (
                    <div key={index} className={`${index === 2 ? 'col-span-2' : ''}`}>
                        <p className='text-text-20 text-h8 font-normal'>{item.name}</p>
                    </div>
                ))}
            </div>
            {/* Data Rows */}
            {data.map((item, index) => (
                <div
                    className='bg-white rounded-10 grid grid-cols-7 gap-4 items-center mb-2 px-2 mt-3'
                    style={{
                        boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.06)'
                    }}
                    key={index}>
                    <div className="text-h8 font-normal capitalize text-primary-20">
                        {item.name}
                    </div>
                    <div className="">
                        <p className='py-1 text-sm font-medium text-primary-5  rounded-full whitespace-pre-wrap'>
                            {item.type}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                        <p className='py-4 text-h8 font-normal capitalize text-primary-20 whitespace-pre-wrap'>
                            {item.plan}
                        </p>
                    </div>
                    {/* <div className="">
                        <p className='text-h8 font-normal capitalize text-primary-20'>
                            {item.price}
                        </p>
                    </div> */}
                    <div className="">
                        <p className={`capitalize  py-1 text-sm font-medium ${item.state === 'close' ? ' text-error-10' : ' text-tertiary-70'}  rounded-full whitespace-pre-wrap`}>
                            {item.state}
                        </p>
                    </div>
                    <div className="">
                        <p className={`capitalize  py-1 text-sm font-medium ${item.state === 'close' ? ' text-error-10' : ' text-tertiary-70'}  rounded-full whitespace-pre-wrap`}>
                            {item.updateDate}
                        </p>
                    </div>
                    {item.hasMessage && (
                        <div
                            onClick={() => changeState()}
                            className="cursor-pointer">
                            <p className='text-center p-2 text-sm font-medium text-error-10 bg-error-20 rounded-[46px]  whitespace-pre-wrap '>
                                new message!
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>


    )
}

export default SupportTable;