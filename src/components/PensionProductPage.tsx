"use client";

import { useState } from "react";
import { Check, FileCheck2, Landmark, WalletCards } from "lucide-react";
import type { PensionProductContent } from "../pensionProducts";

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-[14px] leading-6 text-gray-600">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#32B44A] text-white">
          <Check size={12} strokeWidth={3} />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function PensionProductPage({ page }: { page: PensionProductContent }) {
  const [openSteps, setOpenSteps] = useState<number[]>(page.enrollment ? page.sections.map((_, index) => index) : []);

  const toggleStep = (index: number) => {
    setOpenSteps((steps) =>
      steps.includes(index) ? steps.filter((step) => step !== index) : [...steps, index]
    );
  };

  if (page.enrollment) {
    const icons = [FileCheck2, WalletCards, Landmark];
    return (
      <main className="min-h-[760px] bg-[#f4f6f9] pt-[81px]">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <h1 className="font-display text-[38px] font-semibold tracking-tight text-gray-950 sm:text-[50px]">{page.title}</h1>
          <div className="mt-14 space-y-3">
            {page.sections.map((section, index) => {
              const Icon = icons[index];
              const isOpen = openSteps.includes(index);
              return (
                <section key={section.title} className="overflow-hidden bg-[#e5e8ed]">
                  <button
                    type="button"
                    onClick={() => toggleStep(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-6 text-left"
                  >
                    <span className="flex h-7 w-7 items-center justify-center bg-[#32B44A] text-lg text-white">
                      {isOpen ? "−" : "+"}
                    </span>
                    <h2 className="text-[20px] font-semibold">{section.title}</h2>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="grid items-center gap-5 px-6 pb-6 sm:grid-cols-[120px_1fr]">
                        <div className="flex h-[110px] items-center justify-center bg-white text-[#32B44A]"><Icon size={44} /></div>
                        <p className="leading-7 text-gray-600">{section.paragraphs?.[0]}</p>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white pt-[81px]">
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <h1 className="max-w-4xl font-display text-[38px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#17283c] sm:text-[52px]">
          {page.title} {page.accent && <span className="text-[#4e9658]">{page.accent}</span>}
        </h1>
      </section>
      {page.heroImage && (
        <div
          role="img"
          aria-label={`${page.title} ${page.accent ?? ""}`}
          className="h-[310px] bg-cover bg-center bg-no-repeat sm:h-[430px] lg:h-[500px] lg:bg-fixed"
          style={{ backgroundImage: `url("${page.heroImage}")` }}
        />
      )}
      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {page.intro?.length ? (
          <div className="mb-12">
            <span className="text-[12px] font-medium text-gray-500">Overview</span>
            <div className="mt-5 space-y-4">
              {page.intro.map((paragraph) => <p key={paragraph} className="leading-7 text-gray-600">{paragraph}</p>)}
            </div>
          </div>
        ) : null}
        <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
          {page.sections.map((section, index) => (
            <section key={section.title} className={page.sections.length > 3 && index >= 2 ? "md:col-span-2" : ""}>
              <h2 className="mb-5 font-display text-[24px] font-semibold text-[#17283c]">{section.title}</h2>
              {section.items && <BulletList items={section.items} />}
              {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 leading-7 text-gray-600">{paragraph}</p>)}
            </section>
          ))}
        </div>
        <div className="mt-16 border-t border-gray-200" />
      </section>
    </main>
  );
}
