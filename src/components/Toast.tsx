export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
}

type Listener = (toasts: Toast[]) => void;

class ToastManager {
  private toasts: Toast[] = [];
  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    listener(this.toasts);

    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private emit() {
    this.listeners.forEach(l => l(this.toasts));
  }

  show(toast: Omit<Toast, "id">) {
    const id = crypto.randomUUID();

    const newToast: Toast = {
      id,
      duration: 3000,
      ...toast,
    };

    this.toasts = [newToast, ...this.toasts]; // stack
    this.emit();

    setTimeout(() => this.remove(id), newToast.duration);
  }

  remove(id: string) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.emit();
  }
}

export const toastManager = new ToastManager();

export const toast = {
  success: (message: string) =>
    toastManager.show({ message, type: "success" }),

  error: (message: string) =>
    toastManager.show({ message, type: "error" }),

  info: (message: string) =>
    toastManager.show({ message, type: "info" }),

  warning: (message: string) =>
    toastManager.show({ message, type: "warning" }),
};

export const BASE_CLASS =
  "px-4 py-3 rounded-xl shadow-md text-sm font-medium animate-slideIn flex items-center justify-between min-w-[220px]";

export const TYPE_CLASS: Record<ToastType, string> = {
  success: "bg-green-50 text-green-700 border border-green-200",
  error: "bg-red-50 text-red-700 border border-red-200",
  info: "bg-blue-50 text-blue-700 border border-blue-200",
  warning: "bg-yellow-50 text-yellow-800 border border-yellow-200",
};

export function getToastClass(type: ToastType = "info") {
  return `${BASE_CLASS} ${TYPE_CLASS[type]}`;
}