import { INSURANCE_PLANS } from "./data";

export const PRODUCT_SLUGS: Record<string, string> = {
  wellness: "family-financial-wellness-plan",
  eternity: "family-eternity-plus",
  cash_plan: "cash-plan-plus",
  school: "school-finance-plan",
  goal: "goal-achiever-plus",
};

export const PRODUCT_IDS_BY_SLUG = Object.fromEntries(
  Object.entries(PRODUCT_SLUGS).map(([id, slug]) => [slug, id])
) as Record<string, string>;

export interface ProductPageSection {
  title: string;
  items: string[];
}

export interface ProductBenefitCard {
  title: string;
  description: string;
}

export interface ProductPageContent {
  planId: string;
  slug: string;
  displayTitle?: string;
  heroImage: string;
  overview: string;
  introTitle?: string;
  introBody?: string;
  sections: ProductPageSection[];
  benefitCards?: ProductBenefitCard[];
  faqItems?: string[];
}

export const PRODUCT_PAGES: ProductPageContent[] = [
  {
    planId: "wellness",
    slug: PRODUCT_SLUGS.wellness,
    heroImage: "/assets/images/family_financial_wellness_plan.png",
    overview:
      "This product is designed to provide term life insurance for the life/lives insured in the form of income protection for the family of the deceased breadwinner(s), or for the life/lives insured in the event of critical illness, permanent or temporary disability.",
    introTitle: "Family Financial Wellness Plan?",
    introBody:
      "At emPLE, we know trust is not a slogan; it's proof you can see and feel. That's why we focus on delivering outcomes that matter, when you need them most.",
    sections: [
      {
        title: "Orange Plan",
        items: ["Death Income Benefit", "Cash Back Benefit", "Disability Benefit"],
      },
      {
        title: "Turquoise Plan",
        items: ["Death Income Benefit", "Cash Back Benefit", "Survival Benefit"],
      },
      {
        title: "Burgundy Plan",
        items: [
          "Death Income Benefit",
          "Cash Back Benefit",
          "Permanent Total Disability Benefit",
          "Temporary Disability Benefit",
          "Survival Benefit",
        ],
      },
      {
        title: "Champagne Plan",
        items: [
          "Death Income Benefit",
          "Cash Back Benefit",
          "Permanent Total Disability Benefit",
          "Temporary Disability Benefit",
          "Critical Illness",
          "Survival Benefit",
        ],
      },
      {
        title: "Policy Features",
        items: ["Hospital Cash Benefit", "Savings Benefit", "Death Waiver of Premium Benefit"],
      },
    ],
    benefitCards: [
      { title: "Immediate Accidental Cover", description: "From your first premium." },
      { title: "Bonuses", description: "10% (3-year plan) or 15% (5-year plan)." },
      {
        title: "Waiver of Premium",
        description:
          "If permanent disability prevents you from working, we'll pause your premiums and ensure your target amount is paid in full.",
      },
      {
        title: "Refund During Waiting Period",
        description: "If non-accidental death occurs within the first 6 months, all premiums paid are refunded.",
      },
    ],
    faqItems: ["My Policy", "Complaints", "Cancelling your policy", "Unclaimed Benefits"],
  },
  {
    planId: "eternity",
    slug: PRODUCT_SLUGS.eternity,
    heroImage: "/assets/images/family_eternity_plus.png",
    overview:
      "This product is designed to provide term life insurance cover and a reliable funeral finance solution for families, helping you achieve financial wellness for the rest of your life.",
    introTitle: "Family Eternity Plus?",
    introBody:
      "At emPLE, we know trust is not a slogan; it's proof you can see and feel. That's why we focus on delivering outcomes that matter, when you need them most.",
    sections: [
      {
        title: "Scope of Cover",
        items: [
          "One Week Celebration Benefit",
          "Main Funeral Benefit",
          "No Claims Bonus (Cash Back)",
          "Paid-Up Benefit",
          "Disability Benefit",
          "Double Benefit for Accidental Death",
        ],
      },
      {
        title: "Optional Policy Benefit",
        items: [
          "Forty Days Celebration Benefit",
          "1st Anniversary Celebration Benefit",
          "Hospital Cash Benefit",
          "Savings Benefit",
          "Automatic Inflation Management (AIM) Benefit",
        ],
      },
      {
        title: "Policy Features",
        items: [
          "Whole life policy",
          "Option to cover all family members including parents and in-laws",
          "Parents benefit is same as the Main Life Assured",
          "Flexible premium",
          "Embedded Waiver of premium benefit",
          "Has minimum benefit of GHS 5,000 cover to Maximum of GHS 75,000",
          "Has one week, forty days and one-year anniversary benefits",
        ],
      },
    ],
    benefitCards: [
      { title: "Immediate Accidental Cover", description: "From your first premium." },
      { title: "Bonuses", description: "10% (3-year plan) or 15% (5-year plan)." },
      {
        title: "Waiver of Premium",
        description:
          "If permanent disability prevents you from working, we'll pause your premiums and ensure your target amount is paid in full.",
      },
      {
        title: "Refund During Waiting Period",
        description: "If non-accidental death occurs within the first 6 months, all premiums paid are refunded.",
      },
    ],
    faqItems: ["My Policy", "Complaints", "Cancelling your policy", "Unclaimed Benefits"],
  },
  {
    planId: "cash_plan",
    slug: PRODUCT_SLUGS.cash_plan,
    displayTitle: "Cash Plan",
    heroImage: "/assets/images/cash_plan_plus.png",
    overview:
      "emPLE's Cash Plan Plus is a unit-linked investment product that has been designed to help client accumulate wealth over the years to enable them finance their dream project.",
    sections: [
      {
        title: "Policy Features",
        items: [
          "Minimum premium of GHS200.00 or more",
          "Save for Minimum of 10 years or Maximum of 30 years",
          "Can withdraw from Saving after two years",
          "No waiting periods",
          "Free death benefit cover",
        ],
      },
    ],
  },
  {
    planId: "school",
    slug: PRODUCT_SLUGS.school,
    heroImage: "/assets/images/school_finance_plan.png",
    overview:
      "It is a unit-linked investment product that assists clients to accumulate savings towards the education of their child.",
    sections: [
      {
        title: "Scope of Cover",
        items: [
          "The policy ensures you save towards your child's education.",
          "The child becomes the assured life and the parent the policy owner.",
          "Death benefit on the life of the parent.",
          "Optional death and accidental disability benefit for the child.",
        ],
      },
      {
        title: "Policy Features",
        items: [
          "Minimum premium of GHS200.00 or more",
          "Save for Minimum of 10 years or Maximum of 25 years",
          "Can withdraw from Saving after two years",
          "No waiting periods",
          "Free death benefit cover",
        ],
      },
    ],
  },
  {
    planId: "goal",
    slug: PRODUCT_SLUGS.goal,
    heroImage: "/assets/images/goal_achiever_plus.png",
    overview:
      "It is a short-term unit linked Investment vehicle with a minimum value payable on death. It focuses on goal-achieving investments e.g. marriages, land acquisition, start or grow your business, own education etc.",
    sections: [
      {
        title: "Scope of Cover",
        items: ["Savings", "Minimum death benefit of GHS4,000.00"],
      },
      {
        title: "Policy Features",
        items: [
          "Minimum premium of GHS300.00 or more.",
          "Save up to 5 years.",
          "Can withdraw 50% from saving after two years.",
          "No waiting period for the investment component but there is six month waiting period for the death benefit.",
          "Free death benefit cover",
        ],
      },
    ],
  },
];

export const getProductPageBySlug = (slug: string) =>
  PRODUCT_PAGES.find((page) => page.slug === slug) ?? null;

export const getProductPageByPlanId = (planId: string) =>
  PRODUCT_PAGES.find((page) => page.planId === planId) ?? null;

export const getProductPlan = (planId: string) =>
  INSURANCE_PLANS.find((plan) => plan.id === planId) ?? null;
