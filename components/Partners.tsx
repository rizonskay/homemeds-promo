export default function Partners() {
  return (
    <section className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Потенциальные партнёры</h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-4">
        HomeMeds может быть полезен аптекам, клиникам и благотворительным
        организациям, которые заинтересованы в том, чтобы пациенты соблюдали
        назначенные курсы лечения и не хранили дома опасную просрочку.
      </p>
      <ul className="max-w-3xl mx-auto text-left list-disc ml-5 text-gray-600 space-y-1">
        <li>Сети аптек с сервисом повторных покупок и резерва.</li>
        <li>Клиники и сервисы телемедицины.</li>
        <li>Фонды, работающие с хроническими пациентами и их семьями.</li>
      </ul>
    </section>
  );
}
