import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// Components
import InputForm from "../components/common/Inputes/InputForm";
import SelectAble from "../components/common/SelectAble";

// SVGs
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right-white.svg";
import { ReactComponent as TickIcon } from "../assets/icons/Tick.svg";
import { ReactComponent as InfoIcon } from '../assets/icons/Info-Circle.svg';
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as ImageIcon } from "../assets/icons/Image.svg";

const AddTicket = () => {

    const history = useHistory();


    return (
        <div className='w-full px-40 mt-[100px]'>
            <div
                onClick={() => {
                    
                }}
                className="flex items-center gap-x-3 cursor-pointer">
                <div className="bg-surface-20 w-[41px] h-[41px] flex justify-center items-center rounded-[5px]">
                    <ArrowRightIcon className="text-text-30 rotate-180" />
                </div>
                <p className="text-black text-h7 capitalize font-medium">add ticket</p>
            </div>
            <main className="mt-11">
                <div className="w-full flex flex-col">
                    <p className='text-h4 font-medium gradient-text capitalize'>add ticket</p>
                    <p className='max-w-screen-md text-text-20 text-h7 font-normal lowercase mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="mt-[50px]">
                    <div className="flex items-center gap-x-4">
                        <InputForm titleInput={'subject'} placeholder={'enter a subject..'} />
                        <SelectAble header={'project'} title={'project 1'} className={'w-full'} />
                        <SelectAble header={'unit'} title={'support'} className={'w-full'} />
                    </div>
                    <div className="mt-8">
                        <p className="text-text-30 text-h9 font-normal mb-3">your message</p>
                        <CKEditor
                            editor={ClassicEditor}
                            data=""
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
                    </div>
                    <div className="mt-8">
                        <p className="text-text-30 text-h9 font-normal mb-3">attachments</p>
                        {/* <div className="flex flex-col justify-center items-center"> */}
                        <div className="p-4"
                            style={{ border: 'dashed 1px #E9E9E9', borderRadius: '10px' }}
                        >
                            <label
                                htmlFor="images-input"
                                className="flex flex-col justify-center items-center"
                                style={{ cursor: 'pointer' }}
                            >
                                <input
                                    type="file"
                                    className="hidden"
                                    id="images-input"
                                    accept="image/*"
                                    multiple
                                // onChange={changeFilesInput}
                                />
                                <div className="flex items-center gap-x-3">
                                    <ImageIcon className="text-primary-5" />
                                    <p className="text-primary-5 text-h9 font-normal">Drop the file here or click</p>
                                </div>
                            </label>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="mt-8">
                        <div className='bg-white rounded-10 flex items-center justify-between py-4 px-3' style={{
                            boxShadow: ' 0px 0px 30px 0px rgba(0, 0, 0, 0.07)'
                        }}>
                            <div className="flex items-center gap-x-2">
                                <div className="w-1 h-[50px] bg-tertiary-10 rounded-lg"></div>
                                <InfoIcon className='text-tertiary-10' />
                                <div className="flex flex-col">
                                    <p className='text-text-30 text-h8 font-medium'>allowed formats</p>
                                    <p className='text-text-40 text-bae font-normal'>allowed formats: .jpg, .gif, .jpeg, .png </p>
                                </div>
                            </div>
                            <div className="">
                                <CloseIcon className='text-text-40' />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">

                        <button
                            onClick={() => {
                                history.push('/dashboard/choosetemp')
                            }}
                            className="max-w-[230px] w-full mt-[20px] flex justify-center items-center text-white bg-primary-5 rounded-10 h-10 text-base font-normal gap-x-2">
                            <TickIcon className="text-white" />
                            add ticket
                        </button>
                        <button onClick={() => {
                            history.push('/dashboard/choosetemp')
                        }} className="max-w-[170px] mt-[20px] flex justify-center items-center text-white bg-text-20 rounded-10 w-full h-10 text-base font-normal">
                            cancel
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddTicket;