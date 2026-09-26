import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const hasDarkHero =
    location.pathname === '/' ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/career' ||
    location.pathname === '/privacy' ||
    location.pathname === '/terms' ||
    location.pathname === '/portfolio' ||
    location.pathname.startsWith('/portfolio/') ||
    location.pathname === '/services' ||
    location.pathname.startsWith('/services/') ||
    location.pathname === '/products' ||
    location.pathname === '/training-modules' ||
    location.pathname === '/training-delivery' ||
    location.pathname === '/immersive-learning' ||
    location.pathname === '/learning-technology';
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

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const solid = !hasDarkHero || scrolled || mobileMenuOpen;
  const isAbout = location.pathname === '/about';
  const isContact = location.pathname === '/contact';
  const isPortfolio = location.pathname === '/portfolio';
  const isServices = location.pathname === '/services';
  const isProducts = location.pathname === '/products';
  const isTrainingModules = location.pathname === '/training-modules';
  const isTrainingDelivery = location.pathname === '/training-delivery';
  const isTraining = isTrainingModules || isTrainingDelivery;
  const isImmersiveLearning = location.pathname === '/immersive-learning';
  const isLearningTechnology = location.pathname === '/learning-technology';
  const isLearning = isImmersiveLearning || isLearningTechnology;
  const activeHash = location.hash;

  const linkBase = solid
    ? 'text-gray-600 hover:text-orange-500 hover:bg-gray-100'
    : 'text-white/90 hover:text-white hover:bg-white/10';
  const linkActive = solid
    ? 'text-orange-500 bg-orange-50'
    : 'text-orange-400 bg-white/15';
  const dropdownActive = solid
    ? 'text-orange-500 bg-orange-50'
    : 'text-orange-400 bg-white/10';

  const navClass = (active) =>
    `px-4 py-2 text-sm font-semibold transition-colors rounded-full ${
      active ? linkActive : linkBase
    }`;
  const mobileNavClass = (active) =>
    `block px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
      active
        ? 'bg-orange-50 text-orange-500'
        : 'text-gray-800 hover:bg-gray-50 hover:text-orange-500'
    }`;

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
          <Link to="/" className="flex-shrink-0 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 font-[family-name:var(--font-serif)] text-base font-bold tracking-wide text-white">
              JF
            </div>
            <span
              className={`text-base sm:text-lg font-bold uppercase tracking-tight transition-colors duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                solid ? 'text-gray-900' : 'text-white'
              }`}
            >
              Knowledge<span className="text-orange-500"> Centre</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/about"
              className={navClass(isAbout)}
              aria-current={isAbout ? 'page' : undefined}
            >
              About Us
            </Link>

            {/* Portfolio Link */}
            <Link 
              to="/portfolio" 
              className={navClass(isPortfolio)}
              aria-current={isPortfolio ? 'page' : undefined}
            >
              Portfolio
            </Link>

            {/* Services Link */}
            <Link
              to="/services"
              className={navClass(isServices)}
              aria-current={isServices ? 'page' : undefined}
            >
              Services
            </Link>

            {/* Products Link */}
            <Link
              to="/products"
              className={navClass(isProducts)}
              aria-current={isProducts ? 'page' : undefined}
            >
              Products
            </Link>

            {/* Training Dropdown
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('training')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  activeDropdown === 'training' || isTraining ? dropdownActive : linkBase
                }`}
              >
                Training
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'training' ? 'rotate-180 text-orange-500' : solid ? 'text-gray-400' : 'text-white/50'}`} />
              </button>

              {activeDropdown === 'training' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] pt-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden grid grid-cols-3 p-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="col-span-2 grid grid-cols-1 gap-1 p-1">
                      <Link
                        to="/training-modules"
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="rounded-xl bg-gray-100 p-2.5 text-gray-700 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-orange-500">
                            Training Modules
                          </h4>
                          <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                            Customizable course modules, structured learning paths, and interactive quizzes.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/training-delivery"
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="rounded-xl bg-orange-100 p-2.5 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-orange-500">
                            Training Delivery
                          </h4>
                          <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                            Seamless instructor-led and self-paced live sessions with personalized feedback.
                          </p>
                        </div>
                      </Link>
                    </div>

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
                    </div>
                  </div>
                </div>
              )}
            </div>
            */}

            {/* Learning Dropdown
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('learning')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  activeDropdown === 'learning' || isLearning ? dropdownActive : linkBase
                }`}
              >
                Learning
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'learning' || isLearning ? 'rotate-180 text-orange-500' : solid ? 'text-gray-400' : 'text-white/50'}`} />
              </button>

              {activeDropdown === 'learning' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] pt-4">
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden grid grid-cols-3 p-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="col-span-2 grid grid-cols-1 gap-1 p-1">
                      <Link
                        to="/immersive-learning"
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="rounded-xl bg-orange-100 p-2.5 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-orange-500">
                            Immersive Learning
                          </h4>
                          <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                            Engage learners through AR/VR experiences, simulations, and gamified content.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/learning-technology"
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="rounded-xl bg-gray-100 p-2.5 text-gray-700 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                          <Cpu className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-orange-500">
                            Learning Technology
                          </h4>
                          <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                            Next-gen AI analytics, LMS integration, and automated progress tracking.
                          </p>
                        </div>
                      </Link>
                    </div>

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
                    </div>
                  </div>
                </div>
              )}
            </div>
            */}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors active:scale-95"
            >
              Contact
            </Link>
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
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavClass(isAbout)}
            aria-current={isAbout ? 'page' : undefined}
          >
            About Us
          </Link>

          <Link
            to="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavClass(isPortfolio)}
            aria-current={isPortfolio ? 'page' : undefined}
          >
            Portfolio
          </Link>

          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavClass(isServices)}
            aria-current={isServices ? 'page' : undefined}
          >
            Services
          </Link>

          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavClass(isProducts)}
            aria-current={isProducts ? 'page' : undefined}
          >
            Products
          </Link>

          {/* Mobile Training Dropdown
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
                <Link
                  to="/training-delivery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl p-2.5 text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  <GraduationCap className="h-4 w-4 text-orange-500" />
                  Training Delivery
                </Link>
                <Link
                  to="/training-modules"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl p-2.5 text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  <BookOpen className="h-4 w-4 text-gray-700" />
                  Training Modules
                </Link>
              </div>
            )}
          </div>
          */}

          {/* Mobile Learning Dropdown
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
                <Link
                  to="/immersive-learning"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl p-2.5 text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  <Sparkles className="h-4 w-4 text-orange-500" />
                  Immersive Learning
                </Link>
                <Link
                  to="/learning-technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl p-2.5 text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  <Cpu className="h-4 w-4 text-gray-700" />
                  Learning Technology
                </Link>
              </div>
            )}
          </div>
          */}

          {/* Mobile Action Button */}
          <div className="pt-3 border-t border-gray-100 mt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;