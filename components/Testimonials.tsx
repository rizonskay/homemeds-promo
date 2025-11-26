export default function Testimonials() {
  return (
    <section className="py-16 bg-green-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">Отзывы пользователей</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        <div className="bg-white p-6 rounded shadow max-w-xs mx-auto">
          <p className="italic mb-2">«Теперь в аптечке всегда порядок. На лекарства тратим меньше, ни разу не пропустили курс!»</p>
          <div className="font-bold">Мария, мама двоих детей</div>
        </div>
        <div className="bg-white p-6 rounded shadow max-w-xs mx-auto">
          <p className="italic mb-2">«Сканируешь упаковку — и приложение само всё подсказывает. Очень удобно!»</p>
          <div className="font-bold">Дмитрий, астматик</div>
        </div>
      </div>
    </section>
  );
}
