import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

export default function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}
