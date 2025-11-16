'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, Menu, X, Apple, Zap, Users, BarChart3, Settings, Award } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Pose Detection',
      description: 'Real-time form analysis with intelligent feedback'
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: 'Meal Scanner',
      description: 'Instant nutrition analysis from any food'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Track progress with powerful insights'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Connect with fitness enthusiasts'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Smart Tools',
      description: 'Calculators & personalized guidance'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'AI Coaching',
      description: 'Personal trainer available 24/7'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100/50 px-10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
             {/* Left - Logo */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-base font-semibold text-gray-900">Gymmer</span>
              </div>

              {/* Center - Menu */}
              <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </button>

                <button 
                  onClick={() => scrollToSection('why')} 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Why Gymmer ?
                </button>
                <button 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                 <Link href="/privacy-policy" className="hover:text-gray-900 transition">Privacy Policy</Link>
                </button>
                <button 
                  onClick={() => scrollToSection('why')} 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                 <Link href="/terms-and-condition" className="hover:text-gray-900 transition">Terms & Condition</Link>
                </button>
              </div>

              {/* Right - Contact + Download */}
              <div className="hidden md:flex items-center gap-8">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </button>

                <Button className="bg-black hover:bg-gray-900 text-white text-sm h-9 px-6 rounded-full">
                  Download
                </Button>
              </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-gray-900">
                Features
              </button>
              <button onClick={() => scrollToSection('why')} className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-gray-900">
                Why Gymmer ?
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-gray-900">
                Contact Us
              </button>
              <div className="px-4 pt-2 pb-2">
                <Button className="w-full bg-black hover:bg-gray-900 text-white rounded-full">
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-100 sm:px-6 lg:px-8 pt-20 sm:pt-16 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100/60 px-4 py-1.5 rounded-full mb-8">
            <span className="text-xs text-gray-600 font-medium">Introducing Gymmer</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Your fitness.
            <br />
            Elevated.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Fitness calendar, AI chatbot, and essential training tools — everything you need to track progress and store your PRs.          
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white text-base h-12 rounded-full">
              Download App
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 rounded-full border-gray-300">
              Learn More
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative mt-16">
            <div className="bg-gray-100 rounded-3xl aspect-video flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-sm">App showcase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Designed for you.</h2>
            <p className="text-lg text-gray-600">Everything you need to transform your fitness journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-900 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Gymmer ?</h2>
            <p className="text-lg text-gray-600">Built on science, powered by AI</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Personalized', desc: 'AI adapts to your unique goals and preferences' },
              { title: 'Intuitive', desc: 'Simple, beautiful interface that just works' },
              { title: 'Accurate', desc: 'Science-backed methods and real-time analysis' },
              { title: 'Community', desc: 'Connect, compete, and grow together' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border-l-2 border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Start your transformation.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands using Gymmer to reach their fitness goals. Download today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white text-base h-12 rounded-full">
              Download App
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 rounded-full border-gray-300 hover:bg-gray-100">
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span className="font-semibold text-gray-900 text-sm">Gymmer</span>
              </div>
              <p className="text-xs text-gray-600">Your AI fitness companion</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/features" className="hover:text-gray-900 transition">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-gray-900 transition">Pricing</Link></li>
                <li><Link href="/download" className="hover:text-gray-900 transition">Download</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/about" className="hover:text-gray-900 transition">About</Link></li>
                <li><Link href="/blog" className="hover:text-gray-900 transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><Link href="/privacy-policy" className="hover:text-gray-900 transition">Privacy</Link></li>
                <li><Link href="/terms-and-condition" className="hover:text-gray-900 transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8">
            <p className="text-center text-xs text-gray-600">&copy; 2025 Gymmer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
