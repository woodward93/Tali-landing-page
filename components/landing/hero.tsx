'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export function TaliHero() {
  const [text] = useTypewriter({
    words: [
      'sales',
      'expenses',
      'receipts',
      'invoices',
      'inventory',
      'customers',
      'reports'
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 70,
  })

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-block">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                <span className="block">Automate your</span>
                <span className="block text-[#0046BE]">
                  {text}
                  <Cursor cursorStyle="_" />
                </span>
                <span className="block">in minutes</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Sign up for free to start recording your transactions and supercharge your business with AI-powered analytics & insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://app.tali.ng/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#0046BE] hover:bg-[#0039A1] text-white h-14 px-8 text-lg">
                  Start Free
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Your business data is secured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0046BE]" />
                <span className="text-sm font-medium">Access your data from anywhere</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-3xl mx-auto lg:mx-0">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-transform hover:scale-[1.01] duration-300">
              <div className="bg-white p-6">
                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Demo Business</h3>
                      <p className="text-sm text-gray-500">7 Finance St, San Francisco</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['1M', '3M', '6M', 'YTD', 'ALL'].map((period) => (
                      <div
                        key={period}
                        className={`px-3 py-1 rounded text-sm font-medium ${
                          period === '3M'
                            ? 'bg-[#0046BE] text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {period}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Sales</p>
                    <h4 className="text-xl font-bold text-gray-900 truncate">$200.00</h4>
                    <p className="text-sm text-green-600">+12.5% from last period</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Expenses</p>
                    <h4 className="text-xl font-bold text-gray-900 truncate">$150.00</h4>
                    <p className="text-sm text-gray-600">25% profit margin</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Products in Stock</p>
                    <h4 className="text-xl font-bold text-gray-900">2</h4>
                    <p className="text-sm text-orange-600">1 items low on stock</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Outstanding Balance</p>
                    <h4 className="text-xl font-bold text-gray-900 truncate">$50.00</h4>
                    <p className="text-sm text-gray-600">Owed by customers</p>
                  </div>
                </div>

                {/* Low Stock Items */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="text-orange-500">⚠️</div>
                      <h4 className="font-semibold text-gray-900">Low Stock Items</h4>
                    </div>
                    <a href="#" className="text-[#0046BE] text-sm font-medium hover:text-[#0039A1]">
                      Manage Inventory →
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Goat</span>
                    <span className="text-orange-600 font-medium">1 left</span>
                  </div>
                </div>

                {/* Top Owing Customers */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Top Owing Customers</h4>
                    <a href="#" className="text-[#0046BE] text-sm font-medium hover:text-[#0039A1]">
                      Manage Transactions →
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Woody</span>
                    <span className="text-red-600 font-medium">$50.00</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#0046BE]/20 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#0046BE]/20 rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}