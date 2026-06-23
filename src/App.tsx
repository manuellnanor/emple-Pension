"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INSURANCE_PLANS } from "./data";
import type { InsurancePlan } from "./types";
import {
  getProductPageByPlanId,
  getProductPageBySlug,
  getProductPlan,
  PRODUCT_SLUGS,
} from "./productPages";

import Header from "./components/Header";
import PlanCard from "./components/PlanCard";
import EmpleWayPage from "./components/EmpleWayPage";
import ClaimsPage from "./components/ClaimsPage";
import BranchesPage from "./components/BranchesPage";
import DownloadsPage from "./components/DownloadsPage";
import ContactUsPage from "./components/ContactUsPage";
import CareerPage from "./components/CareerPage";
import VacanciesPage from "./components/VacanciesPage";
import ProductDetailPage from "./components/ProductDetailPage";
import OurOfferingPage from "./components/OurOfferingPage";
import MakeClaimPage from "./components/MakeClaimPage";
import TrackClaimPage from "./components/TrackClaimPage";
import FeedbackPage from "./components/FeedbackPage";
import ProviderNetworkPage, {
  type ProviderPlanSlug,
} from "./components/ProviderNetworkPage";
import PensionProductPage from "./components/PensionProductPage";
import { getPensionProductBySlug } from "./pensionProducts";

// Beautiful Icons
import {
  Check,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Mail,
  ShieldCheck,
  Zap,
  X,
  Bell
} from "lucide-react";

export type AppView = "landing" | "products" | "our-offering" | "product-detail" | "pension-product" | "provider-network" | "claims" | "make-claim" | "track-claim" | "emple-way" | "branches" | "downloads" | "contact" | "feedback" | "careers" | "vacancies";

const viewRoutes: Record<AppView, string> = {
  landing: "/",
  products: "/products",
  "our-offering": "/products/our-offering",
  "product-detail": "/products",
  "pension-product": "/products",
  "provider-network": "/provider-network/champagne",
  claims: "/claims",
  "make-claim": "/claims/make-a-claim",
  "track-claim": "/claims/track-a-claim",
  "emple-way": "/emple-way",
  branches: "/branches",
  downloads: "/downloads",
  contact: "/contact",
  feedback: "/pensions-feedback",
  careers: "/careers",
  vacancies: "/vacancies",
};

const routeViews: Record<string, AppView> = {
  "/": "landing",
  "/products": "products",
  "/products/our-offering": "our-offering",
  "/claims": "claims",
  "/claims/make-a-claim": "make-claim",
  "/claims/track-a-claim": "track-claim",
  "/emple-way": "emple-way",
  "/branches": "branches",
  "/downloads": "downloads",
  "/contact": "contact",
  "/pensions-feedback": "feedback",
  "/careers": "careers",
  "/vacancies": "vacancies",
};

interface AppProps {
  initialView?: AppView;
  initialProductSlug?: string;
  initialProviderPlan?: ProviderPlanSlug;
}

const getProductRouteState = (pathname: string) => {
  if (!pathname.startsWith("/products/")) return null;
  const slug = pathname.replace("/products/", "").split("/")[0];
  const page = getProductPageBySlug(slug);
  return page ? page.planId : null;
};

export default function App({
  initialView = "landing",
  initialProductSlug,
  initialProviderPlan = "champagne",
}: AppProps) {
  const initialProductPage = initialProductSlug ? getProductPageBySlug(initialProductSlug) : null;
  const initialPensionPage = initialProductSlug ? getPensionProductBySlug(initialProductSlug) : null;
  const [currentView, setCurrentView] = useState<AppView>(initialProductPage ? "product-detail" : initialPensionPage ? "pension-product" : initialView);
  const [currentProductId, setCurrentProductId] = useState<string | null>(initialProductPage?.planId ?? null);
  const [currentPensionSlug, setCurrentPensionSlug] = useState<string | null>(initialPensionPage?.slug ?? null);
  const [currentProviderPlan, setCurrentProviderPlan] = useState<ProviderPlanSlug>(initialProviderPlan);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Fast feedback contact state
  const [isAdvisorDrawerOpen, setIsAdvisorDrawerOpen] = useState(false);
  const [advisorName, setAdvisorName] = useState("");
  const [advisorPhone, setAdvisorPhone] = useState("");
  const [advisorNotes, setAdvisorNotes] = useState("");

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  useEffect(() => {
    const handlePopState = () => {
      const providerMatch = window.location.pathname.match(/^\/provider-network\/(champagne|burgundy|turquoise|orange|beige)$/);
      if (providerMatch) {
        setCurrentProviderPlan(providerMatch[1] as ProviderPlanSlug);
        setCurrentView("provider-network");
        setCurrentProductId(null);
        return;
      }
      const productId = getProductRouteState(window.location.pathname);
      const slug = window.location.pathname.startsWith("/products/") ? window.location.pathname.replace("/products/", "").split("/")[0] : "";
      const pensionPage = getPensionProductBySlug(slug);
      setCurrentProductId(productId);
      setCurrentPensionSlug(pensionPage?.slug ?? null);
      setCurrentView(productId ? "product-detail" : pensionPage ? "pension-product" : routeViews[window.location.pathname] ?? "landing");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason instanceof Event) {
        event.preventDefault();
        console.warn("Handled browser event promise rejection:", event.reason.type);
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    return () => window.removeEventListener("unhandledrejection", handleUnhandledRejection);
  }, []);

  const handleViewChange = (view: AppView) => {
    setCurrentView(view);
    if (view !== "product-detail") {
      setCurrentProductId(null);
    }
    if (view !== "pension-product") setCurrentPensionSlug(null);
    const nextPath = viewRoutes[view];
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, "", nextPath);
    }
  };

  const handleSelectPlan = (plan: InsurancePlan) => {
    const slug = PRODUCT_SLUGS[plan.id];
    if (!slug) return;
    setCurrentProductId(plan.id);
    setCurrentView("product-detail");
    const nextPath = `/products/${slug}`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, "", nextPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenOffering = () => {
    handleViewChange("our-offering");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePensionProductChange = (slug: string) => {
    const page = getPensionProductBySlug(slug);
    if (!page) return;
    setCurrentProductId(null);
    setCurrentPensionSlug(slug);
    setCurrentView("pension-product");
    window.history.pushState(null, "", `/products/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProviderPlanChange = (plan: ProviderPlanSlug) => {
    setCurrentProviderPlan(plan);
    setCurrentProductId(null);
    setCurrentView("provider-network");
    const nextPath = `/provider-network/${plan}`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, "", nextPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCalculatorWithPlan = (planId: string) => {
    const selectedPlan = INSURANCE_PLANS.find(p => p.id === planId);
    if (selectedPlan) {
      setAdvisorNotes(`Hi emPLE, I am interested in obtaining a custom premium quote for: "${selectedPlan.title}". Please contact me with quotation estimates.`);
    } else {
      setAdvisorNotes(`Hi emPLE, I am interested in requesting premium quotes.`);
    }
    setIsAdvisorDrawerOpen(true);
  };

  const handleExploreClick = () => {
    handleViewChange("landing");
    setTimeout(() => {
      const section = document.getElementById("plans-list-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleAdvisorSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!advisorName || !advisorPhone) {
      alert("Please provide your name and contact number.");
      return;
    }
    setIsAdvisorDrawerOpen(false);
    triggerToast(`Success! Your advisor request for ${advisorName} is queued. We'll speak soon!`);
    // reset
    setAdvisorName("");
    setAdvisorPhone("");
    setAdvisorNotes("");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-emerald-100 selection:text-emerald-800 overflow-x-hidden">
      
      {/* Dynamic Header */}
      <Header
        currentView={currentView}
        onViewChange={handleViewChange}
        onProviderPlanChange={handleProviderPlanChange}
        onContactClick={() => setIsAdvisorDrawerOpen(true)}
        onPensionProductChange={handlePensionProductChange}
      />

      {currentView === "landing" && (
        <>
          <section
            id="home"
            className="mt-[81px] flex flex-col overflow-hidden bg-[#fbfaf8] scroll-mt-[81px]"
          >
            <img
              src="/assets/images/pension-hero.png"
              alt="Retirees enjoying a celebration together"
              className="order-2 h-[360px] w-full object-cover object-[center_44%] sm:h-[460px] lg:h-[530px]"
            />

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-1 mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-20 lg:py-[76px]"
            >
              <div>
                <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.08em] text-gray-500">
                  Pensions Trust
                </p>
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
                  }}
                  className="max-w-[680px] overflow-hidden font-display text-[38px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#17283c] sm:text-[48px] lg:text-[52px]"
                >
                  {[
                    "We Provide You Financial",
                    "Peace Of Mind For a",
                    "Dignified Retirement",
                  ].map((line) => (
                    <motion.span
                      key={line}
                      variants={{
                        hidden: { opacity: 0, y: 28, filter: "blur(5px)" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
              <div className="max-w-[410px] lg:justify-self-end">
                <p className="leading-[1.75] text-[#344154]">
                  emPLE Pensions Trust Ghana is an NPRA licensed corporate trustee company to privately manage and administer pensions in Ghana.
                </p>
                <button
                  type="button"
                  onClick={() => document.getElementById("plans-list-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-[3px] bg-[#32B44A] px-9 text-[14px] font-semibold text-white transition-colors hover:bg-[#289a3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#32B44A]"
                >
                  Explore Products
                </button>
                <span className="hidden">
                Insurance isn’t only about protection— it’s about possibility. emPLE stands beside you through life’s uncertainties,
                <br className="hidden md:block" /> helping you build the future you want, every step of your journey through life.
                </span>
              </div>
            </motion.div>
          </section>

      {/* Pension products offering */}
      <section id="plans-list-section" className="border-t border-[#f1f1f1] bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[440px_minmax(0,700px)] lg:justify-between lg:gap-12">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <span className="mb-5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-400">
              Pension Plans
            </span>
            <h2 className="max-w-[420px] font-display text-[36px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#17283c] sm:text-[40px]">
              Pension Trust Products
            </h2>
            <p className="mt-5 max-w-[430px] leading-[1.75] text-gray-500">
              emPLE Pensions Trust Ghana has an unmatched size, scale and scope and is propelled globally by a brand endorsed by over 10 million clients across Africa and beyond.
            </p>
          </div>

          <div className="w-full max-w-[700px] space-y-5 lg:justify-self-end">
            {[
              {
                title: "Personal Pensions",
                slug: "corporate-personal-pensions",
                image: "/assets/images/personal-pensions.png",
                alt: "A pension advisor meeting with a client",
                description:
                  "The plan is a retirement plan that helps employees save securely for retirement through mandatory and voluntary pension contributions.",
              },
              {
                title: "Occupational Pensions",
                slug: "occupational-pensions",
                image: "/assets/images/occupational-pensions.png",
                alt: "A family preparing for a secure retirement",
                description:
                  "A mandatory Tier 2 pension scheme that secures long-term retirement savings for employees. Contributions are professionally managed and paid as a lump sum at retirement or under qualifying conditions.",
              },
              {
                title: "Provident Fund",
                slug: "provident-fund",
                image: "/assets/images/provident-fund.png",
                alt: "A family enjoying financial peace of mind",
                description:
                  "A voluntary retirement savings plan licensed by the NPRA to provide additional financial security beyond statutory pensions.",
              },
              {
                title: "Smart Save",
                slug: "smartsave-personal-pensions",
                image: "/assets/images/smart-save.png",
                alt: "A family planning and saving together",
                description:
                  "This is designed for individuals to build a secure retirement by their own terms.",
              },
              {
                title: "Admin and Trustee",
                slug: "admin-trustee-services",
                image: "/assets/images/admin-trustee.png",
                alt: "Professionals managing pension savings",
                description:
                  "Built to protect pension benefits by managing and supervising. Also ensure benefits are paid.",
              },
            ].map((product) => (
              <article
                key={product.title}
                className="group grid h-[540px] overflow-hidden border border-[#f1f1f1] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md sm:h-[500px] md:h-[300px] md:grid-cols-[42%_58%]"
              >
                <div className="h-[245px] overflow-hidden sm:h-[225px] md:h-full">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-0 flex-col items-start bg-[#fcfbfa] p-7 transition-colors duration-300 group-hover:bg-[#faf8f5] sm:p-8">
                  <div className="mb-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] bg-[#32B44A] text-white shadow-sm">
                    <Zap size={17} fill="currentColor" />
                  </div>
                  <h3 className="font-display text-[20px] font-semibold leading-tight text-[#17283c]">
                    {product.title}
                  </h3>
                  <p className="mt-auto line-clamp-4 pt-5 leading-[1.65] text-gray-600">
                    {product.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => handlePensionProductChange(product.slug)}
                    className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#17283c] transition-all group-hover:translate-x-0.5 group-hover:text-[#32B44A] hover:text-[#32B44A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#32B44A]"
                    aria-label={`Learn more about ${product.title}`}
                  >
                    Learn More
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why emPLE Section */}
      <section id="emple-way" className="py-20 md:py-24 border-t border-[#f1f1f1] bg-[#fafafa]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual block on Left Side */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-emerald-100 rounded-2xl -rotate-1 scale-95 opacity-50 blur-lg" />
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-white overflow-hidden aspect-[4/3] shadow-md border border-[#f1f1f1]"
              >
                <img
                  src="/assets/images/why-emple-pensions.jpg"
                  alt="Why emPLE Meeting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Bullets layout on Right Side */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[12px] font-bold text-gray-400 tracking-widest uppercase block mb-2">
                  WHY US
                </span>
                <h2 className="text-[32px] sm:text-[38px] leading-[1.12] font-bold font-display tracking-tight text-gray-950 mb-4">
                  Why emPLE Pensions?
                </h2>
                <p className="text-[14px] text-gray-500 leading-relaxed font-sans max-w-xl">
                  Our pension plans give you the peace of mind to live confidently, knowing you’re supported when it matters most. There’s an emPLE Pensions plan made just for you.
                </p>
              </div>

              {/* Grid 2 Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4 border-t border-[#f1f1f1]">
                {/* Bullet 1 */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-5 h-5 rounded-full bg-gray-950 flex items-center justify-center text-white flex-shrink-0">
                      <Check size={11} className="stroke-[3]" />
                    </div>
                    <h4 className="text-[14px] font-extrabold text-gray-950">Protection + Possibility</h4>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed pl-7.5">
                    Cover that helps you recover from setbacks and pursue your absolute medium-term milestones safely.
                  </p>
                </div>

                {/* Bullet 2 */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-5 h-5 rounded-full bg-gray-950 flex items-center justify-center text-white flex-shrink-0">
                      <Check size={11} className="stroke-[3]" />
                    </div>
                    <h4 className="text-[14px] font-extrabold text-gray-950">Trusted by thousands</h4>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed pl-7.5">
                    Backed by stellar trust from over 550,000 policyholders and corporate accounts across Ghana.
                  </p>
                </div>

                {/* Bullet 3 */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-5 h-5 rounded-full bg-gray-950 flex items-center justify-center text-white flex-shrink-0">
                      <Check size={11} className="stroke-[3]" />
                    </div>
                    <h4 className="text-[14px] font-extrabold text-gray-950">Fast, Fair, Transparent</h4>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed pl-7.5">
                    We settle valid claims rapidly within 3 to 5 working days, so you focus strictly on family support.
                  </p>
                </div>

                {/* Bullet 4 */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-5 h-5 rounded-full bg-gray-950 flex items-center justify-center text-white flex-shrink-0">
                      <Check size={11} className="stroke-[3]" />
                    </div>
                    <h4 className="text-[14px] font-extrabold text-gray-950">Built for You</h4>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed pl-7.5">
                    Flexible contribution models and tailored options that fit your lifetime budgets as you scale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cream Yellow Action Banner precisely matching screenshot */}
      <section className="bg-[#fefce8] py-16 md:py-20 border-t border-b border-[#f1f1f1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
            <div className="space-y-2.5 max-w-2xl">
              <span className="text-[11px] font-bold text-gray-400 tracking-wider block uppercase">
                OUR PENSION PLANS
              </span>
              <h2 className="text-[32px] sm:text-[38px] leading-[1.12] font-bold font-display tracking-tight text-gray-900">
                Take the first step toward a secure and dignified retirement.
              </h2>
              <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed font-sans">
                Our pension solutions provide flexible, dependable ways to build long-term savings, helping you plan confidently and protect your financial future throughout retirement.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                id="cta-explore-btn"
                onClick={handleExploreClick}
                className="px-6 py-3 bg-[#32B44A] hover:bg-[#059669] text-white text-[13px] font-bold tracking-wider rounded-md transition-all duration-300 shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 font-montserrat"
              >
                Explore Pension Plans
              </button>
              
              <button
                id="cta-talk-btn"
                onClick={() => setIsAdvisorDrawerOpen(true)}
                className="px-6 py-3 bg-transparent hover:bg-black/5 text-gray-800 text-[13px] font-semibold tracking-wider rounded-md transition-all duration-200 cursor-pointer"
              >
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Finder Area */}
        </>
      )}

      {currentView === "products" && (
        <>
          <section className="bg-white pt-[150px] sm:pt-[170px] pb-16 sm:pb-20">
            <div className="max-w-[1120px] mx-auto px-6">
              <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-16 lg:items-end">
                <div className="lg:col-span-7">
                  <span className="mb-5 block text-[11px] font-semibold tracking-[0.08em] text-gray-400 uppercase">
                    Health Products
                  </span>
                  <h1
                    id="products-view-heading"
                    className="max-w-[580px] text-[42px] sm:text-[54px] lg:text-[58px] leading-[1.08] font-bold font-display tracking-[-0.025em] text-gray-950"
                  >
                    Protection for your people and product
                  </h1>
                </div>
                <div className="lg:col-span-5 lg:pb-2">
                  <p className="max-w-[390px] text-[14px] leading-[1.75] text-gray-500">
                    emPLE Pensions offers a wide array of bespoke products and services for groups, corporate organizations, and families.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            aria-label="emPLE Pensions consultation"
            className="h-[330px] sm:h-[430px] lg:h-[510px] bg-[url('/assets/images/products-pensions-hero.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed"
          >
            <span className="sr-only">A healthcare professional discussing care with a patient.</span>
          </section>

          <section id="products-plans-list" className="bg-white py-16 sm:py-20">
            <div className="max-w-[1120px] mx-auto px-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
                <div className="lg:col-span-4 lg:pr-5">
                  <span className="mb-4 block text-[11px] font-semibold tracking-[0.08em] text-gray-400 uppercase">
                    Health Plans
                  </span>
                  <h2 className="max-w-[330px] text-[32px] sm:text-[38px] leading-[1.13] font-bold font-display tracking-tight text-gray-950">
                    Our 5 Bespoke, Colorful Healthcare Products
                  </h2>
                  <p className="mt-5 max-w-[350px] text-[13px] leading-[1.75] text-gray-500">
                    emPLE Pensions provides dependable retirement solutions designed to help individuals and organizations build lasting financial security.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <button
                    type="button"
                    onClick={handleOpenOffering}
                    className="group grid w-full grid-cols-1 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#32B44A] md:grid-cols-2"
                    aria-label="Learn more about Our Offering"
                  >
                    <div className="relative min-h-[300px] overflow-hidden">
                      <img
                        src="/assets/images/cash_plan_plus.png"
                        alt="Health insurance consultation"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex min-h-[300px] flex-col items-start justify-between bg-[#f7f8f7] p-8 sm:p-10">
                      <div>
                        <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-sm bg-[#32B44A] text-white shadow-sm">
                          <Zap size={15} fill="currentColor" />
                        </div>
                        <h3 className="mb-6 text-[21px] font-semibold leading-tight text-gray-950">
                          Our Offering
                        </h3>
                        <p className="max-w-[290px] text-[13px] font-normal leading-[1.75] text-gray-500">
                          A top-tier health insurance plan offering the highest level of benefits, flexibility, and premium care coverage.
                        </p>
                      </div>
                      <span className="mt-8 inline-flex items-center space-x-1 text-[12px] font-semibold tracking-wide text-gray-800 transition-colors group-hover:text-[#32B44A]">
                        <span>Learn More</span>
                        <ArrowUpRight size={13} className="ml-1" />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white pt-4 pb-20 sm:pt-10 sm:pb-28">
            <div className="max-w-[1120px] mx-auto px-6">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/assets/images/why-emple-pensions.jpg"
                      alt="emPLE Pensions advisor presenting to a client"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6 lg:pl-3">
                  <span className="mb-4 block text-[11px] font-semibold tracking-[0.08em] text-gray-400 uppercase">
                    Why Us
                  </span>
                  <h2 className="text-[32px] sm:text-[38px] leading-[1.12] font-bold font-display tracking-tight text-gray-950">
                    Why emPLE Pensions?
                  </h2>
                  <p className="mt-5 max-w-[560px] text-[13px] leading-[1.75] text-gray-500">
                    Our pension plans give you the peace of mind to live confidently, knowing you’re supported when it matters most. There’s an emPLE Pensions plan made just for you.
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {[
                      ["Protection + Possibility", "Care that helps you stay healthy, bounce back from illness, and keep moving toward your goals."],
                      ["Trusted by Millions", "Over 18,000 subscribers across Ghana."],
                      ["Fast, Fair, Transparent", "Most claims settled within 3–5 working days."],
                      ["Built for You", "Flexible health plans and benefits that fit your lifestyle, needs, and goals."],
                    ].map(([title, description]) => (
                      <div key={title}>
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white">
                            <Check size={11} className="stroke-[3]" />
                          </div>
                          <h3 className="text-[13px] font-semibold text-gray-900">{title}</h3>
                        </div>
                        <p className="mt-3 pl-[30px] text-[12px] leading-[1.7] text-gray-500">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {currentView === "product-detail" && currentProductId && (() => {
        const productPage = getProductPageByPlanId(currentProductId);
        const productPlan = getProductPlan(currentProductId);

        if (!productPage || !productPlan) {
          return null;
        }

        return (
          <ProductDetailPage
            plan={productPlan}
            page={productPage}
            onTalkToAdvisor={handleOpenCalculatorWithPlan}
            onComparePlans={() => {
              handleViewChange("products");
              setTimeout(() => {
                document.getElementById("products-plans-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 100);
            }}
          />
        );
      })()}

      {currentView === "pension-product" && currentPensionSlug && (() => {
        const page = getPensionProductBySlug(currentPensionSlug);
        return page ? <PensionProductPage page={page} /> : null;
      })()}

      {currentView === "our-offering" && <OurOfferingPage />}

      {currentView === "provider-network" && (
        <ProviderNetworkPage plan={currentProviderPlan} />
      )}

      {currentView === "emple-way" && (
        <EmpleWayPage onContactClick={() => setIsAdvisorDrawerOpen(true)} />
      )}

      {currentView === "claims" && (
        <ClaimsPage
          onMakeClaim={() => {
            handleViewChange("make-claim");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onTrackClaim={() => {
            handleViewChange("track-claim");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}

      {currentView === "make-claim" && (
        <MakeClaimPage />
      )}

      {currentView === "track-claim" && (
        <TrackClaimPage />
      )}

      {currentView === "branches" && (
        <BranchesPage />
      )}

      {currentView === "downloads" && (
        <DownloadsPage />
      )}

      {currentView === "contact" && (
        <ContactUsPage
          onFeedbackClick={() => {
            handleViewChange("feedback");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}

      {currentView === "feedback" && (
        <FeedbackPage />
      )}

      {currentView === "careers" && (
        <CareerPage
          onViewVacancies={() => {
            handleViewChange("vacancies");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}

      {currentView === "vacancies" && (
        <VacanciesPage />
      )}

      {/* Deep Rich Green Detailed Footer matching design layouts */}
      <footer id="claims" className="bg-[#051c0c] text-white pt-16 pb-12 font-sans border-t border-[#f1f1f1] dark-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Support Columns */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-[12px] font-bold text-[#32B44A] tracking-widest uppercase border-b border-emerald-900 pb-2">
              HELP AND SUPPORT
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] text-gray-300">
              <button 
                onClick={() => {
                  handleViewChange("branches");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} 
                className="hover:text-emerald-300 transition-colors text-left focus:outline-none cursor-pointer"
              >
                Locate a Branch
              </button>
              <button 
                onClick={() => {
                  handleViewChange("downloads");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} 
                className="hover:text-emerald-300 transition-colors text-left focus:outline-none cursor-pointer"
              >
                Downloads & Forms
              </button>
              <a href="#home" className="hover:text-emerald-300 transition-colors">About Us</a>
              <a href="#plans-list-section" className="hover:text-emerald-300 transition-colors">Digital Site Map</a>
              <a href="#privacy" className="hover:text-emerald-300 transition-colors">Privacy Information</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-[12px] font-bold text-[#32B44A] tracking-widest uppercase border-b border-emerald-900 pb-2">
              OTHER LINKS
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] text-gray-300 leading-normal">
              <a href="https://nicgh.org/" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition-colors">The National Insurance Commission</a>
              <a href="https://giba.org.gh/" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition-colors">Ghana Insurance Brokers Association</a>
              <a href="#pensions" className="hover:text-emerald-300 transition-colors">National Pension Regulatory Authority</a>
            </div>
          </div>

          {/* Careers and contact layout */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="border-b border-emerald-900 pb-3 text-[12px] font-extrabold tracking-widest text-white uppercase">
              Careers
            </h4>
            <button
              onClick={() => {
                handleViewChange("vacancies");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left text-[13px] font-medium text-white transition-colors hover:text-emerald-300 focus:outline-none"
            >
              Join Our Team
            </button>
          </div>

          {/* Direct Interactive Contacts layout */}
          <div id="footer-contact" className="md:col-span-4 space-y-7 md:-mt-2 dark-bg">
            
            {/* Call details */}
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#082816] text-[#32B44A]">
                <MessageSquare size={22} strokeWidth={1.8} />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#9fb2aa]">Contact Us</span>
                <a href="tel:+233302633933" className="block text-[23px] font-extrabold tracking-tight text-white transition-colors hover:text-emerald-300">
                  +233 30 263 3933
                </a>
              </div>
            </div>

            {/* Email layouts */}
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#082816] text-[#32B44A]">
                <Mail size={22} strokeWidth={1.8} />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#9fb2aa]">Email Us</span>
                <a href="mailto:infogh@emple.com.gh" className="block text-[17px] font-extrabold text-white transition-colors hover:text-emerald-300">
                  Infogh@emple.com.gh
                </a>
              </div>
            </div>

            {/* Social media footer integrations */}
            <div className="pt-2 space-y-4">
              <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#9fb2aa]">Follow Us</span>
              <div className="flex gap-4">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082816] transition-colors hover:bg-[#0e3a22]" aria-label="Facebook link">
                  <img src="https://img.icons8.com/ios-glyphs/30/9fb2aa/facebook-new.png" alt="" className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082816] transition-colors hover:bg-[#0e3a22]" aria-label="Instagram link">
                  <img src="https://img.icons8.com/ios-glyphs/30/9fb2aa/instagram-new.png" alt="" className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082816] transition-colors hover:bg-[#0e3a22]" aria-label="LinkedIn link">
                  <img src="https://img.icons8.com/ios-filled/30/9fb2aa/linkedin.png" alt="" className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082816] transition-colors hover:bg-[#0e3a22]" aria-label="X link">
                  <img src="https://img.icons8.com/ios-glyphs/30/9fb2aa/twitterx.png" alt="" className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Legal copyright footer band */}
        <div className="max-w-7xl mx-auto px-6 border-t border-[#f1f1f1] pt-8 mt-10 text-[11px] text-gray-400 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="space-y-1.5 max-w-xl">
            <p>
              emPLE Ghana © 25. All Rights Reserved.
            </p>
            <p className="leading-relaxed">
              Omnipotent House, 10 Dzorwulu Extension (N1 Highway Road), PMB CT 456, Cantonments, Accra, Ghana. Licensed insurer under NIC regulations.
            </p>
          </div>
          <div className="flex space-x-4 text-emerald-400/80 font-medium">
            <a href="#terms" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* Quick Advisor Request slide out modal */}
      <AnimatePresence>
        {isAdvisorDrawerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdvisorDrawerOpen(false)}
              className="absolute inset-0 bg-[#022c22]/50 backdrop-blur-xs"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.45 }}
              className="relative w-full max-w-md h-full bg-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#f1f1f1] pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-emerald-50 text-[#32B44A] rounded">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h3 className="font-sans text-[16px] font-bold text-gray-900">Request Advisor Session</h3>
                      <p className="text-[11px] text-gray-500">Scheduled personal consultation consultation</p>
                    </div>
                  </div>
                  
                  <button
                    id="btn-close-advisor"
                    onClick={() => setIsAdvisorDrawerOpen(false)}
                    className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>

                <form onSubmit={handleAdvisorSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="adv-name-input" className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">Your Full Name</label>
                    <input
                      id="adv-name-input"
                      type="text"
                      required
                      placeholder="e.g. Samuel Osei"
                      value={advisorName}
                      onChange={(e) => setAdvisorName(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-[#f1f1f1] text-sm rounded focus:outline-none focus:border-[#32B44A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="adv-phone-input" className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">Mobile Phone Number</label>
                    <input
                      id="adv-phone-input"
                      type="tel"
                      required
                      placeholder="e.g. +233 55 123 4567"
                      value={advisorPhone}
                      onChange={(e) => setAdvisorPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-[#f1f1f1] text-sm rounded focus:outline-none focus:border-[#32B44A] font-mono"
                    />
                  </div>

                  <div>
                    <label htmlFor="adv-notes" className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1.5">Message / Selected plan (Optional)</label>
                    <textarea
                      id="adv-notes"
                      rows={3}
                      placeholder="Specify your insurance goals or required coverage limits..."
                      value={advisorNotes}
                      onChange={(e) => setAdvisorNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-[#f1f1f1] text-xs rounded focus:outline-none focus:border-[#32B44A] font-sans"
                    />
                  </div>

                  <p className="text-[10px] text-gray-400 leading-normal">
                    *Our certified Health Insurance advisor will attempt to contact you on the requested telephone number within 2 business hours.
                  </p>

                  <button
                    id="adv-submit-btn"
                    type="submit"
                    className="w-full py-3 bg-[#32B44A] hover:bg-[#059669] text-white text-xs font-bold rounded-md transition-all duration-300 shadow-sm hover:shadow"
                  >
                    Register Request
                  </button>
                </form>
              </div>

              <div className="border-t border-[#f1f1f1] pt-5 text-center">
                <span className="text-[11px] text-gray-400">
                  Or call directly: <span className="font-bold text-emerald-800 font-mono">+233 30 263 3933</span>
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating alert toast notifications absolute */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 z-50 bg-[#064e3b] text-white px-5 py-4 shadow-2xl border border-[#f1f1f1] flex items-start space-x-3.5"
          >
            <div className="p-1.5 bg-[#32B44A]/25 text-[#32B44A] rounded-full mt-0.5">
              <Bell size={16} />
            </div>
            <div>
              <h5 className="text-[12px] font-bold text-[#32B44A] uppercase tracking-wide">System Notice</h5>
              <p className="text-xs text-emerald-100 mt-1 leading-normal">
                {toastMessage}
              </p>
            </div>
            <button
               onClick={() => setToastMessage(null)}
               className="text-white/50 hover:text-white ml-auto"
            >
              <X size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
