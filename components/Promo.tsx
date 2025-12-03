export default function Promo() {
  return (
    <section className="py-16 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        HomeMeds - умная домашняя аптечка
      </h1>
      <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-600">
        Здесь решают вечный бардак в домашней аптечке. HomeMeds помогает не держать
        всё в голове! Приложение помнит, какие лекарства у вас есть, когда у них
        заканчивается срок годности и кому из семьи что нужно пить и когда.
      </p>
      <a
        href="#pricing"
        className="inline-block px-10 py-4 bg-green-500 text-white font-bold rounded-3xl text-lg shadow hover:bg-green-600 transition"
      >
        Навести порядок в аптечке
      </a>
    </section>
  );
}
