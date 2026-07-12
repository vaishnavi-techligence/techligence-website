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
            Techligence Robotics is an innovation-driven company building
            AI-powered service robots that help businesses automate operations,
            improve customer experiences, and enhance productivity. Our
            intelligent robotic solutions are designed for industries including
            hospitality, healthcare, education, retail, manufacturing, and
            logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              To make intelligent robotics accessible by delivering reliable,
              AI-powered automation solutions that simplify operations and
              create meaningful value for businesses.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              To become a trusted global leader in intelligent robotics,
              empowering organizations through innovation, automation, and
              human-centered technology.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}