import React from 'react'

// SVGs
import SupportIcon1 from '../../../assets/support/support-2.svg';

const SupportCustomerMessage = () => {
    return (
        <div className='w-full flex flex-row-reverse items-center gap-x-4'>
            <div className="flex flex-col items-center">
                <img src={SupportIcon1} alt='user' />
                <p className='text-primary-20 text-h9 font-medium my-4'>Jane Cooper</p>
                <p className='rounded-[46px] text-primary-5 font-medium text-base bg-primary-10 px-4 py-2'>customer</p>
            </div>
            <div className="">
                <div className="dashboard-gradient-button px-[20px] py-[10px]"
                    style={{
                        borderRadius: "20px 0px 20px 20px",
                        boxShadow: ' 0px 0px 50px 0px rgba(0, 0, 0, 0.05)'

                    }}
                >
                    <p className='text-text-50 text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna.</p>
                </div>
                <div className="flex justify-start mt-[10px]">
                    <p className='text-primary-20 text-h11 font-medium '>2023/10/12 | 10:32</p>
                </div>
            </div>
        </div>
    )
}

export default SupportCustomerMessage