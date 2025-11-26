export default function Pricing() {
  return (
    <section className="py-16 mt-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Тарифы и условия</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-8">
        <div className="bg-white text-gray-900 p-8 rounded-xl shadow-xl w-72 mb-6 md:mb-0 transition-transform hover:scale-105">
          <h3 className="font-bold text-xl mb-2">Базовый</h3>
          <p>Бесплатно — ведите аптечку, получайте напоминания и подсказки.</p>
        </div>
        <div className="bg-green-400 text-black p-8 rounded-xl shadow-xl w-72 transition-transform hover:scale-105">
          <h3 className="font-bold text-xl mb-2">Премиум</h3>
          <p>Локальные подсказки, интеграция с аптеками, расширенные семьи.</p>
        </div>
      </div>
    </section>
  );
}
