import LoginForm from "@/app/ui/LoginForm";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
    return (
      <div className="h-screen flex bg-gray-900 flex-col justify-center items-center w-full">
        <h1 className={`text-center mb-3 text-4xl font-semibold text-white`}>
          Sign In
        </h1>
        <form className="mt-2 flex flex-col items-center" action={async () => {
            'use server';
            await signIn("github", { callbackUrl: "/" });
          }}>
          <Button variant="navbar">
            Sign In with GitHub
          </Button>
          <span className="text-xl text-white font-semibold mt-2">OR</span>
        </form>
        <LoginForm />
        <Link href="/register" className="text-white underline mt-2">Not already have an account ? Register here</Link>
      </div>
    );
  }
  