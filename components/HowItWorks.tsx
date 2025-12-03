export default function HowItWorks() {
  return (
    <section className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-85 backdrop-blur">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Как это работает по‑человечески
      </h2>
      <ol className="text-left max-w-3xl mx-auto list-decimal ml-6 space-y-3 text-gray-600">
        <li>
          <span className="font-semibold">Разбор аптечки один раз.</span>{' '}
          Достаёте лекарства, сканируете штрих‑код — приложение само подхватывает
          название, форму, дозировку и срок годности.
        </li>
        <li>
          <span className="font-semibold">Дальше всё делает телефон.</span>{' '}
          Вы задаёте курс: кому, сколько раз в день и сколько дней. HomeMeds
          напоминает принимать таблетки и заранее предупреждает, что препарат
          заканчивается или вот‑вот истечёт срок.
        </li>
        <li>
          <span className="font-semibold">Семейный режим.</span>{' '}
          У каждого свой профиль. Родители видят, принял ли ребёнок лекарство,
          опекун — как соблюдается схема приёма у пожилого родственника.
        </li>
        <li>
          <span className="font-semibold">Живая аптечка вместо склада.</span>{' '}
          Приложение показывает, что лежит без дела, что скоро надо докупить,
          а что пора спокойно утилизировать, а не хранить «на всякий случай» годами.
        </li>
      </ol>
    </section>
  );
}
