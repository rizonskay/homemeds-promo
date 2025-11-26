export default function SWOT() {
  return (
    <section className="py-16 my-8 text-center max-w-5xl mx-auto rounded-xl bg-white bg-opacity-90 backdrop-blur-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-green-600">SWOT-анализ HomeMeds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-2 text-green-700">Сильные стороны</h3>
          <ul className="text-left list-disc ml-6 text-gray-700">
            <li>Снижает риски из‑за просрочки и пропусков приёма.</li>
            <li>Экономит бюджет, убирая дубли и хаос.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-orange-600">Слабые стороны</h3>
          <ul className="text-left list-disc ml-6 text-gray-700">
            <li>Нужен стартовый учёт аптечки (несколько минут на скан).</li>
            <li>Требуется точная база взаимодействий и противопоказаний.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-blue-700">Возможности</h3>
          <ul className="text-left list-disc ml-6 text-gray-700">
            <li>Интеграции с электронными рецептами и онлайн‑аптеками.</li>
            <li>Локальные подсказки по утилизации, сезонные наборы.</li>
            <li>Семейные профили и опека.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-red-600">Риски</h3>
          <ul className="text-left list-disc ml-6 text-gray-700">
            <li>Ответственность за корректность справочника.</li>
            <li>Вопросы приватности медицинских данных.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
