const InputTextNormal = ({
  type,
  placeholder,
  classes,
  onChange,
  value,
  disabled,
  id,
}: {
  type?: string;
  placeholder?: string;
  classes?: string;
  onChange?: any;
  value?: string;
  disabled?: boolean;
  id?: string;
}) => {
  return (
    <input
      type={type || "text"}
      className={`w-full bg-white py-2 px-2.5 text-sm rounded-md outline-none border border-gray-300 focus:border-amber-500 ${
        disabled ? "cursor-not-allowed" : ""
      } ${classes || ""}`}
      placeholder={placeholder || ""}
      value={value || ""}
      onChange={onChange || null}
      disabled={disabled || false}
      id={id || ""}
    />
  );
};

export default InputTextNormal;
