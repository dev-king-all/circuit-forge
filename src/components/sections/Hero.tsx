'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Cpu, Shield } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-10 pb-10 flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: "url('/images/hero.webp')",
               filter: 'brightness(0.9) contrast(1.1)'
             }}>
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Zap className="h-4 w-4" />
            <span>Advanced PCB Solutions</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Precision PCB Design,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            From Concept
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            to Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.3)' }}
        >
          Precision PCB design solutions for cutting-edge electronics. From concept to production, 
          we forge the circuits that power innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border-2 border-gray-300 text-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer">
            View Our Work
          </button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 transition-transform duration-300 hover:scale-110">
              <Cpu className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Advanced Design</h3>
            <p className="text-gray-200">State-of-the-art PCB design with cutting-edge technology and methodologies</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 transition-transform duration-300 hover:scale-110">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Rapid Prototyping</h3>
            <p className="text-gray-200">Fast turnaround times with precision manufacturing and testing</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 transition-transform duration-300 hover:scale-110">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quality Assured</h3>
            <p className="text-gray-200">Rigorous testing and quality control for reliable performance</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
