"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle } from "lucide-react";

// 1. Define what a Toast looks like
type ToastType = "success" | "error";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

const ToastContext = createContext<{
  showToast: (msg: string, type: ToastType) => void;
} | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Container - Fixed to the screen */}
      <div className="fixed bottom-10 right-10 z-[9999] flex flex-col gap-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, rotate: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 5 }}
              className={`
                relative p-5 min-w-[250px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                border-2 border-black flex items-start gap-3
                ${toast.type === "success" ? "bg-[#bbf7d0]" : "bg-[#fecaca]"}
              `}
            >
              {/* Adhesive Tape Decor */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 border border-black/10 backdrop-blur-sm" />
              
              {toast.type === "success" ? <CheckCircle2 className="shrink-0" /> : <AlertCircle className="shrink-0" />}
              
              <div className="flex-1">
                <p className="font-bold text-sm uppercase font-heading tracking-tight italic">
                  {toast.type === "success" ? "Memo: Success" : "Memo: Error"}
                </p>
                <p className="font-body text-sm">{toast.message}</p>
              </div>

              <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}>
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};