export default function Pricing() {
  return (
    <section className="py-10 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur">
      <h2 className="text-xl font-bold mb-3 text-gray-700">Цены / тарифы / условия</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-xl shadow p-6">
          <h3 className="font-bold mb-1 text-green-700">Базовый</h3>
          <p>Все функции для учёта и напоминаний — бесплатно</p>
        </div>
        <div className="bg-green-100 rounded-xl shadow p-6">
          <h3 className="font-bold mb-1 text-green-800">Премиум</h3>
          <p>Расширенные семейные функции, интеграции с аптекой — за подписку</p>
        </div>
      </div>
    </section>
  );
}
