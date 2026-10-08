import { MotionConfig } from 'framer-motion'
import { About } from './components/About/About'
import { BackToTop } from './components/BackToTop/BackToTop'
import { Challenges } from './components/Challenges/Challenges'
import { Contact } from './components/Contact/Contact'
import { ExperienceDetail } from './components/ExperienceDetail/ExperienceDetail'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Journey } from './components/Journey/Journey'
import { Navbar } from './components/Navbar/Navbar'
import { Skills } from './components/Skills/Skills'
import { TopWork } from './components/Work/TopWork'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <TopWork />
        <Challenges />
        <ExperienceDetail />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
