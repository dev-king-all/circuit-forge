'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Zap, Shield, Globe, Smartphone, Car } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'IoT Environmental Sensor',
      category: 'IoT & Smart Devices',
      description: 'Designed and developed a comprehensive environmental monitoring system capable of tracking temperature, humidity, air quality, and particulate matter in real-time. The project required creating a custom PCB with ultra-low power consumption to enable battery operation for up to 5 years. Key challenges included optimizing sensor accuracy while minimizing power draw, implementing robust wireless communication protocols for unreliable environments, and ensuring seamless cloud integration for large-scale deployments. Our solution utilized advanced power management techniques, edge computing for local data processing, and redundant communication pathways to achieve 99.9% data reliability in field conditions.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
      tags: ['IoT', 'Sensors', 'Wireless', 'Cloud'],
      results: ['95% power reduction', 'Real-time monitoring', 'Scalable architecture'],
      icon: Globe,
      categoryColor: 'blue'
    },
    {
      title: 'Medical Device Controller',
      category: 'Medical Electronics',
      description: 'Engineered a critical control system for medical diagnostic equipment requiring absolute precision and fail-safe operation. The scope involved developing a multi-layer PCB with redundant safety circuits, EMI shielding, and medical-grade isolation barriers. Major challenges included meeting stringent FDA requirements, implementing dual-redundant processors for fault tolerance, and ensuring electromagnetic compatibility in hospital environments. Our solution incorporated certified medical components, comprehensive self-diagnostics, and a proprietary safety monitoring system that achieved 99.99% uptime while maintaining microsecond-level response times for critical operations.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
      tags: ['Medical', 'Safety', 'Precision', 'FDA'],
      results: ['99.9% reliability', 'Safety certified', 'FDA compliant'],
      icon: Shield,
      categoryColor: 'green'
    },
    {
      title: 'Automotive ECU Module',
      category: 'Automotive',
      description: 'Developed a next-generation Engine Control Unit (ECU) supporting advanced combustion optimization and real-time vehicle diagnostics. The project required designing a high-temperature resistant PCB capable of withstanding harsh automotive conditions while processing multiple sensor inputs simultaneously. Key challenges included implementing ISO 26262 safety protocols, achieving sub-millisecond response times for critical engine functions, and integrating with existing vehicle communication networks. Our solution featured automotive-grade components, advanced thermal management, and a distributed processing architecture that improved fuel efficiency by 15% while reducing emissions by 20%.',
      image: 'https://images.unsplash.com/photo-1542362567-b07e5e58a1ea?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
      tags: ['Automotive', 'ECU', 'Real-time', 'Safety'],
      results: ['ISO 26262 compliant', 'Real-time processing', 'Temperature resistant'],
      icon: Car,
      categoryColor: 'red'
    },
    {
      title: 'Smartphone RF Module',
      category: 'Consumer Electronics',
      description: 'Created a compact multi-band RF module supporting 5G, Wi-Fi 6E, and Bluetooth 5.3 protocols for next-generation smartphones. The scope required developing a densely populated PCB with precise impedance control and advanced signal integrity management. Major challenges included minimizing interference between frequency bands, achieving 40% size reduction while maintaining performance, and implementing dynamic power scaling to extend battery life. Our solution utilized proprietary antenna design, advanced materials engineering, and AI-powered signal processing that delivered 3x faster data speeds while consuming 35% less power than previous generations.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
      tags: ['RF', '5G', 'Compact', 'Low-power'],
      results: ['5G compatible', '40% smaller', 'Extended battery life'],
      icon: Smartphone,
      categoryColor: 'purple'
    },
    {
      title: 'Industrial Automation Controller',
      category: 'Industrial',
      description: 'Designed an industrial automation controller for deployment in manufacturing plants with extreme temperature variations, vibration, and electromagnetic interference. The project required creating a ruggedized PCB with conformal coating, reinforced mounting, and comprehensive environmental protection. Key challenges included ensuring continuous 24/7 operation, implementing hot-swappable components for maintenance without shutdown, and integrating with legacy industrial protocols. Our solution featured military-grade components, advanced thermal management, and a modular architecture that achieved zero downtime over 5 years of continuous operation in harsh factory conditions.',
      image: 'https://images.unsplash.com/photo-1581091226825-6ba6d5b55d3?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
      tags: ['Industrial', 'Automation', 'PLC', 'Harsh environment'],
      results: ['IP67 rated', '24/7 operation', 'Zero downtime'],
      icon: Cpu,
      categoryColor: 'orange'
    },
    {
      title: 'Power Management System',
      category: 'Energy',
      description: 'Engineered a sophisticated power management system for solar and wind energy installations requiring maximum efficiency and grid synchronization. The scope involved developing a multi-phase PCB with advanced power conversion circuits, real-time monitoring capabilities, and smart grid integration. Major challenges included achieving 98% conversion efficiency across varying load conditions, implementing MPPT (Maximum Power Point Tracking) algorithms, and ensuring compliance with international grid standards. Our solution utilized silicon carbide components, predictive analytics for maintenance, and a distributed control architecture that increased energy harvest by 12% while providing comprehensive system diagnostics.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80',
      tags: ['Power', 'Renewable', 'Efficiency', 'Smart grid'],
      results: ['98% efficiency', 'Smart grid ready', 'Scalable'],
      icon: Zap,
      categoryColor: 'yellow'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful PCB design projects across various industries and applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-${project.categoryColor}-100 text-${project.categoryColor}-800`}>
                    <project.icon className={`h-3 w-3 text-${project.categoryColor}-600`} />
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-pointer">
                  <span>View Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
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
              Explore More Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
