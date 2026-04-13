'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap, Cpu, CircuitBoard } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
            >
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                  <path d="M8 16L16 16M16 16L16 8M16 16L16 24M16 24L8 24M16 24L24 24M24 24L24 16M24 16L32 16M32 16L32 8M32 16L32 24M32 24L40 24M32 24L32 32M24 32L32 32M24 32L24 40M8 32L16 32M8 32L8 40" 
                        stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="16" cy="16" r="2" fill="white"/>
                  <circle cx="32" cy="16" r="2" fill="white"/>
                  <circle cx="16" cy="32" r="2" fill="white"/>
                  <circle cx="32" cy="32" r="2" fill="white"/>
                </svg>
              </div>
              {/* Central icon */}
              <Cpu className="h-6 w-6 text-white relative z-10" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">
                <span className="text-emerald-700">Circuit</span>
                <span className="text-purple-600">Forge</span>
              </span>
              <span className="text-xs text-blue-600 font-medium tracking-wider">PRECISION PCB DESIGN</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:-translate-y-0.5 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
              Get Started
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
