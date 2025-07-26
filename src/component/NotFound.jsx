import notfound from '../assets/notfound.png'
import cirno from '../assets/cirno.png'

const NotFound = () => {


    return (
        <div className="flex-col justify-center items-center pt-6 xl:w-[790px] h-[550px] lg:w-[790px] md:w-[500px] xl:ml-0 lg:ml-0 md:ml-31 bg-white outline-2 overflow-hidden rounded-4xl absolute shadow-lg">
            <div className='flex flex-col justify-center items-center mt-17 relative'>
                <div className='w-55 h-40 z-20 ml-7'>
                    <img src={notfound} className='object-cover' />
                </div>
                <h1 id='cool' className='text-[#56AFCA] mt-27 px-5 py-2 text-3xl z-20'>Sorry, this menu is not yet available</h1>
            </div>
            <div className='absolute w-150 h-275 translate-x-85 -translate-y-120 z-0 opacity-3'>
                <img src={cirno} alt="" />
            </div>
            <div className='absolute w-150 h-275 -translate-x-15 -translate-y-120 z-0 opacity-2'>
                <img src={cirno} alt="" />
            </div>
        </div>
    )
}

export default NotFound