import About from "./components/About";
import Audience from "./components/Audience/Index";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer/index";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function App() {
    return (
        <>
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
