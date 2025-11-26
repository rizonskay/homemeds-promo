export default function Features() {
  return (
    <section className="py-16 bg-white text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-5">Функции приложения</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Сканирование препаратов</h3>
          <p className="text-sm">Автоматическое определение срока годности, условий хранения и инструкций.</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Напоминания</h3>
          <p className="text-sm">Уведомления помогут не сбиться с курса и вовремя принять лекарства.</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Семейный режим</h3>
          <p className="text-sm">Совместное ведение аптечки, подтверждение приёма, деление расписанием.</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Безопасные аналоги</h3>
          <p className="text-sm">Подсказки основного действующего вещества с учётом противопоказаний.</p>
        </div>
      </div>
    </section>
  );
}
