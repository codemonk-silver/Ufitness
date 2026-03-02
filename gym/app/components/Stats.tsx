// components/Stats.tsx
"use client";

import { motion } from "framer-motion";
import { stats } from "../lib/data";

export default function Stats() {
  return (
    <section className="py-20 bg-[#1C1C1C] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0F0F0F] border border-white/10 mb-4 group-hover:border-[#A3FF12]/50 transition-colors">
                <stat.icon className="w-8 h-8 text-[#A3FF12]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-bebas)] tracking-wider">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}