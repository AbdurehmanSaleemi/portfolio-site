import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { FiSend } from "react-icons/fi";
import { useState } from 'react'
import emailJS from 'emailjs-com';
import heroImage from './img/heroImg.svg'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailJS.sendForm('service_u5jt0mn', 'template_9pzf73i', e.target, 'kMuV7hy3EUFwcKX5D')
      .then((result) => {
        console.log(result.text);
        console.log(e)
      }, (error) => {
        console.log(error.text);
      });
  };

  const checkFields = (e) => {
    let isTrue = false;
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      setError({
        msg: 'Please Fill all information',
      })
      isTrue = false;
    } else {
      setError({
        msg: '',
      })
      isTrue = true;
    }

    if (isTrue) {
      console.log('sent email');
      sendEmail(e);
    }
  }

  return (
    <div className="relative font-regFont flex lg:flex-row space-y-0 md:flex-col flex-col h-screen lg:overflow-hidden">
      <div className="flex flex-col space-y-24 md:space-y-30 lg:space-y-32 p-4 bg-[#1c1c1c] w-full ">
        <Logo />
        <div className="flex flex-row gap-2 w-6/12 justify-center items-center absolute p-2 text-md text-red-300 rounded-lg" role="alert">
          {error.msg}
        </div>
        <form onSubmit={checkFields} className='slideInLeft flex flex-col items-center space-y-10  w-full h-full'>
          <p className='w-7/12 text-white lg:text-4xl font-regFont text-2xl font-extrabold uppercase text-center lg:text-left tracking-wide'>Get in Touch</p>
          <div className='flex flex-col lg:w-7/12 md:w-8/12 w-10/12'>
            <label className="block mb-2 text-lg font-medium text-white/80 uppercase tracking-wide">Your Name</label>
            <input type="text" placeholder={'Enter your Name'} onChange={(e) => setName(e.target.value)} className="flex flex-col bg-transparent border border-white/60 focus:border-white focus:outline-none text-white text-lg rounded-lg w-full p-2.5" />
          </div>
          <div className='flex flex-col lg:w-7/12 md:w-8/12 w-10/12'>
            <label className="block mb-2 text-lg font-medium text-white/80 uppercase tracking-wide">Your Email</label>
            <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder={'saleemi@code.com'} className="bg-transparent border border-white/60 focus:border-white focus:outline-0 text-white text-lg rounded-lg block w-full p-2.5" />
          </div>
          <div className='flex flex-col lg:w-7/12 md:w-8/12 w-10/12'>
            <label className="block mb-2 text-lg font-medium text-white/80 uppercase tracking-wide">Message</label>
            <textarea onChange={(e) => setMessage(e.target.value)} placeholder={'Write a message'} className="flex flex-col bg-transparent border border-white/60 focus:border-white focus:outline-none text-white text-lg rounded-lg w-full p-2.5 h-36" ></textarea>
          </div>
          <div className='flex flex-col lg:w-7/12 md:w-8/12 w-10/12'>
            <button type='submit' className='ease-in duration-100 flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-[#1A1C18] text-xl font-bold px-3 py-5 hover:ease-in hover:duration-100 bg-[#1c1c1c] border tracking-wide border-white/50 text-white hover:scale-105'>SEND <FiSend className='hover:text-[#171717] hover:duration-100 hover:ease-in' style={{ fontSize: 20 }} /> </button>
          </div>
        </form>
        <div className='mb-12'></div>
      </div>
      <div className="text-white bg-[#171717] p-4 w-full hidden lg:block">
        <div className="flex flex-col lg:space-y-36 md:space-y-16 space-y-0 p-1 w-full">
          <div className="hidden md:hidden lg:block">
            <Menu />
          </div>
          <div className='slideInLeft flex w-full h-full justify-center items-center'>
            <div className='lg:w-8/12 md:w-8/12 hidden lg:block'>
              <img src={heroImage} className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact