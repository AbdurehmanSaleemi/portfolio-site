import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import LeftSide from './LeftSide'
import RightSide from './RightSide'


const Home = ({path}) => {
    return (
        <div className="relative flex lg:flex-row space-y-0 md:flex-col flex-col h-screen lg:overflow-hidden">
            <div className="flex flex-col space-y-24 md:space-y-30 lg:space-y-56 p-4 bg-[#1c1c1c] w-full">
                <Logo />
                <LeftSide />
                <div className='flex flex-row p-1'></div>
            </div>
            <div className="text-white bg-[#171717] p-4 w-full">
                <div className="flex flex-col lg:space-y-36 md:space-y-16 space-y-0 p-1 w-full">
                    <div className="hidden md:hidden lg:block">
                        <Menu />
                    </div>
                    <RightSide />
                </div>
            </div>
        </div>
    )
}

export default Home