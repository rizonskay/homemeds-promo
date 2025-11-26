export default function HowItWorks() {
  return (
    <section className="py-10 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur">
      <h2 className="text-xl font-bold mb-3 text-gray-700">Как это работает?</h2>
      <ol className="text-left max-w-lg mx-auto list-decimal ml-6 text-gray-600">
        <li>Сканируйте штрих-код препарата для простого добавления.</li>
        <li>Получайте напоминания о приёме и покупке новых лекарств.</li>
        <li>Делитесь расписаниями с семьёй, подтверждайте приёмы.</li>
        <li>Получайте автоматические рекомендации и подсказки по замене.</li>
      </ol>
    </section>
  );
}
