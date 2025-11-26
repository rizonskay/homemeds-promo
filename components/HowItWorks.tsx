export default function Problem() {
  return (
    <section className="relative py-16 mt-20 max-w-4xl mx-auto rounded-xl shadow-xl overflow-hidden text-center">
      <img
        src="/christine-sandu-jwWtZrm67VI-unsplash.jpg"
        alt="Blisters background"
        className="absolute inset-0 w-full h-full object-cover brightness-95"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 bg-white bg-opacity-90 rounded-xl px-8 py-12">
        {/* Весь твой контент тут: заголовок, списки, карточки... */}
      </div>
    </section>
  );
}
