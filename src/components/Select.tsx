export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  id: string;
  label: string;
  value: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

export function Select({
  id,
  label,
  value,
  options,
  placeholder,
  error,
  onChange,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-text"
      >
        {label}
      </label>

      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`
          h-10 px-3 text-sm
          border rounded-md
          text-text
          transition-colors
          outline-none
          focus:border-primary
          border-border
          hover:border-primary-hover
        `}
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p
          id={`${id}-error`}
          className="text-xs text-danger"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}