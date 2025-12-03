export default function Media() {
  return (
    <section className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">О нас пишут</h2>
      <ul className="max-w-3xl mx-auto text-left list-disc ml-5 text-gray-600 space-y-2">
        <li>
          "Сервис, который превращает домашнюю аптечку из стихийного склада
          в управляемую систему." - условное издание
        </li>
        <li>
          "HomeMeds показывает, что забота о себе - это не героизм, а пара
          осознанных действий и немного порядка." - условный обзор
        </li>
      </ul>
    </section>
  );
}
