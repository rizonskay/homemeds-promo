export default function Testimonials() {
  return (
    <section className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Отзывы пользователей
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="bg-gray-50 rounded-xl shadow px-6 py-4 text-left">
          <p className="italic text-gray-600">
            "Раньше у нас были две коробки с лекарствами: детское и остальное.
            В критический момент жаропонижающее оказалось просроченным.
            С HomeMeds мы за один вечер разобрали аптечку, и теперь я просто
            открываю приложение и вижу, что можно дать ребёнку."
          </p>
          <div className="mt-2 font-bold text-gray-800">Мария, мама</div>
        </div>
        <div className="bg-gray-50 rounded-xl shadow px-6 py-4 text-left">
          <p className="italic text-gray-600">
            "Маме после выписки назначили несколько препаратов. На бумаге схема
            выглядела страшно, она всё путала. Я завёл ей расписание в HomeMeds
            и иногда смотрю, какие приёмы она отметила. Стало спокойнее."
          </p>
          <div className="mt-2 font-bold text-gray-800">Андрей, опекун</div>
        </div>
      </div>
    </section>
  );
}
