import './home.css'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Men from '../Fashion/Men'
import Women from '../Fashion/Women'


function Home() {
    return (
        <div>
            <About />
            <Men />
            <Women />
            <Contact />
        </div>
    )
}

export default Home