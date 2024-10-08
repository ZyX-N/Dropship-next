"use client";
import ButtonSave from "@/app/_components/button/Submit";
import InputText from "@/app/_components/input/inputText";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

import { app } from "@/config/firebase";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import InputOtp from "@/app/_components/input/inputOtp";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const auth = getAuth(app);

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [vfCode, setVfCode] = useState<any>({});
  const [otpScreen, setOtpScreen] = useState<boolean>(false);
  const [otpAvailable, setOtpAvailable] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(data);

    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    console.log("[][][][][");
    console.log(recaptchaVerifier);
    

    let codeAndCb = await signInWithPhoneNumber(
      auth,
      `+91${data.mobile}`,
      recaptchaVerifier
    );
console.log(codeAndCb);

    setVfCode(codeAndCb);
    setOtpScreen(true);
    setOtpAvailable(true);
  };

  const subOtp = async (e: FormEvent) => {
    e.preventDefault();
    console.log(otp);

    try {
      const confirmationResult = await vfCode.confirm(otp);
      console.log("check ************");
      console.log(confirmationResult);
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("Invalid OTP");
    }
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

            <div className="flex justify-between px-6 -mb-6 text-sm font-medium">
              <div className="flex gap-2">
                <span>Already a customer?</span>
                <Link href="/login" className="text-amber-600">
                  Login
                </Link>
              </div>
              {otpAvailable && (
                <button
                  type="button"
                  className="text-amber-600 hover:text-amber-500 cursor-pointer hover:scale-105"
                  onClick={() => setOtpScreen(true)}
                >
                  Enter OTP
                </button>
              )}
            </div>

            <div className="flex flex-col px-6">
              <ButtonSave>Sign Up</ButtonSave>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full sm:w-[450px] pt-6 pb-10 bg-white rounded-md shadow-lg border-2 border-black flex flex-col">
          <div className="flex items-center gap-4 pb-4 px-6">
            <button
              type="button"
              className="text-xl font-bold"
              onClick={() => setOtpScreen(false)}
            >
              &larr;
            </button>
            <h2 className="text-2xl font-medium">OTP</h2>
          </div>
          <form onSubmit={subOtp} className="flex flex-col gap-6">
            <div className="flex flex-col px-6">
              {/* <InputOtp size={6} setValue={setOtp} /> */}
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
