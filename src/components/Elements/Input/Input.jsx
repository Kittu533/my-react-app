import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, name }, ref) => {
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

Input.displayName = "Input"; // Menambahkan displayName untuk menghilangkan peringatan

export default Input;
