import { ArrowRight } from "lucide-react";

const offeringHighlights = [
  {
    title: "You are assured of a financially sound and secure product",
    paragraphs: [
      "Our products offer both financial stability and sustainability through prudent healthcare budgeting, ensuring continued access to healthcare cover at a reasonable rate.",
    ],
  },
  {
    title: "You have access to a comprehensive product range",
    paragraphs: [
      "Our offerings include a range of five benefit options, with flexibility within each option, to provide for you and your family’s anticipated and unexpected healthcare needs. All options are rich in benefits and high in value to ensure affordability without compromising quality.",
    ],
  },
  {
    title: "Your service satisfaction is our priority",
    paragraphs: [
      "At emPLE Pensions, we are committed to understanding the long-term financial needs of our members. The emPLE experience provides genuine satisfaction and real value for money!",
    ],
  },
  {
    title: "Client Service Hotlines",
    paragraphs: [
      "We have dedicated hotlines focused on providing support to members on additional service consultation, looking after the well-being of our members.",
      "At emPLE Pensions, we promise to add clarity and confidence to your retirement planning experience.",
    ],
  },
  {
    title: "Claims Payment",
    paragraphs: [
      "emPLE Pensions supports members with accessible service channels and dependable retirement planning solutions.",
      "Our processes are prompt, transparent, and carefully structured to protect members and their retirement savings.",
      "We strive to ensure our partners in the value chain are well taken care of through our timeous claims processes.",
    ],
  },
];

const productFeatures = [
  "Variety of all specialisations – general, specialist, optics, dental and labs.",
  "No drug list (branded, generic).",
  "Cashless system (no cash payments at service points/pharmacy).",
  "Hotline for client service – help/queries.",
  "Managed Care – Cancer, HIV, Asthma, Chronic Conditions.",
  "Maternity Care – Antenatal to delivery.",
  "Online Internet access to member’s utilisation.",
  "Consistent member engagement.",
  "Health benefit clinic (half-year visits for one-on-one sessions with staff or as requested by HR).",
  "emPLE Pensions monthly e-newsletter.",
  "Wellness Program (Body mass index, Blood Pressure, blood sugar, Cholesterol screening, HIV or Hepatitis B (optional), CA125 (women only), PSA (men above 40 years & above)).",
];

function Highlight({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <article>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00a63e] text-white">
          <ArrowRight size={12} strokeWidth={3} />
        </span>
        <h2 className="text-[13px] font-bold leading-5 text-[#364152]">{title}</h2>
      </div>
      <div className="mt-3 space-y-3 text-[12.5px] leading-[1.65] text-[#8b8f94]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default function OurOfferingPage() {
  return (
    <main className="bg-white font-sans">
      <section className="pt-[81px]">
        <div className="mx-auto flex min-h-[180px] max-w-[1120px] items-center px-6 py-12 sm:min-h-[235px] sm:py-16">
          <h1 className="text-[42px] font-bold leading-none tracking-[-0.035em] text-[#222f3e] sm:text-[58px] lg:text-[66px]">
            Our Offering
          </h1>
        </div>

        <div
          role="img"
          aria-label="Health insurance consultation in a bright office"
          className="h-[300px] w-full bg-[url('/assets/images/cash_plan_plus.png')] bg-cover bg-center bg-no-repeat sm:h-[390px] lg:h-[470px] lg:bg-fixed"
        />
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="max-w-[890px] text-[12.5px] leading-[1.55] text-[#8b8f94]">
            <p>
              emPLE Pensions offers a wide array of bespoke products and services that are targeted
              at groups (associations and unions), corporate organizations and families.
            </p>
            <p className="mt-4">At emPLE Pensions:</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-9 md:grid-cols-2 lg:gap-x-20">
            <div className="space-y-9">
              {offeringHighlights.slice(0, 3).map((highlight) => (
                <Highlight key={highlight.title} {...highlight} />
              ))}
            </div>
            <div className="space-y-9">
              {offeringHighlights.slice(3).map((highlight) => (
                <Highlight key={highlight.title} {...highlight} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffedc] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2 className="max-w-[960px] text-[28px] font-extrabold uppercase leading-[1.12] tracking-[-0.02em] text-[#222f3e] sm:text-[34px] lg:text-[39px]">
            Our 5 Bespoke Colorful Healthcare Products
          </h2>
          <p className="mt-5 max-w-[980px] text-[12.5px] leading-[1.6] text-[#96978f]">
            At emPLE Pensions, we pledge to add clarity and confidence to your retirement planning experience. Each option comes
            with a free wellness programme that provides a basic health screening experience. These products are the
            Champagne Plan, the Burgundy Plan, the Turquoise Plan, the Orange Plan and the Beige Plan.
          </p>

          <h3 className="mt-6 text-[12px] font-extrabold uppercase tracking-wide text-[#4b4f4d]">
            Health Facilities Across the Country.
          </h3>
          <ul className="mt-5 space-y-4 text-[12.5px] leading-[1.55] text-[#96978f]">
            {productFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
