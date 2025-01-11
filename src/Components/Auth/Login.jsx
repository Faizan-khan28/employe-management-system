import { useState } from "react";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello Your Form Is Submitted");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-[#1c1c1c]">
      <div className="border-2 border-red-600 rounded-3xl p-10 sm:p-16 bg-transparent w-[90%] max-w-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            className="outline-none border-2 border-red-500 bg-transparent text-base sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-full placeholder:text-gray-400 text-white w-full"
            placeholder="Enter Your Email"
            required
          />
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            className="outline-none border-2 border-red-500 bg-transparent text-base sm:text-xl py-2 px-4 sm:py-3 sm:px-5 rounded-full placeholder:text-gray-400 text-white w-full"
            placeholder="Enter Your Password"
            required
          />
          <button className="border-none mt-5 bg-red-500 hover:bg-red-600 text-base sm:text-xl py-2 sm:py-3 px-12 sm:px-20 rounded-full text-white w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
