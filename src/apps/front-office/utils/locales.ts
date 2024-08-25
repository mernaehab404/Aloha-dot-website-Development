import { groupedTranslations, trans } from "@mongez/localization";
import mainTranslation from "shared/localization/index.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(mainTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  // add your common localization here

  home: {
    en: "Home",
    ar: "الصفحة الرئيسية",
  },
  about: {
    en: "About Us",
    ar: "من نحن",
  },
  contact: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  solutions: {
    en: "Solutions",
    ar: "الحلول",
  },
  products: {
    en: "Products",
    ar: "المنتجات",
  },
  selectLanguage: {
    en: "Select Language",
    ar: "اختر اللغة",
  },
  english: {
    en: "English",
    ar: "الإنجليزية",
  },
  arabic: {
    en: "Arabic",
    ar: "العربية",
  },
  building: {
    en: "Building",
    ar: "بناء",
  },
  revolutionary: {
    en: "Revolutionary",
    ar: "ثوري",
  },
  Paymentsandcommunicationsolutions: {
    en: "Payments and communication solutions",
    ar: "الحلول المالية والتواصل",
  },
  creating: {
    en: "Creating ground breaking platforms for, chat, social media and payments, All combined into one.",
    ar: "إنشاء منصات رائدة للدردشة ووسائل التواصل الاجتماعي والمدفوعات، كلها مدمجة في منصة واحدة.",
  },
  simplifying: {
    en: "Simplifying Life,",
    ar: "تبسيط الحياة،",
  },
  empowering: {
    en: "Empowering Everyone",
    ar: "تمكين الجميع",
  },
  alohaDot: {
    en: "Aloha Dot",
    ar: "ألوها دوت",
  },
  startup: {
    en: "is a startup specializing in Technology and Fintech. Our business is currently centered around an innovative app, Dotchat, which seamlessly integrates communication, mobile payments, social Media, and E-Commerce.",
    ar: "هي شركة ناشئة متخصصة في التكنولوجيا والتكنولوجيا المالية. أعمالنا تركز حالياً على تطبيق مبتكر، دوتشات، الذي يدمج بسلاسة بين الاتصال، المدفوعات المتنقلة، وسائل التواصل الاجتماعي، والتجارة الإلكترونية.",
  },
  explore: {
    en: "Explore Solutions",
    ar: "استكشاف الحلول",
  },
  Wevepartneredwith:{
    en:"We’ve partnered with",
    ar: "لقد شُرِكنا مع",
  },
  industryleadingproviders:{
    en:"industry leading providers.",
    ar:"مقدمي الخدمات الرائدين في الصناعة.",
  },
  upcoming:{
    en:"Upcoming",
    ar: "القادمة",
  },
  alohadotplans:{
    en:"  Alohadot plans to expand it’s product lines to encompass services in every sector",
    ar:"تخطط ألوها دوت لتوسيع خطوط منتجاتها لتشمل خدمات في كل القطاعات.",
  },
  demographic:{
    en:"Demographic",
    ar: "التركيبة السكانية ",
  },

  prodiver: {
    en: "Our providers:",
    ar: "مقدمي خدماتنا:",
  },
  dotchat: {
    en: "Dotchat,",
    ar: "دوتشات،",
  },
  chatAppIntro: {
    en: " a revolutionally chat  app",
    ar: "تطبيق دردشة ثوري",
  },
  chatWithFriends: {
    en: "Chat with friends",
    ar: "الدردشة مع الأصدقاء",
  },
  payBills: {
    en: "Pay your bills",
    ar: "دفع فواتيرك",
  },
  transferMoney: {
    en: "Transfer Money",
    ar: "تحويل الأموال",
  },
  buyProducts: {
    en: "Buy products",
    ar: "شراء المنتجات",
  },
  learnMore: {
    en: "Learn More",
    ar: "تعرف على المزيد",
  },
  employee: {
    en: "Employee ",
    ar: "  للموظفين",
  },
  demographicDescription: {
    en: "Dotchat has employees from all over the world but mainly from Egypt and China as they are the location of our major stakeholders.",
    ar: "دوتشات لديها موظفون من جميع أنحاء العالم ولكنهم في الأساس من مصر والصين حيث توجد مواقع أصحاب المصلحة الرئيسيين لدينا.",
  },
  footerSlogan: {
    en: "Simplifying life, Empowering everyone",
    ar: "تبسيط الحياة، تمكين الجميع",
  },
  careers: {
    en: "Careers",
    ar: "الوظائف",
  },
  openPositions: {
    en: "Open positions",
    ar: "الوظائف الشاغرة",
  },
  socials: {
    en: "Socials",
    ar: "الاجتماعيات",
  },
  instagram: {
    en: "Instagram",
    ar: "إنستغرام",
  },
  facebook: {
    en: "Facebook",
    ar: "فيسبوك",
  },
  discordComingSoon: {
    en: "Discord (coming soon)",
    ar: "ديسكورد (قريباً)",
  },
  needHelp: {
    en: "Need help?",
    ar: "تحتاج مساعدة؟",
  },
  report: {
    en: "Report bug",
    ar: "الإبلاغ عن خطأ",
  },
  suggest: {
    en: "Suggest feature",
    ar: "اقتراح ميزة",
  },
  community: {
    en: "Community",
    ar: "المجتمع",
  },
  blog: {
    en: "Blog (coming soon)",
    ar: "المدونة (قريباً)",
  },
  rights: {
    en: "©2024 Aloha dot. All rights reserved",
    ar: "©2024 ألوها دوت. جميع الحقوق محفوظة",
  },
  privacy: {
    en: "Privacy & Policy",
    ar: "الخصوصية والسياسة",
  },
  terms: {
    en: "Terms & Condition",
    ar: "الشروط والأحكام",
  },
  board: {
    en: "Board Of Directors",
    ar: "مجلس الإدارة",
  },
  Ceo: {
    en: "CEO & Co-Founder",
    ar: "المدير التنفيذي والمؤسس المشارك",
  },
  Haytham: {
    en: "Haytham Al Emam",
    ar: "هيثم الإمام",
  },
});
