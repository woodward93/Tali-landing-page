import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react'

export function TaliFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/tali_logo2.png"
                alt="Tali Logo"
                width={120}
                height={40}
                className="brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Supercharge your business to success with Tali's simplified bookeeping solution.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">Features</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#0046BE] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-[#0046BE] transition-colors">FAQs</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-[#0046BE]" />
                <span className="text-gray-400">support@tali.ng</span>
              </li>
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 mr-2 text-[#0046BE]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#0046BE]" />
                <span className="text-gray-400">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tali. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#0046BE] transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}