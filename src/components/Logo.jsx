import '../index.css'
import logo from './img/logo.png'
const Logo = () => {
    return (
        <div>
            <div className="flex flex-row justify-center gap-9 items-center mt-5 slideInUp">
                <img style={{cursor: 'pointer'}} className='w-5 md:w-5 lg:w-5' src={logo} alt='Logo Not Found'></img>
                <h1 style={{cursor: 'pointer'}} className='duration-100 ease-in text-white font-bold font-regFont text-3xl tracking-widest uppercase hover:scale-105 hover:duration-100 hover:ease-in'>Saleemi.</h1>
            </div>
        </div>
    )
}

export default Logo