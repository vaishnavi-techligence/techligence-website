export default function Industries() {
  return (
    <section className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-cyan-400 tracking-[6px] uppercase text-sm">
          INDUSTRIES
        </p>

        <h2 className="text-5xl font-black mt-4 mb-16">
          Built For Every Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="robot-card p-[2px]">
            <div className="bg-[#050816] rounded-3xl p-8 h-full relative overflow-hidden">
            <div
  className="
    absolute
    -top-2
    -right-4
    text-[100px]
    font-black
    text-white/[0.03]
    select-none
    pointer-events-none
    leading-none
  "
>
  CORPORATE
</div>
              <h3 className="text-3xl font-bold">
                Corporate
              </h3>

              <p className="text-gray-400 mt-4">
                Visitor management, reception and meeting assistance.
              </p>

             <button className="robot-button p-[2px] mt-8">
  <div className="relative z-10 px-8 py-3 rounded-full bg-[#050816] text-white font-bold tracking-wide">
    EXPLORE →
  </div>
</button>

            </div>
          </div>

          {/* Card 2 */}
          <div className="robot-card p-[2px]">
            <div className="bg-[#050816] rounded-3xl p-8 h-full relative overflow-hidden">
            <div
  className="
    absolute
    -top-2
    -right-4
    text-[90px]
    font-black
    text-white/[0.03]
    select-none
    pointer-events-none
    leading-none
  "
>
  HOSPITALITY
</div>
              <h3 className="text-3xl font-bold">
                Hospitality
              </h3>

              <p className="text-gray-400 mt-4">
                Guest assistance, concierge and customer engagement.
              </p>

        <button className="robot-button p-[2px] mt-8">
  <div className="relative z-10 px-8 py-3 rounded-full bg-[#050816] text-white font-bold tracking-wide">
    EXPLORE →
  </div>
</button>

            </div>
          </div>

          {/* Card 3 */}
          <div className="robot-card p-[2px]">
            <div className="bg-[#050816] rounded-3xl p-8 h-full relative overflow-hidden">
<div
  className="
    absolute
    -top-2
    -right-4
    text-[90px]
    font-black
    text-white/[0.03]
    select-none
    pointer-events-none
    leading-none
  "
>
  HEALTHCARE
</div>
              <h3 className="text-3xl font-bold">
                Healthcare
              </h3>

              <p className="text-gray-400 mt-4">
                Patient guidance and smart information assistance.
              </p>

<button className="robot-button p-[2px] mt-8">
  <div className="relative z-10 px-8 py-3 rounded-full bg-[#050816] text-white font-bold tracking-wide">
    EXPLORE →
  </div>
</button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}