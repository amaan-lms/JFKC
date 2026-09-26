import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import IndustryDetail from './pages/IndustryDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Products from './pages/Products';
import TrainingModules from './pages/TrainingModules';
import TrainingDelivery from './pages/TrainingDelivery';
import ImmersiveLearning from './pages/ImmersiveLearning';
import LearningTechnology from './pages/LearningTechnology';
import Career from './pages/Career';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<IndustryDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/training-modules" element={<TrainingModules />} />
        <Route path="/training-delivery" element={<TrainingDelivery />} />
        <Route path="/immersive-learning" element={<ImmersiveLearning />} />
        <Route path="/learning-technology" element={<LearningTechnology />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
