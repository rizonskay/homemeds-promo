export default function HowItWorks() {
  return (
    <section className="py-16 mt-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Как это работает?</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300 w-72">
          <h3 className="font-semibold mb-2 text-green-500">1. Сканируйте штрих‑код</h3>
          <p className="text-sm text-gray-700">Препарат добавляется в аптечку с инструкцией и сроком годности.</p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300 w-72">
          <h3 className="font-semibold mb-2 text-green-500">2. Получайте напоминания</h3>
          <p className="text-sm text-gray-700">Напоминания помогут не пропустить приём и купить новое вовремя.</p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300 w-72">
          <h3 className="font-semibold mb-2 text-green-500">3. Делитесь расписанием</h3>
          <p className="text-sm text-gray-700">Семейный режим: совместное управление, подтверждение приёма.</p>
        </div>
      </div>
    </section>
  );
}
