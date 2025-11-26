export default function Problem() {
  return (
    <section className="py-16 mt-20 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6">Проблема и решение</h2>
      <p className="max-w-xl mx-auto mb-6 text-lg">
        Хаос, забытые лекарства, пропущенные приёмы, лишние траты — HomeMeds наводит порядок!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300 w-64">
          <h3 className="font-bold mb-3 text-green-500 text-lg">Было</h3>
          <ul className="text-left list-disc ml-4 text-sm space-y-1">
            <li>Лекарства разбросаны по ящикам</li>
            <li>Пропущенные приёмы и просрочка</li>
            <li>Нет понимания, что докупить</li>
          </ul>
        </div>
        <div className="bg-green-100 rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300 w-64">
          <h3 className="font-bold mb-3 text-green-900 text-lg">Стало</h3>
          <ul className="text-left list-disc ml-4 text-sm space-y-1">
            <li>Вся аптечка в приложении</li>
            <li>Напоминания и контроль сроков</li>
            <li>Автоматически — список покупок</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
