'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, TrendingUp, Award, Users, Clock } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, Tech Innovations Inc.',
      content: 'CircuitForge transformed our IoT device development with their exceptional PCB design expertise. The attention to detail and commitment to quality exceeded our expectations.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Hardware Engineer, MedTech Solutions',
      content: 'Working with CircuitForge on our medical device controllers was a game-changer. Their reverse engineering capabilities helped us improve our existing designs significantly.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager, AutoTech Systems',
      content: 'The automotive ECU modules delivered by CircuitForge have been flawless. Their understanding of automotive requirements and safety standards is impressive.',
      rating: 5,
      avatar: 'EW'
    },
    {
      name: 'David Kim',
      role: 'CEO, Smart Home Devices',
      content: 'CircuitForge\'s rapid prototyping services helped us get to market 6 months ahead of schedule. Their team is responsive, professional, and technically brilliant.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Anderson',
      role: 'R&D Director, Industrial Automation Corp',
      content: 'The industrial control systems designed by CircuitForge have been running 24/7 for over two years without a single failure. Outstanding reliability and support.',
      rating: 5,
      avatar: 'LA'
    },
    {
      name: 'James Taylor',
      role: 'VP Engineering, Power Systems Ltd',
      content: 'CircuitForge\'s power management PCBs have revolutionized our renewable energy products. The efficiency gains and reliability improvements have been remarkable.',
      rating: 5,
      avatar: 'JT'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '200+', label: 'Happy Clients', icon: Users }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about our PCB design services and commitment to excellence.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold transition-transform duration-300 hover:scale-110">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center transition-transform duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.number}
                </span>
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer">
              Join Our Success Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
