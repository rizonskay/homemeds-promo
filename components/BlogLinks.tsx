export default function BlogLinks() {
  return (
    <section className="py-10 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur">
      <h2 className="text-xl font-bold mb-3 text-gray-700">Статьи в блоге</h2>
      <ul className="list-disc text-left max-w-lg mx-auto ml-6 text-blue-600">
        <li><a href="#">Как вести домашнюю аптечку?</a></li>
        <li><a href="#">Интервью с экспертом</a></li>
        <li><a href="#">Безопасная утилизация лекарств</a></li>
      </ul>
    </section>
  );
}
