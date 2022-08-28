import UpperSection from "./components/UpperSection"
import AboutSection from "./components/AboutSection"
import InterestsSection from "./components/InterestsSection"
import FooterSection from "./components/FooterSection"

export default function Upper () {
    return (
        <>
            <div className="cardContainer">
                <UpperSection/>
                <AboutSection/>
                <InterestsSection/>
                <FooterSection/>
            </div>
        </>
    )
}
