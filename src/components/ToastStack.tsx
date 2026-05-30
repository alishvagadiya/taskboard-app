import { useEffect, useState } from "react";
import { toastManager, type Toast, getToastClass } from "./Toast";

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    return toastManager.subscribe(setToasts);
  }, []);

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-3 z-[9999]">
      {toasts.map((t) => (
        <div key={t.id} className={getToastClass(t.type)}>
          <span>{t.message}</span>

          <button
            onClick={() => toastManager.remove(t.id)}
            className="ml-3 text-xs opacity-70 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}