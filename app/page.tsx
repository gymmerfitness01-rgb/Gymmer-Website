'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Menu, X, Bot, Zap, Users, BarChart3, Settings, PersonStanding } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Fitness Calendar',
      description: 'Plan workouts and track your daily routine efficiently'
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI Chat Assistant',
      description: 'Ask anything about workouts, diet, or fitness guidance'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Fitness Tools',
      description: 'BMI, Fat Calculator, Calorie Calculators & 1RM — for your progress'
    },
    {
      icon: <PersonStanding className="w-6 h-6" />,
      title: 'AI Pose Detection (Coming Soon)',
      description: 'Real-time form correction powered by advanced AI'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community (Coming Soon)',
      description: 'Connect, share progress & join challenges'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics (Coming Soon)',
      description: 'Deep insights to track your long-term fitness progress'
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100/50 px-6">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
          <div className="flex items-center justify-between h-25">
            {/* Left - Logo */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/gymmer_logo.jpg"
                  alt="logo"
                  width={90}
                  height={90}
                  className="object-cover"
                />
              </div>


              {/* <span className="text-base font-semibold text-gray-900">Gymmer</span> */}
            </div>

            {/* Center - Menu */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <button
                onClick={() => scrollToSection('features')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Features
              </button>

              <button
                onClick={() => scrollToSection('why')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Why Gymmer?
              </button>

              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-condition"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>


            {/* Right - Contact + Download */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
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

              <Link
                href="/privacy-policy"
                className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-condition"
                className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-gray-900"
              >
                Terms & Conditions
              </Link>


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
      <section className="px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-16 md:pb-24">
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
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative mt-16">
            <div className="rounded-3xl border border-gray-300 aspect-video overflow-hidden">
              <video
                src="/launch_video.mp4"
                autoPlay
                muted
                loop
                controls
                playsInline
                className="w-full h-full object-cover rounded-3xl"
              />
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
              { title: 'Organized', desc: 'Plan and track your workouts effortlessly with the fitness calendar' },
              { title: 'Smart', desc: 'Get instant guidance and answers with your AI fitness assistant' },
              { title: 'Practical', desc: 'Use accurate fitness tools to calculate, measure, and stay on track' },
              { title: 'Supportive', desc: 'Your AI companion helps you stay consistent and motivated every day' }
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
            Start your fitness journey with Gymmer and achieve your goals. Download today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white text-base h-12 rounded-full">
              Download App
            </Button>
          </div>
        </div>
      </section>

      <div className='h-30'>

      </div>

      {/* Footer */}
      <footer id="contact" className="bg-white px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 mb-12">

            {/* Brand */}
            <div className="flex flex-col md:max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/gymmer_logo.jpg"
                    alt="logo"
                    width={90}
                    height={90}
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> gymmerfitness01@gmail.com
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                BMI, Body Fat, Calories, Workout Utilities & 1RM — all designed for your progress.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-sm">

              {/* Product */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-base">Product</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <button
                      onClick={() => scrollToSection('features')}
                      className="hover:text-gray-900 transition text-left cursor-pointer"
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-gray-900 transition">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">Download</Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-base">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="/about" className="hover:text-gray-900 transition">About</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-gray-900 transition">Blog</Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-base">Legal</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="/privacy-policy" className="hover:text-gray-900 transition">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-condition" className="hover:text-gray-900 transition">Terms</Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>


          {/* Bottom */}
          <div className="border-t border-gray-100 pt-6">
            <p className="text-center text-xs text-gray-600">
              &copy; 2025 Gymmer. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}
