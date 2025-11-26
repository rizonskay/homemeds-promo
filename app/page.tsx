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
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Основной фон — изображение растягивается полностью */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/termometr-s-vysokoi-temperaturoi-i-lekarstvom.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Белый overlay делает фон светлее! Поэкспериментируй с bg-opacity: 60-70 */}
        <div className="absolute inset-0 w-full h-full bg-white bg-opacity-70"></div>
      </div>
      {/* Контент лендинга поверх фона */}
      <div className="relative z-10 flex flex-col gap-10 w-full max-w-4xl px-4 py-10 mx-auto">
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
