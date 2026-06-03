import {
  FiCode,
  FiPercent,
  FiHeadphones,
  FiClock,
  FiDollarSign,
  FiLayout,
  FiShoppingCart,
  
} from "react-icons/fi";

import { FaShopify } from "react-icons/fa";

export const siteData = {
  nav: {
    logo: "MSH-GROUP",
    logoImg:
      "https://lh3.googleusercontent.com/d/1AORf4J18Edi9M6prEUlqtORi54uLYNTG", //https://drive.google.com/file/d/1AORf4J18Edi9M6prEUlqtORi54uLYNTG/view?usp=sharing
    links: [
      { name: "الرئيسية", href: "#الرئيسية" },
      { name: "الأسعار", href: "#الأسعار" },
      { name: "أعمالنا", href: "#أعمالنا" },
      { name: "مميزاتنا", href: "#مميزاتنا" },
      { name: "خطواتنا", href: "#خطواتنا" },
    ],
    cta: "تواصل الآن",
  },
  hero: {
    title: "نصمم مواقع ومتاجر إلكترونية !",
    desc: "نقدم لك حلولاً رقمية متكاملة تجعل متجرك الإلكتروني واجهة أعمالك الأولى، بتصميم فاخر يجذب العملاء ويزيد مبيعاتك.",
    checks: ["بدون اشتراكات شهرية", "الدفع بعد الاستلام", "دعم فني متواصل"],
    ctaPrimary: "تواصل الآن",
    ctaSecondary: "شاهد أعمالنا",
    bgImg:
      "https://lh3.googleusercontent.com/d/14btJeLYlU8VEcvXp7l0moTPATRm3WAmt",
    // 14btJeLYlU8VEcvXp7l0moTPATRm3WAmt
  },
  features: [
    {
      icon: FiPercent,
      title: "بدون اشتراكات",
      desc: "لا توجد رسوم شهرية مخفية، تدفع مرة واحدة فقط.",
    },
    {
      icon: FiClock,
      title: "تسليم سريع",
      desc: "استلم متجرك الإلكتروني جاهزاً في أسرع وقت ممكن.",
    },
    {
      icon: FiHeadphones,
      title: "دعم فني 24/7",
      desc: "فريقنا جاهز لمساعدتك وحل أي مشكلة تواجهك.",
    },
    {
      icon: FiCode,
      title: "برمجة نظيفة",
      desc: "أكواد برمجية محسنة لمحركات البحث SEO وسرعة فائقة.",
    },
    {
      icon: FiDollarSign,
      title: "الدفع لاحقاً",
      desc: "لا تدفع إلا بعد أن ترى متجرك وتطمئن له.",
    },
    {
      icon: FiLayout,
      title: "تصميم متجاوب",
      desc: "متجرك يعمل بكفاءة على جميع الأجهزة والشاشات.",
    },
  ],
  pricing: {
    badge: "أقل سعر في مصر",
    price: "3000",
    currency: "جنيه فقط",
    ingots: ["موقعك جاهز", "الاستلام أولاً", "الدفع لاحقاً"],
    features: [
      "تصميم كامل للمتجر",
      "ربط بوابات الدفع",
      "ربط شركات الشحن",
      "لوحة تحكم سهلة",
      "تطبيق جوال",
      "ضمان سنة كاملة",
    ],
  },
  solutions: [
    {
      title: "Shopify",
      desc: "منصة عالمية قوية وسهلة الإدارة مع استضافة موثوقة.",
      color: "#96bf48",
      icon: FaShopify,
    },
    {
      title: "Easy Order",
      desc: "الحل الأمثل والسهل لإدارة الطلبات في السوق المصري.",
      color: "#3b82f6",
      icon: FiShoppingCart,
    },
    {
      title: "Full Stack",
      desc: "برمجة خاصة من الصفر بمميزات لا نهائية.",
      color: "#8b5cf6",
      icon: FiCode,
    },
  ],
  portfolio: [
    {
      title: "متجر أزياء رجالي",
      category: "ملابس",
      img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "متجر عطور فاخرة",
      category: "عطور",
      img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "متجر إلكترونيات",
      category: "تقنية",
      img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "مطعم وكافيه",
      category: "مطاعم",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "ديكورات داخلية",
      category: "أثاث",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    },
  ],
  steps: [
    {
      num: "01",
      title: "التواصل والاستشارة",
      desc: "تتواصل معنا لتحديد احتياجاتك ورؤيتك للمشروع.",
    },
    {
      num: "02",
      title: "عقد الاتفاق",
      desc: "نوقع عقداً يضمن حقوقك ويحدد الميزانية والوقت.",
    },
    {
      num: "03",
      title: "التصميم والبرمجة",
      desc: "فريقنا يبدأ في تصميم وتطوير المتجر باحترافية.",
    },
    {
      num: "04",
      title: "المراجعة والتعديل",
      desc: "تراجع العمل ونقوم بالتعديلات حتى ترضى تماماً.",
    },
    {
      num: "05",
      title: "التسليم والتشغيل",
      desc: "نسلمك المتجر جاهزاً ونشغله رسمياً لتبدأ البيع.",
    },
  ],
  footer: {
    quickLinks: ["الرئيسية", "خدماتنا", "أعمالنا", "الأسعار"],
    contact: {
      phone: "+201234567890",
      email: "info@msh-group.com",
      whatsapp: "201234567890",
    },
    cta: { title: "جاهز تبدأ مشروعك؟", btn: "تواصل الآن" },
    copyright: "MSH-GROUP © 2024 - 2026. جميع الحقوق محفوظة.",
  },
};
