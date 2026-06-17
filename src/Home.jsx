import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MissionVision from "./components/MissionVision";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="landing">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <MissionVision />
                <About />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
