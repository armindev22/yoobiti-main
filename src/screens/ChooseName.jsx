import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// Components
import InputForm from "../components/common/Inputes/InputForm";
// SVGs
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right-white.svg";
import { ReactComponent as TickIcon } from "../assets/icons/Tick.svg";


const ChooseName = () => {

    const history = useHistory();


    return (
        <div className='w-full px-40 mt-[100px]'>
            <div
                onClick={() => {
                    history.push('/dashboard/choosetemp')
                }}
                className="flex items-center gap-x-3 cursor-pointer">
                <div className="bg-surface-20 w-[41px] h-[41px] flex justify-center items-center rounded-[5px]">
                    <ArrowRightIcon className="text-text-30 rotate-180" />
                </div>
                <p className="text-black text-h7 capitalize font-medium">add project</p>
            </div>
            <main className="mt-11">
                <div className="w-full flex flex-col">
                    <p className='text-h4 font-medium gradient-text capitalize'>enter a name and domain for end.</p>
                    <p className='max-w-screen-md text-text-20 text-h7 font-normal lowercase mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="mt-[50px]">
                    <InputForm titleInput={'website name'} placeholder={'enter a name..'} />
                    <div className="mt-8">
                        <InputForm titleInput={'domain'} placeholder={'enter a domain..'} />
                    </div>
                    <div className="flex items-center gap-x-5">

                        <button
                            onClick={() => {
                                history.push('/dashboard/choosetemp')
                            }}
                            className="max-w-[230px] w-full mt-[20px] flex justify-center items-center text-white bg-primary-5 rounded-10 h-10 text-base font-normal gap-x-2">
                            <TickIcon className="text-white" />
                            create
                        </button>
                        <button onClick={() => {
                            history.push('/dashboard/choosetemp')
                        }} className="max-w-[170px] mt-[20px] flex justify-center items-center text-white bg-text-20 rounded-10 w-full h-10 text-base font-normal">
                            back
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ChooseName;