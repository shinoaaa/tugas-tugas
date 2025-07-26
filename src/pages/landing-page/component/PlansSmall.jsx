import arrow from '../assets/panah.png'

const PlansSmall = (props) => {
    const { type, price, feature } = props;

    return (
        <div>
            <div className="custom-shadow xl:w-140 lg:w-107 h-75 mt-15 flex justify-center items-center relative">
                <div className="lg:w-95 md:w-130 h-50 flex justify-between">
                    <div>
                        <h1 id="cool" className="text-4xl text-[#529AEA]">{type}</h1>
                        <ul className="list-disc leading-8 mt-10 ml-7 text-[#529AEA]">
                            {
                                feature.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="h-[120px] w-[120px] rounded-full outline-1 outline-[#529AEA] flex justify-center items-center">
                        <h1 id="cool" className="text-3xl text-[#529AEA]">
                            {price}
                        </h1>
                    </div>
                </div>
                <div className="absolute bottom-[-20px] right-[-35px]">
                    <a className='cursor-pointer'>
                        <div className="kotak w-20 h-20 bg-[#529AEA] rounded-2xl outline-1 outline-white flex justify-center items-center">
                            <img src={arrow} className="arrow" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PlansSmall