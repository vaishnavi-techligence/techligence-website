export default function AboutTechligence() {
  return (
    <section className="bg-[#050816] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            About Techligence
          </p>

          <h2 className="text-5xl font-black mt-4">
            Powering the Future with Intelligent Robotics
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            Techligence Robotics builds AI-powered service robots that automate
            operations, improve customer experiences, and deliver intelligent
            solutions for businesses across multiple industries.
          </p>
        </div>
<div className="mt-16 max-w-4xl mx-auto">

  <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">

    <img
      src="/team/kunal-gawhale.jpg"
      alt="Kunal Gawhale"
      className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
    />

    <div className="text-center md:text-left flex-1">

      <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold">
        Founder Spotlight
      </p>

      <h3 className="text-3xl font-bold mt-2">
        Kunal Gawhale
      </h3>

      <p className="text-cyan-400 font-semibold mt-1">
        Founder & CEO
      </p>

      <p className="text-gray-400 mt-2">
        M.Tech (EXTC), VJTI Mumbai
      </p>

      <p className="mt-5 text-gray-300 leading-8">
        Leading Techligence Robotics with a vision to build AI-powered service robots that simplify business operations, enhance customer experiences, and drive the future of intelligent automation.
      </p>

      <a
        href="/company"
        className="inline-block mt-6 px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold"
      >
        Learn More About Our Team →
      </a>

    </div>

  </div>

</div>
      </div>
    </section>
  );
}