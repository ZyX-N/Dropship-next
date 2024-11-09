import React, { useMemo, useRef, useState } from "react";

const InputSearch: React.FC<{
  value?: string;
  setValue?: any;
  option?: Array<any>;
  placeholder?: string;
}> = ({ value, setValue, option = [], placeholder = "" }) => {
  let inputBox = useRef(null);

  const optionsAtOneGlance: number = 5;
  const [isVisible, setIsVisible] = useState(false);

  const focusHandler = (e: any) => {
    setIsVisible(true);
  };

  const blurHandler = (e: any) => {
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  const selectHandler = (data: string) => {
    setValue(data);
    setIsVisible(false);
  };

  useMemo(() => {
    if (option.length === 0) {
      setIsVisible(false);
    }
  }, [option]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder || ""}
        className="w-full bg-white py-2 px-2.5 text-sm rounded-md outline-none border border-gray-300 focus:border-amber-500"
        onFocus={focusHandler}
        onBlur={blurHandler}
        ref={inputBox}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsVisible(true);
        }}
      />
      {isVisible && option.length > 0 && (
        <ul
          className="absolute z-10 w-full top-full bg-white rounded-md shadow overflow-auto border border-gray-400"
          style={{
            maxHeight: `${optionsAtOneGlance * 32 + 5}px`,
          }}
        >
          {option?.map(({ _id, title, value }) => (
            <li
              className="px-4 h-8 flex justify-start items-center cursor-pointer border-y z-20 text-sm hover:bg-amber-600 hover:text-white"
              key={_id}
              onClick={() => selectHandler(value)}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSearch;
