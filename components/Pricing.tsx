export default function Pricing() {
  return (
    <section className="py-10 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-90 backdrop-blur">
      <h2 className="text-xl font-bold mb-6 text-gray-700">Цены / тарифы / условия</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="bg-white rounded-xl shadow px-7 py-6 min-w-[230px]">
          <h3 className="text-lg font-bold text-green-700 mb-2">Базовый</h3>
          <div className="text-gray-700 mb-3">Бесплатно</div>
          <ul className="text-left list-disc ml-5 text-gray-600 text-sm space-y-1">
            <li>Учёт лекарств</li>
            <li>Все напоминания</li>
            <li>Рекомендации по утилизации</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl shadow px-7 py-6 min-w-[230px]">
          <h3 className="text-lg font-bold text-green-900 mb-2">Премиум</h3>
          <div className="text-gray-700 mb-3">Подписка</div>
          <ul className="text-left list-disc ml-5 text-gray-600 text-sm space-y-1">
            <li>Семейные профили и опека</li>
            <li>Интеграции с аптеками</li>
            <li>Расширенные советы</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
