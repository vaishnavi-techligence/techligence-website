"use client";

import { useState } from "react";

export default function ContactContent() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-start mt-12 w-full">
      {/* LEFT COLUMN: Contact Cards */}
      <div className="lg:col-span-5 flex flex-col gap-6 w-full">
        
        {/* Card 1: Corporate Details */}
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
                    <button
                      id="copy-gstin"
                      type="button"
                      onClick={() => handleCopy("27AALCT0263E1ZF", "gstin")}
                      className="text-gray-400 hover:text-cyan-400 transition-colors p-1"
                      title="Copy GSTIN"
                    >
                      {copiedId === "gstin" ? (
                        <span className="text-[10px] text-cyan-400 font-medium">Copied!</span>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.362V4.5a1.5 1.5 0 0 1 1.5-1.5h1.5m3.75 3.375V4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5m9 3.375v10.125c0 .621-.504 1.125-1.125 1.125H9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H18a1.125 1.125 0 0 1 1.125 1.125Z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Contact No */}
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Call Us</span>
                  <a 
                    href="tel:+917020812247" 
                    className="text-white hover:text-cyan-400 transition-colors text-base font-medium flex items-center gap-2 group/phone"
                  >
                    +91 70208 12247
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

        {/* Card 2: Mumbai Office */}
        <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide uppercase">Mumbai Office</h3>
                <button
                  id="copy-mumbai"
                  type="button"
                  onClick={() => handleCopy("D9-802, Lokdhara, Phase-3, Kalyan - 421306", "mumbai")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors p-1"
                  title="Copy Mumbai Address"
                >
                  {copiedId === "mumbai" ? (
                    <span className="text-[10px] text-cyan-400 font-medium">Copied!</span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.362V4.5a1.5 1.5 0 0 1 1.5-1.5h1.5m3.75 3.375V4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5m9 3.375v10.125c0 .621-.504 1.125-1.125 1.125H9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H18a1.125 1.125 0 0 1 1.125 1.125Z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed text-base">
                D9-802, Lokdhara, Phase-3,<br />
                Kalyan - 421306
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Pune Office */}
        <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-xl font-bold text-white tracking-wide uppercase">Pune Office</h3>
                <button
                  id="copy-pune"
                  type="button"
                  onClick={() => handleCopy("Techligence Private Limited, Shop 1/2/3, Selenia Housing society, Jadhavwadi, Chikhali, Pimpri-Chinchwad, Pune - 411062", "pune")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors p-1"
                  title="Copy Pune Address"
                >
                  {copiedId === "pune" ? (
                    <span className="text-[10px] text-cyan-400 font-medium">Copied!</span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.362V4.5a1.5 1.5 0 0 1 1.5-1.5h1.5m3.75 3.375V4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5m9 3.375v10.125c0 .621-.504 1.125-1.125 1.125H9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H18a1.125 1.125 0 0 1 1.125 1.125Z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed text-base">
                <span className="font-semibold text-white">Techligence Private Limited</span><br />
                Shop 1/2/3, Selenia Housing Society,<br />
                Jadhavwadi, Chikhali,<br />
                Pimpri-Chinchwad, Pune - 411062
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Contact Form */}
      <div className="lg:col-span-7 w-full">
        <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-cyan-500/20 transition-all duration-300">
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text mb-2 uppercase">
            Send a Message
          </h2>
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
      </div>
    </div>
  );
}
