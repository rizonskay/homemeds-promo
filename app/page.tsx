export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex">
        <img
          src="/andrii-leonov-LuH7CGBqRhw-unsplash.jpg"
          alt="Capsule background"
          className="w-1/3 h-full object-cover opacity-60"
        />
        <img
          src="/christine-sandu-jwWtZrm67VI-unsplash.jpg"
          alt="Blisters background"
          className="w-1/3 h-full object-cover opacity-60"
        />
        <img
          src="/etactics-inc-nQ7bzOlfbRA-unsplash.jpg"
          alt="Pills background"
          className="w-1/3 h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10">
        <Promo />
        <Problem />
        <HowItWorks />
        <Audience />
        <Features />
        <Pricing />
        <Testimonials />
      </div>
    </div>
  );
}
