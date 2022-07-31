import React from 'react'
import { BiCodeCurly } from 'react-icons/bi'

const RightSide = () => {

    const reactColor = "#FFCEA1"
    const reactTextColor = "#D86700"
    const flutterColor = "#A3A1FF"
    const flutterTextColor = "#423FD3"
    const cppColor = "#FFDFA1"
    const cppTextColor = "#9D744D"
    const phpColor = "#A1D2FF"
    const phpTextColor = "#1e62ba"

    const impLine = "Click on any Language/Framework to see the projects made using them"


    return (
        <div className='slideInLeft  flex flex-col items-center space-y-1 font-regFont'>
            <div className='flex flex-col justify-center items-center max-w-full'>
                <div className='flex flex-row w-96 md:w-full'>
                    <BiCodeCurly size={500} style={{color: 'white' }} />
                </div>
                <div className='flex flex-col items-center space-y-6 md:space-y-10 lg:space-y-10 absolute lg:absolute sm:absolute md:absolute z-10'>
                    <button className={`ease-in duration-100 inline-flex rounded-full bg-[${reactColor}] text-[${reactTextColor}] text-lg font-bold px-2 scale-125 md:scale-150 lg:scale-150 hover:ease-in hover:duration-100 hover:bg-white hover:scale-175`}> ReactJS </button>
                    <button className={`ease-in duration-100 inline-flex rounded-full bg-[${flutterColor}] text-[${flutterTextColor}] text-lg font-bold px-2 scale-125 md:scale-150 lg:scale-150 hover:ease-in hover:duration-100 hover:bg-white hover:scale-175`}> Flutter </button>
                    <button className={`ease-in duration-100 inline-flex rounded-full bg-[${phpColor}] text-[${phpTextColor}] text-lg font-bold px-2 scale-125 md:scale-150 lg:scale-150 hover:ease-in hover:duration-100 hover:bg-white hover:scale-175`}> PHP </button>
                    <button className={`ease-in duration-100 inline-flex rounded-full bg-[${cppColor}] text-[${cppTextColor}] text-lg font-bold px-2 scale-125 md:scale-150 lg:scale-150 hover:ease-in hover:duration-100 hover:bg-white hover:scale-175`}> C++ </button>
                </div>
            </div>
            <h2 className='w-3/5 text-center uppercase text-[#CFCFCF] font-regFont tracking-wide text-lg leading-snug'>{impLine} </h2>
        </div>
    )
}

export default RightSide