export default function Compare() {
  return (
    <section className="py-10 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur">
      <h2 className="text-xl font-bold mb-3 text-gray-700">Сравнения</h2>
      <table className="w-full max-w-lg mx-auto text-left border-separate border-spacing-y-2 text-gray-600">
        <thead>
          <tr>
            <th className="bg-gray-100 px-3 py-2 rounded">Параметр</th>
            <th className="bg-gray-100 px-3 py-2 rounded">HomeMeds</th>
            <th className="bg-gray-100 px-3 py-2 rounded">Обычная аптечка</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Уведомления о сроках</td>
            <td>Да</td>
            <td>Нет</td>
          </tr>
          <tr>
            <td>Рекомендации по замене</td>
            <td>Да</td>
            <td>Нет</td>
          </tr>
          <tr>
            <td>Семейный контроль</td>
            <td>Да</td>
            <td>Нет</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
