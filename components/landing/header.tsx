"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function TaliHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 80 // Account for fixed header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = section.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/tali_logo2.png"
                alt="Tali Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection('features')}
              className="text-base font-medium text-gray-900 hover:text-[#0046BE] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-base font-medium text-gray-900 hover:text-[#0046BE] transition-colors"
            >
              Pricing
            </button>
            <Link href="/faq" className="text-base font-medium text-gray-900 hover:text-[#0046BE] transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-[#0046BE] transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://app.tali.ng/" target="_blank" rel="noopener noreferrer" className="text-base font-medium">
              <Button variant="ghost" className="text-base font-medium">
                Log In
              </Button>
            </Link>
            <Link href="https://app.tali.ng/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#0046BE] hover:bg-[#0039A1] text-white px-6">
                Start Free
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-2 pb-4 bg-white border-b">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('features')}
              className="text-base font-medium text-gray-900 hover:text-[#0046BE] transition-colors py-2 text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-base font-medium text-gray-900 hover:text-[#0046BE] transition-colors py-2 text-left"
            >
              Pricing
            </button>
            <Link 
              href="/faq"
              className="text-base font-medium text-gray-900 hover:text-[#0046BE] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/contact"
              className="text-base font-medium text-gray-900 hover:text-[#0046BE] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="https://app.tali.ng/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="w-full justify-center text-base font-medium">
                  Log In
                </Button>
              </Link>
              <Link href="https://app.tali.ng/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full justify-center bg-[#0046BE] hover:bg-[#0039A1] text-white">
                  Start Free
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}