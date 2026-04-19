// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Send, CheckCircle2, Paperclip, Eraser } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/providers/toast";

// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const { showToast } = useToast();

//   const handleFakeSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Simulate logic
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       showToast("Dispatch received! The ink is drying.", "success");
//     } else {
//       showToast("Pencil broke! Please try again.", "error");
//     }
//   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
    
// //     // Simulate your "Auto-Magic" automation delay
// //     setTimeout(() => {
// //       setIsSubmitting(false);
// //       setSubmitted(true);
// //     }, 2000);
// //   };

//   return (
//     <main className="min-h-screen bg-[var(--color-paper)] py-20 px-6 relative overflow-hidden">
//       {/* Background Decoration */}
//       <div className="absolute top-24 right-[10%] opacity-10 pointer-events-none hidden md:block">
//         <Paperclip size={200} className="-rotate-12" />
//       </div>

//       <div className="max-w-3xl mx-auto mt-12">
//         <header className="mb-12">
//           <motion.h1 
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             className="font-heading text-6xl md:text-8xl mb-4"
//           >
//             Inquiry <span className="text-[var(--color-marker)]">01</span>
//           </motion.h1>
//           <p className="font-body text-xl text-[var(--color-pencil)]/60 italic">
//             "Fill this out, and the automation handles the rest. Usually."
//           </p>
//         </header>

//         <AnimatePresence mode="wait">
//           {!submitted ? (
//             <motion.form
//               key="contact-form"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               onSubmit={handleFakeSubmit}
//               className="bg-white border-[3px] border-[var(--color-pencil)] p-8 md:p-12 wobbly shadow-hard-lg relative"
//             >
//               {/* Form 'Header' decoration */}
//               <div className="flex justify-between items-center mb-10 border-b-2 border-dashed border-[var(--color-pencil)]/20 pb-6">
//                 <div className="font-heading text-sm uppercase tracking-widest opacity-40">
//                   Subject: Project Collaboration
//                 </div>
//                 <div className="font-heading text-sm uppercase tracking-widest opacity-40">
//                   Ref: {new Date().getFullYear()}-MERC
//                 </div>
//               </div>

//               <div className="space-y-8">
//                 {/* Name Input */}
//                 <div className="group relative">
//                   <label className="font-heading text-xl mb-2 block">Your Name / Alias</label>
//                   <input 
//                     required
//                     type="text" 
//                     placeholder="E.g. John Doe or 'The Boss'"
//                     className="w-full bg-transparent border-b-2 border-[var(--color-pencil)] py-2 focus:outline-none focus:border-[var(--color-marker)] transition-colors font-body text-lg"
//                   />
//                 </div>

//                 {/* Email Input */}
//                 <div className="group relative">
//                   <label className="font-heading text-xl mb-2 block">Return Address (Email)</label>
//                   <input 
//                     required
//                     type="email" 
//                     placeholder="where-do-i-reply@example.com"
//                     className="w-full bg-transparent border-b-2 border-[var(--color-pencil)] py-2 focus:outline-none focus:border-[var(--color-marker)] transition-colors font-body text-lg"
//                   />
//                 </div>

//                 {/* Message Input */}
//                 <div className="group relative">
//                   <label className="font-heading text-xl mb-2 block">The Brief (What's the mission?)</label>
//                   <textarea 
//                     required
//                     rows={4}
//                     placeholder="Tell me about your shiny things..."
//                     className="w-full bg-transparent border-2 border-[var(--color-pencil)] p-4 focus:outline-none focus:border-[var(--color-marker)] transition-colors font-body text-lg wobbly-sm"
//                   />
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col md:flex-row gap-4 pt-6">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={cn(
//                       "flex-1 bg-[var(--color-ink)] text-white font-heading text-2xl py-4 shadow-hard flex items-center justify-center gap-3 transition-all",
//                       isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1 active:translate-y-1 wobbly-btn"
//                     )}
//                   >
//                     {isSubmitting ? "Processing..." : "Dispatch Inquiry"}
//                     <Send size={20} />
//                   </button>

//                   <button
//                     type="reset"
//                     className="px-8 py-4 border-2 border-[var(--color-pencil)] font-heading text-xl hover:bg-[var(--color-muted)] transition-colors wobbly-sm flex items-center justify-center gap-2"
//                   >
//                     <Eraser size={18} />
//                     Clear
//                   </button>
//                 </div>
//               </div>

//               {/* Red Push Pin Decor */}
//               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full shadow-hard-sm border-2 border-red-800" />
//             </motion.form>
//           ) : (
//             /* SUCCESS STATE: THE 'STAMP' EFFECT */
//             <motion.div
//               key="success-message"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="flex flex-col items-center justify-center p-20 text-center"
//             >
//               <motion.div
//                 initial={{ rotate: -45, scale: 2 }}
//                 animate={{ rotate: -15, scale: 1 }}
//                 className="w-40 h-40 border-8 border-double border-green-600 text-green-600 rounded-full flex items-center justify-center font-heading text-2xl uppercase font-bold p-4 mb-8"
//               >
//                 Received!
//               </motion.div>
//               <h2 className="font-heading text-4xl mb-4">The Ink is Dry.</h2>
//               <p className="font-body text-lg text-[var(--color-pencil)]/60 max-w-sm">
//                 Inquiry successfully dispatched to the lab. Check your inbox—my auto-reply should be there shortly.
//               </p>
//               <button 
//                 onClick={() => setSubmitted(false)}
//                 className="mt-8 font-body text-sm underline opacity-40 hover:opacity-100"
//               >
//                 Send another dispatch?
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }






//new
"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Paperclip, Eraser, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/providers/toast";


export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const formRef = useRef<HTMLFormElement | null>(null);
  const lockRef = useRef(false);
  const { showToast } = useToast();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Prevent double submissions
    if (lockRef.current) return;
    lockRef.current = true;
    setIsSubmitting(true);

    const formEl = formRef.current;
    const formData = new FormData(formEl ?? e.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""), // Honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: { ok?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Dispatch failed.");
      }

      showToast("Dispatch received!", "success");
      
      // Trigger the "Success Stamp" view
      setSubmitted(true);
      formRef.current?.reset();
    } catch (err: any) {
      showToast("Pencil broke!", "error");
    } finally {
      setIsSubmitting(false);
      lockRef.current = false;
    }
  }

  return (
    <main className="min-h-screen bg-[var(--color-paper)] py-20 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-24 right-[10%] opacity-10 pointer-events-none hidden md:block">
        <Paperclip size={200} className="-rotate-12" />
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <header className="mb-12">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-heading text-6xl md:text-8xl mb-4"
          >
            Inquiry <span className="text-[var(--color-marker)]">01</span>
          </motion.h1>
          <p className="font-body text-xl text-[var(--color-pencil)]/60 italic">
            &#34;Fill this out, and the automation handles the rest. Usually.&#34;
          </p>
        </header>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="contact-form"
              ref={formRef}
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border-[3px] border-[var(--color-pencil)] p-8 md:p-12 wobbly shadow-hard-lg relative"
            >
              {/* Honeypot Field */}
              <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              {/* Form 'Header' decoration */}
              <div className="flex justify-between items-center mb-10 border-b-2 border-dashed border-[var(--color-pencil)]/20 pb-6">
                <div className="font-heading text-sm uppercase tracking-widest opacity-40">
                  Subject: Project Collaboration
                </div>
                <div className="font-heading text-sm uppercase tracking-widest opacity-40">
                  Ref: {new Date().getFullYear()}-MERC
                </div>
              </div>

              <div className="space-y-8">
                {/* Name Input */}
                <div className="group relative">
                  <label className="font-heading text-xl mb-2 block text-[var(--color-pencil)]">Your Name / Alias</label>
                  <input 
                    name="name"
                    required
                    minLength={2}
                    type="text" 
                    placeholder="E.g. John Doe or 'The Boss'"
                    className="w-full bg-transparent border-b-2 border-[var(--color-pencil)] py-2 focus:outline-none focus:border-[var(--color-marker)] transition-colors font-body text-lg"
                  />
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <label className="font-heading text-xl mb-2 block text-[var(--color-pencil)]">Return Address (Email)</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="where-do-i-reply@example.com"
                    className="w-full bg-transparent border-b-2 border-[var(--color-pencil)] py-2 focus:outline-none focus:border-[var(--color-marker)] transition-colors font-body text-lg"
                  />
                </div>

                {/* Message Input */}
                <div className="group relative">
                  <label className="font-heading text-xl mb-2 block text-[var(--color-pencil)]">The Brief (What&apos;s the mission?)</label>
                  <textarea 
                    name="message"
                    required
                    minLength={10}
                    rows={4}
                    placeholder="Tell me about your shiny things..."
                    className="w-full bg-transparent border-2 border-[var(--color-pencil)] p-4 focus:outline-none focus:border-[var(--color-marker)] transition-colors font-body text-lg wobbly-sm"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "flex-1 bg-[var(--color-ink)] text-white font-heading text-2xl py-4 shadow-hard flex items-center justify-center gap-3 transition-all",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1 active:translate-y-1 wobbly-btn"
                    )}
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 className="animate-spin" size={20} /></>
                    ) : (
                      <>Dispatch Inquiry <Send size={20} /></>
                    )}
                  </button>

                  <button
                    type="reset"
                    disabled={isSubmitting}
                    className="px-8 py-4 border-2 border-[var(--color-pencil)] font-heading text-xl hover:bg-[var(--color-muted)] transition-colors wobbly-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Eraser size={18} />
                    Clear
                  </button>
                </div>
              </div>

              {/* Red Push Pin Decor */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full shadow-hard-sm border-2 border-red-800" />
            </motion.form>
          ) : (
            /* SUCCESS STATE: THE 'STAMP' EFFECT */
            <motion.div
              key="success-message"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center p-20 text-center"
            >
              <motion.div
                initial={{ rotate: -45, scale: 2 }}
                animate={{ rotate: -15, scale: 1 }}
                className="w-40 h-40 border-8 border-double border-green-600 text-green-600 rounded-full flex items-center justify-center font-heading text-2xl uppercase font-bold p-4 mb-8"
              >
                Received!
              </motion.div>
              <h2 className="font-heading text-4xl mb-4">The Ink is Dry.</h2>
              <p className="font-body text-lg text-[var(--color-pencil)]/60 max-w-sm">
                Inquiry successfully dispatched to the lab. Check your inbox—my auto-reply should be there shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 font-body text-sm underline opacity-40 hover:opacity-100"
              >
                Send another dispatch?
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}