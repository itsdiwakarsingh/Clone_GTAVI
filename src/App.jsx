import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from './sections/Hero.jsx';
import Navbar from "./sections/Navbar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <FirstVideo />
        </main>
    )
}

export default App 