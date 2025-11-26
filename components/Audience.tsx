export default function Audience() {
  return (
    <section className="py-16 bg-green-50 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-5">Кому подходит?</h2>
      <ul className="max-w-xl mx-auto text-lg mb-6 text-left list-disc ml-6">
        <li>Семьям, которые ведут аптечку вместе</li>
        <li>Людям на курсе лечения или с обязательными приёмами лекарств</li>
        <li>Опекунам, родителям, ответственным за здоровье других</li>
      </ul>
      <h3 className="font-bold text-xl mb-2">Кому не подойдёт?</h3>
      <ul className="max-w-xl mx-auto text-left list-disc ml-6 text-lg">
        <li>Тем, кто не использует мобильные приложения</li>
        <li>Тем, кто не готов сделать стартовую ревизию аптечки</li>
      </ul>
    </section>
  );
}
