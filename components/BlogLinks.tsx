export default function BlogLinks() {
  return (
    <section className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Статьи в блоге</h2>
      <ul className="max-w-3xl mx-auto text-left list-disc ml-5 text-green-700 space-y-2">
        <li>
          <a href="#" className="hover:underline">
            Как перестать хранить в аптечке мусор и оставить только нужное
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Что делать с горой лекарств после болезни ребёнка
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Как разговаривать с родителями о таблетках, чтобы они действительно их пили
          </a>
        </li>
      </ul>
    </section>
  );
}
