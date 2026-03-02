import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import SocialAtom from "./components/SocialAtom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
          // In your Hero or About section
        <SocialAtom
          profileImage="/profile.jpg"
          name="Your Name"
          bio="Designer & Developer"
        />
      </div>
    </BrowserRouter>
  )
}

export default App
