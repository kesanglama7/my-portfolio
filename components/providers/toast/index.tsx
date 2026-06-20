"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

type ToastType = "success" | "error";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

type ToastContextValue = {
  showToast: (message: string, type: ToastType) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const TOAST_DURATION = 4200;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType) => {
      const id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2, 10);

      setToasts((prev) => [...prev, { id, message, type }]);

      window.setTimeout(() => {
        removeToast(id);
      }, TOAST_DURATION);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="pointer-events-none fixed bottom-5 left-1/2 z-[9999] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 flex-col gap-3 sm:bottom-8 sm:left-auto sm:right-8 sm:w-full sm:translate-x-0">
        <AnimatePresence initial={false}>
          {toasts.map((toast) => {
            const isSuccess = toast.type === "success";

            return (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.94, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(8px)" }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/90 p-4 text-white shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              >
                {/* Soft background glow */}
                <div
                  className={[
                    "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl",
                    isSuccess ? "bg-white/15" : "bg-red-500/20",
                  ].join(" ")}
                />

                {/* Scanning line */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                />

                <div className="relative flex items-start gap-3">
                  <div
                    className={[
                      "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                      isSuccess
                        ? "border-white/15 bg-white text-black"
                        : "border-red-400/25 bg-red-500/15 text-red-300",
                    ].join(" ")}
                  >
                    {isSuccess ? (
                      <CheckCircle2 size={18} strokeWidth={2.4} />
                    ) : (
                      <AlertCircle size={18} strokeWidth={2.4} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
                      {isSuccess ? "Signal Confirmed" : "Signal Interrupted"}
                    </p>

                    <p className="text-sm font-medium leading-relaxed text-white/78">
                      {toast.message}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeToast(toast.id)}
                    aria-label="Close notification"
                    className="rounded-full p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/25"
                  >
                    <X size={16} />
                  </button>
                </div>

                <motion.div
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ duration: TOAST_DURATION / 1000, ease: "linear" }}
                  className={[
                    "absolute bottom-0 left-0 h-[2px] w-full origin-left",
                    isSuccess ? "bg-white/70" : "bg-red-400/70",
                  ].join(" ")}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
};
