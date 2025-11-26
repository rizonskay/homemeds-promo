export default function Audience() {
  return (
    <section className="py-16 mt-20 bg-black bg-opacity-40 rounded-xl max-w-4xl mx-auto text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Кому подходит?</h2>
      <ul className="max-w-xl mx-auto text-lg mb-6 text-left list-disc ml-6 space-y-1">
        <li>Семьям для совместного ведения аптечки</li>
        <li>Людям на курсе лечения</li>
        <li>Опекунам, родителям</li>
      </ul>
      <h3 className="font-bold text-xl mb-2 mt-8">Кому не подойдёт?</h3>
      <ul className="max-w-xl mx-auto text-left list-disc ml-6 text-lg space-y-1">
        <li>Тем, кто не пользуется мобильными приложениями</li>
        <li>Тем, кто не готов сделать ревизию аптечки</li>
      </ul>
    </section>
  );
}
