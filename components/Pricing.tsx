export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-90 backdrop-blur"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Цены, тарифы и условия
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto">
        <div className="flex-1 bg-white rounded-xl shadow px-7 py-6">
          <h3 className="text-lg font-bold text-green-700 mb-1">Базовый</h3>
          <p className="text-gray-700 mb-3">Бесплатно, без ограничений по времени</p>
          <ul className="text-left list-disc ml-5 text-gray-600 text-sm space-y-1">
            <li>Учёт всей домашней аптечки.</li>
            <li>Напоминания о приёмах и сроках годности.</li>
            <li>Список «докупить» и подсказки по утилизации.</li>
          </ul>
        </div>
        <div className="flex-1 bg-green-50 rounded-xl shadow px-7 py-6">
          <h3 className="text-lg font-bold text-green-900 mb-1">Премиум</h3>
          <p className="text-gray-700 mb-3">Подписка для семей и опекунов</p>
          <ul className="text-left list-disc ml-5 text-gray-600 text-sm space-y-1">
            <li>Отдельные профили для родственников.</li>
            <li>Совместный доступ: видно, кто принял лекарство.</li>
            <li>Расширенные подсказки по заменам и наборам.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
