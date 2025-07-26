import PlansSmall from "./PlansSmall"
import arrow from '../assets/panah.png'
import arrow1 from '../assets/panahh.png'
import { Link } from "react-router-dom"


const Plans = () => {
    return (
        <div>
            <div className="mt-15 flex justify-center">
                <div className="flex flex-col xl:w-300 lg:w-230 md:w-165 xl:h-295 lg:h-295 md:h-400">
                    <div id="cool" className=" w-50 pl-7 py-2 outline-1 outline-[#529AEA] text-3xl rounded-full
                    text-[#529AEA]">
                        <h1>View Plan</h1>
                    </div>
                    <div className="custom-shadow h-75 mt-15 flex justify-center items-center relative">
                        <div className="xl:w-275 lg:w-210 md:w-140 h-60 flex justify-between">
                            <div>
                                <h1 id="cool" className="text-4xl text-[#529AEA]">Master Plan</h1>
                                <ul className="list-disc leading-8 mt-5 ml-10 text-[#529AEA]">
                                    <li>Free File Source</li>
                                    <li>Responsive</li>
                                    <li>3 Days Delivery</li>
                                    <li>Free Deployment</li>
                                    <li>30 Day Warranty</li>
                                </ul>
                            </div>
                            <div className="h-[120px] w-[120px] rounded-full outline-1 outline-[#529AEA] flex justify-center items-center">
                                <h1 id="cool" className="text-3xl text-[#529AEA]">
                                    $125
                                </h1>
                            </div>
                        </div>
                        <div className="absolute bottom-[-20px] right-[-35px]">
                            <a className="cursor-pointer">
                                <div className="kotak w-20 h-20 bg-[#529AEA] rounded-2xl outline-1 outline-white flex justify-center items-center">
                                    <img src={arrow} className="arrow" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="xl:flex lg:flex md:block justify-between mt-5">
                        <PlansSmall
                            type={'Medium Plan'}
                            price={'$95'}
                            feature={['Free File Source', 'Responsive', '3 Days Delivery', '7 Day Warranty']} />
                        <PlansSmall
                            type={'Rookie Plan'}
                            price={'$70'}
                            feature={['Responsive', '7 Days Delivery', '7 Day Warranty']} />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-30">
                        <h1 id="cool" className="text-5xl text-[#529AEA] mb-12">Watch Our Demo</h1>
                        <Link to={'/login'} target="blank">
                            <div className="w-[150px] h-[150px] rounded-[25px] bg-[#1E1E1E] flex justify-center items-center cursor-pointer">
                                <img src={arrow1} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans