export default function Features() {
  return (
    <section className="py-10 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur">
      <h2 className="text-xl font-bold mb-3 text-gray-700">Описание фич и функций</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
        <li>Скан штрих-кода с автоматическим определением деталей лекарства</li>
        <li>Напоминания о приёмах и необходимости обновить аптечку</li>
        <li>Семейный режим и профили опеки</li>
        <li>Рекомендации безопасных аналогов и утилизации</li>
      </ul>
    </section>
  );
}
