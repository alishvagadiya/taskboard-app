import { type TextareaHTMLAttributes } from "react";

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function TextArea({
  label,
  error,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <textarea
        className={`
          w-full px-3 py-2 rounded-md border text-sm resize-none
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        {...props}
      />

      {error && (
        <span className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}