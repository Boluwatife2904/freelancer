import "lenis/dist/lenis.css";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import About from "./components/About";
import Audience from "./components/Audience/Index";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer/index";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();
// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);
// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});
// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

function App() {
    return (
        <>
            <Preloader />
            <Hero />
            <About />
            <Audience />
            <Services />
            <Testimonial />
            <Team />
            <FAQs />
            <Footer />
        </>
    );
}

export default App;
