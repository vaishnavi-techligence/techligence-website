"use client";

import { useState } from "react";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const USE_CASES = [
  { id: "marketing", name: "Marketing", desc: "Interactive promotion & product showcases" },
  { id: "education", name: "Education", desc: "Digital classroom aids & campus guidance" },
  { id: "hospitality", name: "Hospitality", desc: "Guest check-ins, room service & concierge" },
  { id: "reception-helpdesk", name: "Reception Helpdesk", desc: "Lobby assistance, registration & navigation" },
];

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [step, setStep] = useState(1);
  const [acquisitionType, setAcquisitionType] = useState<string>("");
  const [selectedUsecase, setSelectedUsecase] = useState<string>("");
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (acquisitionType && selectedUsecase) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !selectedDate || !selectedTime) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation duration
    setTimeout(() => {
      setStep(1);
      setAcquisitionType("");
      setSelectedUsecase("");
      setSelectedDate("");
      setSelectedTime("");
      setForm({ name: "", email: "", company: "" });
      setIsSuccess(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={handleClose} 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      ></div>

      {/* Modal Container */}
      <div className="relative bg-[#050816] border border-white/10 w-full max-w-lg rounded-3xl p-6 sm:p-8 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all transform animate-fade-in z-10">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-[50px] pointer-events-none"></div>

        {/* Close Button */}
        <button 
          id="close-demo-modal"
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          title="Close Modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-cyan-500/10 border border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 mb-6 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-black bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text mb-4 uppercase tracking-wide">
              Demo Booked!
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto mb-8">
              Thank you for scheduling a meeting. A Techligence specialist will reach out to <span className="text-cyan-400 font-semibold">{form.email}</span> to confirm your access and coordinate the briefing details.
            </p>

            <button
              id="success-close"
              onClick={handleClose}
              className="robot-button p-[1.5px] w-full max-w-xs cursor-pointer"
            >
              <div className="relative z-10 px-8 py-3 rounded-full bg-[#050816] text-white font-bold text-xs text-center tracking-wider hover:bg-cyan-500/10 transition-colors uppercase">
                Got It
              </div>
            </button>
          </div>
        ) : (
          /* BOOKING WIZARD STAGES */
          <div>
            <div className="mb-6">
              <span className="text-[10px] text-cyan-400 font-bold tracking-[3px] uppercase">
                Step {step} of 2
              </span>
              <h2 className="text-2xl font-black text-white uppercase tracking-wide mt-1">
                {step === 1 ? "Your Requirements" : "Schedule a Meeting"}
              </h2>
              <div className="w-16 h-[2px] bg-cyan-400 mt-2"></div>
            </div>

            {step === 1 ? (
              /* STEP 1: Requirements Selection */
              <div className="space-y-5">
                {/* Buy or Rent Question */}
                <div className="space-y-2.5">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    Are you interested in Buying or Renting?
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAcquisitionType("buy")}
                      className={`py-3 rounded-xl border text-center font-bold text-xs tracking-wider transition-all duration-300 cursor-pointer uppercase ${
                        acquisitionType === "buy"
                          ? "bg-cyan-500/10 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          : "bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      onClick={() => setAcquisitionType("rent")}
                      className={`py-3 rounded-xl border text-center font-bold text-xs tracking-wider transition-all duration-300 cursor-pointer uppercase ${
                        acquisitionType === "rent"
                          ? "bg-cyan-500/10 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          : "bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      Rent
                    </button>
                  </div>
                </div>

                {/* Application/Usecase Selection */}
                <div className="space-y-2.5">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    Select your application/usecase:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[260px] overflow-y-auto pr-1">
                    {USE_CASES.map((uc) => (
                      <button
                        key={uc.id}
                        id={`usecase-select-${uc.id}`}
                        type="button"
                        onClick={() => setSelectedUsecase(uc.id)}
                        className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                          selectedUsecase === uc.id
                            ? "bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                            : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                        }`}
                      >
                        <span className="text-white font-bold text-sm tracking-wide">{uc.name}</span>
                        <span className="text-gray-400 text-xs mt-1.5 leading-snug">{uc.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 mt-6">
                  <button
                    id="step1-next"
                    type="button"
                    onClick={handleNext}
                    disabled={!acquisitionType || !selectedUsecase}
                    className={`p-[1.5px] w-full text-center rounded-full transition-opacity duration-300 ${
                      acquisitionType && selectedUsecase
                        ? "robot-button cursor-pointer"
                        : "opacity-40 cursor-not-allowed bg-white/5 border border-white/10 text-gray-500"
                    }`}
                  >
                    <div className="relative z-10 px-8 py-3 rounded-full bg-[#050816] text-white font-bold text-xs tracking-wider">
                      CONTINUE TO SCHEDULE
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              /* STEP 2: Scheduler Info Fields */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Your Name</label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-email" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Business Email</label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      placeholder="Enter company email"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-company" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Company Name</label>
                    <input
                      id="modal-company"
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      placeholder="Company / Org Name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-date" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Preferred Date</label>
                    <input
                      id="modal-date"
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm scheme-dark cursor-pointer"
                    />
                  </div>

                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Preferred Time Slot</span>
                    <div className="grid grid-cols-2 gap-2 max-h-[110px] overflow-y-auto pr-1">
                      {["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 text-xs rounded-lg border text-center font-semibold transition-all duration-200 cursor-pointer ${
                            selectedTime === time
                              ? "bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_8px_rgba(6,182,212,0.25)]"
                              : "bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/5 mt-6">
                  <button
                    id="step2-back"
                    type="button"
                    onClick={handleBack}
                    className="w-1/3 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer"
                  >
                    BACK
                  </button>
                  <button
                    id="step2-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="robot-button p-[1.5px] w-2/3 cursor-pointer"
                  >
                    <div className="relative z-10 px-6 py-3 rounded-full bg-[#050816] text-white font-bold text-xs text-center tracking-wider hover:bg-cyan-500/10 transition-colors uppercase">
                      {isSubmitting ? "SCHEDULING..." : "BOOK FREE DEMO"}
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
