import { type InputHTMLAttributes } from "react";

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function TextInput({
  label,
  error,
  className = "",
  ...props
}: TextInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        className={`
          w-full px-3 py-2 rounded-md border text-sm
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