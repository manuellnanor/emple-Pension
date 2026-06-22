import { Check, Download, Phone, Plus, Users, Zap } from "lucide-react";
import type { InsurancePlan } from "../types";
import type { ProductPageContent } from "../productPages";

interface ProductDetailPageProps {
  plan: InsurancePlan;
  page: ProductPageContent;
  onTalkToAdvisor: (planId: string) => void;
  onComparePlans: () => void;
}

const CheckBullet = ({ children }: { children: string }) => (
  <li className="flex items-start gap-3 text-[13px] leading-6 text-gray-600">
    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#32B44A] text-white">
      <Check size={13} strokeWidth={3} />
    </span>
    <span>{children}</span>
  </li>
);

export default function ProductDetailPage({
  plan,
  page,
  onTalkToAdvisor,
  onComparePlans,
}: ProductDetailPageProps) {
  const title = page.displayTitle ?? plan.title;
  const isLongForm = Boolean(page.introTitle);
  const introTitle = page.introTitle ?? "";
  const introPrefix = introTitle.endsWith("Plus?")
    ? introTitle.replace(/Plus\?$/, "")
    : introTitle.replace(/\?$/, "");
  const introAccent = introTitle.endsWith("Plus?") ? "Plus?" : introTitle.endsWith("?") ? "?" : "";

  return (
    <main className="bg-white font-sans text-gray-800">
      <section className="pt-[106px] sm:pt-[112px]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="max-w-3xl text-[38px] font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-[52px] md:text-[58px]">
            {title}
          </h1>
        </div>

        <div className="relative h-[270px] w-full overflow-hidden bg-gray-100 sm:h-[360px] md:h-[430px]">
          <img
            src={page.heroImage}
            alt={title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      {isLongForm ? (
        <>
          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:gap-16 md:py-20">
            <div className="md:col-span-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Overview</span>
            </div>
            <div className="max-w-2xl space-y-5 md:col-span-8">
              <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-[36px]">
                Your savings into security and your security into possibility.
              </h2>
              <p className="text-[13px] font-medium leading-7 text-gray-500">{page.overview}</p>
            </div>
          </section>

          <section className="bg-[#f4f6f5] py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="mb-14 max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                  Why {title}?
                </span>
                <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-tight text-gray-900 sm:text-[40px]">
                  {introPrefix}
                  <span className="text-[#32B44A]">{introAccent}</span>
                </h2>
                <p className="mt-4 text-[13px] font-medium leading-7 text-gray-500">{page.introBody}</p>
              </div>

              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {page.sections.map((section, index) => (
                  <div key={section.title} className="space-y-5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#32B44A] text-white">
                      {index === 0 ? <Zap size={15} fill="currentColor" /> : <Users size={15} />}
                    </div>
                    <h3 className="text-[15px] font-extrabold uppercase tracking-wide text-gray-800">
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.items.map((item) => (
                        <CheckBullet key={item}>{item}</CheckBullet>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:gap-20 md:py-24">
            <div className="space-y-5 md:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Our Benefits</span>
              <h2 className="text-[30px] font-extrabold leading-tight tracking-tight text-gray-900 sm:text-[38px]">
                Key Benefits at a Glance
              </h2>
              <p className="max-w-xl text-[13px] font-medium leading-7 text-gray-500">
                Our people make us who we are. We are united by a shared belief that the values we live by are integrity,
                nimbleness, stewardship, professionalism, innovation, and resilience.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="divide-y divide-gray-300 border border-gray-300 bg-white">
                {page.benefitCards?.map((benefit) => (
                  <div key={benefit.title} className="min-h-[135px] p-6">
                    <Plus size={22} className="mb-10 text-[#32B44A]" strokeWidth={3} />
                    <h3 className="text-[13px] font-extrabold text-gray-800">{benefit.title}</h3>
                    <p className="mt-2 text-[11px] font-medium leading-5 text-gray-500">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 md:grid-cols-12 md:gap-16">
            <div className="space-y-4 md:col-span-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">FAQs</span>
              <h2 className="text-[28px] font-extrabold tracking-tight text-gray-900 sm:text-[36px]">
                Frequently asked questions
              </h2>
            </div>
            <div className="md:col-span-6">
              {page.faqItems?.map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-gray-100 py-3 text-[13px] font-bold text-gray-600">
                  <span className="inline-flex h-5 w-5 items-center justify-center bg-gray-800 text-white">
                    <Plus size={12} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-20">
            <div className="grid grid-cols-1 gap-8 bg-[#fffdd8] px-7 py-10 md:grid-cols-12 md:px-10">
              <div className="md:col-span-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Our Health Plans</span>
              </div>
              <div className="space-y-5 md:col-span-8">
                <h2 className="max-w-xl text-[28px] font-extrabold leading-tight tracking-tight text-gray-900 sm:text-[36px]">
                  Start building your empowered future today.
                </h2>
                <p className="max-w-xl text-[13px] font-medium leading-7 text-gray-500">
                  Our Health Insurance plans are designed to provide dependable access to quality care for routine and unexpected medical needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={onComparePlans}
                    className="rounded bg-[#32B44A] px-5 py-3 text-[12px] font-extrabold text-white transition-colors hover:bg-[#059669]"
                  >
                    Compare Health Plans
                  </button>
                  <button
                    type="button"
                    onClick={() => onTalkToAdvisor(plan.id)}
                    className="px-5 py-3 text-[12px] font-bold text-gray-700 transition-colors hover:text-[#32B44A]"
                  >
                    Talk to an Advisor
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-[24px] font-bold tracking-tight text-gray-900">Overview</h2>
              <p className="text-[14px] font-medium leading-7 text-gray-600">{page.overview}</p>
            </div>

            {page.sections.map((section) => (
              <div key={section.title} className="space-y-5">
                <h2 className="text-[24px] font-extrabold tracking-tight text-gray-900">{section.title}</h2>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <CheckBullet key={item}>{item}</CheckBullet>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-wrap gap-4 pt-1">
              <button
                type="button"
                onClick={() => onTalkToAdvisor(plan.id)}
                className="inline-flex items-center gap-2 rounded bg-[#052e16] px-7 py-3.5 text-[13px] font-extrabold text-white transition-colors hover:bg-[#32B44A]"
              >
                <Phone size={15} />
                Talk to Us
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded bg-gray-100 px-7 py-3.5 text-[13px] font-extrabold text-[#052e16] transition-colors hover:bg-emerald-50"
              >
                <Download size={15} />
                Download PDF
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
