export default function Promo() {
  return (
    <section className="py-14 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">HomeMeds — умная домашняя аптечка</h1>
      <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-600">
        Стартап-решение для учёта медикаментов, сроков и курсов с умными функциями, напоминаниями, безопасными заменами и семейными режимами.
      </p>
      <a
        href="#"
        className="inline-block px-10 py-5 bg-green-500 text-white font-bold rounded-3xl text-lg mt-2 shadow hover:bg-green-600 transition"
      >
        Попробовать бесплатно
      </a>
    </section>
  );
}
