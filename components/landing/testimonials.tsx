"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    quote: "Tali has changed how I handle my business records. What used to take hours, sometimes days, now takes few minutes. The AI analytics feature is fantastic and give me clear insights into my business performance.",
    author: "Chisom Mba",
    role: "Business Owner",
    company: "Blooms Boutique"
  },
  {
    quote: "As a freelance graphic designer, keeping track of my revenue and profit used to be a nightmare. With Tali, I can easily track my earnings and expenses and alo export reports for filing taxes.",
    author: "Attah",
    role: "Creative Director",
    company: "Ben Creatives"
  },
  {
    quote: "What is so sweet about Tali, is the ease at which I can record my transactions from anywhere at any time. I do not have to rely on pen and paper to keep records. Tali juts works.",
    author: "Uyime",
    role: "E-commerce Entrepreneur",
    company: "Urban Wears"
  }
]

export function TaliTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  
  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoplay])
  
  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }
  
  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }
  
  return (
    <section id="testimonials" className="py-20 bg-[#0046BE]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#0046BE]/10 text-[#0046BE] text-xs font-medium tracking-wide mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. See how Tali is helping businesses streamline their bookkeeping.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden pb-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white border-none shadow-lg overflow-hidden">
                    <CardContent className="pt-6 px-6 pb-8">
                      <div className="flex items-center justify-center mb-6">
                        <div className="text-[#0046BE] bg-[#0046BE]/10 p-3 rounded-full">
                          <Quote className="h-6 w-6" />
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 text-center mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === index ? 'bg-[#0046BE] scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}