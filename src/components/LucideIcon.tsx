import React from "react";
import {
  Briefcase,
  Book,
  Cpu,
  Code,
  Award,
  Users,
  Sparkles,
  Clock,
  MapPin,
  TrendingUp,
  Shield,
  Command,
  Layers,
  Zap,
  Mail,
  Phone,
  Send,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Compass,
  MessageSquare,
  Plus,
  Minus,
  Check,
  ChevronRight,
  ChevronLeft,
  Globe,
  Activity,
  Terminal,
  Tv,
  PenTool,
  Search,
  Sliders,
  BookOpen,
  Smile,
  Heart,
  Star,
  Eye,
  Target,
  HelpCircle,
  Lightbulb,
  SlidersHorizontal,
  Laptop,
  BookMarked,
  Info,
  Sun,
  Moon
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Briefcase,
  Book,
  Cpu,
  Code,
  Award,
  Users,
  Sparkles,
  Clock,
  MapPin,
  TrendingUp,
  Shield,
  Command,
  Layers,
  Zap,
  Mail,
  Phone,
  Send,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Compass,
  MessageSquare,
  Plus,
  Minus,
  Check,
  ChevronRight,
  ChevronLeft,
  Globe,
  Activity,
  Terminal,
  Tv,
  PenTool,
  Search,
  Sliders,
  BookOpen,
  Smile,
  Heart,
  Star,
  Eye,
  Target,
  HelpCircle,
  Lightbulb,
  SlidersHorizontal,
  Laptop,
  BookMarked,
  Info,
  Sun,
  Moon
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  className = "",
  size = 20,
  strokeWidth = 2,
}) => {
  // Normalize key name (match uppercase/lowercase differences)
  const normalizedKey = Object.keys(iconMap).find(
    (key) => key.toLowerCase() === name.toLowerCase()
  );

  const IconComponent = normalizedKey ? iconMap[normalizedKey] : Info;

  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />;
};
