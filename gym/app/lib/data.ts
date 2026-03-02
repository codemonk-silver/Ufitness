// lib/data.ts
import { Program, Trainer, Plan, Testimonial } from "../types";
import { Users, Trophy, Clock, Dumbbell } from "lucide-react";

export const programs: Program[] = [
  {
    id: "1",
    name: "Strength Training",
    description: "Build raw power and muscle mass with our comprehensive strength protocols designed by elite coaches.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    level: "advanced",
    duration: "60 min",
    calories: "500-700",
  },
  {
    id: "2",
    name: "Fat Loss HIIT",
    description: "High-intensity intervals designed to maximize calorie burn and elevate your metabolic rate for hours.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80",
    level: "intermediate",
    duration: "45 min",
    calories: "600-800",
  },
  {
    id: "3",
    name: "Bodybuilding",
    description: "Sculpt your physique with hypertrophy-focused training, posing practice, and nutrition guidance.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&q=80",
    level: "advanced",
    duration: "90 min",
    calories: "400-600",
  },
  {
    id: "4",
    name: "Personal Coaching",
    description: "One-on-one sessions tailored to your specific goals, limitations, and fitness level.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    level: "beginner",
    duration: "60 min",
    calories: "Variable",
  },
];

export const trainers: Trainer[] = [
  {
    id: "1",
    name: "Marcus Steel",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    experience: "10+ years",
    certifications: ["NSCA-CSCS", "CrossFit L3", "USAW"],
  },
  {
    id: "2",
    name: "Sarah Viper",
    specialty: "HIIT & Nutrition",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    experience: "8 years",
    certifications: ["NASM-CPT", "Precision Nutrition L2"],
  },
  {
    id: "3",
    name: "Alex Titan",
    specialty: "Bodybuilding",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    experience: "12 years",
    certifications: ["IFBB Pro", "ACE-CPT", "Biomechanics Specialist"],
  },
  {
    id: "4",
    name: "Elena Cross",
    specialty: "Functional Fitness",
    image: "https://images.unsplash.com/photo-1611672585731-fa1060a80910?w=400&q=80",
    experience: "6 years",
    certifications: ["FMS Level 2", "TRX", "Kettlebell Athletics"],
  },
];

export const plans: Plan[] = [
  {
    id: "1",
    name: "Basic",
    price: 49,
    period: "month",
    features: [
      "Gym access (6AM-10PM)",
      "Standard equipment access",
      "Locker room with showers",
      "2 Group classes per week",
      "Mobile app tracking",
    ],
  },
  {
    id: "2",
    name: "Pro",
    price: 89,
    period: "month",
    features: [
      "24/7 Gym access",
      "Premium equipment access",
      "Unlimited group classes",
      "1 PT session per month",
      "Nutrition consultation",
      "Recovery suite access",
    ],
    popular: true,
  },
  {
    id: "3",
    name: "Elite",
    price: 149,
    period: "month",
    features: [
      "24/7 Access + Priority booking",
      "All classes + Exclusive workshops",
      "4 PT sessions per month",
      "Custom meal plans & prep",
      "Recovery suite + Sauna",
      "Guest passes (4/month)",
      "Personal locker",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Wilson",
    role: "Member for 2 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote: "U&I Fitness completely transformed my approach to training. The coaches here don't just count reps—they educate you on every movement.",
    rating: 5,
  },
  {
    id: "2",
    name: "Maria Chen",
    role: "Member for 1 year",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote: "The atmosphere is electric. I've never felt more motivated than when I'm training alongside the community here. Best gym in the city.",
    rating: 5,
  },
  {
    id: "3",
    name: "David Park",
    role: "Member for 3 years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote: "Lost 30lbs in 4 months with their Fat Loss program. The structured approach and accountability made all the difference.",
    rating: 5,
  },
];

export const stats = [
  { icon: Users, value: "5,000+", label: "Active Members" },
  { icon: Trophy, value: "10+", label: "Expert Trainers" },
  { icon: Clock, value: "24/7", label: "Access" },
  { icon: Dumbbell, value: "12+", label: "Programs" },
];