import About from "../components/About"
import Video from "../components/Video"
import Services from "../components/Services"
import ContactForm from "../components/ContactForm"


const Home = () => {
  return (
    <div>
{/*         <h1>Home Page</h1> */}
        <Video/>
        <About/>
        <Services/>
        <ContactForm/>
    </div>
  )
}

export default Home