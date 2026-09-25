import Hero from '../components/Hero'
import InvestmentPortfolio from '../components/InvestmentPortfolio'
import DecisionTools from '../components/DecisionTools'
import Dashboards from '../components/Dashboards'
import Resources from '../components/Resources'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PlanningSection from '../components/PlanningSection'


function Home() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.state?.scrollTo

    if (!sectionId) {
      return
    }

    const timer = setTimeout(() => {
      const element = document.getElementById(sectionId)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      window.history.replaceState({}, document.title, window.location.pathname)
    }, 100)

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <div className="navbar-spacer" />
      <Hero />
      <PlanningSection />
      <InvestmentPortfolio />
      <DecisionTools />
      <Dashboards />
      <Resources />
      <Footer />
    </>
  )
}

export default Home