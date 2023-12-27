import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const DashboardBillTable = () => {
    const data = [
        { name: 'project1', type: 'shop plan', plan: 'advance', color: "#B7A92D", price: "$67.89", state: "unpaid", key: 'project1' },
        { name: 'project1', type: 'shop plan', plan: 'advance', color: "#FF4444", price: "$67.89", state: "paid", key: 'project1' },
        { name: 'project1', type: 'shop plan', plan: 'advance', color: "#FF4444", price: "$67.89", state: "paid", key: 'project1' },
        { name: 'project1', type: 'shop plan', plan: 'advance', color: "#FF4444", price: "$67.89", state: "unpaid", key: 'project1' },
        { name: 'project1', type: 'shop plan', plan: 'advance', color: "#FF4444", price: "$67.89", state: "paid", key: 'project1' },
        { name: 'project1', type: 'shop plan', plan: 'advance', color: "#FF4444", price: "$67.89", state: "unpaid", key: 'project1' },
    ];
    const [headerEvenetTable] = useState([
        { name: 'project name', key: 'projectName' },
        { name: 'type', key: 'type' },
        { name: 'plan', key: 'plan' },
        { name: 'price', key: 'price' },
        { name: 'state', key: 'state' },
    ]);
    const history = useHistory();

    return (
        <div className=" bg-white rounded-[20px] py-3 px-6" style={{
            boxShadow: ' 0px 0px 50px 0px rgba(0, 0, 0, 0.05)'
        }}>
            <p className='text-primary-20 text-h7 capitalize font-medium'>Latest Bills</p>
            <hr className="border-2 border-surface-20 w-full my-3" />
            <div className="grid grid-cols-6 gap-4">
                {/* Header */}
                {headerEvenetTable.map((item, index) => (
                    <div key={index} className="">
                        <p className='text-text-20 text-h8 font-normal'>{item.name}</p>
                    </div>
                ))}
            </div>
            {/* Data Rows */}
            {data.map((item, index) => (
                <div
                    className='bg-white rounded-10 grid grid-cols-6 gap-4 items-center mb-2 px-2 mt-3'
                    style={{
                        boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.06)'
                    }}
                    key={index}>
                    <div className="text-h8 font-normal capitalize text-primary-20">
                        {item.name}
                    </div>
                    <div className="max-w-[140px]">
                        <p className='text-center  py-1 text-sm font-medium text-primary-5 bg-primary-10 rounded-full whitespace-pre-wrap'>
                            {item.type}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            style={{ backgroundColor: item.color }}
                            className="w-2.5 h-2.5 rounded-full"
                        ></div>
                        <p className='py-4 text-sm font-medium capitalize text-black whitespace-pre-wrap'>
                            {item.plan}
                        </p>
                    </div>
                    <div className="">
                        <p className='text-h8 font-normal capitalize text-primary-20'>
                            {item.price}
                        </p>
                    </div>
                    <div className="max-w-[120px]">
                        <p className={`capitalize text-center  py-1 text-sm font-medium ${item.state === 'unpaid' ? 'bg-error-20 text-error-10' : 'bg-tertiary-80 text-tertiary-70'}  rounded-full whitespace-pre-wrap`}>
                            {item.state}
                        </p>
                    </div>
                    {item.state === 'unpaid' && (
                        <div
                            onClick={() => {
                                history.push('/dashboard/payment')
                            }}
                            className="px-2 max-w-[120px] cursor-pointer">
                            <p className='text-center py-2 text-sm font-medium text-white bg-tertiary-70 rounded-10  whitespace-pre-wrap '>
                                pay now
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>


    )
}

export default DashboardBillTable;