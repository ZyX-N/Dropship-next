"use client";
import ButtonSave from "@/components/button/Submit";
import InputText from "@/components/input/inputText";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="w-full h-screen overflow-x-hidden flex flex- justify-center items-center bg-amber-500 sm:px-0 px-4">
      <div className="w-full sm:w-[450px] pt-6 pb-10 bg-white rounded-md shadow-lg border-2 border-black flex flex-col gap-4">
        <h2 className="text-2xl font-medium px-6 pb-4">Login</h2>
        <form
          className="size-full flex flex-col gap-10"
          onSubmit={submitHandler}
        >
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
            <span>Didn&apos;t signed up?</span>
            <Link href="/signup" className="text-amber-600">
              Sign Up
            </Link>
          </div>

          <div className="flex flex-col px-6">
            <ButtonSave>Login</ButtonSave>
          </div>
        </form>
      </div>
    </div>
  );
}
