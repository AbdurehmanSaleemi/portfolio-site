import '../index.css'
import logo from './img/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'
import Menu from './Menu'

const Logo = () => {

    const [isOpen, setIsOpen] = useState(false)

    const onClick = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const onCloseClick = () => {
        setIsOpen(isOpen => !isOpen)
    }
    
    const iconOpen = <GiHamburgerMenu className='ease-in duration-100 lg:hidden text-white text-3xl' onClick={onClick} />
    const iconCross = <MdOutlineClose className='ease-in duration-100 lg:hidden text-white text-3xl' onClick={onCloseClick} />;

    return (
        <div>
            <div className="flex flex-col justify-center gap-16 items-center mt-5 slideInUp">
                <div className='flex flex-row gap-12 items-center'>
                    <img style={{ cursor: 'pointer' }} className='w-5 h-6 md:w-5 lg:w-5' src={logo} alt='Logo Not Found'></img>
                    <h1 style={{ cursor: 'pointer' }} className='duration-100 ease-in text-white font-bold font-regFont text-3xl tracking-widest uppercase hover:scale-105 hover:duration-100 hover:ease-in'>Saleemi.</h1>
                    {!isOpen && iconOpen}
                    {isOpen && iconCross}
                </div>
                {isOpen && <div className='slideInDown ease-in flex w-full h-full items-center justify-center'>
                {isOpen && <Menu />}
                </div>}

            </div>
        </div>
    )
}

export default Logo