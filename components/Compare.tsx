export default function Compare() {
  return (
    <section className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Почему не "на память" и не в заметках
      </h2>
      <div className="overflow-x-auto max-w-3xl mx-auto">
        <table className="w-full text-left text-sm text-gray-700 border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="bg-gray-100 px-3 py-2 rounded-l-xl">Параметр</th>
              <th className="bg-gray-100 px-3 py-2">HomeMeds</th>
              <th className="bg-gray-100 px-3 py-2 rounded-r-xl">Обычная аптечка</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-white px-3 py-2 rounded-l-xl">
                Напоминания о приёмах
              </td>
              <td className="bg-white px-3 py-2">Есть, по схеме для каждого</td>
              <td className="bg-white px-3 py-2 rounded-r-xl">
                Только если вспомнил сам
              </td>
            </tr>
            <tr>
              <td className="bg-white px-3 py-2 rounded-l-xl">
                Контроль сроков годности
              </td>
              <td className="bg-white px-3 py-2">
                Видно, что скоро истечёт, и приходит напоминание
              </td>
              <td className="bg-white px-3 py-2 rounded-r-xl">
                Находится случайно при очередной болезни
              </td>
            </tr>
            <tr>
              <td className="bg-white px-3 py-2 rounded-l-xl">
                Привязка к конкретным людям
              </td>
              <td className="bg-white px-3 py-2">
                У каждого свой профиль и курс
              </td>
              <td className="bg-white px-3 py-2 rounded-r-xl">
                В голове или на бумажке, легко перепутать
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
