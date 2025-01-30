'use client'
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface UserInfo {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm<UserInfo>();

  const router = useRouter();
  const onSubmit = (data: UserInfo) => {
    router.push("/dashboard");
    console.log(data)
  };
  return (
    <div className="w-[40%]">
      <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-lg border-blue-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Welcome Back</h2>
          <div className="text-neutral-600 mt-2 flex justify-center items-center gap-2">
            <p>Sign in to your account</p>{" "}
            <KeyRound size={20} className="text-blue-600" />
          </div>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="w-full border-blue-200 focus:border-blue-400"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full border-blue-200 focus:border-blue-400"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-neutral-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Forgot password?
            </a>
          </div>
          <input
            type="submit"
            value='Sign in'
            className="py-1.5 rounded-lg w-full bg-blue-600 hover:bg-blue-700 text-white"
          />
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
