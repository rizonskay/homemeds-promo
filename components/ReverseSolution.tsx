export default function ReverseSolution() {
  return (
    <section className="py-14 my-8 max-w-3xl mx-auto bg-white bg-opacity-90 rounded-xl backdrop-blur-lg shadow-xl text-center">
      <h2 className="text-2xl font-bold mb-4 text-red-700">Антипример. Ошибка подхода</h2>
      <div className="border-l-4 border-red-500 pl-6 text-gray-700">
        <p className="text-lg mb-2">
          Плохая идея: хранить лекарства россыпью и «пить по памяти».
        </p>
        <p className="mb-2 font-medium">
          <span className="text-green-600">Вместо этого:</span> вести учёт сканом, напоминать о приёме и подсказывать безопасные замены.
        </p>
      </div>
    </section>
  );
}
