import Promo from '../components/Promo'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import Audience from '../components/Audience'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <img
        src="/etactics-inc-nQ7bzOlfbRA-unsplash.jpg"
        alt="background pills"
        className="fixed inset-0 w-full h-full object-cover z-0 brightness-75"
        style={{pointerEvents: 'none'}}
      />
      <div className="relative z-10">
        <Promo />
        <Problem />
