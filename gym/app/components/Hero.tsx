// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Modern gym interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF2E2E]/10 border border-[#FF2E2E]/30 text-[#FF2E2E] text-sm font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF2E2E] animate-pulse" />
              Now Open 24/7
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-balance"
            >
              TRAIN HARD.
              <br />
              <span className="text-stroke text-[#F5F5F5]">STAY</span>{" "}
              <span className="text-[#A3FF12]">STRONG.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed"
            >
              Join the elite fitness community where champions are made. 
              State-of-the-art equipment, world-class trainers, and an 
              atmosphere that pushes you beyond your limits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="gradient-btn px-8 py-4 rounded-full text-white font-bold text-lg flex items-center gap-2 group">
                Join Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="glass-card px-8 py-4 rounded-full text-white font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Play className="w-5 h-5 text-[#A3FF12]" />
                View Programs
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-bold text-[#A3FF12]">98%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF2E2E]">4.9</div>
                <div className="text-sm text-gray-500">Google Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15k+</div>
                <div className="text-sm text-gray-500">Transformations</div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
                alt="Athlete training"
                fill
                className="object-cover rounded-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#A3FF12] flex items-center justify-center">
                    <span className="text-[#0F0F0F] font-bold text-xl">#1</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Top Rated Gym</div>
                    <div className="text-sm text-gray-400">City Fitness Awards 2024</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF2E2E]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#A3FF12]/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#A3FF12] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}