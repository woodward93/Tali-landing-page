import React from 'react'
import { TaliHeader } from '@/components/landing/header'
import { TaliFooter } from '@/components/landing/footer'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <TaliHeader />
      <main className="flex-1 pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Column - Contact Information */}
                <div>
                  <div className="mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0046BE]/10 text-[#0046BE] text-xs font-medium tracking-wide mb-4">
                      LET'S RESOLVE YOUR QUERY
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Need help or support?<br />
                      We are here to assist.
                    </h1>
                    <p className="text-lg text-gray-600">
                      Reach out with any questions, issues, or feedback, and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#0046BE]/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-[#0046BE]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">support@tali.ng</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#0046BE]/10 p-3 rounded-full">
                        <PhoneCall className="h-6 w-6 text-[#0046BE]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#0046BE]/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-[#0046BE]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-600">Lagos, Nigeria</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Link href="#" className="bg-[#0046BE]/10 p-3 rounded-full hover:bg-[#0046BE]/20 transition-colors">
                        <Facebook className="h-5 w-5 text-[#0046BE]" />
                      </Link>
                      <Link href="#" className="bg-[#0046BE]/10 p-3 rounded-full hover:bg-[#0046BE]/20 transition-colors">
                        <Twitter className="h-5 w-5 text-[#0046BE]" />
                      </Link>
                      <Link href="#" className="bg-[#0046BE]/10 p-3 rounded-full hover:bg-[#0046BE]/20 transition-colors">
                        <Instagram className="h-5 w-5 text-[#0046BE]" />
                      </Link>
                      <Link href="#" className="bg-[#0046BE]/10 p-3 rounded-full hover:bg-[#0046BE]/20 transition-colors">
                        <Linkedin className="h-5 w-5 text-[#0046BE]" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                  <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h2>
                    <p className="text-gray-600 mb-8">
                      Tell us about your problem and we will get back to you in 24 hours.
                    </p>

                    <form className="space-y-6">
                      <div>
                        <Input
                          type="text"
                          placeholder="Your name"
                          className="w-full bg-white"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email address"
                          className="w-full bg-white"
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone number (optional)"
                          className="w-full bg-white"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="How can we help?"
                          className="w-full bg-white min-h-[150px]"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-[#0046BE] hover:bg-[#0039A1]"
                      >
                        Send Message
                      </Button>
                    </form>

                    <p className="text-sm text-gray-500 mt-6 text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="#" className="text-[#0046BE] hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <TaliFooter />
    </div>
  )
}