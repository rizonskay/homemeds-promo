export default function Features() {
  return (
    <section className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Что именно делает HomeMeds
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left text-gray-600">
        <div>
          <h3 className="font-semibold text-green-700 mb-1">Скан штрих-кода</h3>
          <p>
            Не нужно набивать названия и дозировки. Камера считывает упаковку,
            приложение подтягивает данные и предлагает сразу сохранить.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-green-700 mb-1">Умные напоминания</h3>
          <p>
            Телефон не просто "пикает", а помогает выдерживать курс: видно, что уже
            принято, что пропущено и что перенесено.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-green-700 mb-1">Семейная аптечка</h3>
          <p>
            Один список лекарств для всей семьи, но у каждого - свой курс и свои
            напоминания. Не нужно гадать, кто забрал последний блистер.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-green-700 mb-1">Подсказки по заменам</h3>
          <p>
            Если нужного бренда нет, HomeMeds помогает вспомнить, какое действующее
            вещество назначал врач, чтобы выбрать адекватный аналог.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-green-700 mb-1">Список "докупить"</h3>
          <p>
            Приложение ведёт список того, что заканчивается или скоро выйдет из срока.
            Можно докупить заранее, не делая лишних запасов.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-green-700 mb-1">Напоминание об утилизации</h3>
          <p>
            Вместо мешка "лекарств на всякий случай" вы периодически получаете
            понятный чек-лист: что сдать в аптеку, а что просто выбросить.
          </p>
        </div>
      </div>
    </section>
  );
}
