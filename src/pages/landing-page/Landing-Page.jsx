import NavBar from "./component/NavBar"
import HeroSection from "./component/HeroSection"
import Plans from "./component/plans"
import Footer from "./component/Footer"


const LandingPage = () => {

    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <HeroSection />
            <Plans />
            <Footer />
        </div>
    )
}

export default LandingPage