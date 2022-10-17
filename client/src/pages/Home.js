import About from '../components/About'
import Video from '../components/Video'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import GetQuotes from '../components/GetQuotes'

const Home = () => {
    return (
        <div>
            <Video />
            <GetQuotes/>
            <About />
            <Services />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home
