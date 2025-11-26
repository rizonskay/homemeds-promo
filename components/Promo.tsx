export default function Promo() {
  return (
    <section className="relative py-32 px-4 text-center max-w-4xl mx-auto mt-12 rounded-xl shadow-xl overflow-hidden">
      <img
        src="/andrii-leonov-LuH7CGBqRhw-unsplash.jpg"
        alt="Capsule background"
        className="absolute inset-0 w-full h-full object-cover brightness-95"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 bg-white bg-opacity-80 rounded-xl px-8 py-16 shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900 drop-shadow-lg">HomeMeds</h1>
        <p className="text-2xl max-w-2xl mx-auto mb-6 font-light text-gray-700">
          Ваш помощник для безопасной и современной домашней аптечки
        </p>
        <a
          href="#"
          className="inline-block px-10 py-5 bg-green-600 text-white font-bold rounded-3xl text-xl mt-4 shadow-lg hover:bg-green-700 transition"
        >
          Попробовать бесплатно
        </a>
      </div>
    </section>
  );
}
