'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Zap, Shield, Settings, Layers, Wrench } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'PCB Design & Layout',
      description: 'Custom PCB design services from schematic capture to final layout, optimized for performance and manufacturability.',
      features: ['Multi-layer PCBs', 'High-speed design', 'RF/Microwave circuits', 'Power electronics'],
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Reverse Engineering',
      description: 'Professional PCB reverse engineering services to analyze, duplicate, or improve existing circuit designs.',
      features: ['Circuit analysis', 'Component identification', 'Schematic recreation', 'Design improvement'],
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Signal Integrity Analysis',
      description: 'Comprehensive signal and power integrity analysis to ensure reliable performance in high-speed applications.',
      features: ['SI/PI analysis', 'EMI/EMC testing', 'Thermal analysis', 'Reliability testing'],
      color: 'green'
    },
    {
      icon: Settings,
      title: 'Manufacturing Support',
      description: 'Complete manufacturing support including DFM checks, assembly optimization, and quality control.',
      features: ['DFM analysis', 'Assembly guidelines', 'Quality control', 'Supply chain management'],
      color: 'orange'
    },
    {
      icon: Layers,
      title: 'Flexible & Rigid-Flex PCBs',
      description: 'Specialized design services for flexible and rigid-flex PCBs for compact and innovative applications.',
      features: ['Flexible circuits', 'Rigid-flex designs', 'Wearable electronics', 'Compact solutions'],
      color: 'pink'
    },
    {
      icon: Wrench,
      title: 'Testing & Validation',
      description: 'Comprehensive testing and validation services to ensure your PCBs meet all specifications and standards.',
      features: ['Functional testing', 'Environmental testing', 'Compliance testing', 'Failure analysis'],
      color: 'indigo'
    }
  ]

  const colors = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive PCB design solutions tailored to your specific requirements. From concept to production, we deliver excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = {
              blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
              purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
              green: { bg: 'bg-green-100', text: 'text-green-600' },
              orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
              pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
              indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' }
            }
            const color = colors[service.color as keyof typeof colors]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:scale-105 cursor-pointer"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${color.bg} rounded-full mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                    <service.icon className={`h-8 w-8 ${color.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 ${color.text} rounded-full`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`h-1 ${color.bg} opacity-0 hover:opacity-100 transition-all duration-300 transform scale-x-0 hover:scale-x-100 origin-left`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 cursor-pointer">
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
