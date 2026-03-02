// components/Trainers.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Twitter, Award } from "lucide-react";
import { trainers } from "../lib/data";

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#1C1C1C] relative">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#FF2E2E] text-sm font-bold uppercase tracking-widest mb-4 block">
            Expert Coaches
          </span>
          <h2 className="heading-lg mb-6">
            MEET YOUR <span className="text-[#A3FF12]">TRAINERS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our team of certified professionals brings decades of combined experience 
            to help you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#A3FF12]/50 transition-colors">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                      <div className="flex gap-2 mb-3">
                        {trainer.certifications.map((cert) => (
                          <span key={cert} className="text-[10px] px-2 py-1 rounded-full bg-[#A3FF12]/20 text-[#A3FF12] border border-[#A3FF12]/30">
                            {cert}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button className="p-2 rounded-full bg-white/10 hover:bg-[#A3FF12] hover:text-[#0F0F0F] transition-colors">
                          <Instagram className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-full bg-white/10 hover:bg-[#A3FF12] hover:text-[#0F0F0F] transition-colors">
                          <Twitter className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#A3FF12] transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-[#FF2E2E] text-sm font-medium mb-2">
                    {trainer.specialty}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Award className="w-3 h-3" />
                    {trainer.experience} experience
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}