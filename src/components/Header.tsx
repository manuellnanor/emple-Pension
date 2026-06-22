import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import type { AppView } from "../App";
import type { ProviderPlanSlug } from "./ProviderNetworkPage";

interface HeaderProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  onProviderPlanChange: (plan: ProviderPlanSlug) => void;
  onContactClick: () => void;
  onPensionProductChange: (slug: string) => void;
}

export default function Header({ currentView, onViewChange, onProviderPlanChange, onContactClick, onPensionProductChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCareerMenuOpen, setIsCareerMenuOpen] = useState(false);
  const [isProviderMenuOpen, setIsProviderMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const [isCorporateMenuOpen, setIsCorporateMenuOpen] = useState(false);
  const [isIndividualMenuOpen, setIsIndividualMenuOpen] = useState(false);
  const careerCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const providerCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (careerCloseTimer.current) {
        clearTimeout(careerCloseTimer.current);
      }
      if (providerCloseTimer.current) {
        clearTimeout(providerCloseTimer.current);
      }
      if (resourcesCloseTimer.current) {
        clearTimeout(resourcesCloseTimer.current);
      }
    };
  }, []);

  const menuItems = [
    { label: "PRODUCTS", href: "#products" },
    { label: "CLAIMS", href: "#claims" },
    { label: "BRANCHES", href: "#branches" },
    { label: "emPLE WAY", href: "#emple-way" },
    { label: "DOWNLOADS", href: "#downloads" },
  ];

  const providerPlans: { label: string; slug: ProviderPlanSlug }[] = [
    { label: "Champagne Plan", slug: "champagne" },
    { label: "Burgundy Plan", slug: "burgundy" },
    { label: "Turquoise Plan", slug: "turquoise" },
    { label: "Orange Plan", slug: "orange" },
    { label: "Beige Plan", slug: "beige" },
  ];

  const corporateProducts = [
    { label: "Personal Pensions", slug: "corporate-personal-pensions" },
    { label: "Occupational pensions", slug: "occupational-pensions" },
    { label: "Provident fund", slug: "provident-fund" },
    { label: "Admin and trustee services", slug: "admin-trustee-services" },
    { label: "How to enroll", slug: "how-to-enroll" },
  ];

  const individualProducts = [
    { label: "emPLE Personal Pensions", slug: "emple-personal-pensions" },
    { label: "Smartsave personal pensions", slug: "smartsave-personal-pensions" },
  ];

  const handleNavClick = (href: string, label: string) => {
    setIsMobileMenuOpen(false);
    setIsCareerMenuOpen(false);
    setIsProviderMenuOpen(false);
    setIsResourcesMenuOpen(false);
    setIsCorporateMenuOpen(false);
    setIsIndividualMenuOpen(false);
    if (label === "emPLE WAY") {
      onViewChange("emple-way");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "PRODUCTS" || label === "PENSIONS") {
      onViewChange("products");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "PROVIDER NETWORK") {
      onViewChange("landing");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "CLAIMS" || label === "WITHDRAWAL") {
      onViewChange("claims");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "BRANCHES") {
      onViewChange("branches");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "DOWNLOADS") {
      onViewChange("downloads");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "CONTACT US") {
      onViewChange("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "CAREER") {
      onViewChange("careers");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "VACANCIES") {
      onViewChange("vacancies");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onViewChange("landing");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 120);
    }
  };

  const openCareerMenu = () => {
    if (careerCloseTimer.current) {
      clearTimeout(careerCloseTimer.current);
    }
    setIsCareerMenuOpen(true);
  };

  const queueCareerMenuClose = () => {
    if (careerCloseTimer.current) {
      clearTimeout(careerCloseTimer.current);
    }
    careerCloseTimer.current = setTimeout(() => {
      setIsCareerMenuOpen(false);
    }, 450);
  };

  const openProviderMenu = () => {
    if (providerCloseTimer.current) {
      clearTimeout(providerCloseTimer.current);
    }
    setIsProviderMenuOpen(true);
  };

  const queueProviderMenuClose = () => {
    if (providerCloseTimer.current) {
      clearTimeout(providerCloseTimer.current);
    }
    providerCloseTimer.current = setTimeout(() => {
      setIsProviderMenuOpen(false);
    }, 350);
  };

  const handleProviderPlanClick = (plan: ProviderPlanSlug) => {
    setIsProviderMenuOpen(false);
    setIsMobileMenuOpen(false);
    onProviderPlanChange(plan);
  };

  const openResourcesMenu = () => {
    if (resourcesCloseTimer.current) clearTimeout(resourcesCloseTimer.current);
    setIsResourcesMenuOpen(true);
  };

  const queueResourcesMenuClose = () => {
    if (resourcesCloseTimer.current) clearTimeout(resourcesCloseTimer.current);
    resourcesCloseTimer.current = setTimeout(() => setIsResourcesMenuOpen(false), 350);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[27px] bg-[#052e16] text-white border-b border-white/5">
        <div className="h-full max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide">
            <Phone size={11} className="text-emerald-400" />
            <span>
              <span className="hidden sm:inline">Talk To Us: </span>
              <a href="tel:+233302633933" className="text-emerald-300 hover:underline">
                +233 30 263 3933
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6 font-montserrat text-[13px] font-medium tracking-wider text-emerald-100/90">
            <button onClick={() => handleNavClick("#home", "HOME")} className="hover:text-emerald-300 transition-colors">
              HOME
            </button>
            <a
              href="https://emplelife-ghana.vercel.app/"
              className="hover:text-emerald-300 transition-colors"
            >
              LIFE
            </a>
            <button onClick={() => handleNavClick("#plans-list-section", "PRODUCTS")} className="hover:text-emerald-300 transition-colors">
              PENSIONS
            </button>
          </div>
        </div>
      </div>

      <div className={`w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}>
        <div className="h-[54px] max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => handleNavClick("#home", "HOME")} className="flex items-center cursor-pointer text-left focus:outline-none">
            <img
              src="/assets/images/emple-pensions-logo.png"
              alt="emPLE Pension Trust"
              className="h-[40px] w-auto object-contain"
            />
          </button>

          <nav className="ml-auto hidden items-center gap-7 lg:flex">
            <div
              onMouseEnter={openProviderMenu}
              onMouseLeave={queueProviderMenuClose}
              onFocus={openProviderMenu}
              onBlur={queueProviderMenuClose}
              className={`relative inline-flex cursor-pointer items-center font-montserrat text-[13px] font-medium tracking-normal hover:text-[#32B44A] ${
                currentView === "products" || currentView === "our-offering" || currentView === "product-detail" ? "text-[#32B44A]" : "text-[#15351f]"
              }`}
            >
              <button
                onClick={() => setIsProviderMenuOpen((open) => !open)}
                aria-expanded={isProviderMenuOpen}
                aria-haspopup="menu"
                className="inline-flex items-center cursor-pointer"
              >
                PRODUCTS
                <ChevronDown size={11} className={`ml-1 transition-transform ${isProviderMenuOpen ? "rotate-180" : ""}`} />
              </button>
              {isProviderMenuOpen && (
                <div
                  role="menu"
                  onMouseEnter={openProviderMenu}
                  onMouseLeave={queueProviderMenuClose}
                  className="absolute left-0 top-full z-50 w-[230px] pt-[17px]"
                >
                  <div className="border border-gray-100 bg-white shadow-md">
                    <div
                      className="relative"
                      onMouseEnter={() => setIsCorporateMenuOpen(true)}
                      onMouseLeave={() => setIsCorporateMenuOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setIsCorporateMenuOpen((open) => !open)}
                        className="flex w-full items-center justify-between border-b border-gray-200 px-5 py-4 text-left font-montserrat text-[12px] font-medium text-[#15351f] hover:bg-gray-50 hover:text-[#32B44A]"
                      >
                        CORPORATE SOLUTIONS
                        <span>›</span>
                      </button>
                      {isCorporateMenuOpen && (
                        <div className="absolute left-full top-0 w-[240px] border border-gray-100 bg-white shadow-md">
                          {corporateProducts.map((item) => (
                            <button
                              key={item.slug}
                              onClick={() => onPensionProductChange(item.slug)}
                              className="block w-full border-b border-gray-200 px-5 py-4 text-left font-montserrat text-[12px] text-[#15351f] last:border-b-0 hover:bg-gray-50 hover:text-[#32B44A]"
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      className="relative"
                      onMouseEnter={() => setIsIndividualMenuOpen(true)}
                      onMouseLeave={() => setIsIndividualMenuOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setIsIndividualMenuOpen((open) => !open)}
                        className="flex w-full items-center justify-between px-5 py-4 text-left font-montserrat text-[12px] font-medium text-[#15351f] hover:bg-gray-50 hover:text-[#32B44A]"
                      >
                        INDIVIDUAL SOLUTIONS
                        <span>›</span>
                      </button>
                      {isIndividualMenuOpen && (
                        <div className="absolute left-full top-0 w-[240px] border border-gray-100 bg-white shadow-md">
                          {individualProducts.map((item) => (
                            <button key={item.slug} onClick={() => onPensionProductChange(item.slug)} className="block w-full border-b border-gray-200 px-5 py-4 text-left font-montserrat text-[12px] text-[#15351f] last:border-b-0 hover:bg-gray-50 hover:text-[#32B44A]">
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick("#claims", "WITHDRAWAL")} className="font-montserrat text-[13px] font-medium text-[#15351f] transition-colors hover:text-[#32B44A]">
              WITHDRAWAL
            </button>

            <div onMouseEnter={openResourcesMenu} onMouseLeave={queueResourcesMenuClose} className="relative inline-flex items-center font-montserrat text-[13px] font-medium text-[#15351f] hover:text-[#32B44A]">
              <button onClick={() => setIsResourcesMenuOpen((open) => !open)} className="inline-flex items-center">
                RESOURCES
                <ChevronDown size={11} className={`ml-1 transition-transform ${isResourcesMenuOpen ? "rotate-180" : ""}`} />
              </button>
              {isResourcesMenuOpen && (
                <div className="absolute left-0 top-full w-[190px] pt-[17px]">
                  <div className="border border-gray-100 bg-white shadow-md">
                    <a
                      href="#"
                      onClick={() => setIsResourcesMenuOpen(false)}
                      className="block w-full px-5 py-4 text-left font-montserrat text-[12px] text-[#15351f] hover:bg-gray-50 hover:text-[#32B44A]"
                    >
                      Calculator
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick("#emple-way", "emPLE WAY")} className="font-montserrat text-[13px] font-medium text-[#15351f] transition-colors hover:text-[#32B44A]">
              emPLE WAY
            </button>

            <div
              onMouseEnter={openCareerMenu}
              onMouseLeave={queueCareerMenuClose}
              onFocus={openCareerMenu}
              onBlur={queueCareerMenuClose}
              className={`relative group cursor-pointer inline-flex items-center font-montserrat text-[13px] font-medium tracking-normal ${
                currentView === "careers" || currentView === "vacancies"
                  ? "text-[#32B44A] font-medium"
                  : "text-[#15351f] hover:text-[#32B44A]"
              }`}
            >
              <button
                onClick={() => {
                  openCareerMenu();
                  handleNavClick("#careers", "CAREER");
                }}
                aria-expanded={isCareerMenuOpen}
                aria-haspopup="menu"
                className="cursor-pointer"
              >
                CAREER
              </button>
              <ChevronDown size={12} className={`ml-1 ${currentView === "careers" || currentView === "vacancies" ? "text-[#32B44A]" : "text-gray-400 group-hover:text-[#32B44A]"}`} />
              {isCareerMenuOpen && (
                <div
                  onMouseEnter={openCareerMenu}
                  onMouseLeave={queueCareerMenuClose}
                  className="absolute top-full right-0 w-40 pt-3 z-50"
                >
                  <div className="bg-white border border-gray-100 shadow-md py-1">
                    <button 
                      onClick={() => handleNavClick("#vacancies", "VACANCIES")} 
                      role="menuitem"
                      className="block w-full px-4 py-2 text-left font-montserrat text-[13px] font-medium text-gray-700 hover:bg-gray-50 hover:text-[#32B44A]"
                    >
                      Vacancies
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick("#downloads", "DOWNLOADS")} className="font-montserrat text-[13px] font-medium text-[#15351f] transition-colors hover:text-[#32B44A]">
              DOWNLOADS
            </button>

            <button
              id="nav-contact-us"
              onClick={() => handleNavClick("#footer-contact", "CONTACT US")}
              className={`font-montserrat text-[13px] font-medium tracking-normal transition-colors cursor-pointer ${
                currentView === "contact" || currentView === "feedback"
                  ? "text-[#32B44A] font-medium"
                  : "text-[#15351f] hover:text-[#32B44A]"
              }`}
            >
              CONTACT US
            </button>
          </nav>

          {/* Mobile hamburger selector */}
          <button
            id="mobile-menu-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 ml-4 text-gray-600 hover:text-[#32B44A] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay and Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-xl z-50 p-6 flex flex-col justify-start lg:hidden"
            >
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <img
                  src="/assets/images/emple-pensions-logo.png"
                  alt="emPLE Pension Trust"
                  className="h-9 w-auto object-contain"
                />
                <button
                  id="mobile-drawer-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col space-y-3 overflow-y-auto">
                <div className="border-b border-gray-50">
                  <button
                    onClick={() => setIsProviderMenuOpen((open) => !open)}
                    className="flex w-full items-center justify-between py-2 font-montserrat text-left text-[13px] font-medium tracking-wider text-gray-800 transition-colors hover:text-[#32B44A]"
                  >
                    <span>PRODUCTS</span>
                    <ChevronDown size={14} className={`transition-transform ${isProviderMenuOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isProviderMenuOpen && (
                    <div className="pb-2 pl-4">
                      <button onClick={() => setIsCorporateMenuOpen((open) => !open)} className="flex w-full items-center justify-between border-t border-gray-50 py-2.5 text-left font-montserrat text-[12px] text-gray-600 hover:text-[#32B44A]">
                        Corporate Solutions <ChevronDown size={12} className={`transition-transform ${isCorporateMenuOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isCorporateMenuOpen && (
                        <div className="pl-3">
                          {corporateProducts.map((item) => (
                            <button
                              key={item.slug}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                onPensionProductChange(item.slug);
                              }}
                              className="block w-full border-t border-gray-50 py-2 text-left text-[12px] text-gray-500 hover:text-[#32B44A]"
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                      <button onClick={() => setIsIndividualMenuOpen((open) => !open)} className="flex w-full items-center justify-between border-t border-gray-50 py-2.5 text-left font-montserrat text-[12px] text-gray-600 hover:text-[#32B44A]">
                        Individual Solutions <ChevronDown size={12} />
                      </button>
                      {isIndividualMenuOpen && (
                        <div className="pl-3">
                          {individualProducts.map((item) => (
                            <button key={item.slug} onClick={() => {
                              setIsMobileMenuOpen(false);
                              onPensionProductChange(item.slug);
                            }} className="block w-full py-2 text-left text-[12px] text-gray-500 hover:text-[#32B44A]">{item.label}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <button onClick={() => handleNavClick("#claims", "WITHDRAWAL")} className="border-b border-gray-50 py-2 text-left font-montserrat text-[13px] font-medium tracking-wider text-gray-800 hover:text-[#32B44A]">WITHDRAWAL</button>
                <div className="border-b border-gray-50">
                  <button onClick={() => setIsResourcesMenuOpen((open) => !open)} className="flex w-full items-center justify-between py-2 text-left font-montserrat text-[13px] font-medium tracking-wider text-gray-800 hover:text-[#32B44A]">
                    RESOURCES <ChevronDown size={14} />
                  </button>
                  {isResourcesMenuOpen && (
                    <div className="pb-2 pl-4">
                      <a
                        href="#"
                        onClick={() => {
                          setIsResourcesMenuOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block w-full py-2 text-left text-[12px] text-gray-600 hover:text-[#32B44A]"
                      >
                        Calculator
                      </a>
                    </div>
                  )}
                </div>
                <button onClick={() => handleNavClick("#emple-way", "emPLE WAY")} className="border-b border-gray-50 py-2 text-left font-montserrat text-[13px] font-medium tracking-wider text-gray-800 hover:text-[#32B44A]">emPLE WAY</button>
                <button
                  onClick={() => handleNavClick("#careers", "CAREER")}
                  className={`font-montserrat text-left py-2 text-[13px] font-medium tracking-wider border-b border-gray-50 transition-colors ${
                      currentView === "careers" 
                        ? "text-[#32B44A] font-semibold" 
                        : "text-gray-800 hover:text-[#32B44A] font-medium"
                  }`}
                >
                  CAREER
                </button>
                <button onClick={() => handleNavClick("#downloads", "DOWNLOADS")} className="border-b border-gray-50 py-2 text-left font-montserrat text-[13px] font-medium tracking-wider text-gray-800 hover:text-[#32B44A]">DOWNLOADS</button>
                <button
                  onClick={() => handleNavClick("#footer-contact", "CONTACT US")}
                  className={`font-montserrat text-left py-2 text-[13px] font-medium tracking-wider border-b border-gray-50 transition-colors ${
                    currentView === "contact" || currentView === "feedback" 
                      ? "text-[#32B44A] font-semibold" 
                      : "text-gray-800 hover:text-[#32B44A] font-medium"
                  }`}
                >
                  CONTACT US
                </button>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4 font-mono">
                  <Phone size={12} />
                  <span>+233 30 263 3933</span>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full text-center py-2.5 bg-[#32B44A] text-white text-xs font-bold rounded-md"
                >
                  Talk with Advisor
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
