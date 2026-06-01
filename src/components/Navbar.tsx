import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="flex items-center gap-3">

  <Image
    src="/logo.png"
    alt="Techligence Logo"
    width={60}
    height={60}
    className="object-contain"
  />

<div>
  <h1
    className="
    text-3xl
    font-black
    bg-gradient-to-r
    from-cyan-300
    to-cyan-500
    text-transparent
    bg-clip-text
  "
  >
    TECHLIGENCE
  </h1>
</div>

</div>

<div className="hidden md:flex gap-10 items-center">
  <a
    href="#"
    className="
      relative
      text-sm
      uppercase
      tracking-[1.5px]
      text-gray-300
      hover:text-cyan-400
      transition-all
      duration-300
      after:absolute
      after:left-0
      after:-bottom-2
      after:h-[2px]
      after:w-0
      after:bg-cyan-400
      after:transition-all
      after:duration-300
      hover:after:w-full
    "
  >
    Home
  </a>

  <a className="relative text-sm uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
    Robots
  </a>

  <a className="relative text-sm uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
    Solutions
  </a>

  <a className="relative text-sm uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
    Company
  </a>

  <a className="relative text-sm uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
    Contact
  </a>

</div>

       <button className="robot-button p-[2px]">

  <div className="
    relative z-10
    px-8 py-3
    rounded-full
    bg-[#050816]
    text-white
    font-semibold
  ">
    BOOK DEMO
  </div>

</button>

      </div>
    </nav>
  );
}