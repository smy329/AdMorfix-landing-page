import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Metrics from './sections/Metrics/Metrics.jsx'
import Work from './sections/Work/Work.jsx'
import Solution from './sections/Solution/Solution.jsx'
import HowItWorks from './sections/HowItWorks/HowItWorks.jsx'
import WhyUs from './sections/WhyUs/WhyUs.jsx'
import Compare from './sections/Compare/Compare.jsx'
import GetStarted from './sections/GetStarted/GetStarted.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Metrics />
        <Work />
        <Solution />
        <HowItWorks />
        <WhyUs />
        <Compare />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}
