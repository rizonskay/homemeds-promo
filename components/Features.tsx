export default function Features() {
  return (
    <section className="py-16 mt-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Функции приложения</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300">
          <h3 className="font-semibold mb-2 text-green-500">Сканирование препаратов</h3>
          <p className="text-sm text-gray-700">Автоматическое определение срока годности и условий хранения.</p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300">
          <h3 className="font-semibold mb-2 text-green-500">Напоминания</h3>
          <p className="text-sm text-gray-700">Уведомления — никогда не забываете о приёме препарата.</p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300">
          <h3 className="font-semibold mb-2 text-green-500">Семейный режим</h3>
          <p className="text-sm text-gray-700">Совместное управление и подтверждение приёма препаратов.</p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 duration-300">
          <h3 className="font-semibold mb-2 text-green-500">Безопасные аналоги</h3>
          <p className="text-sm text-gray-700">Подсказки по действующему веществу и противопоказаниям.</p>
        </div>
      </div>
    </section>
  );
}
