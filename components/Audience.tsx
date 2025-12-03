export default function Audience() {
  return (
    <section className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Кому это правда нужно
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left text-gray-600">
        <div>
          <h3 className="font-semibold mb-2 text-green-700">Подходит, если</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>В семье есть дети, пожилые родственники или кто‑то на постоянной терапии.</li>
            <li>Вы хотя бы раз находили просроченное лекарство и думали: «Надо это разобрать».</li>
            <li>Хочется меньше держать в голове и больше опираться на понятную систему.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-gray-500">Не подойдёт, если</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Вы принципиально не пользуетесь смартфоном и приложениями.</li>
            <li>Не готовы выделить 10–15 минут один раз на стартовую ревизию аптечки.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
