// components/Pricing.tsx
"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { plans } from "../lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[#A3FF12] text-sm font-bold uppercase tracking-widest mb-4 block">
          Membership
        </span>
        <h2 className="heading-lg mb-6">
          CHOOSE YOUR <span className="text-[#FF2E2E]">PLAN</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Flexible membership options designed to fit your lifestyle and fitness goals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`relative rounded-2xl p-8 ${
              plan.popular
                ? "bg-gradient-to-b from-[#FF2E2E]/20 to-[#0F0F0F] border-2 border-[#FF2E2E]"
                : "glass-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-[#FF2E2E] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-[#A3FF12]" : "text-[#FF2E2E]"}`} />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                plan.popular
                  ? "gradient-btn text-white"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}