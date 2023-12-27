import React from 'react'
// import { ReactComponent as Project } from 'react';
import ProjectIcon from '../../../assets/dashboard/project-1.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right-white.svg';

const MyProjectCard = () => {
    const data = [
        { name: 'project1', image: ProjectIcon, color: "#B7A92D", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "waiting", key: 'project1' },
        { name: 'project1', image: ProjectIcon, color: "#B7A92D", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "done", key: 'project1' },
        { name: 'project1', image: ProjectIcon, color: "#B7A92D", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "waiting", key: 'project1' },
        { name: 'project1', image: ProjectIcon, color: "#B7A92D", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "done", key: 'project1' },
        { name: 'project1', image: ProjectIcon, color: "#FF4444", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "done", key: 'project1' },
        { name: 'project1', image: ProjectIcon, color: "#FF4444", type: 'shop plan', plan: 'advance', url: 'testshop.yoobiti.me', status: "waiting", key: 'project1' },
    ];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,310px)] 3xl:grid-cols-[repeat(auto-fit,350px)] justify-center gap-4 md:gap-6">

                {data.map((item, index) => {
                    return (

                        <div
                            className="col-span-1 flex flex-col  md:rounded-xl cursor-pointer items-stretch"
                            key={index}
                            style={{
                                boxShadow: ' 0px 0px 50px 0px rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            <div className="w-full flex justify-center relative dashboard-blue-gradient">
                                <img
                                    src={item.image}
                                    alt="circle_banner"
                                    width={284}
                                    className="h-[180px] w-full object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="flex flex-col h-full md:pb-4 px-4 py-2">
                                <div className="mt-[15px]">
                                    <p className='text-primary-20 text-sm font-normal'>{item.name}</p>
                                </div>
                                <hr className="border-2 border-stroke-30 w-full my-3" />
                                <div className='flex justify-between items-center'>
                                    <p className='text-primary-5 text-xs font-normal capitalize'>{item.type}</p>
                                    <div className="flex items-center gap-2">
                                        <div
                                            style={{ backgroundColor: item.color }}
                                            className="w-2.5 h-2.5 rounded-full"
                                        ></div>
                                        <p className='text-sm font-medium capitalize text-black whitespace-pre-wrap'>
                                            {item.plan}
                                        </p>
                                    </div>
                                </div>
                                <hr className="border-2 border-stroke-30 w-full my-3" />
                                <div className="flex justify-between items-center">
                                    <p className='text-text-20 font-normal text-xs capitalize'>{item.url}</p>
                                    <ArrowRightIcon className='text-primary-5' />
                                </div>
                                <hr className="border-2 border-stroke-30 w-full my-3" />
                                {item.status === 'waiting' ? (<>
                                    <div className="">
                                        <p className='text-center py-2 text-sm font-medium text-tertiary-60 bg-tertiary-50 rounded-full whitespace-pre-wrap '>
                                            waiting...
                                        </p>
                                    </div>
                                </>) : (<>
                                    <div className="">
                                        <p className='text-center py-2 text-sm font-medium text-white  rounded-full whitespace-pre-wrap dashboard-blue-gradient'>
                                            go to management panel
                                        </p>
                                    </div>
                                </>)}

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MyProjectCard