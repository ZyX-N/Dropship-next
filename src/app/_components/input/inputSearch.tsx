import React, { useRef } from "react";

const InputSearch: React.FC<{
  value?: string;
  setValue?: any;
  option?: Array<any>;
}> = ({ value, setValue, option = [] }) => {
  let inputBox = useRef(null);

  const focusHandler = (e: any) => {
    let siblingElement: HTMLElement = e.target.nextSibling;
    siblingElement.classList.remove("hidden");
  };

  const blurHandler = (e: any) => {
    let siblingElement: HTMLElement = e.target.nextSibling;
    setTimeout(() => {
      siblingElement.classList.add("hidden");
    }, 200);
  };

  const selectHandler = (e: React.MouseEvent<HTMLElement>, data: string) => {
    setValue(data);
    let parentElement = (e.currentTarget as HTMLElement).parentElement;
    if (parentElement) {
      parentElement.classList.add("hidden");
    }
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Search Pincode"
        className="w-full px-4 py-2 border rounded outline-none"
        onFocus={focusHandler}
        onBlur={blurHandler}
        ref={inputBox}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul className="absolute z-10 w-full top-full bg-white border rounded shadow hidden">
        {option?.map(({ _id, code }) => (
          <li
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-y z-20"
            key={_id}
            onClick={(e) => selectHandler(e, code)}
          >
            {code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputSearch;
