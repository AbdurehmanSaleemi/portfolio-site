import React from 'react'
import { BsBehance } from 'react-icons/bs'
import image1 from './img/projects/img1.png'
import image2 from './img/projects/img2.png'
import image3 from './img/projects/img3.jpg'
import image4 from './img/projects/img4.jpg'
import Logo from './Logo'
import Menu from './Menu'
import { FaGithubAlt } from 'react-icons/fa'

const Projects = () => {

    const pictures = [
        {
            id: 1,
            title: "Project 1",
            description: "Mobile App UI Design",
            src: image1,
            href: "https://www.behance.net/gallery/130373925/13X13-Drawable-App"
        },
        {
            id: 2,
            title: "Project 2",
            description: "UI Design",
            src: image2,
            href: "https://www.behance.net/gallery/144403327/Design-System?tracking_source=search_projects%7Cdesign%20system%20ui"
        },
        {
            id: 3,
            title: "Project 3",
            description: "Jeep Website UI Design",
            src: image3,
            href: "https://www.behance.net/gallery/130374115/Jeep-Website-Conceptual-UI"
        },
        {
            id: 4,
            title: "Project 4",
            description: "Liverpool UI Design",
            src: image4,
            href: "https://www.behance.net/gallery/130374075/Liverpool-Website-UI"
        },
    ]


    return (
        <div className="relative flex lg:flex-row space-y-0 md:flex-col flex-col h-screen lg:overflow-hidden">
            <div className=" flex flex-col space-y-24 md:space-y-26 lg:space-y-0 p-4 bg-[#1c1c1c] w-full">
                <Logo />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-9/12 scale-100 lg:scale-75 self-center'>
                    <h1 className='slideInLeft col-span-1 lg:col-span-2 -mt-5 sm:col-span-2 text-white text-5xl font-regFont text-center lg:text-left tracking-wid uppercase tracking-wider font-bold'>Projects</h1>
                    {pictures.map(picture => (
                        <div key={picture.id} className="flex flex-col font-regFont p-5 w-full h-full ring-2  rounded ring-white/30 ease-in duration-100 hover:scale-110 hover:ease-in hover:duration-100">
                            <div className='slideInLeft'>
                                <a href={picture.href} target="_blank" rel="noopener noreferrer">
                                    <img src={picture.src} alt={picture.title} className="w-64 h-48 object-cover rounded shadow-lg mb-2" />
                                </a>
                                <p className="text-white/75 font-bold text-left text-lg uppercase">{picture.title}</p>
                                <p className="text-white/75 text-left text-md font-medium uppercase">{picture.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className='slideInLeft col-span-1 sm:col-span-2 lg:col-span-2'>
                        <div className='flex flex-col'>
                            <a href='https://www.behance.net/abdurehsaleemi' target={'_blank'} className='ease-in duration-100 flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-[#1A1C18] text-xl font-bold px-3 py-5 hover:ease-in hover:duration-100 bg-[#1c1c1c] border tracking-wide border-white/50 text-white hover:scale-105'> <BsBehance className='hover:text-[#171717] hover:duration-100 hover:ease-in' style={{ fontSize: 25 }} /> EXPLORE MORE</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row p-1'></div>
            </div>
            <div className="text-white bg-[#171717] p-4 w-full font-regFont">
                <div className="flex flex-col lg:space-y-36 items-center md:space-y-16 space-y-0 p-1 w-full">
                    <div className="hidden md:hidden lg:block">
                        <Menu />
                    </div>
                    <div className='slideInLeft w-10/12'>
                        <div className="flex flex-col space-y-5 w-auto justify-center lg:mt-24">
                            <h1 className="text-white text-3xl font-regFont text-center lg:text-left tracking-wid uppercase tracking-wider font-bold">Apps and Websites</h1>
                            <h1 className='text-xl text-white/75 font-normal text-center lg:text-left uppercase'>Visit my Github Profile for more info !</h1>

                            <div className='flex flex-col w-auto '>
                                <a href='https://github.com/AbdurehmanSaleemi' target={'_blank'} className='ease-in cursor-pointer duration-100 flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-[#1A1C18] text-xl font-bold px-3 py-5 hover:ease-in hover:duration-100 border tracking-wide border-white/50 text-white uppercase hover:scale-105'> <FaGithubAlt className='hover:text-[#171717] hover:duration-100 hover:ease-in' style={{ fontSize: 20 }} /> Github Profile </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects