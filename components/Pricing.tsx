"use client";

import { useState } from "react";

export default function Pricing() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section
      id="pricing"
      className="py-12 px-6 text-center rounded-2xl shadow-lg bg-white bg-opacity-90 backdrop-blur"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Цены, тарифы и условия
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto">
        {/* Базовый тариф */}
        <div className="flex-1 bg-white rounded-xl shadow px-7 py-6 flex flex-col">
          <h3 className="text-lg font-bold text-green-700 mb-1">Базовый</h3>
          <p className="text-gray-700 mb-3">
            Бесплатно, без ограничений по времени
          </p>
          <ul className="text-left list-disc ml-5 text-gray-600 text-sm space-y-1 mb-4">
            <li>Учёт всей домашней аптечки.</li>
            <li>Напоминания о приёмах и сроках годности.</li>
            <li>Список "докупить" и подсказки по утилизации.</li>
          </ul>
          <div className="mt-auto">
            <button
              type="button"
              className="w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-2xl text-sm hover:bg-green-600 transition"
              onClick={() => setShowForm(true)}
            >
              Попробовать бесплатно
            </button>
          </div>
        </div>

        {/* Премиум тариф - заглушка */}
        <div className="flex-1 bg-green-50 rounded-xl shadow px-7 py-6 flex flex-col">
          <h3 className="text-lg font-bold text-green-900 mb-1">Премиум</h3>
          <p className="text-gray-700 mb-3">Подписка для семей и опекунов</p>
          <ul className="text-left list-disc ml-5 text-gray-600 text-sm space-y-1 mb-4">
            <li>Отдельные профили для родственников.</li>
            <li>Совместный доступ: видно, кто принял лекарство.</li>
            <li>Расширенные подсказки по заменам и наборам.</li>
          </ul>
          <div className="mt-auto">
            <button
              type="button"
              className="w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-2xl text-sm opacity-70 cursor-default"
            >
              Оформить подписку (скоро)
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно с формой */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl px-6 py-6 text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Оставьте контакты - пришлём доступ, когда продукт будет готов
            </h3>
            <form
              className="space-y-3"
              onSubmit={async (e) => {
                e.preventDefault();
                if (isSubmitting) return;

                setIsSubmitting(true);
                const form = e.currentTarget;
                const formData = new FormData(form);
                const name = String(formData.get("name") || "");
                const email = String(formData.get("email") || "");

                if (typeof window !== "undefined" && (window as any).ym) {
                  (window as any).ym(
                    105646224,
                    "reachGoal",
                    "lead-form-submit"
                  );
                }

                try {
                  const body = new URLSearchParams();
                  body.append("name", name);
                  body.append("email", email);

                  await fetch(
                    "https://script.google.com/macros/s/AKfycby2P2YEabnTHl11to7MQ-Y7toazgXwffsXPJdIzSWxUtpb7lEDDaeCSXtlky2xarQVdWw/exec",
                    {
                      method: "POST",
                      body,
                    }
                  );
                } catch (err) {
                  console.error("Ошибка отправки в Google Script", err);
                }

                form.reset();
                setShowForm(false);
                setIsSubmitting(false);
                alert("Спасибо! Мы сообщим, когда HomeMeds будет доступен.");
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Имя"
                className="w-full border border-gray-400 rounded-xl px-3 py-2 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-400 rounded-xl px-3 py-2 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                disabled={isSubmitting}
              />
              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-4 py-3 rounded-2xl text-sm font-semibold text-white transition ${
                    isSubmitting
                      ? "bg-green-400 cursor-wait"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {isSubmitting ? "Отправка..." : "Получить доступ к HomeMeds"}
                </button>
                <button
                  type="button"
                  className="px-4 py-3 bg-gray-200 text-gray-700 font-semibold rounded-2xl text-sm hover:bg-gray-300 transition"
                  onClick={() => {
                    if (isSubmitting) return;
                    setShowForm(false);
                  }}
                >
                  Отмена
                </button>
              </div>
            </form>
            <p className="mt-2 text-xs text-gray-500">
              Никакого спама - только сообщение о запуске и, возможно, ранний доступ.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
