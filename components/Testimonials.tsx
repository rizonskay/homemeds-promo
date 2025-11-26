export default function Testimonials() {
  return (
    <section className="py-10 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-80 backdrop-blur">
      <h2 className="text-xl font-bold mb-3 text-gray-700">Отзывы пользователей</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
        <div className="bg-gray-50 rounded shadow px-6 py-4">
          <p className="italic text-gray-600">«Теперь в аптечке всегда порядок, ничего не пропускаю!»</p>
          <div className="font-bold mt-2 text-gray-800">Мария, мама</div>
        </div>
        <div className="bg-gray-50 rounded shadow px-6 py-4">
          <p className="italic text-gray-600">«Очень удобно, скан — и всё добавлено!»</p>
          <div className="font-bold mt-2 text-gray-800">Антон, пользователь</div>
        </div>
      </div>
    </section>
  );
}
