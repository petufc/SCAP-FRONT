// components/TextInput.tsx
import React from "react";

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-300"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
