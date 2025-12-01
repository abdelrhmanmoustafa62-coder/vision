import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  slug?: string;
  features: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface SectorItem {
  name: string;
  icon: LucideIcon;
}

export interface ClientItem {
  name: string;
  logoUrl?: string; // Optional if we use text placeholders
}

export interface WhyUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}