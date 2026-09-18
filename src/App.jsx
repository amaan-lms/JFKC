import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import WhoWEAre from "./components/Home/WhoWEAre";
import SetUsApart from "./components/Home/SetUsApart";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import VissionMission from "./components/Home/VissionMission";
import CTA from "./components/CTA";


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhoWEAre />
      <SetUsApart />
      <WhyChooseUs />
      <VissionMission />
      <CTA />
      <Footer />
    </>
  )
}

export default App
