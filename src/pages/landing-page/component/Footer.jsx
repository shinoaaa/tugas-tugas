import Jeff from '../assets/Jeff.svg'
import Yoruichi from '../assets/Yoruichii.svg'


const Footer = () => {
    return (
        <div className="pt-12">
            <div className="h-[450px] bg-[#1E1E1E] mt-12 flex justify-center pt-12">
                <div className="xl:w-[1305px] lg:w-[975px] md:w-[720px] h-[320px] ml-[12px]">
                    <div className="flex justify-between">
                        <div className='xl:w-50 xl:h-50 md:w-35 h-35'>
                            <img src={Jeff} />
                        </div>
                        <ul className='text-[#FFFFFF] xl:ml-10 md:ml-3'>
                            <h1 id='cool' className='xl:text-4xl md:text-xl'>Social Media</h1>
                            <li className='mt-7 text-[15px]'><a href="https://youtu.be/HG1W82KTa_s?si=78P23L0HZUVu0sJe" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Facebook</a></li>
                            <li className='mt-3 text-[15px]'><a href="https://youtu.be/-4K3eAmsvhs?si=b6CkuHF-qDGfQQjm" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Reddit</a></li>
                            <li className='mt-3 text-[15px]'><a href="https://youtu.be/xvFZjo5PgG0?si=4AMBkUWmNyKJ6wbq" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Steam</a></li>
                            <li className='mt-3 text-[15px]'><a href="https://youtu.be/xvFZjo5PgG0?si=4AMBkUWmNyKJ6wbq" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Discord</a></li>
                            <li className='mt-3 text-[15px]'><a href="https://youtu.be/-4K3eAmsvhs?si=b6CkuHF-qDGfQQjm" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Behance</a></li>
                        </ul>
                        <ul className='text-[#FFFFFF] xl:ml-37 lg:ml-20 md:ml-5 text-right'>
                            <h1 id='cool' className='xl:text-4xl md:text-xl'>Lorem Ipsum</h1>
                            <li className='mt-7 text-[15px]'><a href="https://youtu.be/xvFZjo5PgG0?si=4AMBkUWmNyKJ6wbq" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Sit</a></li>
                            <li className='mt-3 text-[15px]'><a href="https://youtu.be/HG1W82KTa_s?si=78P23L0HZUVu0sJe" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Dolor</a></li>
                            <li className='mt-3 text-[15px]'><a href="https://youtu.be/xvFZjo5PgG0?si=4AMBkUWmNyKJ6wbq" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Amet</a></li>
                            <li className='mt-3 text-[15px]'><a href="https://youtu.be/EWv3fnBIGVc?si=-s5jDYDyEXblHl8K" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Consectetur</a></li>
                            <li className='mt-3 text-[15px]'><a href="https://youtu.be/xvFZjo5PgG0?si=4AMBkUWmNyKJ6wbq" target='blank' className='transform hover:text-[#e07919] transition duration-300'>Adispicing</a></li>
                        </ul>
                        <div id='cool' className=' text-[#FCFBFF]'>
                            <div className='w-[172px] h-[172px] outline-[#FCFBFF] outline-1 mb-3 flex justify-center items-center'>
                                <h1 className='text-center text-5xl leading-[70px]'>Kotak Lorem</h1>
                            </div>
                            <img src={Yoruichi} alt="" />
                        </div>
                    </div>
                    <div className='flex mt-25 justify-between'>
                        <div className='w-[20px] h-[20px] outline-[#FCFBFF] outline-1 flex justify-center items-center'>
                            <div className='w-[10px] h-[10px] rounded-full bg-[#FCFBFF] outline-1'></div>
                        </div>
                        <h1 id='cool' className='text-base text-[#FFFFFF] text-right'>© 2025 www.PenggunaPsylocke.com - All Rights Reserved.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer