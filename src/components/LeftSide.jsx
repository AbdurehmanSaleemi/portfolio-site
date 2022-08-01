import React from 'react'
import '../index.css'
import { BiRocket } from "react-icons/bi";
import { Link } from 'react-router-dom';

const LeftSide = () => {

    const secondHeading = "UI/UX Designer & ReactJS Developer"
    const tagLine = "Hi, I am Abdurehamn Saleemi. 21 y/o Developer from Pakistan. Desgning UI's and coding them is my passion. Lets build something great together."


    const textSizes = "text-7xl md:text-4xl sm:text-3xl"
    const tagLineSizes = "text-lg sm:text-md sm:text-sm"

    return (
        <div>
            <div className='slideInLeft flex flex-col items-center justify-center'>
                <div className={`flex flex-col lg:items-start items-center lg:space-y-6 md:space-y-5 sm:space-y-2 space-y-6 max-w-[520px] min-w-auto`}>
                    <h1 className={`md:text-4xl text-4xl sm:text-4xl lg:text-7xl text-center lg:text-left md:text-left text-white font-regFont font-regular tracking-wide`}>EAT SLEEP <br /> <span className='ease-in duration-300 font-bold text-7xl md:6xl sm:4xl hover:font-light hover:ease-in lhover:duration-200'> DESIGN CODE </span></h1>

                    <h2 className={`w-full text-center md:text-center lg:text-left text-[#CFCFCF] font-regFont tracking-wide font-bold text-2xl leading-snug uppercase`}>{secondHeading} </h2>

                    <div className='flex flex-row w-full'>
                        <h2 className='w-full text-center lg:text-left md:text-center text-[#9c9c9c] font-light font-regFont text-lg mb-8 tracking-wide uppercase'> {tagLine} </h2>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-12 space-y-5 lg:space-y-0 lg:space-x-5 w-full lg:justify-start justify-center items-center lg:items-stretch'>
                        <Link to={'/projects'} className='ease-in duration-100 inline-flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-[#1A1C18] text-md font-bold px-4 py-5 w-60 hover:ease-in hover:duration-100 bg-[#1c1c1c] border border-white/50 text-white hover:scale-110'>UI/UX PROJECTS <BiRocket className='hover:text-[#171717] hover:duration-100 hover:ease-in' style={{ fontSize: 30 }} /> </Link>
                        <Link to={'/contact'} className='ease-in duration-100 inline-flex items-center justify-center text-white text-xl font-bold w-36 hover:border-b-2 hover:ease-in hover:duration-100 hover:scale-110'>CONTACT ME </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide