import { useMemo, useState } from "react";

const InputOtp = ({ size = 6, setValue }: { size?: number; setValue: any }) => {
  const boxes = Array.from(
    { length: size },
    (_, idx) => "otp" + String(idx + 1)
  );

  const [otp, setOtp] = useState<any>({});

  useMemo(() => {
    boxes.forEach((key) => {
      setOtp((prev: any) => ({ ...prev, [key]: "" }));
    });
  }, [boxes]);

  useMemo(() => {
    let otpVal = "";
    for (let e in otp) {
      otpVal = otpVal + otp[e];
    }
    setValue(otpVal);
  }, [otp]);

  const inputHandler = (e: any, item: string) => {
    let key = e.key;
    const ibNumber = Number(item[item.length - 1]);

    if (
      key === "1" ||
      key === "2" ||
      key === "3" ||
      key === "4" ||
      key === "5" ||
      key === "6" ||
      key === "7" ||
      key === "8" ||
      key === "9" ||
      key === "0"
    ) {
      setOtp((prev: any) => ({ ...prev, [item]: e.key }));
      if (ibNumber < size) {
        document.getElementById(`otp${ibNumber + 1}`)?.focus();
      }
    } else if (key === "Backspace") {
      setOtp((prev: any) => ({ ...prev, [item]: "" }));
      if (ibNumber > 1) {
        document.getElementById(`otp${ibNumber - 1}`)?.focus();
      }
    }
  };

  const focusHandler = (e: any) => {
    let element: HTMLElement = e.target;
    element.classList.remove("border-gray-900");
    element.classList.add("border-amber-500");
    element.classList.add("text-amber-500");
  };

  const blurHandler = (e: any) => {
    let element: HTMLElement = e.target;
    element.classList.remove("border-amber-500");
    element.classList.add("border-gray-900");
    element.classList.remove("text-amber-500");
  };

  return (
    <div className="flex items-center justify-between py-2">
      {boxes.map((item) => {
        return (
          <input
            key={item}
            className={`size-14 outline-none rounded-md border-2 border-gray-900 text-center`}
            type="text"
            id={item}
            value={otp[item]}
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
