import Promo from '../components/Promo'
import SWOT from '../components/SWOT'
import Constructive from '../components/Constructive'
import ProsCons from '../components/ProsCons'
import ReverseSolution from '../components/ReverseSolution'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Фоновое изображение для всего сайта */}
      <img
        src="/termometr-s-vysokoi-temperaturoi-i-lekarstvom.jpg"
        alt="Medicine and thermometer background"
        className="fixed inset-0 w-full h-full object-cover opacity-35 blur-sm pointer-events-none z-0"
      />
      <div className="relative z-10">
        <Promo />
        <SWOT />
        <Constructive />
        <ProsCons />
        <ReverseSolution />
      </div>
    </div>
  );
}
