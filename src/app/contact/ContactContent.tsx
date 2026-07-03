"use client";

import { useState } from "react";

const USE_CASES = [
  { id: "marketing", name: "Marketing", desc: "Interactive promotion & product showcases" },
  { id: "education", name: "Education", desc: "Digital classroom aids & campus guidance" },
  { id: "hospitality", name: "Hospitality", desc: "Guest check-ins, room service & concierge" },
  { id: "reception-helpdesk", name: "Reception Helpdesk", desc: "Lobby assistance, registration & navigation" },
];

export default function ContactContent() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"general" | "demo">("demo");

  // General Inquiry State
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Demo Booking State
  const [step, setStep] = useState(1);
  const [acquisitionType, setAcquisitionType] = useState<string>("");
  const [selectedUsecase, setSelectedUsecase] = useState<string>("");
  const [demoForm, setDemoForm] = useState({ name: "", email: "", company: "" });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);
  const [isDemoSuccess, setIsDemoSuccess] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit enquiry. Please try again.");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoForm.name || !demoForm.email || !demoForm.company || !selectedDate || !selectedTime) return;

    setIsDemoSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsDemoSubmitting(false);
      setIsDemoSuccess(true);
      setTimeout(() => {
        setIsDemoSuccess(false);
        setStep(1);
        setAcquisitionType("");
        setSelectedUsecase("");
        setSelectedDate("");
        setSelectedTime("");
        setDemoForm({ name: "", email: "", company: "" });
      }, 8000);
    }, 1500);
  };

  const handleDemoNext = () => {
    if (acquisitionType && selectedUsecase) {
      setStep(2);
    }
  };

  const handleDemoBack = () => {
    setStep(1);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-start mt-12 w-full">
      {/* LEFT COLUMN: Contact Cards */}
      <div className="lg:col-span-5 flex flex-col gap-6 w-full">
        
        {/* Card 1: Mumbai Office */}
        <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
          
          <div className="flex items-start gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=D9-802,+Lokdhara,+Phase-3,+Kalyan+-+421306"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all duration-300 flex-shrink-0"
              title="View Mumbai Office on Google Maps"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </a>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide uppercase">Mumbai Office</h3>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed text-base">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=D9-802,+Lokdhara,+Phase-3,+Kalyan+-+421306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  D9-802, Lokdhara, Phase-3,<br />
                  Kalyan - 421306
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Pune Office */}
        <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
          
          <div className="flex items-start gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Shop+1/2/3,+Selenia+Housing+Society,+Jadhavwadi,+Chikhali,+Pimpri-Chinchwad,+Pune+-+411062"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all duration-300 flex-shrink-0"
              title="View Pune Office on Google Maps"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </a>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide uppercase">Pune Office</h3>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed text-base">
                <span className="font-semibold text-white">Techligence Private Limited</span><br />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shop+1/2/3,+Selenia+Housing+Society,+Jadhavwadi,+Chikhali,+Pimpri-Chinchwad,+Pune+-+411062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  Shop 1/2/3, Selenia Housing Society,<br />
                  Jadhavwadi, Chikhali,<br />
                  Pimpri-Chinchwad, Pune - 411062
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Corporate Details */}
        <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21h10.5V3.857c0-.516-.418-.933-.933-.933H7.683c-.515 0-.933.417-.933.933V21Z" />
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white tracking-wide uppercase">Corporate Info</h3>
              <p className="text-cyan-400/90 text-sm font-semibold mt-1">Techligence Private Limited</p>
              
              <div className="mt-6 space-y-4">
                {/* GSTIN */}
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">GSTIN</span>
                  <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 rounded-lg p-2.5 w-fit">
                    <code className="text-xs text-cyan-300 font-mono tracking-wider">27AALCT0263E1ZF</code>
                  </div>
                </div>

                {/* Contact No */}
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Customer Care</span>
                  <a 
                    href="tel:+91 9175616126" 
                    className="text-white hover:text-cyan-400 transition-colors text-base font-medium flex items-center gap-2 group/phone"
                  >
                    +91 9175616126
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 opacity-0 group-hover/phone:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover/phone:translate-x-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>

                {/* Email Enquiries */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">General Enquiries</span>
                    <a 
                      href="mailto:info@techligence.net" 
                      className="text-white hover:text-cyan-400 transition-colors text-base font-medium flex items-center gap-2 group/mail"
                    >
                      info@techligence.net
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 opacity-0 group-hover/mail:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover/mail:translate-x-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Book a Demo</span>
                    <a 
                      href="mailto:outreach@techligence.net" 
                      className="text-white hover:text-cyan-400 transition-colors text-base font-medium flex items-center gap-2 group/mail-demo"
                    >
                      outreach@techligence.net
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 opacity-0 group-hover/mail-demo:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover/mail-demo:translate-x-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">After Sales Support</span>
                    <a 
                      href="mailto:support@techligence.net" 
                      className="text-white hover:text-cyan-400 transition-colors text-base font-medium flex items-center gap-2 group/mail-support"
                    >
                      support@techligence.net
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 opacity-0 group-hover/mail-support:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover/mail-support:translate-x-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Contact Form */}
      <div className="lg:col-span-7 w-full">
        <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-cyan-500/20 transition-all duration-300">
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="flex gap-4 border-b border-white/10 mb-8 pb-4">
            <button
              className={`text-sm md:text-base font-black tracking-wide uppercase transition-colors duration-300 ${
                activeTab === "demo" ? "text-cyan-400" : "text-gray-500 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("demo")}
            >
              Book Demo / Purchase
            </button>
            <button
              className={`text-sm md:text-base font-black tracking-wide uppercase transition-colors duration-300 ${
                activeTab === "general" ? "text-cyan-400" : "text-gray-500 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("general")}
            >
              General Inquiry
            </button>
          </div>

          {activeTab === "general" ? (
            <div>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form below, and our specialized robotics team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 mb-6 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 max-w-md text-sm">
                    Thank you for reaching out to Techligence. Our engineering and consulting teams have received your message and will review it promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleGeneralSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl font-mono">
                      &gt;&gt; ERROR: {errorMessage}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-medium">Your Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleGeneralChange}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-medium">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleGeneralChange}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-medium">Subject</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formState.subject}
                      onChange={handleGeneralChange}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-medium">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleGeneralChange}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                      placeholder="Write your details, requirements or feedback here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    id="submit-message"
                    type="submit"
                    disabled={isSubmitting}
                    className="robot-button p-[1.5px] w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="relative z-10 px-8 py-3.5 rounded-full bg-[#050816] text-white font-bold text-xs text-center tracking-wider hover:bg-cyan-500/10 transition-colors duration-300 uppercase">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </div>
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div>
              <p className="text-gray-400 text-sm mb-8">
                Ready to integrate our robots into your business? Let's get started.
              </p>

              {isDemoSuccess ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="mx-auto w-16 h-16 bg-cyan-500/10 border border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 mb-6 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Demo Request Sent!
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you for scheduling a meeting. A Techligence specialist will reach out to <span className="text-cyan-400 font-semibold">{demoForm.email}</span> to confirm your access and coordinate the briefing details.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] text-cyan-400 font-bold tracking-[3px] uppercase">
                      Step {step} of 2
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide mt-1">
                      {step === 1 ? "Your Requirements" : "Schedule a Meeting"}
                    </h3>
                    <div className="w-16 h-[2px] bg-cyan-400 mt-2"></div>
                  </div>

                  {step === 1 ? (
                    <div className="space-y-5 animate-fade-in">
                      <div className="space-y-2.5">
                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                          Are you interested in Buying or Renting?
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setAcquisitionType("buy")}
                            className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                              acquisitionType === "buy"
                                ? "bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                                : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                            }`}
                          >
                            <span className="text-white font-bold text-sm tracking-wide">Buy</span>
                            <span className="text-gray-400 text-[10px] sm:text-xs mt-1.5 leading-snug font-normal">Outright purchase of the platform with software upgrades and hardware warranty.</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setAcquisitionType("rent")}
                            className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                              acquisitionType === "rent"
                                ? "bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                                : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                            }`}
                          >
                            <span className="text-white font-bold text-sm tracking-wide">Rent</span>
                            <span className="text-gray-400 text-[10px] sm:text-xs mt-1.5 leading-snug font-normal">Flexible leasing option with maintenance and cloud ecosystem subscription.</span>
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                          Select your application/usecase:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {USE_CASES.map((uc) => (
                            <button
                              key={uc.id}
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
                          type="button"
                          onClick={handleDemoNext}
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
                    <form onSubmit={handleDemoSubmit} className="space-y-4 animate-fade-in">
                      <div>
                        <label htmlFor="demo-name" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Your Name</label>
                        <input
                          id="demo-name"
                          type="text"
                          required
                          value={demoForm.name}
                          onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="demo-email" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Business Email</label>
                          <input
                            id="demo-email"
                            type="email"
                            required
                            value={demoForm.email}
                            onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                            placeholder="Enter company email"
                          />
                        </div>
                        <div>
                          <label htmlFor="demo-company" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Company Name</label>
                          <input
                            id="demo-company"
                            type="text"
                            required
                            value={demoForm.company}
                            onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                            placeholder="Company / Org Name"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="demo-date" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-medium">Preferred Date</label>
                          <input
                            id="demo-date"
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
                          <div className="grid grid-cols-2 gap-2">
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
                          type="button"
                          onClick={handleDemoBack}
                          className="w-1/3 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer"
                        >
                          BACK
                        </button>
                        <button
                          type="submit"
                          disabled={isDemoSubmitting}
                          className="robot-button p-[1.5px] w-2/3 cursor-pointer"
                        >
                          <div className="relative z-10 px-6 py-3 rounded-full bg-[#050816] text-white font-bold text-xs text-center tracking-wider hover:bg-cyan-500/10 transition-colors uppercase">
                            {isDemoSubmitting ? "SCHEDULING..." : "BOOK FREE DEMO"}
                          </div>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
