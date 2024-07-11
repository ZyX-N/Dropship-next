const InputOtp = ({
  size = 6,
  type = "number",
}: {
  size?: number;
  type?: string;
}) => {
  const focusHandler = (e: any) => {
    let element: HTMLElement = e.target;
    element.classList.remove("border-gray-900");
    element.classList.add("border-blue-600");
    element.classList.add("text-blue-600");
  };

  const blurHandler = (e: any) => {
    let element: HTMLElement = e.target;
    element.classList.remove("border-blue-600");
    element.classList.add("border-gray-900");
    element.classList.remove("text-blue-600");
  };

  const inputHandler = (e: any, item: number) => {
    console.log("asasas");
    console.log(item);
    let element = e.target;
    let key = Number(e.key);

    if (
      key === 1 ||
      key === 2 ||
      key === 3 ||
      key === 4 ||
      key === 5 ||
      key === 6 ||
      key === 7 ||
      key === 8 ||
      key === 9 ||
      key === 0
    ) {
      element.value = key;
    } else {
      console.log("lll");

      element.value = "";
    }
  };

  const boxes = Array.from({ length: size }, (_, idx) => idx + 1);

  return (
    <div className="flex items-center justify-between py-2">
      {boxes.map((item) => {
        return (
          <input
            key={item}
            className={`size-14 outline-none rounded-md border-2 border-gray-900 text-center`}
            type="text"
            //   value={1}
            // onChange={(e) => inputHandler(e, item)}
            onKeyDown={(e) => inputHandler(e, item)}
            onFocus={focusHandler}
            onBlur={blurHandler}
          />
        );
      })}
    </div>
  );
};

export default InputOtp;
