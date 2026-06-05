"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "resolved";
  createdAt: string;
}

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decryptionProgress, setDecryptionProgress] = useState(0);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [filter, setFilter] = useState<"all" | "unread" | "read" | "resolved">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // Authentication check from session storage
  useEffect(() => {
    const authStatus = sessionStorage.getItem("techligence_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchEnquiries();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    
    if (passcode === "techligence-secure") {
      setIsDecrypting(true);
      setDecryptionProgress(0);
      
      const interval = setInterval(() => {
        setDecryptionProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsAuthenticated(true);
            setIsDecrypting(false);
            sessionStorage.setItem("techligence_admin_auth", "true");
            fetchEnquiries();
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    } else {
      setAuthError("DECRYPTION ERROR: ACCESS KEY INVALID");
      // Clear passcode
      setPasscode("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("techligence_admin_auth");
    setPasscode("");
  };

  const fetchEnquiries = async () => {
    setLoading(true);
    setFetchError("");
    try {
      const res = await fetch("/api/enquiries");
      if (!res.ok) {
        throw new Error("Failed to fetch enquiries");
      }
      const data = await res.json();
      setEnquiries(data);
    } catch (err: any) {
      console.error(err);
      setFetchError("SYSTEM REPORT: DATA TRANSMISSION LOSS");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: "unread" | "read" | "resolved") => {
    try {
      const res = await fetch("/api/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      
      const updated = await res.json();
      setEnquiries((prev) => prev.map((e) => (e.id === id ? updated : e)));
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(updated);
      }
    } catch (err) {
      console.error(err);
      alert("Error updating status");
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry telemetry entry?")) return;
    try {
      const res = await fetch(`/api/enquiries?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete enquiry");
      
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(null);
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting entry");
    }
  };

  const getStats = () => {
    const total = enquiries.length;
    const unread = enquiries.filter((e) => e.status === "unread").length;
    const read = enquiries.filter((e) => e.status === "read").length;
    const resolved = enquiries.filter((e) => e.status === "resolved").length;
    return { total, unread, read, resolved };
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesFilter = filter === "all" ? true : e.status === filter;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      e.name.toLowerCase().includes(searchLower) ||
      e.email.toLowerCase().includes(searchLower) ||
      e.subject.toLowerCase().includes(searchLower) ||
      e.message.toLowerCase().includes(searchLower);

    return matchesFilter && matchesSearch;
  });

  const stats = getStats();

  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden flex flex-col justify-between">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-200px] top-1/3 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[180px]" />
        <div className="absolute left-[-200px] bottom-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <Navbar />

      <div className="max-w-[1400px] w-full mx-auto px-6 pt-36 pb-24 min-h-[75vh] relative z-10 flex flex-col justify-center flex-grow">
        
        {!isAuthenticated ? (
          /* LOGIN GATEWAY SCREEN */
          <div className="max-w-md w-full mx-auto relative overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/5 rounded-full blur-[40px]"></div>
            
            <div className="text-center mb-8">
              <span className="text-[9px] font-mono text-cyan-400 font-bold tracking-[6px] uppercase block mb-2">
                SECURE AUTHENTICATION //
              </span>
              <h2 className="text-2xl font-black bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text uppercase tracking-wider">
                DECRYPT CONSOLE
              </h2>
              <div className="w-12 h-[2px] bg-cyan-400/50 mx-auto mt-3 blur-[0.5px]"></div>
            </div>

            {isDecrypting ? (
              <div className="space-y-6 py-6 text-center">
                <p className="text-xs font-mono text-cyan-400 animate-pulse">
                  &gt;&gt; RUNNING DECRYPTION CYCLES... {decryptionProgress}%
                </p>
                <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-cyan-400 rounded-full transition-all duration-100 shadow-[0_0_10px_#00f0ff]" 
                    style={{ width: `${decryptionProgress}%` }}
                  />
                </div>
                <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">
                  Initializing local handshake key...
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                {authError && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl font-mono text-center">
                    &gt;&gt; {authError}
                  </div>
                )}
                
                <div>
                  <label htmlFor="admin-passcode" className="block text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-medium">
                    CONSOLE SECURITY KEY
                  </label>
                  <input
                    id="admin-passcode"
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm font-mono tracking-widest text-center"
                    placeholder="•••••••••••••••••"
                    required
                  />
                </div>

                <button
                  id="submit-auth"
                  type="submit"
                  className="robot-button p-[1.5px] w-full cursor-pointer"
                >
                  <div className="relative z-10 px-8 py-3.5 rounded-full bg-[#050816] text-white font-bold text-xs text-center tracking-wider hover:bg-cyan-500/10 transition-colors duration-300 uppercase">
                    AUTHORIZE ACCESS
                  </div>
                </button>

                <p className="text-[8px] font-mono text-gray-500 text-center uppercase tracking-wider">
                  default key: techligence-secure
                </p>
              </form>
            )}
          </div>
        ) : (
          /* AUTHENTICATED DASHBOARD */
          <div className="space-y-6 w-full animate-[fadeIn_0.5s_ease-out]">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
              <div>
                <p className="text-cyan-400 uppercase tracking-[6px] text-xs font-semibold">
                  FLEET COMMUNICATIONS CONTROL
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-1px] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-cyan-500 uppercase">
                  ENQUIRIES TELEMETRY
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={fetchEnquiries}
                  className="px-4 py-2 border border-white/10 bg-white/[0.02] hover:bg-cyan-500/10 hover:border-cyan-500/40 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  Sync System
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-red-500/20 bg-red-500/5 hover:bg-red-500/20 hover:border-red-500/50 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 text-red-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                  </svg>
                  Terminate
                </button>
              </div>
            </div>

            {/* Statistics Telemetry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "TOTAL SIGNALS", val: stats.total, border: "border-white/10", glow: "rgba(255,255,255,0.05)" },
                { label: "UNREAD MESSAGES", val: stats.unread, border: "border-yellow-500/20 text-yellow-400", glow: "rgba(234,179,8,0.05)", labelColor: "text-yellow-500/80" },
                { label: "ACTIVE ENQUIRIES", val: stats.read, border: "border-cyan-500/20 text-cyan-400", glow: "rgba(6,182,212,0.05)", labelColor: "text-cyan-500/80" },
                { label: "RESOLVED NODES", val: stats.resolved, border: "border-green-500/20 text-green-400", glow: "rgba(34,197,94,0.05)", labelColor: "text-green-500/80" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-2xl border bg-slate-900/10 backdrop-blur-md transition-all duration-300 ${stat.border}`}
                  style={{ boxShadow: `inset 0 0 15px ${stat.glow}` }}
                >
                  <p className={`text-[8px] font-mono tracking-wider uppercase ${stat.labelColor || "text-gray-500"}`}>{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-black font-mono mt-1">{stat.val}</p>
                </div>
              ))}
            </div>

            {/* Main Action Console */}
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              
              {/* Telemetry Filter & Table Panel */}
              <div className="lg:col-span-8 space-y-4 w-full">
                
                {/* Search & Filters */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md">
                  {/* Status Filters */}
                  <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                    {(["all", "unread", "read", "resolved"] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setFilter(st)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                          filter === st
                            ? "bg-cyan-400 text-[#050816] shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                            : "bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                  
                  {/* Search bar */}
                  <div className="w-full sm:max-w-xs relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search signals..."
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all font-mono"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-gray-600 absolute left-3 top-1/2 -translate-y-1/2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                    </svg>
                  </div>
                </div>

                {/* Signals Table */}
                <div className="overflow-hidden border border-white/5 bg-slate-900/10 backdrop-blur-md rounded-2xl">
                  {loading ? (
                    <div className="py-24 text-center font-mono text-xs text-cyan-400 animate-pulse">
                      &gt;&gt; STREAMING TELEMETRY PIPELINE ONLINE...
                    </div>
                  ) : fetchError ? (
                    <div className="py-24 text-center font-mono text-xs text-red-400">
                      &gt;&gt; ERROR: {fetchError}
                    </div>
                  ) : filteredEnquiries.length === 0 ? (
                    <div className="py-24 text-center font-mono text-xs text-gray-500">
                      &gt;&gt; ZERO SIGNALS DETECTED IN ACTIVE CHANNELS
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/5 bg-white/[0.01] text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                            <th className="p-4 font-semibold">SIGNAL ID</th>
                            <th className="p-4 font-semibold">SENDER</th>
                            <th className="p-4 font-semibold">SUBJECT</th>
                            <th className="p-4 font-semibold">DATE</th>
                            <th className="p-4 font-semibold text-right">ACTION</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-xs">
                          {filteredEnquiries.map((enquiry) => (
                            <tr
                              key={enquiry.id}
                              onClick={() => {
                                setSelectedEnquiry(enquiry);
                                if (enquiry.status === "unread") {
                                  updateStatus(enquiry.id, "read");
                                }
                              }}
                              className={`hover:bg-white/[0.02] transition-colors cursor-pointer group ${
                                selectedEnquiry?.id === enquiry.id ? "bg-cyan-500/[0.03]" : ""
                              }`}
                            >
                              <td className="p-4 font-mono font-bold text-gray-400">
                                <span className={`mr-2.5 inline-block w-1.5 h-1.5 rounded-full ${
                                  enquiry.status === "unread" ? "bg-yellow-500 animate-pulse shadow-[0_0_8px_#eab308]" :
                                  enquiry.status === "read" ? "bg-cyan-500 shadow-[0_0_8px_#06b6d4]" : "bg-green-500 shadow-[0_0_8px_#22c55e]"
                                }`} />
                                #{enquiry.id}
                              </td>
                              <td className="p-4">
                                <div className="font-bold text-white leading-tight">{enquiry.name}</div>
                                <div className="text-[10px] text-gray-500 truncate max-w-[150px]">{enquiry.email}</div>
                              </td>
                              <td className="p-4 truncate max-w-[150px] font-medium text-gray-300">
                                {enquiry.subject}
                              </td>
                              <td className="p-4 text-[10px] font-mono text-gray-500">
                                {new Date(enquiry.createdAt).toLocaleDateString(undefined, {
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit"
                                })}
                              </td>
                              <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                <button
                                  onClick={() => deleteEnquiry(enquiry.id)}
                                  className="p-1.5 border border-red-500/20 hover:border-red-500/50 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer inline-flex items-center"
                                  title="Delete signal"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              {/* Side Details Viewer Panel */}
              <div className="lg:col-span-4 w-full">
                {selectedEnquiry ? (
                  <div className="relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.1)] w-full animate-fade-in">
                    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">SIGNAL DETECTED</span>
                        <code className="text-xs text-cyan-400 font-mono">#{selectedEnquiry.id}</code>
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <select
                          value={selectedEnquiry.status}
                          onChange={(e) => updateStatus(selectedEnquiry.id, e.target.value as any)}
                          className="bg-[#050816] text-[10px] font-mono border border-white/10 rounded-lg px-2 py-1 text-gray-300 focus:outline-none focus:border-cyan-400 cursor-pointer"
                        >
                          <option value="unread">Unread</option>
                          <option value="read">Read</option>
                          <option value="resolved">Resolved</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Sender Details */}
                      <div>
                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Sender Telemetry</span>
                        <div className="font-bold text-white text-base">{selectedEnquiry.name}</div>
                        <a 
                          href={`mailto:${selectedEnquiry.email}`}
                          className="text-cyan-400/90 text-xs hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                        >
                          {selectedEnquiry.email}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      </div>

                      {/* Subject */}
                      <div>
                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Subject Node</span>
                        <div className="text-gray-300 text-sm font-semibold">{selectedEnquiry.subject}</div>
                      </div>

                      {/* Transmission Date */}
                      <div>
                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Transmission Timestamp</span>
                        <div className="text-gray-400 font-mono text-xs">
                          {new Date(selectedEnquiry.createdAt).toLocaleString(undefined, {
                            dateStyle: "medium",
                            timeStyle: "short"
                          })}
                        </div>
                      </div>

                      {/* Message Content */}
                      <div className="border-t border-white/5 pt-4">
                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block mb-2">Message Body</span>
                        <div className="bg-black/30 border border-white/5 rounded-xl p-4 text-xs text-gray-300 leading-relaxed font-sans whitespace-pre-wrap select-text max-h-[250px] overflow-y-auto">
                          {selectedEnquiry.message}
                        </div>
                      </div>

                      {/* Quick Response Actions */}
                      <div className="flex gap-2 pt-2">
                        <a
                          href={`mailto:${selectedEnquiry.email}?subject=Re: ${encodeURIComponent(selectedEnquiry.subject)}`}
                          className="flex-1 px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-[#050816] font-bold text-[10px] text-center tracking-widest rounded-xl transition-all duration-300 uppercase"
                        >
                          Send Response
                        </a>
                        <button
                          onClick={() => deleteEnquiry(selectedEnquiry.id)}
                          className="px-4 py-2 border border-red-500/20 hover:border-red-500/50 hover:bg-red-500/10 text-red-400 font-mono text-[10px] tracking-widest rounded-xl transition-all duration-300 uppercase cursor-pointer"
                        >
                          Discard
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="border border-dashed border-white/10 rounded-2xl p-10 text-center font-mono text-xs text-gray-600">
                    &gt;&gt; SELECT A SIGNAL ID TO DECRYPT TRANSMISSION DATA
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}
