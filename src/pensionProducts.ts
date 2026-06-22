export interface PensionContentSection {
  title: string;
  items?: string[];
  paragraphs?: string[];
}

export interface PensionProductContent {
  slug: string;
  title: string;
  accent?: string;
  heroImage?: string;
  eyebrow?: string;
  intro?: string[];
  sections: PensionContentSection[];
  enrollment?: boolean;
}

export const PENSION_PRODUCT_PAGES: PensionProductContent[] = [
  {
    slug: "corporate-personal-pensions",
    title: "emPLE Corporate Individual Pensions Scheme –",
    accent: "Tier 2 & Tier 3",
    heroImage: "/assets/images/corporate-personal-pensions-hero.png",
    intro: [
      "Our Corporate Individual Pensions Scheme is specially designed to allow corporate workers plan for retirement and secure additional retirement income.",
      "Flexible and tailored solutions allow employees and employers to make extra contributions alongside mandatory Tier 1 and Tier 2 contributions.",
    ],
    sections: [
      { title: "Features", items: ["Minimum contribution amount: GHC50.00", "No restrictions on contribution amount", "Contributions can be deducted from payroll"] },
      { title: "Withdrawals", items: ["50% withdrawal allowed after every 3 years", "Full withdrawal on termination of scheme membership", "Member is paid a lump sum benefit"] },
      { title: "How To Join", items: ["Complete and submit a membership form", "Submit with a valid National ID", "Membership forms are available at our offices or downloads page", "Your account will be activated within 24 hours", "A unique Pension Account Number will be provided"] },
      { title: "The Benefits", items: ["The Pool Advantage", "91 Day Treasury Bills Benchmark", "Mortgage Collateral", "Stay Connected to your Retirement Fund", "Professional Management", "Flexible Retirement Planning", "Safety of your Data"] },
    ],
  },
  {
    slug: "occupational-pensions",
    title: "Occupational",
    accent: "Pensions",
    heroImage: "/assets/images/occupational-pensions-hero.png",
    intro: [
      "The emPLE Occupational Pension Scheme is a mandatory fully funded and privately managed occupational pension (Tier 2) scheme providing members and beneficiaries with lump sum pension benefits.",
      "We combine efficient administration, experienced people, and stable technology to ensure retirement funds grow and remain secure.",
    ],
    sections: [
      { title: "Features", items: ["5% of gross salary for contributors of Tier 1", "18.5% of gross salary for employees exempted from Tier 1"] },
      { title: "Withdrawal", items: ["Normal retirement at age 60 and above", "Early retirement from age 50", "Non-Ghanaians emigrating permanently", "Permanent incapacity certified by a Medical Board", "Death benefit paid to nominated beneficiaries"] },
      { title: "Assignment of Benefit", paragraphs: ["Use of lump sum benefit as collateral to secure a mortgage for a primary residence."] },
    ],
  },
  {
    slug: "provident-fund",
    title: "Provident",
    accent: "Fund",
    heroImage: "/assets/images/provident-fund-hero.png",
    intro: [
      "The emPLE Provident Fund Scheme is a voluntary, fully funded and privately managed scheme that enhances pension benefits beyond mandatory pensions.",
      "Efficient administration and dependable technology help your retirement funds grow and remain secure.",
    ],
    sections: [
      { title: "Features", items: ["Tax exemption up to 16.5%", "No restrictions on contribution amount"] },
      { title: "Withdrawal", items: ["Qualifying withdrawals do not attract tax penalties", "Employee is paid a lump sum benefit"], paragraphs: ["The lump sum benefit may be used as collateral to secure a mortgage for a primary residence."] },
    ],
  },
  {
    slug: "admin-trustee-services",
    title: "Admin and Trustee",
    accent: "Services",
    heroImage: "/assets/images/admin-trustee-hero.png",
    sections: [
      { title: "Administrative function (Employer sponsored schemes)", items: ["Keeping proper accounting records and members’ register", "Preparation and lodging of annual audited financial statements"] },
      { title: "Trustee function (Master Trust Scheme)", items: ["Scheme setup and registration", "Membership and contribution management", "Transfers to and from registered schemes", "Benefit payment to members", "Reporting", "Investment policy and mandate oversight", "Compliance with investment mandates"] },
      { title: "Withdrawal", items: ["Normal retirement at age 60 and above", "Early retirement from age 50", "Non-Ghanaians emigrating permanently", "Permanent incapacity certified by a Medical Board", "Death benefit paid to nominated beneficiaries"] },
    ],
  },
  {
    slug: "emple-personal-pensions",
    title: "emPLE Personal",
    accent: "Pensions",
    heroImage: "/assets/images/emple-personal-pensions-hero.jpg",
    intro: ["A Tier 3 pension savings plan specially designed to help you make provisions for retirement, whether or not you have a workplace pension."],
    sections: [
      { title: "Why Join?", items: ["Build enough Tier 2 and Tier 3 savings", "Enjoy a happy retirement life", "Suitable for informal-sector workers", "Flexible, secure, and rewarding retirement planning"] },
      { title: "Features", items: ["Individuals outside group schemes can join", "Formal and informal organized groups can participate", "Flexible contributions", "Normal retirement age is 60", "Withdrawals are subject to the Pensions Act and scheme rules"] },
      { title: "Contribution", items: ["Minimum contribution amount: GHC50.00", "No restrictions on contribution amount"] },
      { title: "Withdrawals", items: ["50% withdrawal allowed after every 3 years", "Full withdrawal on termination of membership", "Member is paid a lump sum benefit"] },
    ],
  },
  {
    slug: "smartsave-personal-pensions",
    title: "Smartsave Personal",
    accent: "Pensions",
    heroImage: "/assets/images/smartsave-personal-pensions-hero.jpg",
    intro: ["A Tier 3 personal pension scheme and specially designed savings plan that helps you make extra smart provisions for retirement."],
    sections: [
      { title: "Features", items: ["Individuals and organized groups can join", "Flexible contributions", "Normal retirement age is 60", "Minimum contribution amount: GHC50.00", "No maximum contribution restriction", "Cheque, cash, or mobile money payment options"] },
      { title: "How To Contribute", items: ["Cheque or cash payment at a partner bank branch", "MTN Mobile Money payment through supported channels"] },
      { title: "Withdrawals", items: ["50% withdrawal allowed after every 3 years", "Full withdrawal on termination of scheme membership", "Member is paid a lump sum benefit"] },
      { title: "Benefits", items: ["Pool advantage", "91 Day Treasury Bills benchmark", "Mortgage collateral", "Online retirement fund access", "Professional management", "Flexible retirement planning", "Safety of your data"] },
    ],
  },
  {
    slug: "how-to-enroll",
    title: "The 3 Step Enrollment Process",
    enrollment: true,
    sections: [
      { title: "Step 1", paragraphs: ["Nominate emPLE Pensions Trust as your Corporate Trustee and submit your nomination letter."] },
      { title: "Step 2", paragraphs: ["Complete and submit the monthly Remittance Statement and Contribution Schedule."] },
      { title: "Step 3", paragraphs: ["Make the monthly payment into the dedicated custodial account."] },
    ],
  },
];

export const getPensionProductBySlug = (slug: string) =>
  PENSION_PRODUCT_PAGES.find((page) => page.slug === slug) ?? null;
