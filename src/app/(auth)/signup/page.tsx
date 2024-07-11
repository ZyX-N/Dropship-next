"use client";
import ButtonSave from "@/components/button/Submit";
import InputText from "@/components/input/inputText";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

import { app } from "@/config/firebase";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import InputOtp from "@/components/input/inputOtp";

const SignUp = () => {
  const [data, setData] = useState({
    name: "Aman",
    email: "rocketboy9198@gmail.com",
    mobile: "916393411410",
    password: "1234",
  });

  const auth = getAuth(app);
  const [vfCode, setVfCode] = useState<any>({});
  const [otpScreen, setOtpScreen] = useState<boolean>(true);
  const [otp, setOtp] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(data);

    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        // size: "invisible",
      }
    );
    console.log(recaptchaVerifier);

    let a = await signInWithPhoneNumber(
      auth,
      `+${data.mobile}`,
      recaptchaVerifier
    );
    console.log("--------------------*");
    console.log(a);
    setVfCode(a);
  };

  const subOtp = async (e: FormEvent) => {
    e.preventDefault();
    console.log(otp);

    console.log(vfCode.confirm);
    const confirmationResult = await vfCode.confirm(otp);

    console.log("check ************");
    console.log(confirmationResult);
  };

  // "AD8T5Ivets2LxwLogkJNpC09tZDbjWPnN5cfzFaguYnRz7zFPTK8xrKa9tJxgUfH3h6p0JWGf04ERp9kEjFM9IY0NQSqLK9WioQdeJC7Ig4PqRwxA2rjrH5Oc_n5Ssb35vlZ6fjbsTAgjZSY_ab7lag0hwiW1Eda77jyXEmxEE_jGsWnWUrTwgsKuFHvynn5UuNfiqlu5YZbFjGdmVEcFoQq2Ys0qCTFa0XTcIcCfsTnuhZSgNhOvsE"

  return (
    <div className="w-full h-screen overflow-x-hidden flex flex- justify-center items-center bg-amber-500 sm:px-0 px-4 relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        id="recaptcha-container"
      ></div>

      {!otpScreen ? (
        <div className="w-full sm:w-[450px] pt-6 pb-10 bg-white rounded-md shadow-lg border-2 border-black flex flex-col gap-4">
          <h2 className="text-2xl font-medium px-6 pb-4">Sign Up</h2>
          <form
            className="size-full flex flex-col gap-10"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col px-6">
              <label htmlFor="name">Name</label>
              <InputText
                id="name"
                value={data.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col px-6">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                value={data.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col px-6">
              <label htmlFor="mobile">Mobile</label>
              <InputText
                id="mobile"
                type="number"
                value={data.mobile}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setData((prev) => ({ ...prev, mobile: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col px-6">
              <label htmlFor="password">Password</label>
              <InputText
                id="password"
                value={data.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>

            <div className="flex gap-2 px-6 -mb-6 text-sm font-medium">
              <span>Already a customer?</span>
              <Link href="/login" className="text-amber-600">
                Login
              </Link>
            </div>

            <div className="flex flex-col px-6">
              <ButtonSave>Sign Up</ButtonSave>
            </div>
          </form>

          <div>
            <form onSubmit={subOtp} className="">
              <div className="flex flex-col px-6">
                <label htmlFor="name">OTP</label>
                <InputText
                  id="otp"
                  value={otp}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setOtp(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col px-6">
                <ButtonSave>Submit Otp</ButtonSave>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full sm:w-[450px] pt-6 pb-10 bg-white rounded-md shadow-lg border-2 border-black flex flex-col gap-4">
          <h2 className="text-2xl font-medium px-6 pb-4">OTP</h2>
            <form onSubmit={subOtp} className="flex flex-col gap-6">
              <div className="flex flex-col px-6">
                <InputOtp
                />
              </div>
              <div className="flex flex-col px-6">
                <ButtonSave>Submit Otp</ButtonSave>
              </div>
            </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
