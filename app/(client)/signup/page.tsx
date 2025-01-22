"use client"
import { EMAIL_INVALID, PHONE_INVALID, REQUIRED } from "@/constants/formMessages";
import { env } from "@/constants/MyVariables";
import { signupRequest } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const FormSchema = z.object({
  email: z.string().min(1, { message: REQUIRED }).email(EMAIL_INVALID),
  phone: z.string().min(10, { message: PHONE_INVALID }),
  password: z.string().min(1, { message: REQUIRED }),
  name:z.string().min(1,{message:REQUIRED})
});
const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await signupRequest({
        email: data.email,
        phonenumber: data.phone,
        password: data.password,
        name:data.name,
      });
      if (response.status === 200 || 201) {
        const accessToken = response.data.accessToken;
        
        console.log(accessToken);
        localStorage.setItem(env.token, accessToken);
        router.push("/");
        // setSuccessMessage("Dang ky thanh cong!");
      } else {
        // setErrorMessage("Loi");
      }
    } catch (error) {
      // setErrorMessage("Đã xảy ra lỗi khi đăng ký.");
      console.error("Lỗi khi gọi API:", error);
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
                  Tạo tài khoản
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Hoàn toàn miễn phí và siêu dễ dàng
                </p>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-8">
                    <label htmlFor="name" className="mb-3 block text-sm text-dark dark:text-white">
                      Họ và Tên
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      {...register("name")}
                      // onChange={(e) => setName(e.target.value)}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                         {/* {errors.name.} */}
                         Lỗi
                        </p>
                      )}
                  </div>
                  <div className="mb-8">
                    <label htmlFor="email" className="mb-3 block text-sm text-dark dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      {...register("email")}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          Lỗi
                        </p>
                      )}
                  </div>
                  <div className="mb-8">
                    <label htmlFor="phonenumber" className="mb-3 block text-sm text-dark dark:text-white">
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      name="phonenumber"
                      placeholder="Enter your Phone Number"
                      {...register("phone")}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          Lỗi
                        </p>
                      )}
                  </div>
                  <div className="mb-8">
                    <label htmlFor="password" className="mb-3 block text-sm text-dark dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      {...register("password")}

                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          Lỗi
                        </p>
                      )}
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already using Startup?
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;

