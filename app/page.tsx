import Promo from '../components/Promo'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import Audience from '../components/Audience'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Cases from '../components/Cases'
import Compare from '../components/Compare'
import Examples from '../components/Examples'
import Partners from '../components/Partners'
import BlogLinks from '../components/BlogLinks'
import Media from '../components/Media'

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* Фон как отдельный div, чтобы точно был внизу */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/termometr-s-vysokoi-temperaturoi-i-lekarstvom.jpg"
          alt="Background image"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Можно добавить легкий overlay для затемнения, если фон слишком яркий */}
        <div className="absolute inset-0 w-full h-full bg-white bg-opacity-20"></div>
      </div>
      {/* Контент поверх фонового изображения */}
      <div className="relative z-10 flex flex-col gap-10 w-full max-w-4xl px-4 py-10">
        <Promo />
        <Problem />
        <HowItWorks />
        <Audience />
        <Features />
        <Pricing />
        <Testimonials />
        <Cases />
        <Compare />
        <Examples />
        <Partners />
        <BlogLinks />
        <Media />
      </div>
    </div>
  )
}
