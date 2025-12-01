import { 
  FileText, 
  TrendingUp, 
  Megaphone, 
  Cpu, 
  BadgeDollarSign, 
  Briefcase, 
  Building2, 
  HeartPulse, 
  Leaf, 
  Plane, 
  ShieldCheck, 
  GraduationCap, 
  Zap, 
  Factory, 
  Scale 
} from 'lucide-react';
import { ServiceItem, TimelineItem, SectorItem, WhyUsItem } from './types';

export const NAV_ITEMS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'قطاعاتنا', href: '#sectors' },
  { label: 'اتصل بنا', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'الإدارة الشاملة لمنصة اعتماد',
    description: 'إدارة متكاملة ليومية لمنصة اعتماد مع باقات شهرية مرنة.',
    icon: FileText,
    slug: 'etmad-platform-management',
    features: [
      'إدارة يومية كاملة للمنصة',
      'إعداد العروض الفنية والمالية',
      'متابعة الفرص وتقارير دورية',
      'باقات شهرية مرنة تبدأ من 9,000 ريال'
    ]
  },
  {
    title: 'إدارة العروض والمناقصات',
    description: 'دعم احترافي شامل لتعزيز فرص الفوز بالمشاريع.',
    icon: FileText,
    slug: 'tender-management',
    features: [
      'إعداد العروض الفنية والمالية',
      'إعداد كراسات الشروط والمواصفات',
      'تقييم العروض',
      'متابعة المناقصات'
    ]
  },
  {
    title: 'تطوير الأعمال والمؤسسات',
    description: 'تعزيز القدرات الداخلية وتحسين الأداء العام.',
    icon: TrendingUp,
    slug: 'business-development',
    features: [
      'تطوير المؤسسات والعمليات',
      'إعداد ملف المحتوى المحلي',
      'خدمة تسجيل الموردين'
    ]
  },
  {
    title: 'الحلول الاستراتيجية والتسويقية',
    description: 'بناء حضور قوي ومؤثر في السوق.',
    icon: Megaphone,
    slug: 'marketing-solutions',
    features: [
      'إدارة منصات التواصل الاجتماعي',
      'خدمة الإعلان الموجه لصناع القرار'
    ]
  },
  {
    title: 'حلول التكنولوجيا (ERP)',
    description: 'تحسين إدارة الموارد وتكامل العمليات الداخلية.',
    icon: Cpu,
    slug: 'erp-solutions',
    features: [
      'Bitrix 24, ORACLE, Odoo',
      'مواءمة النظام وإدارة التغيير',
      'اختبار النظام والعمليات المستقبلية'
    ]
  },
  {
    title: 'الحلول المالية والاعتمادات',
    description: 'دعم استشاري لضمان استقرار ونمو أعمالك.',
    icon: BadgeDollarSign,
    slug: 'financial-solutions',
    features: [
      'حلول التمويل والاستثمار',
      'تأهيل شهادات الأيزو العالمية',
      'الاشتراكات والاعتمادات الدولية'
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2021',
    title: 'التأسيس',
    description: 'الانطلاق كجسر بين الفرص والشركات في السعودية والتركيز على إدارة المناقصات.'
  },
  {
    year: '2023',
    title: 'التوسع',
    description: 'افتتاح فرع مصر وتنويع الخدمات لتشمل تطوير الأعمال واستشارات الأيزو.'
  },
  {
    year: '2024',
    title: 'تعميق الخبرات',
    description: 'إطلاق الحلول المالية والاستثمارية، وتعزيز خدمات منصة "اعتماد".'
  },
  {
    year: '2025',
    title: 'المستقبل',
    description: 'التوسع في قطاعات الطاقة المتجددة والتكنولوجيا المستدامة.'
  }
];

export const SECTORS: SectorItem[] = [
  { name: 'تكنولوجيا المعلومات', icon: Cpu },
  { name: 'البناء والتشييد', icon: Building2 },
  { name: 'الرعاية الصحية', icon: HeartPulse },
  { name: 'البيئة والاستدامة', icon: Leaf },
  { name: 'السياحة والضيافة', icon: Plane },
  { name: 'الأمن والسلامة', icon: ShieldCheck },
  { name: 'التعليم والتدريب', icon: GraduationCap },
  { name: 'الطاقة والكهرباء', icon: Zap },
  { name: 'التصنيع والصناعة', icon: Factory },
  { name: 'الخدمات المالية والقانونية', icon: Scale },
];

export const CLIENTS = [
  'شركة التوثيق الوطني (NDCO)',
  'زهران للصيانة والتشغيل',
  'أنوفا المتحدة',
  'مسلة لخدمات الإعاشة',
  'البلاتينية لخدمات الضيافة'
];

export const WHY_US: WhyUsItem[] = [
  {
    title: 'استراتيجيات شاملة',
    description: 'تصميم حلول فريدة لزيادة فرص الفوز بالمناقصات وتعظيم العائد على الاستثمار.',
    icon: TrendingUp
  },
  {
    title: 'خبرة متعمقة',
    description: 'فريق يجمع بين مهارات التكنولوجيا، إدارة العمليات، وإعداد العروض الفنية والمالية.',
    icon: Briefcase
  },
  {
    title: 'الالتزام بالجودة',
    description: 'تبسيط العمليات المعقدة وتسليم العروض في الوقت المناسب بأعلى المعايير.',
    icon: ShieldCheck
  }
];