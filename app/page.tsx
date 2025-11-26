export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">HomeMeds — умная домашняя аптечка</h1>
      <p className="mb-4 text-lg max-w-xl text-center">
        Приложение для учёта лекарств, сроков, курсов и напоминаний. Сканируйте штрих-код препарата — и все данные, условия хранения, инструкции добавятся автоматически.
      </p>
      <ul className="mb-8 text-left max-w-md">
        <li>✔️ Напоминания о приёме препаратов</li>
        <li>✔️ Семейный режим для совместного контроля</li>
        <li>✔️ Автоматическая подсказка аналогов и сроков годности</li>
        <li>✔️ Список “докупить” и правильная утилизация просроченного</li>
      </ul>
      <a
        href="#"
        className="px-6 py-3 bg-green-500 rounded text-black font-bold"
      >
        Начать пользоваться
      </a>
    </main>
  );
}
