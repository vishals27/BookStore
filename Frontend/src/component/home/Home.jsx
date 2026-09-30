import Navbar from '../Navbar';
import Banner from '../Banner';
import Freebook from '../Freebook';
import Footer from '../Footer'
import About from '../AboutContent';

function Home() {
    return (
        <>
            <div>
                <Navbar />
                <Banner />
                <Freebook />

                <Footer />
            </div>

        </>
    )
}
export default Home;