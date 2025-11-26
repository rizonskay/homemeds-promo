export default function Features() {
  return (
    <section className="relative py-16 mt-20 max-w-6xl mx-auto rounded-xl shadow-xl overflow-hidden text-center">
      <img
        src="/etactics-inc-nQ7bzOlfbRA-unsplash.jpg"
        alt="Pills background"
        className="absolute inset-0 w-full h-full object-cover brightness-100"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 bg-white bg-opacity-90 rounded-xl px-8 py-12">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Функции приложения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Здесь блоки фич, как было раньше */}
        </div>
      </div>
    </section>
  );
}
