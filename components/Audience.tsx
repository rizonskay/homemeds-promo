export default function Audience() {
  return (
    <section className="py-10 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Кому подходит и не подходит</h2>
      <ul className="list-disc text-left max-w-lg mx-auto ml-6 text-gray-600 mb-4">
        <li>Семьям для совместного контроля аптечки</li>
        <li>Людям, проходящим курсы лечения</li>
        <li>Опекунам, ответственным за здоровье других</li>
      </ul>
      <h3 className="font-bold text-gray-500 mb-2 mt-4">Кому не подойдёт:</h3>
      <ul className="list-disc text-left max-w-lg mx-auto ml-6 text-gray-600">
        <li>Тем, кто не пользуется смартфоном</li>
        <li>Тем, кто не хочет вести учёт</li>
      </ul>
    </section>
  );
}
