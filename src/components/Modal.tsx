import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

type ModalSize = "sm" | "md" | "full";

type ModalAction = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
};

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children?: ReactNode;
  actions?: ModalAction[];
  size?: ModalSize;
  onClose: () => void;
}

const sizeStyles: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-3xl h-[50vh]",
  full: "max-w-5xl w-full h-[90vh]",
};

export function Modal({
  isOpen,
  title,
  children,
  actions,
  size = "md",
  onClose,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Container using Card */}
      <Card
        className={`
          relative flex flex-col overflow-hidden p-0
          w-full ${sizeStyles[size]}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-4 flex-1">{children}</div>

        {/* Footer using Button component */}
        {actions && actions.length > 0 && (
          <div className="px-4 py-3 border-t flex justify-end gap-3">
            {actions.map((action, i) => (
              <Button
                key={i}
                variant={action.variant}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </Card>
    </div>,
    document.body
  );
}