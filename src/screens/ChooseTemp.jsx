import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// Components
import TempCard from "../components/pages/myproject/TempCard";
// SVGs
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right-white.svg";
import { ReactComponent as ArrowRightIcon2 } from "../assets/icons/Arrow-Right-blue.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as InfoIcon } from '../assets/icons/Info-Circle.svg';
import { ReactComponent as PaperAdd } from '../assets/dashboard/Paper-Add.svg';


const ChooseTemp = () => {

    const history = useHistory();


    return (
        <div className='w-full px-40 mt-[100px]'>
            <div
                onClick={() => {
                    history.push('/dashboard/addproject')
                }}
                className="flex items-center gap-x-3 cursor-pointer">
                <div className="bg-surface-20 w-[41px] h-[41px] flex justify-center items-center rounded-[5px]">
                    <ArrowRightIcon className="text-text-30 rotate-180" />
                </div>
                <p className="text-black text-h7 capitalize font-medium">add project</p>
            </div>
            <main className="mt-11">
                <div className='bg-white rounded-10 flex items-center justify-between py-4 px-3' style={{
                    boxShadow: ' 0px 0px 30px 0px rgba(0, 0, 0, 0.07)'
                }}>
                    <div className="flex items-center gap-x-2">
                        <div className="w-1 h-[50px] bg-tertiary-10 rounded-lg"></div>
                        <InfoIcon className='text-tertiary-10' />
                        <div className="flex flex-col">
                            <p className='text-text-30 text-h8 font-medium'>change template!</p>
                            <p className='text-text-40 text-bae font-normal'>You can change the format at any time.</p>
                        </div>
                    </div>
                    <div className="">
                        <CloseIcon className='text-text-40' />
                    </div>
                </div>

                <div
                    onClick={() => {
                        history.push('/dashboard/choosename')
                    }}
                    className='bg-surface-20 rounded-10 flex items-center justify-between py-12 px-6 mt-11 cursor-pointer'>
                    <div className="flex items-center gap-x-5">
                        <div className="dashboard-blue-gradient p-2">
                            <PaperAdd className="text-white" />
                        </div>
                        <div

                            className="flex flex-col ">
                            <p className='text-primary-5 text-h6 font-semibold'>start from a blank page</p>
                            <p className='text-text-40 text-bae font-normal'>You start from an empty page to build your own structure</p>
                        </div>
                    </div>
                    <div className="">
                        <ArrowRightIcon2 className='text-secondary-10' />
                    </div>
                </div>

                <div className="">

                    <div className="w-full flex flex-col mt-11">
                        <p className='text-h3 font-bold gradient-text '>or Start with template!</p>
                        <p className='max-w-screen-md text-text-20 text-h7 font-normal lowercase mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="mt-[100px]">
                    <TempCard />
                </div>
            </main>
        </div>
    )
}

export default ChooseTemp;