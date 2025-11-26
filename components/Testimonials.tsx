export default function Testimonials() {
  return (
    <section className="py-16 mt-20 bg-green-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">Отзывы пользователей</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-xs mx-auto transition-transform hover:scale-105">
          <p className="italic mb-3">«В аптечке всегда порядок, тратим меньше, ни разу не пропустили курс!»</p>
          <div className="font-bold">Мария, мама двоих детей</div>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-xs mx-auto transition-transform hover:scale-105">
          <p className="italic mb-3">«Сканируешь упаковку — всё само подсказывает. Очень удобно!»</p>
          <div className="font-bold">Дмитрий, астматик</div>
        </div>
      </div>
    </section>
  );
}
