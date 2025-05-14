"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  UserPlus, 
  Receipt, 
  LineChart 
} from 'lucide-react'

const steps = [
  {
    icon: <UserPlus className="h-8 w-8" />,
    title: "Create account",
    description: "Get started in minutes. Create a free account and set up your business profile with our simple onboarding process."
  },
  {
    icon: <Receipt className="h-8 w-8" />,
    title: "Record sales & expenses daily",
    description: "Easily record sales and expenses with our simple interface. Categorise your inventory and transactions. Stay organised with receipts and invoices."
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "View real-time insights powered by AI",
    description: "Get intelligent business insights, recommendations and projections powered by AI. Make informed decisions with accurate data."
  }
]

export function TaliHowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  
  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-gradient-to-b from-white to-[#0046BE]/5"
      ref={containerRef}
    >
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#0046BE]/10 text-[#0046BE] text-xs font-medium tracking-wide mb-4">
            SIMPLE PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Tali works for you
          </h2>
          <p className="text-lg text-gray-600">
            Our platform is designed to simplify bookkeeping for entrepreneurs and small businesses.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#0046BE]/20 transform -translate-x-1/2 hidden md:block" />
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step circle with icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#0046BE] flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-[#0046BE] opacity-25 blur-md -z-10" />
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}