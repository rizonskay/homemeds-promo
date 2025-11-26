export default function Problem() {
  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-5">Проблема и решение</h2>
      <p className="max-w-xl mx-auto mb-4 text-lg">
        Большинство домашних аптечек — это хаос, забытые лекарства, пропущенные приёмы, лишние траты. HomeMeds наводит порядок: сканируйте препараты, отслеживайте сроки и курсы, экономьте время и деньги.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
        <div className="bg-white p-6 rounded shadow w-64">
          <h3 className="font-bold mb-2 text-green-600">Было</h3>
          <ul className="text-left list-disc ml-4 text-sm">
            <li>Лекарства разбросаны по ящикам</li>
            <li>Пропущенные приёмы и просрочка</li>
            <li>Нет понимания, что докупить</li>
          </ul>
        </div>
        <div className="bg-green-100 p-6 rounded shadow w-64">
          <h3 className="font-bold mb-2 text-green-900">Стало</h3>
          <ul className="text-left list-disc ml-4 text-sm">
            <li>Вся аптечка в приложении</li>
            <li>Напоминания и контроль сроков</li>
            <li>Автоматически — список покупок</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
