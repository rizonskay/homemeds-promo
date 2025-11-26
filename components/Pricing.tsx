export default function Pricing() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-5">Тарифы и условия</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        <div className="bg-white text-gray-900 p-8 rounded-xl shadow w-64">
          <h3 className="font-bold text-xl mb-2">Базовый</h3>
          <p>Бесплатно — все основные функции для семьи, ведение аптечки, напоминания, подсказки</p>
        </div>
        <div className="bg-green-400 text-black p-8 rounded-xl shadow w-64">
          <h3 className="font-bold text-xl mb-2">Премиум</h3>
          <p>Расширенные функции, локальные подсказки по утилизации, интеграция с аптеками и рецептами</p>
        </div>
      </div>
    </section>
  );
}
