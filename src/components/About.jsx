import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import '../index.css'

const About = () => {
    const myDescription = "Hi, I am Abdurehman Saleemi. I am a 21Y/O developer and designer from Pakistan. I started designing when I was 12. I was introduced to Programming at the age of 15. I started participating in volunteer graphic designing programs. Being an enthusiastic problem solver from a young age drove me to start learning to program. Fast forward a couple of years, I am 21 years old and proficient in C++, PHP, and Flutter."
    return (
        <div className="relative font-regFont flex lg:flex-row space-y-0 md:flex-col flex-col h-screen lg:overflow-hidden">
            <div className="flex items-center flex-col space-y-24 md:space-y-30 lg:space-y-56 p-4 bg-[#1c1c1c] w-full">
                <Logo />
                <div className='slideInLeft flex lg:ml-24 flex-col gap-5 md:w-5/6 w-full space-y-12 lg:w-8/12 h-full items-center lg:items-start justify-center'>
                    <text className='text-white lg:text-6xl font-regFont text-5xl font-extrabold uppercase text-center lg:text-left tracking-wide'>Who I am ?</text>
                    <p className='text-white/75 text-lg font-light font-regFont w-10/12 tracking-wider uppercase text-center lg:text-left leading-snug'>{myDescription}</p>
                </div>

                <div className='flex flex-row p-1'></div>
            </div>
            <div className="text-white bg-[#171717] p-4 w-full">
                <div className="flex flex-col lg:space-y-36 md:space-y-16 space-y-0 p-1 w-full">
                    <div className="hidden md:hidden lg:block">
                        <Menu />
                    </div>
                    <div className='slideInLeft flex flex-col items-center justify-center p-1 w-full'>
                        <text className='text-white w-1/2 lg:text-4xl text-2xl font-extrabold uppercase text-center lg:text-left tracking-wide mb-6'>Skills</text>
                        <div className='flex flex-col lg:w-1/2 w-10/12 space-y-10 '>
                            <div>
                                <div className="flex flex-row justify-between mb-1">
                                    <span className="text-base font-medium text-white/70">Figma</span>
                                    <span className="text-md font-medium text-white/70">95%</span>
                                </div>
                                <div className="w-full bg-[#171717] rounded-full outline outline-1 p-1">
                                    <div className="bg-white h-3 rounded-full w-11/12"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-between mb-1">
                                    <span className="text-base font-medium text-white/70">PHP</span>
                                    <span className="text-md font-medium text-white/70">85%</span>
                                </div>
                                <div className="w-full bg-[#171717] rounded-full outline outline-1 p-1">
                                    <div className="bg-white h-3 rounded-full w-10/12"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-between mb-1">
                                    <span className="text-base font-medium text-white/70">Javascript</span>
                                    <span className="text-md font-medium text-white/70">70%</span>
                                </div>
                                <div className="w-full bg-[#171717] rounded-full outline outline-1 p-1">
                                    <div className="bg-white h-3 rounded-full w-9/12"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-between mb-1">
                                    <span className="text-base font-medium text-white/70">ReactJS</span>
                                    <span className="text-md font-medium text-white/70">65%</span>
                                </div>
                                <div className="w-full bg-[#171717] rounded-full outline outline-1 p-1">
                                    <div className="bg-white h-3 rounded-full w-7/12"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-between mb-1">
                                    <span className="text-base font-medium text-white/70">Flutter</span>
                                    <span className="text-md font-medium text-white/70">75%</span>
                                </div>
                                <div className="w-full bg-[#171717] rounded-full outline outline-1 p-1">
                                    <div className="bg-white h-3 rounded-full w-8/12"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-between mb-1">
                                    <span className="text-base font-medium text-white/70">UI/UX</span>
                                    <span className="text-md font-medium text-white/70">80%</span>
                                </div>
                                <div className="w-full bg-[#171717] rounded-full outline outline-1 p-1">
                                    <div className="bg-white h-3 rounded-full w-9/12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-12'></div>
            </div>
        </div>
    )
}
export default About
