import { Briefcase } from "lucide-react";
import { motion } from "motion/react";

interface CareerPageProps {
  onViewVacancies: () => void;
}

export default function CareerPage({ onViewVacancies }: CareerPageProps) {
  return (
    <main className="bg-white font-sans text-gray-800">
      <section className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] bg-emerald-950 overflow-hidden dark-bg scroll-mt-28 md:scroll-mt-32">
        <div className="absolute inset-0 bg-[#022c22]/35 z-10" />
        <img
          src="/assets/images/career-hero.png"
          alt="emPLE Ghana team at work"
          className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[38px] sm:text-[48px] md:text-[56px] font-bold font-display !text-white tracking-tight"
            >
              Careers
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12 md:gap-16 md:py-20">
        <div className="md:col-span-4">
          <span className="text-[12px] font-bold uppercase tracking-wide text-gray-600">Work With Us</span>
        </div>

        <div className="space-y-7 md:col-span-8">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-tight text-gray-950 sm:text-[38px]">
              Your Pursuit of Excellence starts here with emPLE Ghana.
            </h2>
            <div className="space-y-5 text-[14px] font-medium leading-7 text-gray-500">
              <p>
                Our company is for those who insist on excellence, go beyond the ordinary, strive for results and impact,
                and thrive on opportunities to learn from the best. At emPLE Ghana, we take pride in extraordinary
                performance and a learning culture that provides on-the-job coaching and access to leaders with decades of
                experience, insight, and expertise.
              </p>
              <p>
                We believe diverse teams drive stronger results and so we remain staunch believers of equal opportunity
                employment.
              </p>
              <p>
                Our values, including innovation, integrity, client focus, respect and sustainability, are most critical to
                our commercial success, as measured by our ability to empower our clients as we provide innovative
                financial solutions that ensure their freedom, security, and prosperity.
              </p>
            </div>
          </div>

          <img
            src="/assets/images/emple_why_us_1780859293681.png"
            alt="emPLE advisor meeting with a client"
            className="mt-8 aspect-[4/3] w-full max-w-2xl object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-14 md:grid-cols-12 md:gap-16 md:pb-20">
        <div className="md:col-span-4">
          <span className="text-[12px] font-bold uppercase tracking-wide text-gray-600">Discover</span>
        </div>

        <div className="max-w-2xl space-y-6 md:col-span-8">
          <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-tight text-gray-950 sm:text-[36px]">
            Life at emPLE
          </h2>
          <p className="text-[14px] font-medium leading-7 text-gray-500">
            At emPLE Ghana, we are all the way committed to the success of our people because we understand our purpose is
            embodied by them. We provide competitive benefits including health insurance, wellness programs, distinguished
            focus on learning and development, open door practice and we also ensure that our people are adequately
            resourced to deliver. We go to lengths to ensure our people feel seen, heard and valued at all times.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-10 bg-emerald-50 px-7 py-10 md:grid-cols-12 md:gap-16 md:px-9 md:py-12">
          <div className="md:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-wide text-gray-600">Open Roles</span>
          </div>

          <div className="max-w-2xl space-y-6 md:col-span-8">
            <div className="space-y-4">
              <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-tight text-gray-950 sm:text-[38px]">
                Empowering people is our way of life.
              </h2>
              <p className="text-[14px] font-medium leading-7 text-gray-500">
                We like to say here at emPLE that we endeavor to provide the best environment. All that our people are
                required to do, is very simply bring that winning attitude to the table.
              </p>
              <p className="text-[14px] font-medium leading-7 text-gray-500">
                At emPLE, we choose excellence and champion impact. Explore current opportunities and discover how you can
                learn and grow with our teams.
              </p>
            </div>

            <button
              type="button"
              onClick={onViewVacancies}
              className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-[12px] font-extrabold text-gray-900 shadow-sm transition-colors hover:bg-[#052e16] hover:text-white"
            >
              <Briefcase size={14} />
              <span>Explore Opportunities</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
