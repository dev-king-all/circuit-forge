import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
    </Layout>
  )
}
