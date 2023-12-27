import { useState } from 'react';
// import { persianToEnglish } from 'utils/changeNumberForInputs';



const InputForm = ({
    titleInput,
    placeholder,
    value,
    setValue,
    inputName,
    disableEdit,
    setUpdateValue,
}) => {
    const [error, setError] = useState('');

    //   const isPersian = (text: any) => {
    //     const persianPattern = /^[\u0600-\u06FF\s]+$/;
    //     return persianPattern.test(text);
    //   };

    return (
        <div className="w-full h-full flex flex-col relative">
            <label htmlFor="input" className="text-text-30 text-base font-normal">
                {titleInput}
            </label>
            <input
                autoComplete="off"
                disabled={disableEdit}
                // autoComplete="off"
                className={` bg-transparent border border-stroke-40 rounded-[5px] h-12 mt-2 px-6 placeholder:text-text-40 text-text-30 focus:text-text-30 ${disableEdit && 'cursor-not-allowed'
                    }`}
                placeholder={placeholder}
                type={'text'}
                name={inputName}
                value={value}
            />
            {error && (
                <p className="text-xs text-red-500 mt-2 font-normal absolute inset-x-0 -bottom-6">
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputForm;
