// app/types/index.ts
export interface Program {
  id: string;
  name: string;
  description: string;
  image: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  calories: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  certifications: string[];
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}