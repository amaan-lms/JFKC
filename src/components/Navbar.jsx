import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'training' | 'learning' | null
  const [scrolled, setScrolled] = useState(false);

  // Mobile sub-menu toggle handlers
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);
  const [mobileLearningOpen, setMobileLearningOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || mobileMenuOpen;

  const linkBase = solid
    ? 'text-gray-600 hover:text-orange-500 hover:bg-gray-100'
    : 'text-white/90 hover:text-white hover:bg-white/10';
  const dropdownActive = solid
    ? 'text-orange-500 bg-orange-50'
    : 'text-orange-400 bg-white/10';

  return (
    <header
      className={`navbar-header fixed top-0 left-0 right-0 z-50 ${
        solid ? 'navbar-header--solid' : ''
      }`}
    >
      {/* Main Floating Navbar Container */}
      <nav
        className={`navbar-shell relative mx-auto rounded-2xl px-3 py-2 sm:px-4 ${
          solid ? 'navbar-shell--solid' : ''
        }`}
      >
        {/* Glass layer fades in — smoother than transitioning backdrop-filter */}
        <div className="navbar-shell__glass pointer-events-none absolute inset-0 rounded-2xl" aria-hidden="true" />

        <div className="relative z-10 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-base">
              JF
            </div>
            <span
              className={`text-base sm:text-lg font-extrabold tracking-tight transition-colors duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                solid ? 'text-gray-900' : 'text-white'
              }`}
            >
              Knowledge<span className="text-orange-500">Centre</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            
            {/* Portfolio Link */}
            <a 
              href="#portfolio" 
              className={`px-4 py-2 text-sm font-semibold transition-colors rounded-full ${linkBase}`}
            >
              Portfolio
            </a>

            {/* Services Link */}
            <a 
              href="#services" 
              className={`px-4 py-2 text-sm font-semibold transition-colors rounded-full ${linkBase}`}
            >
              Services
            </a>

            {/* Products Link */}
            <a 
              href="#products" 
              className={`px-4 py-2 text-sm font-semibold transition-colors rounded-full ${linkBase}`}
            >
              Products
            </a>

            {/* Training Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('training')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  activeDropdown === 'training' ? dropdownActive : linkBase
                }`}
              >
                Training
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'training' ? 'rotate-180 text-orange-500' : solid ? 'text-gray-400' : 'text-white/50'}`} />
              </button>

              {/* Training Mega Menu */}
              {activeDropdown === 'training' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] pt-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden grid grid-cols-3 p-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="col-span-2 grid grid-cols-1 gap-1 p-1">
                      
                      {/* Option 1: Training Delivery */}
                      <a href="#training-delivery" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                            Training Delivery
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            Seamless instructor-led and self-paced live sessions with personalized feedback.
                          </p>
                        </div>
                      </a>

                      {/* Option 2: Training Module */}
                      <a href="#training-module" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="p-2.5 rounded-xl bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                            Training Module
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            Customizable course modules, structured learning paths, and interactive quizzes.
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Highlight Banner Side */}
                    <div className="bg-gray-900 rounded-2xl p-5 flex flex-col justify-between text-white relative overflow-hidden group">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider uppercase text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
                          Featured
                        </span>
                        <h4 className="font-bold text-sm mt-3 text-white">Enterprise Training</h4>
                        <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                          Boost workforce productivity with structured learning tracks.
                        </p>
                      </div>
                      <a href="#explore-training" className="inline-flex items-center text-xs font-semibold text-orange-400 hover:text-orange-300 gap-1 mt-4">
                        Explore Solutions <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Learning Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('learning')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  activeDropdown === 'learning' ? dropdownActive : linkBase
                }`}
              >
                Learning
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'learning' ? 'rotate-180 text-orange-500' : solid ? 'text-gray-400' : 'text-white/50'}`} />
              </button>

              {/* Learning Mega Menu */}
              {activeDropdown === 'learning' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] pt-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden grid grid-cols-3 p-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="col-span-2 grid grid-cols-1 gap-1 p-1">
                      
                      {/* Option 1: Immersive Learning */}
                      <a href="#immersive-learning" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                            Immersive Learning
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            Engage learners through AR/VR experiences, simulations, and gamified content.
                          </p>
                        </div>
                      </a>

                      {/* Option 2: Learning Technology */}
                      <a href="#learning-technology" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="p-2.5 rounded-xl bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                            Learning Technology
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            Next-gen AI analytics, LMS integration, and automated progress tracking.
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Highlight Banner Side */}
                    <div className="bg-gray-900 rounded-2xl p-5 flex flex-col justify-between text-white relative overflow-hidden group">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider uppercase text-white bg-orange-500 px-2.5 py-1 rounded-full">
                          Next-Gen
                        </span>
                        <h4 className="font-bold text-sm mt-3 text-white">AI Learning Tech</h4>
                        <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">
                          Transform educational workflows with modern smart technology.
                        </p>
                      </div>
                      <a href="#learn-tech" className="inline-flex items-center text-xs font-semibold text-orange-400 hover:text-orange-300 gap-1 mt-4">
                        Discover Tech <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#book-appointment" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors active:scale-95"
            >
              Book an Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                solid
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Popout Overlay Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden mx-auto mt-2 rounded-2xl border border-white/40 bg-white/80 shadow-md backdrop-blur-xl p-4 space-y-1 animate-in fade-in slide-in-from-top-2 ${
          solid ? 'max-w-5xl' : 'max-w-7xl'
        }`}>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-2xl text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-orange-500 transition-colors"
          >
            Portfolio
          </a>

          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-2xl text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-orange-500 transition-colors"
          >
            Services
          </a>

          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-2xl text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-orange-500 transition-colors"
          >
            Products
          </a>

          {/* Mobile Training Dropdown */}
          <div>
            <button
              onClick={() => setMobileTrainingOpen(!mobileTrainingOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span>Training</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTrainingOpen ? 'rotate-180 text-orange-500' : 'text-gray-400'}`} />
            </button>
            {mobileTrainingOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-2xl mt-1 border border-gray-100">
                <a
                  href="#training-delivery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  <GraduationCap className="w-4 h-4 text-orange-500" />
                  Training Delivery
                </a>
                <a
                  href="#training-module"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  <BookOpen className="w-4 h-4 text-gray-700" />
                  Training Module
                </a>
              </div>
            )}
          </div>

          {/* Mobile Learning Dropdown */}
          <div>
            <button
              onClick={() => setMobileLearningOpen(!mobileLearningOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span>Learning</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileLearningOpen ? 'rotate-180 text-orange-500' : 'text-gray-400'}`} />
            </button>
            {mobileLearningOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-2xl mt-1 border border-gray-100">
                <a
                  href="#immersive-learning"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  Immersive Learning
                </a>
                <a
                  href="#learning-technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  <Cpu className="w-4 h-4 text-gray-700" />
                  Learning Technology
                </a>
              </div>
            )}
          </div>

          {/* Mobile Action Button */}
          <div className="pt-3 border-t border-gray-100 mt-2">
            <a
              href="#book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;