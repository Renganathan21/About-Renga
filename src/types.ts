export interface SiteInfo {
  title: string;
  subtitle: string;
  logoText: string;
  resumeUrl: string;
  availabilityStatus: "available" | "busy" | "limited";
  availabilityText: string;
  currentRole: string;
  yearsExperience: number;
  location: string;
  timezone: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface HeroCTA {
  label: string;
  href: string;
  type: "primary" | "secondary" | "accent";
  icon: string;
}

export interface HeroQuickStat {
  label: string;
  value: string;
}

export interface HeroInfo {
  badgeText: string;
  headline: string;
  subheadline: string;
  typingWords: string[];
  profileImage: string;
  ctas: HeroCTA[];
  quickStats?: HeroQuickStat[];
}

export interface SEOInfo {
  title: string;
  description: string;
  keywords: string[];
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  cardBackgroundColor: string;
  textColor: string;
  textSecondaryColor?: string;
  gradientStart: string;
  gradientEnd: string;
  noiseOpacity: number;
  fonts?: {
    heading: string;
    body: string;
    mono: string;
  };
  borderRadius?: string;
  glassmorphism?: {
    enabled: boolean;
    opacity: number;
    blur: number;
  };
}

export interface AboutHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface AboutInfo {
  title: string;
  subtitle: string;
  introduction: string;
  description: string[];
  profileImage: string;
  highlights: AboutHighlight[];
}

export interface MissionVision {
  title: string;
  description: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
}

export interface PhilosophyInfo {
  title: string;
  items: PhilosophyItem[];
}

export interface Statistic {
  label: string;
  value: string;
  icon: string;
}

export interface CurrentlyBuildingItem {
  name: string;
  category: string;
  status: string;
}

export interface CurrentlyBuilding {
  title: string;
  items: CurrentlyBuildingItem[];
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface SkillsCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface SkillsInfo {
  title: string;
  subtitle: string;
  categories: SkillsCategory[];
}

export interface TechnologyStack {
  title: string;
  frontend: string[];
  backend: string[];
  cloud: string[];
  ai: string[];
}

export interface ToolboxItem {
  name: string;
  icon: string;
}

export interface Toolbox {
  title: string;
  items: ToolboxItem[];
}

export interface SkillLevel {
  name: string;
  percentage: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface ServicesInfo {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface FreelanceInfo {
  title: string;
  platforms: string[];
  availability: string;
  responseTime: string;
  services: string[];
}

export interface WorkProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface WorkProcess {
  title: string;
  steps: WorkProcessStep[];
}

export interface WhyChooseMeItem {
  title: string;
  description: string;
}

export interface WhyChooseMe {
  title: string;
  items: WhyChooseMeItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyLogo?: string;
  position: string;
  employmentType: string;
  location: string;
  workMode: string;
  duration: string;
  experience: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projects: string[];
}

export interface ExperienceInfo {
  title: string;
  subtitle: string;
  items: ExperienceItem[];
}

export interface FreelancingInfo {
  title: string;
  status: string;
  description: string;
  services: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  status: string;
}

export interface EducationInfo {
  title: string;
  items: EducationItem[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface CertificationsInfo {
  title: string;
  items: CertificationItem[];
}

export interface AwardItem {
  title: string;
  organization: string;
  description: string;
}

export interface AwardsInfo {
  title: string;
  items: AwardItem[];
}

export interface AchievementItem {
  title: string;
  description: string;
  icon: string;
}

export interface AchievementsInfo {
  title: string;
  items: AchievementItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  slug?: string;
  category: string;
  featured?: boolean;
  status: string;
  year?: string;
  thumbnail: string;
  gallery?: string[];
  description: string;
  challenge?: string;
  solution?: string;
  responsibilities?: string[];
  technologies: string[];
  features: string[];
  teamSize?: string;
  role?: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
  color?: string;
}

export interface ProjectsInfo {
  title: string;
  subtitle: string;
  categories: string[];
  featured: ProjectItem[];
}

export interface ProjectMetrics {
  title: string;
  items: { label: string; value: string }[];
}

export interface BookPurchaseLinks {
  amazon?: string;
  kindle?: string;
  paperback?: string;
}

export interface BookItem {
  id: string;
  featured?: boolean;
  title: string;
  status: string;
  type: string;
  genre: string[];
  cover: string;
  banner?: string;
  description: string;
  shortDescription?: string;
  published?: boolean;
  publishYear?: string;
  pages?: number | null;
  language?: string;
  purchaseLinks?: BookPurchaseLinks;
  gallery?: string[];
  progress?: number;
}

export interface BooksInfo {
  title: string;
  subtitle: string;
  items: BookItem[];
}

export interface WritingJourneyItem {
  year: string;
  title: string;
}

export interface WritingJourney {
  title: string;
  description: string;
  timeline: WritingJourneyItem[];
}

export interface WritingPhilosophy {
  title: string;
  items: string[];
}

export interface FutureBookItem {
  title: string;
  status: string;
}

export interface FutureBooks {
  title: string;
  items: FutureBookItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQInfo {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  category: string;
  description: string;
  icon: string;
}

export interface TimelineInfo {
  title: string;
  subtitle: string;
  items: TimelineItem[];
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  location: string;
  resume: string;
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
}

export interface CallToAction {
  title: string;
  description: string;
  primaryButton: { text: string; link: string };
  secondaryButton: { text: string; link: string };
}

export interface FooterInfo {
  brand: string;
  tagline: string;
  description: string;
  copyright: { text: string; showCurrentYear: boolean };
  quickLinks: { title: string; href: string }[];
  quote: string;
}

export interface PortfolioData {
  site: SiteInfo;
  navigation: NavItem[];
  hero: HeroInfo;
  seo: SEOInfo;
  theme: ThemeConfig;
  about: AboutInfo;
  mission: MissionVision;
  vision: MissionVision;
  philosophy: PhilosophyInfo;
  statistics: Statistic[];
  currentlyBuilding: CurrentlyBuilding;
  coreValues: CoreValue[];
  interests: string[];
  quote: { text: string; author: string };
  skills: SkillsInfo;
  technologyStack: TechnologyStack;
  toolbox: Toolbox;
  currentlyLearning: { title: string; items: string[] };
  softSkills: { title: string; items: string[] };
  languages: { title: string; items: { language: string; level: string }[] };
  skillLevels: SkillLevel[];
  services: ServicesInfo;
  freelance: FreelanceInfo;
  workProcess: WorkProcess;
  whyChooseMe: WhyChooseMe;
  collaboration: { title: string; items: string[] };
  experience: ExperienceInfo;
  freelancing: FreelancingInfo;
  education: EducationInfo;
  certifications: CertificationsInfo;
  awards: AwardsInfo;
  achievements: AchievementsInfo;
  careerHighlights: { title: string; items: string[] };
  projects: ProjectsInfo;
  projectMetrics: ProjectMetrics;
  books: BooksInfo;
  writingJourney: WritingJourney;
  writingPhilosophy: WritingPhilosophy;
  genres: string[];
  futureBooks: FutureBooks;
  favoriteAuthors: string[];
  favoriteGenres: string[];
  timeline: TimelineInfo;
  careerGoals: { title: string; shortTerm: string[]; longTerm: string[] };
  milestones: { title: string; items: { title: string; completed: boolean }[] };
  currentlyWorkingOn: { title: string; items: { title: string; category: string; progress: number }[] };
  futureVision: { title: string; items: string[] };
  contact: ContactInfo;
  socials: SocialLink[];
  callToAction: CallToAction;
  footer: FooterInfo;
  faq?: FAQInfo;
}
