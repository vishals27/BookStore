import AboutContent from "../AboutContent";
import Footer from "../Footer";
import Navbar from "../Navbar";

function About() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <AboutContent />
            </div>

        </>
    )
}
export default About;