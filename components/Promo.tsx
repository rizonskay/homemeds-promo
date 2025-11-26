export default function Promo() {
  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto mt-16 rounded-xl shadow-xl bg-white bg-opacity-90 backdrop-blur-lg">
      <h1 className="text-5xl font-extrabold mb-6 text-green-800 drop-shadow-lg">
        HomeMeds — умная домашняя аптечка
      </h1>
      <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-600">
        HomeMeds — приложение для учёта препаратов, сроков и курсов. Скан штрих‑кода добавляет лекарство с автоматическим определением срока годности/условий хранения и инструкцией. Напоминания помогают не сбиваться с курса, «семейный режим» позволяет делиться расписаниями и подтверждать приём. Подсказки безопасных аналогов опираются на действующее вещество и противопоказания, формируется список «докупить» и рекомендации по корректной утилизации просроченных средств.
      </p>
      <a
        href="#"
        className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-3xl text-xl mt-2 shadow-lg hover:bg-green-700 transition"
      >
        Попробовать бесплатно
      </a>
    </section>
  );
}
