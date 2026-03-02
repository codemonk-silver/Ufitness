// components/CTA.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function CTAS() {
  return (
    <section className="py-24 section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E2E] to-[#ff6b6b]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        {/* Content */}
        <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
          <h2 className="heading-lg text-white mb-6">
            READY TO START YOUR <span className="text-[#0F0F0F]">TRANSFORMATION?</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Join 5,000+ members who have already changed their lives. 
            Your first workout is on us—book a free trial session today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#0F0F0F] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#1C1C1C] transition-colors group">
              Claim Free Trial
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors">
              View Schedule
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              123 Fitness Ave, Downtown
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              train@uandifitness.com
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}