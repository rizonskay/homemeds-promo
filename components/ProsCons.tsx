export default function ProsCons() {
  return (
    <section className="py-14 my-8 max-w-3xl mx-auto bg-white bg-opacity-90 rounded-xl backdrop-blur-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Плюсы и минусы решения</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2 text-green-600">Плюсы</h3>
          <ul className="list-disc text-left ml-6 text-gray-700">
            <li>Безопасность, дисциплина приёма, прозрачные запасы.</li>
            <li>Умный список покупок и меньше внезапных трат.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-orange-600">Минусы</h3>
          <ul className="list-disc text-left ml-6 text-gray-700">
            <li>Первичная инвентаризация может утомить.</li>
            <li>Нужно поддерживать актуальную базу лекарств.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
