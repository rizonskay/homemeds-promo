export default function Promo() {
  return (
    <section className="py-32 px-4 text-white text-center rounded-xl shadow-xl max-w-4xl mx-auto mt-12 bg-black bg-opacity-40">
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg">HomeMeds</h1>
      <p className="text-2xl max-w-2xl mx-auto mb-6 font-light">
        Ваш помощник для безопасной и современной домашней аптечки
      </p>
      <a
        href="#"
        className="inline-block px-10 py-5 bg-green-600 bg-opacity-80 text-white font-bold rounded-3xl text-xl mt-4 shadow-lg transition hover:bg-opacity-100"
      >
        Попробовать бесплатно
      </a>
    </section>
  );
}
