export type Locale = "en" | "my" | "th";

type TranslationSchema = {
  siteName: string;
  nav: {
    home: string;
    features: string;
    deployment: string;
    contactUs: string;
    languageLabel: string;
    english: string;
    myanmar: string;
    thai: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    highlights: Array<{ title: string; description: string }>;
    whyTag: string;
    whyTitle: string;
    whyDescription: string;
    platformFeatures: string[];
    impactTag: string;
    impactTitle: string;
    metrics: Array<{ value: string; label: string }>;
    testimonialsTag: string;
    testimonialsTitle: string;
    testimonials: Array<{ quote: string; name: string }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  features: {
    metadataTitle: string;
    heroTitle: string;
    heroSubtitle: string;
    sectionTag: string;
    sectionTitle: string;
    sectionDescription: string;
    featureGroups: Array<{ icon: string; title: string; description: string; items: string[] }>;
  };
  deployment: {
    metadataTitle: string;
    heroTitle: string;
    heroSubtitle: string;
    rolloutTag: string;
    rolloutTitle: string;
    steps: Array<{ title: string; details: string[] }>;
    commandsTitle: string;
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    channels: Array<{ title: string; description: string; value: string }>;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  common: {
    loading: string;
    errorTitle: string;
    tryAgain: string;
    notFoundTitle: string;
    notFoundDescription: string;
    goHome: string;
  };
};

export const translations = {
  en: {
    siteName: "B Connect",
    nav: {
      home: "Home",
      features: "Features",
      deployment: "Deployment",
      contactUs: "Contact Us",
      languageLabel: "Language",
      english: "English",
      myanmar: "မြန်မာ",
      thai: "ไทย"
    },
    home: {
      heroTitle: "The modern HR platform for growing teams",
      heroSubtitle: "B Connect helps organizations centralize employee operations, hiring, and learning in one high-impact, easy-to-adopt platform.",
      highlights: [
        { title: "Unified employee operations", description: "Manage onboarding, leave, payroll visibility, and profile workflows in one secure workspace for every employee." },
        { title: "Faster hiring, better candidates", description: "Launch branded career pages, streamline candidate pipelines, and accelerate shortlisting with AI-assisted workflows." },
        { title: "Built-in learning and performance", description: "Upskill teams with role-based learning paths and track progress with clear visibility for managers and HR leaders." }
      ],
      whyTag: "Why teams choose B Connect",
      whyTitle: "Everything HR needs to deliver a better employee experience",
      whyDescription: "Replace fragmented HR tooling with a connected platform that supports the entire employee lifecycle, from candidate application to long-term growth.",
      platformFeatures: ["Employee self-service portal", "Leave planning and automated accruals", "Recruitment and careers management", "Learning hub with role sync", "Admin controls and policy settings", "Secure integrations and automation APIs"],
      impactTag: "Business impact",
      impactTitle: "Designed to drive measurable HR outcomes",
      metrics: [
        { value: "40%", label: "faster HR request turnaround" },
        { value: "55%", label: "reduction in manual hiring steps" },
        { value: "99.9%", label: "platform uptime for critical workflows" }
      ],
      testimonialsTag: "Customer stories",
      testimonialsTitle: "Trusted by teams scaling people operations",
      testimonials: [
        { quote: "B Connect replaced scattered tools with one platform. Our HR team now spends less time on admin and more time supporting people.", name: "Head of People, Mid-Market Fintech" },
        { quote: "From leave approvals to recruiting analytics, leadership finally has a single source of truth for workforce decisions.", name: "HR Operations Manager, Regional Enterprise" }
      ],
      ctaTitle: "Ready to modernize your HR operations?",
      ctaDescription: "Explore the full product capabilities or talk with our team to map B Connect to your HR priorities.",
      ctaButton: "Contact the B Connect team"
    },
    features: {
      metadataTitle: "Features",
      heroTitle: "Everything you need to run modern HR",
      heroSubtitle: "Explore the complete B Connect feature set built for employee operations, hiring, growth, and compliance.",
      sectionTag: "Platform features",
      sectionTitle: "Built for HR teams that need speed and clarity",
      sectionDescription: "B Connect combines day-to-day HR workflows with strategic capabilities so teams can support employees at every stage of the lifecycle.",
      featureGroups: [
        { icon: "👥", title: "Core HR Management", description: "Centralize employee profiles, leave data, and organization structure in one secure system.", items: ["Employee records", "Leave workflows", "Department and role mapping"] },
        { icon: "🎯", title: "Recruitment Workflows", description: "Manage job openings, candidate stages, and interviewer collaboration from one pipeline.", items: ["Job requisitions", "Applicant tracking", "Interview scorecards"] },
        { icon: "📚", title: "Learning & Growth", description: "Assign training paths, monitor completion, and support continuous employee development.", items: ["Course assignments", "Role-based learning plans", "Progress tracking"] },
        { icon: "✅", title: "Policy & Compliance", description: "Standardize policy acknowledgements and compliance documentation across regions.", items: ["Policy publishing", "Document acceptance logs", "Audit-ready history"] },
        { icon: "⚙️", title: "Integrations", description: "Connect B Connect with payroll, identity, and collaboration tools to eliminate repetitive manual steps.", items: ["Webhook + API support", "Payroll sync connectors", "Automated approval reminders"] },
        { icon: "📊", title: "HR Analytics", description: "Track hiring velocity, workforce trends, and engagement indicators with decision-ready reporting.", items: ["Live operational dashboards", "Custom filters and exports", "Executive summary reporting"] }
      ]
    },
    deployment: {
      metadataTitle: "Deployment Guide",
      heroTitle: "Deployment guide",
      heroSubtitle: "Follow this guide to deploy B Connect reliably and validate your production environment.",
      rolloutTag: "Production rollout",
      rolloutTitle: "Deploy B Connect in four clear phases",
      steps: [
        { title: "1. Prepare your environment", details: ["Install Node.js 20+ and npm.", "Create environment variables for production values.", "Confirm your repository has the latest B Connect changes."] },
        { title: "2. Install dependencies and validate locally", details: ["Run npm install to restore packages.", "Run npm run lint to validate code quality.", "Run npm run build to ensure the production bundle is generated successfully."] },
        { title: "3. Deploy on Render", details: ["Create a new Web Service in Render and connect the repository.", "Use build command: npm install && npm run build.", "Use start command: npm run start.", "Set NODE_VERSION to 20 (or newer supported LTS)."] },
        { title: "4. Verify production readiness", details: ["Check key routes: /, /features, and /deployment.", "Validate SSL, caching, and runtime logs in Render dashboard.", "Run a quick smoke test for navigation, forms, and content sections."] }
      ],
      commandsTitle: "Recommended commands"
    },
    contact: {
      tag: "Contact us",
      title: "Let's connect with your HR team",
      description: "Whether you are exploring B Connect for the first time or scaling across regions, our specialists are here to help. Share your goals and we'll guide you through the right setup for your business.",
      channels: [
        { title: "Sales inquiries", description: "Speak with our team about pricing, demos, and implementation timelines.", value: "sales@b-connect.site" },
        { title: "Customer support", description: "Get help with technical issues, configuration questions, and account access.", value: "support@b-connect.site" },
        { title: "Partnerships", description: "Collaborate on integrations, advisory services, and strategic alliances.", value: "partners@b-connect.site" }
      ],
      ctaTitle: "Book a guided B Connect walkthrough",
      ctaDescription: "See how B Connect can centralize employee records, streamline hiring, and improve HR visibility in one platform.",
      ctaButton: "Request a demo"
    },
    common: { loading: "Loading...", errorTitle: "Something went wrong", tryAgain: "Try again", notFoundTitle: "Page not found", notFoundDescription: "The page you are looking for does not exist.", goHome: "Go home" }
  },
  my: {
    siteName: "B Connect",
    nav: { home: "ပင်မ", features: "အင်္ဂါရပ်များ", deployment: "တပ်ဆင်ခြင်း", contactUs: "ဆက်သွယ်ရန်", languageLabel: "ဘာသာစကား", english: "English", myanmar: "မြန်မာ", thai: "ไทย" },
    home: {
      heroTitle: "ဖွံ့ဖြိုးလာသော အဖွဲ့များအတွက် ခေတ်မီ HR ပလက်ဖောင်း",
      heroSubtitle: "B Connect သည် ဝန်ထမ်းလုပ်ငန်းစဉ်များ၊ ခေါ်ယူမှုလုပ်ငန်းများနှင့် လေ့လာသင်ယူမှုများကို တစ်နေရာတည်းတွင် အလွယ်တကူ စုစည်းစီမံနိုင်ရန် ကူညီပေးသည်။",
      highlights: [
        { title: "ဝန်ထမ်းလုပ်ငန်းစဉ်များကို တစ်စုတစ်စည်းတည်း စီမံခြင်း", description: "Onboarding၊ ခွင့်စီမံမှု၊ လစာမြင်ကွင်းနှင့် ပရိုဖိုင်လုပ်ငန်းစဉ်များကို လုံခြုံသော workspace တစ်ခုတည်းတွင် စီမံနိုင်သည်။" },
        { title: "ခေါ်ယူမှု မြန်ဆန်ပြီး ကိုယ်စားလှယ်ကောင်းများ ပိုမိုရရှိခြင်း", description: "Career page များဖန်တီးခြင်း၊ candidate pipeline များချောမွေ့စေခြင်းနှင့် AI အကူအညီဖြင့် shortlisting မြန်ဆန်စေသည်။" },
        { title: "လေ့ကျင့်သင်ကြားမှုနှင့် စွမ်းဆောင်ရည်ကို အတွင်းပါဝင်စွာ ထောက်ပံ့ခြင်း", description: "ရာထူးအလိုက် learning path များဖြင့် အဖွဲ့ကို အတိုးတက်စေပြီး manager နှင့် HR များအတွက် တိုးတက်မှုကို ရှင်းလင်းစွာ ကြည့်ရှုနိုင်သည်။" }
      ],
      whyTag: "B Connect ကို ရွေးချယ်ရသောအကြောင်း",
      whyTitle: "ပိုမိုကောင်းမွန်သော ဝန်ထမ်းအတွေ့အကြုံအတွက် HR လိုအပ်ချက်အားလုံး",
      whyDescription: "ကွဲပြားနေသော HR tool များကို အစားထိုးပြီး candidate အဆင့်မှ ရေရှည်ဖွံ့ဖြိုးမှုအထိ ဝန်ထမ်းဘဝစက်ဝန်းတစ်လျှောက် ထောက်ပံ့နိုင်သော platform တစ်ခုဖြင့် ချိတ်ဆက်ပါ။",
      platformFeatures: ["ဝန်ထမ်း self-service portal", "ခွင့်စီမံခြင်းနှင့် accrual အလိုအလျောက်တွက်ချက်မှု", "ခေါ်ယူမှုနှင့် careers စီမံခန့်ခွဲမှု", "ရာထူးချိတ်ဆက် learning hub", "Admin ထိန်းချုပ်မှုများနှင့် policy settings", "လုံခြုံသော integration နှင့် automation API များ"],
      impactTag: "စီးပွားရေး အကျိုးသက်ရောက်မှု",
      impactTitle: "တိုင်းတာနိုင်သော HR ရလဒ်များအတွက် ဒီဇိုင်းထုတ်ထားသည်",
      metrics: [
        { value: "40%", label: "HR တောင်းဆိုမှုဖြေရှင်းချိန် ပိုမိုမြန်ဆန်" },
        { value: "55%", label: "လက်စွဲခေါ်ယူမှုအဆင့်များ လျော့နည်း" },
        { value: "99.9%", label: "အရေးကြီး workflow များအတွက် platform uptime" }
      ],
      testimonialsTag: "ဖောက်သည် အတွေ့အကြုံများ",
      testimonialsTitle: "လူ့စွမ်းအားအုပ်ချုပ်မှု တိုးချဲ့နေသောအဖွဲ့များမှ ယုံကြည်စွာ အသုံးပြုထားသည်",
      testimonials: [
        { quote: "B Connect ကြောင့် ကွဲပြားနေသော tools များကို platform တစ်ခုတည်းသို့ ပြောင်းနိုင်ခဲ့သည်။ HR အဖွဲ့သည် admin အချိန်လျော့ပြီး လူများကို ပိုမိုထောက်ပံ့နိုင်လာသည်။", name: "Head of People, Mid-Market Fintech" },
        { quote: "ခွင့်အတည်ပြုမှုမှ recruiting analytics အထိ workforce ဆုံးဖြတ်ချက်များအတွက် တစ်ခုတည်းသော truth source ကို အဖွဲ့ခေါင်းဆောင်များ ရရှိလာသည်။", name: "HR Operations Manager, Regional Enterprise" }
      ],
      ctaTitle: "သင့် HR လုပ်ငန်းစဉ်များကို ခေတ်မီအောင် ပြောင်းလဲရန် အဆင်သင့်ဖြစ်ပြီလား",
      ctaDescription: "ထုတ်ကုန်စွမ်းဆောင်ရည်အပြည့်အစုံကို လေ့လာပါ သို့မဟုတ် B Connect ကို သင့် HR ဦးစားပေးချက်များနှင့် ကိုက်ညီစေရန် ကျွန်ုပ်တို့နှင့် ဆွေးနွေးပါ။",
      ctaButton: "B Connect အဖွဲ့ကို ဆက်သွယ်ရန်"
    },
    features: {
      metadataTitle: "အင်္ဂါရပ်များ",
      heroTitle: "ခေတ်မီ HR လည်ပတ်မှုအတွက် လိုအပ်သမျှ",
      heroSubtitle: "ဝန်ထမ်းလုပ်ငန်းစဉ်၊ ခေါ်ယူမှု၊ ဖွံ့ဖြိုးတိုးတက်မှုနှင့် စည်းမျဉ်းလိုက်နာမှုအတွက် တည်ဆောက်ထားသော B Connect အင်္ဂါရပ်များကို လေ့လာပါ။",
      sectionTag: "Platform အင်္ဂါရပ်များ",
      sectionTitle: "မြန်နှုန်းနှင့် ရှင်းလင်းမှုလိုအပ်သော HR အဖွဲ့များအတွက်",
      sectionDescription: "B Connect သည် နေ့စဉ် HR workflow များနှင့် အရေးပါသောစွမ်းဆောင်ရည်များကို ပေါင်းစပ်ပြီး ဝန်ထမ်းဘဝစက်ဝန်းတစ်လျှောက် ထောက်ပံ့နိုင်စေသည်။",
      featureGroups: [
        { icon: "👥", title: "အခြေခံ HR စီမံခန့်ခွဲမှု", description: "ဝန်ထမ်းပရိုဖိုင်၊ ခွင့်ဒေတာနှင့် အဖွဲ့အစည်းဖွဲ့စည်းပုံကို လုံခြုံသောစနစ်တစ်ခုတည်းတွင် စုစည်းပါ။", items: ["ဝန်ထမ်းမှတ်တမ်းများ", "ခွင့် workflow များ", "ဌာနနှင့်ရာထူးဆက်သွယ်ချက်"] },
        { icon: "🎯", title: "ခေါ်ယူမှု Workflow များ", description: "အလုပ်ခေါ်ယူမှုများ၊ ကိုယ်စားလှယ်အဆင့်များနှင့် interviewer ပူးပေါင်းဆောင်ရွက်မှုကို pipeline တစ်ခုတည်းမှ စီမံပါ။", items: ["Job requisition များ", "Applicant tracking", "Interview scorecard များ"] },
        { icon: "📚", title: "လေ့လာမှုနှင့် ဖွံ့ဖြိုးတိုးတက်မှု", description: "သင်တန်းလမ်းကြောင်းများ ချမှတ်ပေးခြင်း၊ ပြီးစီးမှုကို စောင့်ကြည့်ခြင်းနှင့် ဝန်ထမ်းတိုးတက်မှုကို ဆက်လက်ထောက်ပံ့နိုင်သည်။", items: ["Course assignment များ", "ရာထူးအလိုက် learning plan", "တိုးတက်မှုခြေရာခံခြင်း"] },
        { icon: "✅", title: "စည်းမျဉ်းနှင့် ကိုက်ညီမှု", description: "ဒေသလိုက် policy အသိအမှတ်ပြုမှုများနှင့် compliance စာရွက်စာတမ်းများကို စံသတ်မှတ်ထားသောနည်းဖြင့် စီမံပါ။", items: ["Policy ထုတ်ပြန်ခြင်း", "Document လက်ခံမှုမှတ်တမ်း", "Audit-ready history"] },
        { icon: "⚙️", title: "Integration များ", description: "Payroll၊ identity နှင့် collaboration tools များနှင့် B Connect ကို ချိတ်ဆက်ကာ ထပ်တလဲလဲ လက်စွဲလုပ်ငန်းများကို လျှော့ချပါ။", items: ["Webhook + API support", "Payroll sync connector", "Approval reminder အလိုအလျောက်စနစ်"] },
        { icon: "📊", title: "HR Analytics", description: "ခေါ်ယူမှုမြန်နှုန်း၊ workforce trend နှင့် engagement အညွှန်းများကို ဆုံးဖြတ်ချက်ချရန်အဆင်သင့် report များဖြင့် စောင့်ကြည့်ပါ။", items: ["Live dashboard များ", "Custom filter နှင့် export", "အုပ်ချုပ်မှုအနှစ်ချုပ် report"] }
      ]
    },
    deployment: {
      metadataTitle: "တပ်ဆင်လမ်းညွှန်",
      heroTitle: "တပ်ဆင်လမ်းညွှန်",
      heroSubtitle: "B Connect ကို ယုံကြည်စိတ်ချစွာ တပ်ဆင်ပြီး production environment ကို စစ်ဆေးနိုင်ရန် ဤလမ်းညွှန်ကို လိုက်နာပါ။",
      rolloutTag: "Production rollout",
      rolloutTitle: "B Connect ကို အဆင့် ၄ ဆင့်ဖြင့် တပ်ဆင်ပါ",
      steps: [
        { title: "1. Environment ကို ပြင်ဆင်ပါ", details: ["Node.js 20+ နှင့် npm ကို install လုပ်ပါ။", "Production values အတွက် environment variable များ ဖန်တီးပါ။", "Repository တွင် B Connect အပြောင်းအလဲများ နောက်ဆုံးထွက်ရှိထားကြောင်း စစ်ဆေးပါ။"] },
        { title: "2. Dependency များတပ်ဆင်ပြီး local တွင် စစ်ဆေးပါ", details: ["Package များပြန်လည်ရယူရန် npm install ကို run လုပ်ပါ။", "Code quality စစ်ဆေးရန် npm run lint ကို run လုပ်ပါ။", "Production bundle ကို အောင်မြင်စွာ ထုတ်လုပ်နိုင်ကြောင်း npm run build ဖြင့် စစ်ဆေးပါ။"] },
        { title: "3. Render တွင် တပ်ဆင်ပါ", details: ["Render တွင် Web Service အသစ်တစ်ခု ဖန်တီးပြီး repository ကို ချိတ်ဆက်ပါ။", "Build command: npm install && npm run build ကို သတ်မှတ်ပါ။", "Start command: npm run start ကို အသုံးပြုပါ။", "NODE_VERSION ကို 20 (သို့) ထောက်ပံ့ထားသော LTS နောက်ဆုံးဗားရှင်းအဖြစ် သတ်မှတ်ပါ။"] },
        { title: "4. Production readiness ကို အတည်ပြုပါ", details: ["/, /features နှင့် /deployment လမ်းကြောင်းများကို စစ်ဆေးပါ။", "Render dashboard တွင် SSL၊ caching နှင့် runtime logs များကို စစ်ဆေးပါ။", "Navigation၊ form များနှင့် content section များအတွက် smoke test အတိုချုံး လုပ်ဆောင်ပါ။"] }
      ],
      commandsTitle: "အကြံပြု command များ"
    },
    contact: {
      tag: "ဆက်သွယ်ရန်",
      title: "သင့် HR အဖွဲ့နှင့် ချိတ်ဆက်ကြပါစို့",
      description: "B Connect ကို ပထမဆုံးအကြိမ် လေ့လာနေသည်ဖြစ်စေ ဒေသများတစ်လျှောက် တိုးချဲ့အသုံးပြုနေသည်ဖြစ်စေ ကျွန်ုပ်တို့၏ အထူးကျွမ်းကျင်သူများက ကူညီပေးရန် အဆင်သင့်ရှိသည်။ သင့်ရည်မှန်းချက်များကို မျှဝေပါ၊ သင့်လုပ်ငန်းအတွက် သင့်တော်သော setup ကို လမ်းညွှန်ပေးပါမည်။",
      channels: [
        { title: "အရောင်းမေးမြန်းမှု", description: "ဈေးနှုန်း၊ demo နှင့် implementation အချိန်ဇယားများအတွက် ကျွန်ုပ်တို့အဖွဲ့နှင့် ဆွေးနွေးပါ။", value: "sales@b-connect.site" },
        { title: "ဖောက်သည်ကူညီရေး", description: "နည်းပညာပြဿနာများ၊ configuration မေးခွန်းများနှင့် account access အတွက် ကူညီမှုရယူပါ။", value: "support@b-connect.site" },
        { title: "မိတ်ဖက်ပူးပေါင်းမှု", description: "Integration၊ အကြံပေးဝန်ဆောင်မှုနှင့် မဟာဗျူဟာမိတ်ဖက်ဆက်ဆံရေးများတွင် ပူးပေါင်းလုပ်ဆောင်ပါ။", value: "partners@b-connect.site" }
      ],
      ctaTitle: "B Connect လမ်းညွှန် demo တစ်ခု ကြိုတင်စာရင်းသွင်းပါ",
      ctaDescription: "B Connect ဖြင့် ဝန်ထမ်းမှတ်တမ်းများကို စုစည်းခြင်း၊ ခေါ်ယူမှုကို ချောမွေ့စေခြင်းနှင့် HR မြင်သာမှုကို တိုးတက်စေခြင်းကို ကြည့်ရှုပါ။",
      ctaButton: "Demo တောင်းဆိုရန်"
    },
    common: { loading: "တင်နေသည်...", errorTitle: "ပြဿနာတစ်ခု ဖြစ်ပွားခဲ့သည်", tryAgain: "ထပ်မံကြိုးစားပါ", notFoundTitle: "စာမျက်နှာ မတွေ့ပါ", notFoundDescription: "သင်ရှာဖွေနေသော စာမျက်နှာမရှိပါ။", goHome: "ပင်မသို့ သွားရန်" }
  },
} as Record<Locale, TranslationSchema>;

translations.th = {
  siteName: "B Connect",
  nav: {
    home: "หน้าแรก",
    features: "ฟีเจอร์",
    deployment: "การติดตั้ง",
    contactUs: "ติดต่อเรา",
    languageLabel: "ภาษา",
    english: "อังกฤษ",
    myanmar: "พม่า",
    thai: "ไทย"
  },
  home: {
    heroTitle: "แพลตฟอร์ม HR สมัยใหม่สำหรับทีมที่กำลังเติบโต",
    heroSubtitle: "B Connect ช่วยให้องค์กรรวมการจัดการพนักงาน การสรรหา และการเรียนรู้ไว้ในแพลตฟอร์มเดียวที่ใช้ง่ายและสร้างผลลัพธ์สูง",
    highlights: [
      { title: "งานปฏิบัติการพนักงานแบบรวมศูนย์", description: "จัดการการเริ่มงานใหม่ การลา การมองเห็นข้อมูลเงินเดือน และเวิร์กโฟลว์โปรไฟล์ในพื้นที่ทำงานที่ปลอดภัยเดียวสำหรับพนักงานทุกคน" },
      { title: "สรรหาได้เร็วขึ้น ได้ผู้สมัครที่ดีกว่า", description: "เปิดหน้าอาชีพที่มีแบรนด์ขององค์กร ทำให้ขั้นตอนผู้สมัครลื่นไหล และเร่งการคัดเลือกเบื้องต้นด้วยเวิร์กโฟลว์ที่มี AI ช่วย" },
      { title: "การเรียนรู้และผลงานในตัว", description: "พัฒนาทักษะทีมด้วยเส้นทางการเรียนรู้ตามบทบาท และติดตามความก้าวหน้าด้วยการมองเห็นที่ชัดเจนสำหรับผู้จัดการและผู้นำ HR" }
    ],
    whyTag: "ทำไมทีมต่าง ๆ เลือก B Connect",
    whyTitle: "ทุกอย่างที่ HR ต้องใช้เพื่อมอบประสบการณ์พนักงานที่ดีกว่า",
    whyDescription: "แทนที่เครื่องมือ HR ที่กระจัดกระจายด้วยแพลตฟอร์มที่เชื่อมต่อกันซึ่งรองรับวงจรชีวิตพนักงานทั้งหมด ตั้งแต่การสมัครงานจนถึงการเติบโตระยะยาว",
    platformFeatures: ["พอร์ทัลบริการตนเองสำหรับพนักงาน", "การวางแผนการลาและการคำนวณสิทธิ์อัตโนมัติ", "การสรรหาและการจัดการหน้าประกาศงาน", "ศูนย์การเรียนรู้พร้อมซิงก์ตามบทบาท", "การควบคุมผู้ดูแลระบบและการตั้งค่านโยบาย", "การเชื่อมต่อที่ปลอดภัยและ API สำหรับระบบอัตโนมัติ"],
    impactTag: "ผลกระทบทางธุรกิจ",
    impactTitle: "ออกแบบมาเพื่อผลลัพธ์ HR ที่วัดผลได้",
    metrics: [
      { value: "40%", label: "ลดเวลาตอบสนองคำขอ HR ได้เร็วขึ้น" },
      { value: "55%", label: "ลดขั้นตอนการจ้างงานแบบแมนนวล" },
      { value: "99.9%", label: "ความพร้อมใช้งานของแพลตฟอร์มสำหรับเวิร์กโฟลว์สำคัญ" }
    ],
    testimonialsTag: "เรื่องราวจากลูกค้า",
    testimonialsTitle: "ได้รับความไว้วางใจจากทีมที่กำลังขยายงานด้านบุคคล",
    testimonials: [
      { quote: "B Connect แทนที่เครื่องมือที่กระจัดกระจายด้วยแพลตฟอร์มเดียว ตอนนี้ทีม HR ของเราใช้เวลางานเอกสารน้อยลงและมีเวลาสนับสนุนพนักงานมากขึ้น", name: "หัวหน้าฝ่ายบุคคล บริษัทฟินเทคระดับกลาง" },
      { quote: "ตั้งแต่การอนุมัติการลาไปจนถึงวิเคราะห์การสรรหา ผู้บริหารมีแหล่งข้อมูลเดียวที่เชื่อถือได้สำหรับการตัดสินใจด้านกำลังคน", name: "ผู้จัดการปฏิบัติการ HR องค์กรระดับภูมิภาค" }
    ],
    ctaTitle: "พร้อมยกระดับงาน HR ของคุณให้ทันสมัยหรือยัง?",
    ctaDescription: "สำรวจความสามารถทั้งหมดของผลิตภัณฑ์ หรือพูดคุยกับทีมของเราเพื่อวางแผนให้ B Connect ตรงกับลำดับความสำคัญด้าน HR ของคุณ",
    ctaButton: "ติดต่อทีม B Connect"
  },
  features: {
    metadataTitle: "ฟีเจอร์",
    heroTitle: "ทุกสิ่งที่คุณต้องใช้เพื่อบริหาร HR ยุคใหม่",
    heroSubtitle: "สำรวจชุดฟีเจอร์ B Connect ที่ครบถ้วน ซึ่งออกแบบมาสำหรับงานพนักงาน การสรรหา การเติบโต และการกำกับดูแล",
    sectionTag: "ฟีเจอร์แพลตฟอร์ม",
    sectionTitle: "สร้างมาเพื่อทีม HR ที่ต้องการความเร็วและความชัดเจน",
    sectionDescription: "B Connect รวมเวิร์กโฟลว์ HR รายวันเข้ากับความสามารถเชิงกลยุทธ์ เพื่อให้ทีมสนับสนุนพนักงานได้ในทุกช่วงของวงจรชีวิต",
    featureGroups: [
      { icon: "👥", title: "การจัดการ HR หลัก", description: "รวมศูนย์โปรไฟล์พนักงาน ข้อมูลการลา และโครงสร้างองค์กรไว้ในระบบที่ปลอดภัยเดียว", items: ["ประวัติพนักงาน", "เวิร์กโฟลว์การลา", "แผนผังแผนกและบทบาท"] },
      { icon: "🎯", title: "เวิร์กโฟลว์การสรรหา", description: "จัดการตำแหน่งงาน สถานะผู้สมัคร และการทำงานร่วมกันของผู้สัมภาษณ์จากท่อกระบวนการเดียว", items: ["คำขอเปิดตำแหน่ง", "ระบบติดตามผู้สมัคร", "แบบประเมินการสัมภาษณ์"] },
      { icon: "📚", title: "การเรียนรู้และการเติบโต", description: "มอบหมายเส้นทางการฝึกอบรม ติดตามการเรียนจบ และสนับสนุนการพัฒนาพนักงานอย่างต่อเนื่อง", items: ["การมอบหมายคอร์ส", "แผนการเรียนรู้ตามบทบาท", "การติดตามความก้าวหน้า"] },
      { icon: "✅", title: "นโยบายและการกำกับดูแล", description: "ทำให้นโยบายและเอกสารกำกับดูแลเป็นมาตรฐานเดียวกันในหลายภูมิภาค", items: ["เผยแพร่นโยบาย", "บันทึกการรับทราบ", "สถานะการตรวจสอบความสอดคล้อง"] },
      { icon: "⚙️", title: "การดูแลระบบและการเชื่อมต่อ", description: "ปรับแต่งสิทธิ์ผู้ใช้ การทำงานอัตโนมัติ และการเชื่อมต่อกับระบบธุรกิจสำคัญ", items: ["สิทธิ์ตามบทบาท", "ทริกเกอร์ระบบอัตโนมัติ", "API และเว็บฮุค"] }
    ]
  },
  deployment: {
    metadataTitle: "การติดตั้ง",
    heroTitle: "เปิดใช้งาน B Connect อย่างมั่นใจ",
    heroSubtitle: "ทำตามเช็กลิสต์การเปิดใช้งานที่แนะนำเพื่อให้ทีมของคุณใช้งานได้อย่างรวดเร็วบน Render",
    rolloutTag: "คู่มือการเปิดใช้งาน",
    rolloutTitle: "ขั้นตอนการติดตั้งที่แนะนำ",
    steps: [
      { title: "1. เตรียม repository", details: ["Fork หรือ clone โค้ดของ B Connect ลงในบัญชี GitHub ขององค์กรคุณ", "ยืนยันว่าไฟล์ environment และข้อมูลลับถูกตั้งค่าอย่างปลอดภัยก่อนการ deploy"] },
      { title: "2. ติดตั้ง dependency และตรวจสอบในเครื่อง", details: ["รัน npm install เพื่อติดตั้งแพ็กเกจทั้งหมด", "รัน npm run lint เพื่อตรวจสอบคุณภาพโค้ด", "รัน npm run build เพื่อยืนยันว่า build สำหรับ production สำเร็จ"] },
      { title: "3. ติดตั้งบน Render", details: ["สร้าง Web Service ใหม่บน Render และเชื่อมต่อกับ repository", "กำหนด Build command เป็น npm install && npm run build", "กำหนด Start command เป็น npm run start", "ตั้งค่า NODE_VERSION เป็น 20 หรือ LTS ล่าสุดที่รองรับ"] },
      { title: "4. ตรวจสอบความพร้อมสำหรับ production", details: ["ทดสอบเส้นทาง /, /features และ /deployment", "ตรวจสอบ SSL, caching และ runtime logs ในแดชบอร์ด Render", "ทำ smoke test แบบย่อสำหรับเมนูนำทาง ฟอร์ม และส่วนเนื้อหาหลัก"] }
    ],
    commandsTitle: "คำสั่งที่แนะนำ"
  },
  contact: {
    tag: "ติดต่อ",
    title: "มาพูดคุยกันเกี่ยวกับทีม HR ของคุณ",
    description: "ไม่ว่าคุณกำลังสำรวจ B Connect เป็นครั้งแรกหรือกำลังขยายการใช้งานข้ามหลายภูมิภาค ผู้เชี่ยวชาญของเราพร้อมช่วยเหลือ แบ่งปันเป้าหมายของคุณ แล้วเราจะแนะนำแนวทางที่เหมาะกับธุรกิจของคุณ",
    channels: [
      { title: "สอบถามฝ่ายขาย", description: "พูดคุยกับทีมของเราเกี่ยวกับราคา เดโม และระยะเวลาการเริ่มใช้งาน", value: "sales@b-connect.site" },
      { title: "ฝ่ายสนับสนุนลูกค้า", description: "รับความช่วยเหลือเกี่ยวกับปัญหาทางเทคนิค คำถามการตั้งค่า และการเข้าถึงบัญชี", value: "support@b-connect.site" },
      { title: "พาร์ทเนอร์", description: "ร่วมมือกันด้านการเชื่อมต่อระบบ บริการที่ปรึกษา และพันธมิตรเชิงกลยุทธ์", value: "partners@b-connect.site" }
    ],
    ctaTitle: "จองเดโม B Connect แบบมีผู้เชี่ยวชาญแนะนำ",
    ctaDescription: "ดูว่า B Connect ช่วยรวมข้อมูลพนักงาน ทำให้การสรรหาลื่นไหล และเพิ่มความชัดเจนด้าน HR ได้อย่างไร",
    ctaButton: "ขอเดโม"
  },
  common: {
    loading: "กำลังโหลด...",
    errorTitle: "เกิดข้อผิดพลาดบางอย่าง",
    tryAgain: "ลองอีกครั้ง",
    notFoundTitle: "ไม่พบหน้า",
    notFoundDescription: "ไม่พบหน้าที่คุณกำลังค้นหา",
    goHome: "กลับหน้าแรก"
  }
};
