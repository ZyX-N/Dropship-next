"use client";
import ButtonSave from "@/app/_components/button/Submit";
import InputText from "@/app/_components/input/inputText";
import { postCall } from "@/service/apiCall";
import { setLoginToken } from "@/service/token";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Signin() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(data);

    const response = await postCall(
      `/auth/sign-in`,
      {},
      { ...data, username: data.email }
    );
    if (response.status) {
      setLoginToken(response?.data);
      router.push("/");
    }
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
