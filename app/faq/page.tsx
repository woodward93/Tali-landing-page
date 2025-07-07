import React from 'react'
import { TaliHeader } from '@/components/landing/header'
import { TaliFooter } from '@/components/landing/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

const faqs = [
  {
    question: "What is Tali?",
    answer: "Tali is a comprehensive bookkeeping platform designed for small businesses. It helps you track income and expenses, manage inventory, generate reports, and get AI-powered financial insights - all in one place."
  },
  {
    question: "How much does Tali cost?",
    answer: "Tali is a free business management tool that includes all essential features like income/expense tracking, inventory tracking, reporting, analytics, receipts and invoices and cloud storage."
  },
  {
    question: "Is my data secure with Tali?",
    answer: "Yes, we take security seriously. Tali uses bank-level encryption to protect your data and regularly backs up your information. We are compliant with industry security standards and never share your data with third parties."
  },
  {
    question: "Can I import my existing financial data?",
    answer: "Yes, you can upload your financial statement and Tali will automatically add the payment records."
  },
  {
    question: "What kind of reports can I get?",
    answer: "Tali offers analytics and report on your business performance. You get to see information of your revenue and expenses, profit/loss, inventory, customers and suppliers. Our AI-powered insights help you understand your business performance better."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide customer support through multiple channels. You get email support and access to our help center."
  },
  {
    question: "Can I connect my bank account?",
    answer: "Not at the moment, feature is coming soon."
  },
  {
    question: "Is Tali suitable for my industry?",
    answer: "Tali is designed to support businesses across various industries including retail, services, consulting, e-commerce, and more. Our flexible categories and customizable features adapt to your specific business needs."
  },
  {
    question: "Can I get a loan from Tali?",
    answer: "Not at the moment, this is in the works."
  }
]

export default function FAQ() {
  return (
    <div className="flex min-h-screen flex-col">
      <TaliHeader />
      <main className="flex-1 pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0046BE]/10 text-[#0046BE] text-xs font-medium tracking-wide mb-4">
                HELP CENTER
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-600">
                Find answers to common questions about Tali and how it can help your business.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <span className="text-left font-medium text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="max-w-xl mx-auto mt-16 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions? We're here to help!
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0046BE] hover:bg-[#0039A1] transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <TaliFooter />
    </div>
  )
}