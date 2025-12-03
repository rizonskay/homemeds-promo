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
        {/* Базовый тариф */}
        <div className="flex-1 bg-white rounded-xl shadow px-7 py-6 flex flex-col">
          <h3 className="text-lg font-bold text-green-700 mb-1">Базовый</h3>
          <p className="text-gray-700 mb-3">Бесплатно, без ограничений по времени</p>
          <ul className="text-left list-disc ml-5 text-gray-600 text-sm space-y-1 mb-4">
            <li>Учёт всей домашней аптечки.</li>
            <li>Напоминания о приёмах и сроках годности.</li>
            <li>Список "докупить" и подсказки по утилизации.</li>
          </ul>
          <div className="mt-auto">
            <button
              type="button"
              className="w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-2xl text-sm hover:bg-green-600 transition"
              onClick={() =>
                document
                  .getElementById("homemeds-lead-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Попробовать бесплатно
            </button>
          </div>
        </div>

        {/* Премиум тариф - заглушка */}
        <div className="flex-1 bg-green-50 rounded-xl shadow px-7 py-6 flex flex-col">
          <h3 className="text-lg font-bold text-green-900 mb-1">Премиум</h3>
          <p className="text-gray-700 mb-3">Подписка для семей и опекунов</p>
          <ul className="text-left list-disc ml-5 text-gray-600 text-sm space-y-1 mb-4">
            <li>Отдельные профили для родственников.</li>
            <li>Совместный доступ: видно, кто принял лекарство.</li>
            <li>Расширенные подсказки по заменам и наборам.</li>
          </ul>
          <div className="mt-auto">
            <button
              type="button"
              className="w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-2xl text-sm opacity-70 cursor-default"
            >
              Оформить подписку (скоро)
            </button>
          </div>
        </div>
      </div>

      {/* Форма заявки на продукт */}
      <div
        id="homemeds-lead-form"
        className="mt-10 max-w-md mx-auto text-left"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Оставьте контакты - пришлём доступ, когда продукт будет готов
        </h3>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;

            // Цель Яндекс.Метрики
            if (typeof window !== "undefined" && (window as any).ym) {
              (window as any).ym(105646224, "reachGoal", "lead-form-submit");
            }

            form.reset();
            alert("Спасибо! Мы сообщим, когда HomeMeds будет доступен.");
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-2xl text-sm hover:bg-green-700 transition"
          >
            Получить доступ к HomeMeds
          </button>
        </form>
        <p className="mt-2 text-xs text-gray-500">
          Никакого спама - только сообщение о запуске и, возможно, ранний доступ.
        </p>
      </div>
    </section>
  );
}
