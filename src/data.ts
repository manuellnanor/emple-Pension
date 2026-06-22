import { InsurancePlan, Branch } from "./types";

const buildPersonImagePath = (name: string) => {
  const normalized = name
    .toLowerCase()
    .replace(/['".(),]/g, "")
    .replace(/&/g, "and")
    .replace(/\s+/g, "_")
    .replace(/-+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  return `/assets/images/${normalized}.png`;
};

export const INSURANCE_PLANS: InsurancePlan[] = [
  {
    id: "wellness",
    title: "Family Financial Wellness Plan",
    tagline: "Tailored protection for life's modern requirements",
    description:
      "We understand your needs and have tailored our Family Financial Wellness Plan to help you achieve absolute financial security and wellness for the rest of your life.",
    image: "/assets/images/family_financial_wellness_plan.png",
    baseRatePerThousand: 1.25,
    minimumCoverage: 10000,
    maximumCoverage: 500000,
    highlightedBenefits: [
      "High insurance coverage matching family income goals",
      "Tailored flexisave account option for milestone payouts",
      "Immediate financial peace of mind against life's events",
    ],
    benefitsList: [
      {
        title: "Family Income Benefit",
        description:
          "Provides a steady monthly income payout stream to support household expenses for up to 10 years.",
      },
      {
        title: "Critical Illness Shield",
        description:
          "Receive a lump sum of up to 50% of the coverage amount instantly upon diagnosis of qualifying conditions.",
      },
      {
        title: "Disability Benefit Waiver",
        description:
          "Waives all future premiums if the primary policyholder suffers severe accidental disability.",
      },
    ],
    targetAudience:
      "Families, children, and spouses looking for reliable regular income support.",
    iconColor: "emerald",
  },
  {
    id: "eternity",
    title: "Family Eternity Plus",
    tagline: "Caring solutions that honor legacy and memory",
    description:
      "We provide you the most suitable solution to finance funeral expenses of loved ones, so the focus is strictly on emotional comfort and the memory of the loss, never on the cost.",
    image: "/assets/images/family_eternity_plus.png",
    baseRatePerThousand: 0.85,
    minimumCoverage: 5000,
    maximumCoverage: 100000,
    highlightedBenefits: [
      "Ultra-rapid claim payouts within 24 hours of notification",
      "Repatriation premium support options for departed family members",
      "Generous memorial service cash bonus upon maturity",
    ],
    benefitsList: [
      {
        title: "Fast-Track Death Claim",
        description:
          "Guarantees payout processing within 24 hours to handle urgent funeral logistics with dignity.",
      },
      {
        title: "Extended Family Cover",
        description:
          "Enables protection to cover parents, parents-in-law, and siblings of the policyholder.",
      },
      {
        title: "Maturity cashback",
        description:
          "Returns up to 15% of total premiums paid back to you if zero claims are filed in a 10-year block.",
      },
    ],
    targetAudience:
      "Unions, extended African families, and legacy builders seeking support.",
    iconColor: "emerald",
  },
  {
    id: "cash_plan",
    title: "Cash Plan Plus",
    tagline: "Vibrant high-yielding accumulation for your future achievements",
    description:
      "Cash Plan Plus is a unit-linked investment product designed to help clients accumulate wealth over the years to enable them to finance their dream projects, startups, or lifestyle landmarks.",
    image: "/assets/images/cash_plan_plus.png",
    baseRatePerThousand: 2.1,
    minimumCoverage: 20000,
    maximumCoverage: 750000,
    highlightedBenefits: [
      "Direct capital wealth accumulation through prime managed funds",
      "Survival loyalty bonuses credited to your account balance",
      "Double maturity payout options based on fund performance choice",
    ],
    benefitsList: [
      {
        title: "Investment Fund Choice",
        description:
          "Decide between Conservative, Balanced, or Growth accounts backed by trusted national bonds and equities.",
      },
      {
        title: "Partial Withdrawals",
        description:
          "Access up to 25% of your accrued cash value after Year 3 for unexpected cash flow needs.",
      },
      {
        title: "Loyalty Boosters",
        description:
          "Adds an automated 5% premium bonus directly to your investment portfolio every 3 policy anniversaries.",
      },
    ],
    targetAudience:
      "Investors, entrepreneurs, and career-builders seeking high returns + life assurance.",
    iconColor: "emerald",
  },
  {
    id: "school",
    title: "School Finance Plan",
    tagline: "A fortress securing uninterrupted education pathways",
    description:
      "Provide uninterrupted top-tier education for your child and enjoy absolute peace of mind, knowing their academic milestones are fully funded no matter what life presents.",
    image: "/assets/images/school_finance_plan.png",
    baseRatePerThousand: 1.4,
    minimumCoverage: 15000,
    maximumCoverage: 300000,
    highlightedBenefits: [
      "Guaranteed schedule of academic milestone payouts at JHS, SHS, and University",
      "School tuition fee coverage support in the event of parental disability",
      "Academic excellence rewards and scholar cash grants",
    ],
    benefitsList: [
      {
        title: "Educational Milestone Payouts",
        description:
          "Automated, target-specific lump-sums dispatched precisely when your child steps into higher education grades.",
      },
      {
        title: "Premium Waiver Shield",
        description:
          "If the parent experiences permanent disability or death, the policy is fully paid-up by emPLE while payouts continue.",
      },
      {
        title: "High-Achiever Scholar Fund",
        description:
          "Offers additional cash grants to students who maintain exceptional national exam results.",
      },
    ],
    targetAudience:
      "Parents and guardians demanding stable, guaranteed paths for childhood learning.",
    iconColor: "emerald",
  },
  {
    id: "goal",
    title: "Goal Achiever Plus",
    tagline: "Structured planning that transforms dreams into realities",
    description:
      "Plan towards your medium-term life objectives. Dreams are not achieved by chance; they demand structured, high-yield capital accumulation and diligent shielding.",
    image: "/assets/images/goal_achiever_plus.png",
    baseRatePerThousand: 1.65,
    minimumCoverage: 10000,
    maximumCoverage: 500000,
    highlightedBenefits: [
      "Structured maturity horizons customized between 3 to 15 years",
      "Consistent interest compounding backing your financial goals",
      "Lump sum bonus payout options upon maturity completion",
    ],
    benefitsList: [
      {
        title: "Medium Term Horizon",
        description:
          "Customize your optimal savings duration parameters to match buying a home, starting a farm, or marriage.",
      },
      {
        title: "Accidental Death Multiplier",
        description:
          "Provides an additional 100% of the coverage layout if policy claims are triggered via severe transit accident.",
      },
      {
        title: "Goal Lock-In Security",
        description:
          "Guarantees maturity values from market volatility, preserving hard-won gains during term endings.",
      },
    ],
    targetAudience:
      "Young professionals, goal-oriented planners, and business builders.",
    iconColor: "emerald",
  },
];

export const BRANCHES_DATA: Branch[] = [
  {
    name: "Dzorwulu Head Office",
    region: "Accra",
    address:
      "Omnipotent House, 10 Dzorwulu Extension (N1 Highway Road), PMB CT 456, Cantonments, Accra, Ghana",
    phone: "+233 30 263 3933",
    email: "infogh@emple.com.gh",
  },
  {
    name: "Adum Kumasi Branch",
    region: "Ashanti Region",
    address:
      "2nd Floor, Harper Road Plaza, Opposite Adum Post Office, Kumasi, Ghana",
    phone: "+233 32 208 4591",
    email: "kumasigh@emple.com.gh",
  },
  {
    name: "Takoradi Harbour Mall",
    region: "Western Region",
    address:
      "Harbour View Business Enclave, Shop 4, Ground Floor, Takoradi, Ghana",
    phone: "+233 31 202 1243",
    email: "takoradigh@emple.com.gh",
  },
  {
    name: "Tamale Commercial Hub",
    region: "Northern Region",
    address: "Bank Road Towers, Suite 12, Tamale Central, Ghana",
    phone: "+233 37 202 8815",
    email: "tamalegh@emple.com.gh",
  },
];

export const FAQS = [
  {
    question: "How do I make a claim under an emPLE plan?",
    answer:
      "Claims can be submitted instantly on our website or by visiting any nearby branch. Specify the life event, attach relevant certifications, and our rapid claim division will handle your request within 24 to 48 hours.",
  },
  {
    question: "Can I adjust my monthly premiums over time?",
    answer:
      "Yes, our plans feature flexible premium adjustments to accommodate changes in your income, business cash flows, or life stage. You can upgrade coverage or apply for contribution adjustments on your premium anniversary.",
  },
  {
    question: "What happens if I miss a monthly premium payment?",
    answer:
      "We offer a generous 30-day grace period for all emPLE plans. If you miss a payment, your policy components remain fully active, and you can easily make up payments using our web portal, bank deposits, or mobile money transfers.",
  },
  {
    question: "Is there support for repatriation of loved ones from abroad?",
    answer:
      "Our Family Eternity Plus plan features optional repatriation benefits that assist financially and structurally with returning departed family members back home with care.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const LEGACY_BOARD_MEMBERS: TeamMember[] = [
  {
    name: "Kwame-Gazo Agbemyadzie",
    role: "Chairperson",
    image: buildPersonImagePath("Kwame-Gazo Agbemyadzie"),
    bio: `Kwame-Gazo is a Chartered Insurer, an Associate of the Chartered Insurance Institute (ACII), U.K., a Fellow of the Chartered Insurance Institute of Ghana, the Actuarial Society of Ghana and the West African Insurance Institute. He holds an Executive MBA in Finance from the University of Ghana Business School, BSc Hons degree in Statistics and Mathematics from the University of Ghana, Legon. He has a Post-Graduate Diploma in Actuarial Science from the City University, London, UK, and a Diploma in Insurance and Risk Management from the West Africa Insurance Institute.

Kwame-Gazo has over four decades of experience in insurance. His last position in executive management was as the Chief Executive Officer of Metropolitan Insurance Company, now Hollard Insurance Ghana, a position he held until his retirement in 2015. He had previously held various managerial positions with the State Insurance Company. He is a past President of the Ghana Insurers Association and had also served in several executive positions on Committees of both local and regional insurance organizations. Kwame-Gazo has several years of experience serving as Non-Executive Director on boards of companies in the financial services industry, including that of the insurance regulator.`,
  },
  {
    name: "Rafique Daudi",
    role: "CEO/Country Head",
    image: buildPersonImagePath("Rafique Daudi"),
    bio: `Dr. Rafique Daudi, is a seasoned Insurance Distribution and a Marketing Professional, with over 20 years' experience in distributing Insurance products.

Dr. Daudi has worked with emPLE Ghana for over 15 years, after he was appointed as Branch Manager, in 2008. By dint of hard work and distinguished services, Dr. Daudi enjoyed a steady career rise within the Distribution Structure until in 2018, when he was appointed into the Executive Management of emPLE Ghana, to oversee the Distribution and Marketing functions, across all three emPLE Entities in Ghana.

Until his recent appointment as CEO/Country Head of emPLE Ghana, Dr. Daudi was the Executive Director/Managing Director of emPLE Life Insurance Ghana LTD, after his appointment in November 2022 and subsequent approval by the National Insurance Commission (NIC) of Ghana, the industry regulator, in January 2023.

Dr. Daudi has participated in several local and international conferences and seminars including two successive MMH Annual Leadership Summit in South Africa, which have enabled his Strategic Leadership and Analytical approaches to issues, synthesized with his effective Communication and Inter-personal skills, and a balanced approach to working with people.

Dr. Daudi's academic and professional qualifications include a Doctorate in Management and Organizational Leadership, Master of Business Administration (Strategic Management), Chartered Professional Postgraduate in Marketing, Professional Diploma in Insurance, Bachelor's in Marketing, and Higher National Diploma in Marketing.

He also holds professional membership with the Chartered Insurance Institute of Ghana (CIIG), Chartered Institute of Marketing, Ghana (CIMG), and Chartered Institute of Marketing, UK (CIM, UK).

Dr. Daudi enjoys research, chess, word puzzle, and reading leadership and business literature.`,
  },
  {
    name: "Beatrice Bridget Ofei",
    role: "Independent Non-Executive Director",
    image: buildPersonImagePath("Beatrice Bridget Ofei"),
    bio: `Beatrice Bridget Ofei is an HR Practitioner and the Chief Executive of Aspire-Plus Limited, an HR practice based in Accra that delivers HRBPO Solutions, Capacity Building and HR Consulting services to companies.

She worked as the HR Director of Fidelity Bank and subsequently as the Customer Care Director. She has also worked in pioneering roles with responsibility for setting up the HR infrastructure from scratch as well as developing the HR strategy and ensuring the effective implementation of these strategies within Fidelity Bank and Western Telesystems (now Airtel).

Beatrice is a Fellow of the Chartered Institute of Personnel and Development (FCIPD), UK. Her experience spans the full breadth of HR practice and she specialises in the areas of Organizational Development, Performance Management, Management Development Coaching, and Talent Management.

As the Lead HR Consultant of Aspire-Plus, she has managed and successfully completed a number of HR consulting assignments for medium to large multi-national companies and organizations within the Energy and Power Sector, the Financial Services Sector, the Public Sector and the Telecommunication Sector. She has also consulted for some small to medium companies in the Manufacturing Sector and the Printing Industry.`,
  },
  {
    name: "Audrey Naa Dei Kotey",
    role: "Independent Non-Executive Director",
    image: buildPersonImagePath("Audrey Naa Dei Kotey"),
    bio: `Audrey Naa Dei Kotey is a legal and finance professional and currently the managing partner of AudreyGrey, an Accra-based law firm specializing in taxation, compliance and insolvency.

She has worked closely with local and international companies in various matters including large financial market transactions. Prior to this, Audrey worked with one of Ghana's leading corporate law firms and also spent over 5 years with PwCs Corporate Finance and Restructuring team in Ghana working with the corporate finance and recoveries team insolvencies such as that of Ghana Airways Ltd, Plant Pool Ltd and Bank for Housing and Construction to mention a few.

Audrey formed part of the team that drafted and is currently working on the implementation of Ghana's Companies Act and the Corporate Insolvency and Restructuring Act and has formed an integral part of the core team training and working on sensitization on the two revolutionary laws. Audrey has trained several individuals, Boards and members of the Judiciary on Ghana's Companes Act, effective corporate governance, compliance and insolvency. She also has extensive experience in the law of taxation.

Audrey is a member of the Ghana Bar Association (GBA) and the International Bar Association (IBA). She is an experienced Chartered Accountant and a fellow of the Association of Chartered Certified Accountants, ACCA (UK) and member of the Institute of Chartered Accountants, Ghana (ICAG). She is also a member of and legal advisor to the Ghana Association of Restructuring and Insolvency Advisors (GARIA) and worked on the recently passed Ghana Companies Act, 2019 and its sister Act, the Corporate Restructuring and Insolvency Act, 2020 (Act 1015).

She is the Vice-Chairperson of the ACCA Ghana Members Network Panel and a member of the Board of Directors of the Ghana Association of Savings and Loans Companies (GHASALC). Audrey is passionate about corporate governance and its role in the preservation and continuity of businesses in Ghana.`,
  },
  {
    name: "Mr Nii Akwei Tetteh",
    role: "Independent Non Executive Director",
    image: buildPersonImagePath("Mr Nii Akwei Tetteh"),
    bio: `Nii Akwei is the assurance and tax partner at CFY Partners. Nii Akwei has over 19 years post qualification working experience in statutory audit, tax compliance and planning, administration of corporate insolvency, training and capacity building.

Prior to CFY Partners, Nii Akwei worked in Ernst and Young (now EY) Ghana, PricewaterhouseCoopers (now PwC) Ghana and the Institute of Chartered Accountants Ghana (ICAG).

Nii Akwei has served many clients in the Insurance Service Sector, Financial Services Sector, Mining, Oil & Gas, Telecommunication, Consumer and Industrial Products. Nii Akwei has extensive experience working in Ghana, Nigeria, Liberia and The Gambia.

Nii Akwei has served on many audit committees as well as providing training in International Standards on Auditing (ISA) for accounting practitioners in Ghana and Liberia. Nii Akwei was the Chairman for the University of Ghana (UoG) Technical Evaluation Committee and also a member of the International Public Sector Accounting Standards (IPSAS) project management team.

Nii Akwei is a Fellow of the Association of Chartered Certified Accountants United Kingdom (UK) and a Fellow of the Institute of Chartered Accountants, Ghana (ICAG).

Nii Akwei is also a member of the Chartered Institute of Taxation Ghana (CIT), member of the Ghana Association of Restructuring and Insolvency Advisors (GARIA), member of the Institute of Internal Auditors Ghana (IIA) and a member of The Gambia Institute of Chartered Accountants (GICA).

Nii Akwei holds MBA (Business Finance and Management) from the University of Liverpool UK.`,
  },
  {
    name: "Mr. Jolaolu Fakoya",
    role: "Non-Executive Director",
    image: buildPersonImagePath("Mr. Jolaolu Fakoya"),
    bio: "Mr. Jolaolu Fakoya helps shape emPLE Life's strategic direction, bringing board-level insight into growth, enterprise transformation, and regional business development.",
  },
  {
    name: "Mr. Olufemi Ahmed Sofola",
    role: "Non Executive Director",
    image: buildPersonImagePath("Mr. Olufemi Ahmed Sofola"),
    bio: "Mr. Olufemi Ahmed Sofola contributes non-executive guidance on corporate strategy, financial discipline, and the systems required to build a trusted, future-ready insurance business.",
  },
];

export const BOARD_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Gabriel Sakyi Kwofie",
    role: "Chairman",
    image: "/assets/images/gabriel-sakyi-kwofie.png",
    bio: `Dr. Gabriel Sakyi Kwofie is a Family Physician Specialist and President of Living Waters Specialist Hospital in Kumasi. He has more than twenty years of medical and surgical practice across Ghana's public and private health sectors.

He holds a BSc in Human Biology, Bachelor of Medicine and Surgery (MBChB), Master of Public Health (MPH), and Executive Commonwealth Master of Business Administration (CEMBA) from the Kwame Nkrumah University of Science and Technology. He also specialized in Family Medicine at the Ghana College of Physicians and Surgeons.

Dr. Sakyi Kwofie chairs the Medical Services Council of the Ghana Baptist Convention and leads several healthcare organizations, including Divine Grace Hospital, Gabdys Diagnostic Services, and Best Care Clinic and Mortuary Services. He is also active in real estate through SK Villa and Apartments and SK Plaza Ltd.

He serves on the Health Committee of the Ejisu Municipal Health Service, supervises the Krapa Subdistrict, and is a member of the Medical and Dental Council of Ghana and the Ghana Medical Association. His interests include healthcare quality assurance, healthcare financing, leadership development, reading, and sports.`,
  },
  {
    name: "David Koku Leonards",
    role: "Managing Director",
    image: "/assets/images/david-koku-leonards.png",
    bio: `David Koku Leonards is the Managing Director of emPLE Pensions. He is a results-driven leader focused on creating value for employers and their employees.

His responsibilities span business development and operations. He oversees benefit management, client relations, claims management, and provider relations to ensure operational excellence and efficient service delivery.

David also develops insightful reports that support strategic decision-making at board and C-suite level. Before joining emPLE, he spent five years in the pharmaceutical sector as a business development executive.

He is passionate about excellent customer service and wants Ghana to achieve decent, affordable universal healthcare for all citizens.`,
  },
  {
    name: "Matthew Boadu Adjei",
    role: "Independent Non-Executive Director",
    image: "/assets/images/matthew-boadu-adjei.png",
    bio: `Matthew Boadu Adjei is the founder and CEO of Oasis Capital Ghana Limited, a leading West African private equity fund management firm focused on SME investments. He has more than nineteen years of investment banking experience, including fifteen years in venture capital and private equity across Africa.

Before establishing Oasis Capital Ghana in 2010, Matthew was Country Director of GroFin Ghana Limited and served on the Investment Committee of the GroFin Africa Fund, reviewing transactions across Ghana, Nigeria, Rwanda, South Africa, Tanzania, Kenya, and Uganda.

He previously worked for more than nine years with Fidelity Capital Partners Limited across credit, corporate finance, and private equity. He serves on the boards of several institutions and portfolio companies.

Matthew holds a BSc in Banking and Finance from the University of Ghana Business School and an MBA from Leicester Business School, De Montfort University, UK.`,
  },
  {
    name: "Mr. Olalekan Oyinlade",
    role: "Board Member",
    image: "/assets/images/olalekan-oyinlade.jpg",
    bio: "Mr. Olalekan Oyinlade serves as a Board Member of emPLE Pensions.",
  },
  {
    name: "Mr. Benjamin Kodua-Boateng",
    role: "Board Member",
    image: "/assets/images/benjamin-kodua-boateng.jpg",
    bio: "Mr. Benjamin Kodua-Boateng serves as a Board Member of emPLE Pensions.",
  },
  {
    name: "Mrs. Ada Joy Obiajunwa",
    role: "Board Member",
    image: "/assets/images/ada-joy-obiajunwa.jpg",
    bio: "Mrs. Ada Joy Obiajunwa serves as a Board Member of emPLE Pensions.",
  },
];

const LEGACY_MANAGEMENT_MEMBERS: TeamMember[] = [
  {
    name: "Rafique Daudi",
    role: "CEO/Country Head",
    image: buildPersonImagePath("Rafique Daudi"),
    bio: `Dr. Rafique Daudi, is a seasoned Insurance Distribution and a Marketing Professional, with over 20 years' experience in distributing Insurance products.

Dr. Daudi has worked with emPLE Ghana for over 15 years, after he was appointed as Branch Manager, in 2008. By dint of hard work and distinguished services, Dr. Daudi enjoyed a steady career rise within the Distribution Structure until in 2018, when he was appointed into the Executive Management of emPLE Ghana, to oversee the Distribution and Marketing functions, across all three emPLE Entities in Ghana.

Until his recent appointment as CEO/Country Head of emPLE Ghana, Dr. Daudi was the Executive Director/Managing Director of emPLE Life Insurance Ghana LTD, after his appointment in November 2022 and subsequent approval by the National Insurance Commission (NIC) of Ghana, the industry regulator, in January 2023.

Dr. Daudi has participated in several local and international conferences and seminars including two successive MMH Annual Leadership Summit in South Africa, which have enabled his Strategic Leadership and Analytical approaches to issues, synthesized with his effective Communication and Inter-personal skills, and a balanced approach to working with people.

Dr. Daudi's academic and professional qualifications include a Doctorate in Management and Organizational Leadership, Master of Business Administration (Strategic Management), Chartered Professional Postgraduate in Marketing, Professional Diploma in Insurance, Bachelor's in Marketing, and Higher National Diploma in Marketing.

He also holds professional membership with the Chartered Insurance Institute of Ghana (CIIG), Chartered Institute of Marketing, Ghana (CIMG), and Chartered Institute of Marketing, UK (CIM, UK).

Dr. Daudi enjoys research, chess, word puzzle, and reading leadership and business literature.`,
  },
  {
    name: "Betty Sarpong Dadzie (Mrs.)",
    role: "Head of Operations",
    image: buildPersonImagePath("Betty Sarpong Dadzie Mrs"),
    bio: `Betty Sarpong Dadzie (Mrs.) is the Head of Operations for Emple Life Insurance Ghana LTD. She is a Chartered Insurer with over twelve years' experience in the insurance industry.

She joins us from Glico Life Insurance. She joined Glico Life in October - 2009 occupying the roles of Head, Credit Life & Mortgage, Business Development Manager and currently Head of Underwriting.

Betty holds a degree in Political Science and Economics from the University of Ghana, Legon and a Master of Business Administration in Finance from the Ghana Institute of Management and Public Administration (GIMPA) School of Business. She is an Associate member of both the Chartered Insurance Institute (CII), U.K and Chartered Insurance Institute of Ghana (CIIG).

As part of her professional and career development, Betty has participated in various local and international training programmes.

She is presently the Financial Secretary of the Chartered Insurance Ladies Association of Ghana (CILAG).`,
  },
  {
    name: "Mr. Lawal Aburi Alhassan",
    role: "Ag. Chief Finance Officer (CFO)",
    image: buildPersonImagePath("Mr. Lawal Aburi Alhassan"),
    bio: `He is a Chartered Accountant and Data Analytics enthusiast with over a decade of experience across accounting, finance, investment, insurance, and pensions. Throughout his career, he has demonstrated a strong ability to deliver exceptional results through strategic financial planning, in-depth data analysis, and effective team leadership.

He currently serves as the Acting Chief Financial Officer (Ag. CFO) at Emple (Ghana), where he plays a key role in driving financial strategy, strengthening internal controls, and supporting sustainable business growth.

A results-driven professional, he is a strong communicator with excellent interpersonal and problem-solving skills. He thrives in high-pressure environments and is committed to leading teams to achieve outstanding performance and organizational excellence.`,
  },
  {
    name: "Louisa Duncan-Williams",
    role: "Head of Human Capital & Admin",
    image: buildPersonImagePath("Louisa Duncan-Williams"),
    bio: `Louisa is the Human Capital Head and she joins us from Kofi Annan International Peacekeeping Training Centre as the Head of Human Resource where her responsibilities cuts across Training and Development, Performance Management System, Compensation and benefits Administration, Organizational Development and General HR Functions.

Louisa started her employment career as an Associate Business Advisor with Pricewaterhouse Coopers from October 2004 to January 2006. From February 2006 to January 2009; she was employed by Netsol Ghana Limited as HR and Administrative Officer and later move to Kofi Annan International Peacekeeping Training Centre as HR Manager in January 2009 till December 2012.

She is a member of the Society of Human Resource Management Practitioners (SHRM). She has a Master's in Business Administration and Bachelor of Arts in Psychology and Sociology as well as an Executive Diploma in Mediation and Arbitration.`,
  },
  {
    name: "Philip Kwao Nyumutei",
    role: "Head of Business Enablement & IT",
    image: buildPersonImagePath("Philip Kwao Nyumutei"),
    bio: `Philip Kwao Nyumutei is the Head of Information Technology of the Emple Life Insurance Ghana Ltd. He holds an Executive MBA in Project Management from the University of Ghana, BBA in Business Information Systems from Zenith University College, Advanced Diploma in Computer Science with the Association of Computer Professionals (UK), and a Microsoft Certified Technology Specialist (MCTS).

He is a versatile IT professional with over fifteen (15) years' experience in Infrastructure setup, IT Strategy Development, Deploying and Supporting Software Solutions and Networking in the Insurance sector.

He began his IT professional career as Systems Support Officer with the Information Technology Department of the Ghana Cocoa Board in 2000. He later joined Metropolitan Insurance Limited now Hollard Insurance) in 2001 as Information Technology Officer, and later transited to emPLE Life Insurance Ghana in 2006, as IT Specialist.

He is a member of the IT Technical Committee of the Ghana Insurers Association (GIA) with the core mandate of directing the Association on how to leverage on Technology to grow the Ghanaian Insurance Industry.`,
  },
  {
    name: "Bennet Tettey Madjitey",
    role: "Head of Retail Distribution",
    image: buildPersonImagePath("Bennet Tettey Madjitey"),
    bio: `Bennett Tettey Madjitey is the Head of Retail at emPLE Ghana. Bennett has a Bachelor of Arts Degree in the Humanities and a Master of Business Administration in Marketing from the University of Ghana. He also has a Professional Diploma in Marketing Certificate from GIMPA Executive School of Marketing.

Bennet is fully equipped with the commercial awareness of the financial service industry and has over 15 years of experience in Life Insurance, Banking, Retail sales and Marketing. He has demonstrated skills in People Management, Marketing Strategy Formulation/Implementation and Business Development.

Bennet Madjitey has been with the emPLE Ghana retail Channel for over seven years, serving first as a Branch Manager, and later as Zonal Manager. Prior to joining emPLE Ghana, Bennet worked at Barclays Bank Ghana Limited, Beko Ghana Limited, KEK Insurance Brokers and Vanguardlife Assurance.`,
  },
  {
    name: "Kwame Tabiri",
    role: "Head, Internal Auditor",
    image: buildPersonImagePath("Kwame Tabiri"),
    bio: `Kwame Tabiri is the Head of Internal Audit of emPLE Ghana. He is responsible for the Internal Audit Function, which includes the delivery of audit assurance on governance, risk management and the control environment across the business.

Kwame is a seasoned professional with a broad range of strategic and well-grounded exposure in Risk Management, Information Systems, Internal Audit, Internal Control, Finance, Financial Services, Accounting, Project Management and Corporate Governance. Over the years, he has proven a strong passion for excellence and result-oriented leadership capabilities. He joined Metropolitan Ghana as the Head of Internal Audit bringing on board diverse exposure and strong professional abilities.

Kwame has acquired over 15 years of rich and broad experience in the Banking, Insurance and non-bank financial industry. He began his career with TF Financial Services Ltd as a finance officer and rose to the role of Finance Manager. He worked with Guarantee Trust Bank Ghana Limited (GT Bank) in the Systems and Controls Department which comprised the Internal Control and Audit functions. He led Internal Audit and Internal Control Teams in reviews as well as handling user access management roles.

He joined United Bank for Africa Ghana Limited (UBA) in leadership positions including the role of Head of Business Office Audit with responsibility for the Internal Audit coverage over 30 branches. He became the Head of Head Office Audit with responsibility for Internal Audit coverage over all Operations, Risk Management, Finance, Treasury, Human Capital, Corporate Services and Administration, Customer Experience, Corporate and Marketing Communication, Business Development, Internal Control and Compliance functions.

Kwame Tabiri is a member of the Association of Chartered Certified Accountants (ACCA) UK and a member of Institute of Chartered Accountants Ghana(ICAG). He is a member of Information Systems Audit and Control Association (ISACA), USA and accredited with Certified Information Systems Auditor (CISA) certification. He is a member of Institute of Internal Auditor (IIA) Ghana. He possesses a Bachelor of Science Degree (Accounting) from University of Ghana and Master of Business Administration in Finance (MBA Finance) from Coventry University, UK.`,
  },
  {
    name: "Yaw Okyere Sompa",
    role: "Head, Legal and Risk",
    image: buildPersonImagePath("Yaw Okyere Sompa"),
    bio: `Nhyiraba Yaw Sompa Okyere is a lawyer, enterprise risk professional, information security master and an author of two books. Yaw has extensive experience as a Finance, Sustainability and Governance lawyer in Ghana. Yaw has about fifteen years' experience as an Enterprise Risk Management expert and a Finance and Regulatory Compliance practitioner.

Yaw is an Actuarial Science graduate with a Risk Management, Finance and Information Security masters. Yaw has a career spanning across several universal banks in Ghana. He has the unique ability and diversity to provide clients with commercially sound legal advice.

Yaw has a deep understanding of the business landscape in Ghana. His experiences include setting up Enterprise Risk and Regulatory Frameworks in three universal banks in Ghana. Yaw worked as a sole investment adviser on an EUR 8 million European Investment Bank direct finance scheme through UT Bank, he also worked on a USAID Direct Guarantee Agreement with UT Bank and an Agricultural Finance Scheme in Ghana between DANIDA, AGRA and UT Bank. Yaw has worked on Environmental, Social and Governance projects with both International Finance Corporation (IFC) and Advanced Finance and Investment Group (AFIG) whiles he worked with UT Bank and First Atlantic Bank.

Some of his past roles include working as a Head of Operational and Market Risk at First Atlantic bank where he was the lead in Enterprise Risk design, implementation, monitoring and continuous improvement. Yaw was the senior officer responsible for conducting gap assessment at the bank and to implement the control framework necessary to keep the operations within acceptable risk levels. Yaw led in building a bank risk profile adjustable to the changing context and reported directly to the board on a continuing basis. Yaw was also responsible for policy draft, implementation, and trainings for Information Security and Sustainability Banking. He led the First Atlantic Bank to achieve its first ISO 27001 certification.

Yaw was a member of the Legal team that acted as local counsel together with Asafo & Co as external legal counsel to AFC and Zenith in respect of the provision of a line of credit of up to US$ 85.5 million to a borrower in respect of an EPC contract of which the Government of Ghana is a beneficiary. Yaw was also part of the Legal team that worked with the Government of Ghana on the US $ 3 Billion Sovereign Bond Issue in 2021.

Yaw was recognized by the Institute of Directors-Ghana, the African Corporate Governance Network, and the Bank of Ghana as the Partnership sponsor as an 'Up and Coming Director of the Year' in 2021. Yaw served as the Secretary/Member of the African Corporate Governance Network (ACGN) that reviewed the African Corporate Governance Code for the African Peer Review Mechanism (APRM) of the African Union. Yaw served as the lawyer that reviewed the Constitution of the ACGN in 2022. His second book, 'Be the Difference' was nominator for Best Author in the Entertainment Achievement Awards in Ghana.

Yaw served as a lawyer for the National Film Authority and led the policy drafts and proposal for a Ghana Film Tax Incentive Policy. Yaw has also contributed to drafting of the Legislative Instrument to the Development and Classification of Film Act, 2016 (ACT 935).

Yaw has an MBA from the Business School Netherland and an LLB from Ghana Institute of Management and Public Administration. He is a member of the Ghana Bar Association and the Institute of Directors-Ghana, Yaw is an accredited ISO 27001 Lead Implementer, Lead Auditor, and Certified Trainer. He is a trained ADR practitioner as well as a Compliance Management System Implementer. Yaw is an author of two books and has been part of some landmark Litigation and Arbitration cases in Ghana. He is a co-contributor to the 2022 Legal 500 Public Procurement Country Comparative Guide and the IFLR Africa Market Makers 2022 Report. He also authored the Mondaq ESG Comparative Guide for Ghana in 2022.

Yaw is passionate about Law, Strategy, Enterprise Risk Management, Sustainability, Information Security, Culture and Art and he is an amateur chess player.`,
  },
  {
    name: "Mr. Richmond Grant",
    role: "Head , Corporate and Alternative Distribution",
    image: buildPersonImagePath("Mr. Richmond Grant"),
    bio: "Mr. Richmond Grant leads corporate and alternative distribution, developing partnerships and channels that help institutions and groups access emPLE Life's financial protection solutions.",
  },
];

export const MANAGEMENT_MEMBERS: TeamMember[] = [
  {
    name: "David Koku Leonards",
    role: "Executive Director",
    image: "/assets/images/david-koku-leonards.png",
    bio: `David Koku Leonards is the Executive Director of emPLE Pensions. He is a highly motivated, results-driven leader focused on creating value for employers and their employees.

His responsibilities extend from business development to operations. He oversees the health operations setup and ensures that benefit management, client relations, claims management, and provider relations operate efficiently and deliver operational excellence.

David also produces insightful reports that support strategic decision-making at board and C-suite level. Before joining emPLE, he spent five years in the pharmaceutical sector as a business development executive.

He is passionate about excellent customer service and wants Ghana to attain decent universal healthcare for all citizens at a reasonable and affordable cost.`,
  },
  {
    name: "Louisa Duncan-Williams",
    role: "Head, Human Capital & Admin",
    image: "/assets/images/louisa-duncan-williams-pensions.png",
    bio: `Louisa Duncan-Williams is a visionary human capital executive with decades of experience driving organisational excellence, leading cultural transformations across diverse industries, and building inclusive, high-performance environments.

She has a proven track record of aligning human capital initiatives with business objectives to improve profitability, scalability, and employee engagement.

Her favourite quote is: “HR isn’t a thing we do. It’s the thing that runs our business.”`,
  },
  {
    name: "Philip Kwao Nyumutei",
    role: "Head, Business Enablement",
    image: "/assets/images/philip-kwao-nyumutei-pensions.png",
    bio: `Philip Kwao Nyumutei is Head of Business Enablement at emPLE Pensions. He holds an Executive MBA in Project Management from the University of Ghana, a BBA in Business Information Systems from Zenith University College, an Advanced Diploma in Computer Science from the Association of Computer Professionals (UK), and Microsoft Certified Technology Specialist certification.

He is a versatile technology professional with more than fifteen years of experience in infrastructure setup, IT strategy development, software deployment and support, and networking within the insurance sector.

Philip began his technology career as a Systems Support Officer with the Ghana Cocoa Board. He later joined Metropolitan Insurance Limited, now Hollard Insurance, before moving to emPLE Ghana as an IT Specialist.

He is a member of the Ghana Insurers Association’s IT Technical Committee, which guides the industry on using technology to support growth.`,
  },
  {
    name: "Juliana Adombire",
    role: "Head, Client Experience",
    image: "/assets/images/juliana-adombire.jpg",
    bio: `Juliana Adombire is a seasoned customer experience and contact centre professional with more than fifteen years of experience leading high-performing teams and delivering exceptional client service across diverse industries.

As Head of Client Experience at emPLE Pensions, she is passionate about building strong customer relationships, driving service excellence, and implementing data-driven strategies that improve customer satisfaction and loyalty.

She holds an MA in Guidance and Counselling from the University of Cape Coast and degrees in Communication Studies and Journalism from the Ghana Institute of Journalism.`,
  },
  {
    name: "Mr. Dennis Okyere Brako",
    role: "Provider Relations Manager",
    image: "/assets/images/dennis-okyere-brako.jpg",
    bio: "Mr. Dennis Okyere Brako serves as Provider Relations Manager at emPLE Pensions.",
  },
  {
    name: "Eugene Antwi Opoku",
    role: "Financial Controller",
    image: "/assets/images/eugene-antwi-opoku.jpg",
    bio: "Eugene Antwi Opoku serves as Financial Controller at emPLE Pensions.",
  },
];
