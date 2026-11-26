import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Courses from "./sections/Courses";
import WhyChooseUs from "./sections/WhyChooseUs";
import LearningExperience from "./sections/LearningExperience";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <LearningExperience />
        {/* <Technologies /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
