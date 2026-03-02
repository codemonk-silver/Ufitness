// components/Footer.tsx
"use client";

import { Dumbbell, Instagram, Twitter, Facebook, Youtube, ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Programs: ["Strength Training", "Fat Loss", "HIIT", "Bodybuilding", "Personal Coaching"],
  Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
  Resources: ["Blog", "Nutrition Guide", "Workout Plans", "FAQ", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 pt-16 pb-8">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Dumbbell className="w-8 h-8 text-[#FF2E2E]" />
              <span className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider">
                U&I <span className="text-[#A3FF12]">FITNESS</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Premium fitness facility dedicated to helping you achieve your strongest self. 
              Join our community of champions today.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#A3FF12] hover:text-[#0F0F0F] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#A3FF12] transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 U&I Fitness. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-[#A3FF12] transition-colors text-sm group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#A3FF12] group-hover:text-[#0F0F0F] transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}