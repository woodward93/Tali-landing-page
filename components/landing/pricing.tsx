'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

const features = [
  "Unlimited sales & expense recording",
  "Unlimited inventory tracking",
  "Robust business analytics with AI",
  "Professional receipts & invoices",
  "Secured data",
  "Cloud data storage",
  "24/7 support"
]

export function TaliPricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#0046BE]/10 text-[#0046BE] text-xs font-medium tracking-wide mb-4">
                  PRICING
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start simplifying your bookkeeping today
                </h2>
                <p className="text-lg text-gray-600">
                  Get started for free today and do business better. No hidden charges.
                </p>
              </div>
              
              <Card className="border-2 border-[#0046BE] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#0046BE] text-white px-4 py-1 text-xs font-medium">
                  ALL FREE
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-baseline">
                    <span className="text-2xl font-bold">Free</span>
                    <span className="text-gray-600 ml-2">access</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Perfect for your business and freelancing</p>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 flex-shrink-0 bg-[#0046BE]/10 rounded-full p-1">
                          <Check className="h-3.5 w-3.5 text-[#0046BE]" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    href="https://app.tali.ng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-[#0046BE] hover:bg-[#0039A1]">
                      Start for Free
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            
            <div className="bg-[#0046BE]/5 rounded-2xl p-8 lg:p-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to get started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Sign up for free access to Tali. No credit card required.
                </p>
                
                <Link 
                  href="https://app.tali.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button 
                    className="w-full bg-[#0046BE] hover:bg-[#0039A1]"
                  >
                    Create Your Free Account
                  </Button>
                </Link>
                
                <p className="text-sm text-gray-500 mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
                
                <div className="mt-8 flex items-center justify-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Join 1,000+</span> business owners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}