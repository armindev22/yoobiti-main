import React from 'react'
// import { ReactComponent as Project } from 'react';
import ProjectIcon from '../../../assets/dashboard/temp-card.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right-white.svg';
import { ReactComponent as ShowIcon } from '../../../assets/icons/Show.svg';


const TempCard = () => {
    const data = [
        { name: 'shop template 1', image: ProjectIcon, color: "#B7A92D", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "waiting", key: 'project1' },
        { name: 'shop template 2', image: ProjectIcon, color: "#B7A92D", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "done", key: 'project1' },
        { name: 'shop template 3', image: ProjectIcon, color: "#B7A92D", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "waiting", key: 'project1' },
        { name: 'shop template 4', image: ProjectIcon, color: "#B7A92D", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "done", key: 'project1' },
        { name: 'shop template 5', image: ProjectIcon, color: "#FF4444", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "done", key: 'project1' },
        { name: 'shop template 6', image: ProjectIcon, color: "#FF4444", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "waiting", key: 'project1' },
    ];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,310px)] 3xl:grid-cols-[repeat(auto-fit,350px)] gap-4 md:gap-8">
                {data.map((item, index) => {
                    return (

                        <div
                            className="col-span-1 flex flex-col  md:rounded-xl cursor-pointer items-stretch"
                            key={index}
                        >
                            <div className="w-full h-[226px] flex justify-center  dashboard-blue-gradient relative">
                                <div className="absolute inset-0">
                                    <img
                                        src={item.image}
                                        alt="circle_banner"
                                        width={284}
                                        className="w-full object-cover rounded-t-xl"
                                    />
                                    <div className="flex justify-between items-center -mt-4">
                                        <p className='text-primary-20 text-sm font-normal'>{item.name}</p>
                                        <div className="border border-stroke-30 rounded flex items-center gap-x-3 px-4 py-2">
                                            <ShowIcon className='text-primary-5' />
                                            <p className='text-primary-5 text-xs font-normal'>Live preview</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col h-full md:pb-4 px-4 py-2">
                                <div className="mt-[15px]">
                                    <p className='text-primary-20 text-sm font-normal'>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TempCard