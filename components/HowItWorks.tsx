export default function HowItWorks() {
  return (
    <section className="py-16 bg-white text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6">Как это работает?</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="bg-gray-100 p-6 rounded-xl shadow w-72">
          <h3 className="font-semibold mb-2">1. Сканируйте штрих‑код</h3>
          <p className="text-sm">Препарат добавляется в аптечку с инструкцией и сроком годности.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow w-72">
          <h3 className="font-semibold mb-2">2. Получайте напоминания</h3>
          <p className="text-sm">Приложение поможет не пропустить приём и не забыть о покупке новых препаратов.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow w-72">
          <h3 className="font-semibold mb-2">3. Делитесь расписанием</h3>
          <p className="text-sm">Семейный режим — делитесь курсом, подтверждайте приём, совместно ведите аптечку.</p>
        </div>
      </div>
    </section>
  );
}
