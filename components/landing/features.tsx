import React from 'react'
import { 
  LineChart, 
  CreditCard, 
  BarChart3, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: <LineChart className="h-10 w-10 text-[#0046BE]" />,
    title: "Record Sales & Expenses",
    description: "Easily record and categorise all your business transactions in one place. Stay on top of your cash flow with real-time updates."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-[#0046BE]" />,
    title: "AI-Powered Analytics and Insights",
    description: "Tali provides detailed analytics on your business performance. See real-time insights on your business data powered by AI."
  },
  {
    icon: <Clock className="h-10 w-10 text-[#0046BE]" />,
    title: "Manage your products & Services",
    description: "Manage your inventory and track stocks daily. Get real-time alerts on inventory items that are low and out of stock."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-[#0046BE]" />,
    title: "Professional recipts and invoices",
    description: "Let your business stand out with professional looking receipts and invoices for every sale record."
  }
]

export function TaliFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#0046BE]/10 text-[#0046BE] text-xs font-medium tracking-wide mb-4">
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to manage your business better
          </h2>
          <p className="text-lg text-gray-600">
            Tali combines powerful features with simplicity to give you complete control over your business management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-[#0046BE]/20 overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 rounded-full bg-[#0046BE]/10 inline-block">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-[#0046BE] transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {feature.description}
                </CardDescription>
                <Link 
                  href="https://app.tali.ng/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-[#0046BE] font-medium text-sm hover:underline"
                >
                  <span>Get started now</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}