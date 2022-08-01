import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="bg-[#171717] font-regFont absolute flex flex-col space-y-10 w-full h-screen items-center justify-center ">
      <p className="text-white/80 text-center text-xl uppercase tracking-wider">Ooops Nothing Found</p>
      <h1 className="text-white/90 lg:text-[30rem] text-9xl font-bold">404</h1>
      <Link to="/" className="bg-transparent ease-linear duration-100 text-white border p-5 rounded-full h-auto text-xl font-bold hover:duration-100 hover:scale-110 hover:ease-linear hover:bg-white hover:text-[#171717] hover:shadow-lg hover:border">
        Go to Home
      </Link>
    </div>
  )
}

export default Error404