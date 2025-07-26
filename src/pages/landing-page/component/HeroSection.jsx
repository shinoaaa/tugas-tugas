import dashboard from '../assets/dashboard.svg'


const HeroSection = () => {
    return (
        <div>
            <div className="w-screen flex justify-center mt-30">
                <div className="flex flex-col xl:w-225 lg:w-225 md:w-150 h-265">
                    <h1 id="cool" className="xl:text-4xl lg:text-4xl md:text-3xl text-[#529AEA] xl:leading-16 lg:leading-16  md:leading-14 text-center">
                        Are you looking for a reliable service to help you improve your employer dashboard?  <br />
                        Look no further
                        <span className="xl:text-5xl lg:text-5xl md:text-4xl text-white py-1 px-4 ml-5 mr-5 rounded-full bg-[#DE653D] ">
                            Touhou Website
                        </span>  is here to help!
                    </h1>
                    <p className="mt-17 text-[#6D6D6D] opacity-50  text-center">
                        At Touhou Website, we specialize in creating powerful, 
                        user-friendly employer dashboards that streamline your 
                        workflow and give you full control over your business data. 
                        Whether you're managing employee performance, tracking recruitment 
                        metrics, or handling HR operations, our custom-built dashboards are 
                        designed to provide clear insights, improve decision-making, and 
                        enhance overall productivity. We combine modern design with functional 
                        UI/UX principles to ensure your dashboard not only looks great but also 
                        works efficiently. Let us help you transform your ideas into an interactive, 
                        high-performance dashboard tailored to your specific needs.
                    </p>
                    <div className='mt-17'>
                        <img src={dashboard} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection