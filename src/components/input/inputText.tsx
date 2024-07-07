const InputText = ({
  type,
  placeholder,
  classes,
  containerClasses,
  onChange,
  value,
  disabled,
  id,
}: {
  type?: string;
  placeholder?: string;
  classes?: string;
  containerClasses?: string;
  onChange?: any;
  value?: any;
  disabled?: boolean;
  id?: string;
}) => {
  const focusHandler = (e: any) => {
    let parentElement: HTMLElement = e.target.parentElement;
    parentElement.classList.remove("after:w-0");
    parentElement.classList.add("after:w-full");
  };

  const blurHandler = (e: any) => {
    let parentElement: HTMLElement = e.target.parentElement;
    parentElement.classList.remove("after:w-full");
    parentElement.classList.add("after:w-0");
  };

  return (
    <div
      className={`size-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-500 after:ease-in-out ${
        containerClasses || ""
      }`}
    >
      <input
        type={type || "text"}
        className={`size-full bg-transparent outline-none p-2 border-b-2 border-amber-500 focus:border-transparent ${
          classes || ""
        }`}
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange || null}
        onFocus={focusHandler}
        onBlur={blurHandler}
        disabled={disabled || false}
        id={id || ""}
      />
    </div>
  );
};

export default InputText;
