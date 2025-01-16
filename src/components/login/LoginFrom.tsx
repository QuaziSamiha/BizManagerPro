// "use client";
// import React, { useRef, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// import Image from "next/image";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import { userSchema } from "./userSchema";

// interface UserInfo {
//   username: string;
//   password: string;
// }
// function LoginForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<UserInfo>({
//     resolver: yupResolver(userSchema),
//   });
//   const [passView, setPassView] = useState(false);
//   const router = useRouter();
//   const onSubmit = (data: UserInfo) => {
//     router.push('/dashboard');
//   };

//   return (
//     <div className="flex flex-col gap-8">
//       <div className="flex flex-col gap-1 justify-center items-center">
//         <Image
//               src="/images/login/Logo.png"
//               width={80}
//               height={77}
//               priority
//               className="w-20"
//               alt="mail"
//             />
//         <h1 className=" text-white text-4xl text-center font-bold">
//           Welcome Back hi
//         </h1>
//       </div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className=" w-full max-w-[370px] flex justify-center flex-col gap-4"
//       >
//           <input
//             type="text"
//             placeholder="User Name"
//             {...register("username")}
//             className="flex-1 p-2 rounded-md outline-none font-medium text-[#252525] bg-[#F3F3F380] placeholder:text-[#252525]"
//           />
//         <p className="text-red-500 text-sm">{errors.username?.message}</p>

//           <input
//             type={passView ? "text" : "password"}
//             placeholder="Password"
//             {...register("password")}
//             className="flex-1 p-2  rounded-md outline-none font-medium text-[#252525] bg-[#F3F3F380] placeholder:text-[#252525]"
//           />
//         <p className="text-red-500 text-sm">{errors.password?.message}</p>
//         <div className=" flex justify-center">
//           <input
//             type="submit"
//             className="bg-[#353C54] text-white font-semibold py-2 px-12 rounded-md  cursor-pointer"
//             value={"Log in"}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
