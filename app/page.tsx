import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import PhotoGallery from '@/components/PhotoGallery'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <PhotoGallery />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}
