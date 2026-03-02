// components/Programs.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock, Flame, Target } from "lucide-react";
import { programs } from "../lib/data";

const levelColors = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  advanced: "bg-[#FF2E2E]/20 text-[#FF2E2E] border-[#FF2E2E]/30",
};

export default function Programs() {
  return (
    <section id="programs" className="py-24 section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[#A3FF12] text-sm font-bold uppercase tracking-widest mb-4 block">
          Our Programs
        </span>
        <h2 className="heading-lg mb-6">
          CHOOSE YOUR <span className="gradient-text">PATH</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Whether you are building strength, losing weight, or training for competition, 
          we have a program designed for your goals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="glass-card overflow-hidden h-full flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase border ${levelColors[program.level]}`}>
                  {program.level}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A3FF12] transition-colors">
                  {program.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {program.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-[#FF2E2E]" />
                    {program.calories} cal
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#A3FF12] hover:text-[#0F0F0F] text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}