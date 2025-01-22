"use client"
import Link from "next/link";
// import { Metadata } from "next";
import { useState } from "react";
import { loginRequest } from "../../../services/auth"; // Import the loginRequest function
import { ILogin } from "../../../types/auth"; // Import the ILogin interface
import { EMAIL_INVALID, REQUIRED } from "../../../constants/formMessages"; // Import validation messages

// export const metadata: Metadata = {
//   title: "Sign In Page | Cenvi Launch",
//   description: "This is Sign In Page Cenvi Launch",
// };

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] =  useState('')
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate input
    if (!email || !password) {
      setErrorMessage(REQUIRED);
      return;
    }

    try {
      const response = await loginRequest(email, password);
      // Handle successful login (e.g., redirect to dashboard)
      console.log(response.user);
      const accessToken = response.user;
      
      
      localStorage.setItem("token", JSON.stringify(accessToken) );
      setSuccess("Đăng nhập thành công")
    } catch (error) {
      // Handle login error
      setErrorMessage("Sai Email hoặc Password");
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Sign in to your account
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label htmlFor="email" className="mb-3 block text-sm text-dark dark:text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="password" className="mb-3 block text-sm text-dark dark:text-white">
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your Password"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Don’t you have an account?{" "}
                  <Link href="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                {success && <p className="text-green-500 text-center" > {success}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
