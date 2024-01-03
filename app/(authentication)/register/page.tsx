import LoginForm from "@/app/ui/LoginForm";
import RegisterForm from "@/app/ui/RegisterForm";

export default function Register() {
    return (
      <div className="h-screen flex flex-col justify-center items-center w-full">
        <RegisterForm />
        <form action={async () => {
            'use server';
            // await signIn("github", { callbackUrl: "/" });
          }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-black text-white p-3 text-sm font-medium hover:bg-white hover:text-black md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="">
              Sign Up With GitHub
            </div>
          </button>
        </form>
      </div>
    );
  }
  